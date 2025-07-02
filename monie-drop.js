// Basic structure for Monie Drop game logic

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('monieDropCanvas');
    const ctx = canvas.getContext('2d');
    const scoreValueElement = document.getElementById('scoreValue');
    const highScoreValueElement = document.getElementById('highScoreValue');
    const startGameBtn = document.getElementById('startGameBtn');

    // Game constants
    const COLS = 10;
    const ROWS = 20;
    const BLOCK_SIZE = 30;
    const EMPTY_COLOR = '#0a0a0a';

    canvas.width = COLS * BLOCK_SIZE;
    canvas.height = ROWS * BLOCK_SIZE;

    let board = [];
    let currentScore = 0;
    let highScore = localStorage.getItem('monieDropHighScore') || 0;
    highScoreValueElement.textContent = highScore;

    let currentPiece = null;
    let gameInterval = null;
    const INITIAL_GAME_SPEED = 1000; // Starting speed in milliseconds
    const MIN_GAME_SPEED = 150;      // Fastest speed
    const SPEED_DECREMENT = 50;     // How much to decrease speed by each level
    let gameSpeed = INITIAL_GAME_SPEED;
    let linesClearedForLevel = 0;
    const LINES_PER_LEVEL = 10; // Lines to clear to level up and speed up

    let isPaused = false;
    let isGameOver = false;

    // --- GM Logo Tetrominoes ("Monie-minos") ---
    const MONIE_MINOS = {
        'GM_G_Shape': [ // G-like shape - simplified
            [ [[0,0],[0,1], [1,0], [2,0],[2,1],[2,2]] ], // Rotation 1
            [ [[0,0],[1,0],[2,0], [0,1], [0,2],[2,2]] ], // Rotation 2
            [ [[0,0],[0,1],[0,2], [1,2], [2,1],[2,2]] ], // Rotation 3
            [ [[0,0], [2,0],[2,1], [0,2],[1,2],[2,2]] ]  // Rotation 4
        ],
        'GM_M_Shape': [ // M-like shape (simplified)
            [ [[0,0],[0,2], [1,0],[1,1],[1,2], [2,0],[2,2]] ], // Rotation 1
            [ [[0,0],[0,1], [1,1],[1,2], [2,0],[2,1]] ]      // Rotation 2
        ],
        'GM_Bar': [ // Simple Bar (like Tetris I)
            [ [[0,0], [1,0], [2,0], [3,0]] ], // Vertical
            [ [[0,0], [0,1], [0,2], [0,3]] ]  // Horizontal
        ],
        'GM_Square': [ // 2x2 Square
            [ [[0,0], [0,1], [1,0], [1,1]] ]
        ],
        'GM_L_Shape': [
            [ [[0,0], [1,0], [2,0], [2,1]] ],
            [ [[0,0], [0,1], [0,2], [1,0]] ],
            [ [[0,1], [1,1], [2,1], [0,0]] ], // Adjusted from typical L for variety if needed
            [ [[2,0], [2,1], [2,2], [1,2]] ]  // Adjusted
        ],
        'GM_J_Shape': [ // Mirrored L
            [ [[0,1], [1,1], [2,1], [2,0]] ],
            [ [[0,0], [1,0], [1,1], [1,2]] ],
            [ [[0,0], [0,1], [1,1], [2,1]] ], // Adjusted
            [ [[0,0], [0,1], [0,2], [1,2]] ]
        ],
        'GM_T_Shape': [
            [ [[0,0],[0,1],[0,2], [1,1]] ],
            [ [[0,1],[1,0],[1,1], [2,1]] ],
            [ [[1,0],[1,1],[1,2], [0,1]] ],
            [ [[0,0],[1,0],[1,1], [2,0]] ]
        ]
    };
    const PIECE_COLORS = ['#D4AF37', '#C0C0C0', '#FFD700', '#E5E4E2', '#B08D57', '#A9A9A9', '#F4A460', '#CD7F32'];

    // --- Emoji Blocks ---
    const EMOJI_BLOCKS = {
        'ROCKET': { // 🚀
            shape: [[0,0]], // Single block
            color: '#FF6347', // Tomato Red
            effect: 'clearColumn'
        },
        'BOMB': { // 💣
            shape: [[0,0]],
            color: '#4682B4', // Steel Blue
            effect: 'explodeRadius'
        },
        'CAMERA': { // 📹
            shape: [[0,0]],
            color: '#32CD32', // Lime Green
            effect: 'snapshotClear'
        },
        'MONEY_BAG': { // 💸
            shape: [[0,0]],
            color: '#FFD700', // Gold (already used, maybe a brighter variant or with a symbol)
            effect: 'bonusPoints'
        }
    };
    const EMOJI_SPAWN_RATE = 0.15; // 15% chance to spawn an emoji block instead of a Monie-mino

    function createBoard() {
        return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY_COLOR));
    }

    function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }

    function drawBoard() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                drawBlock(col, row, board[row][col]);
            }
        }
    }

    function getRandomPiece() {
        if (Math.random() < EMOJI_SPAWN_RATE) {
            const emojiNames = Object.keys(EMOJI_BLOCKS);
            const randomEmojiName = emojiNames[Math.floor(Math.random() * emojiNames.length)];
            const emojiData = EMOJI_BLOCKS[randomEmojiName];
            return {
                shape: emojiData.shape,
                rotations: [emojiData.shape], // Single shape, no rotation needed for 1x1
                rotationIndex: 0,
                color: emojiData.color,
                effect: emojiData.effect, // Store the effect type
                isEmoji: true,
                x: Math.floor(Math.random() * COLS), // Spawn emoji anywhere in a column
                y: 0
            };
        } else {
            const pieceNames = Object.keys(MONIE_MINOS);
            const randomPieceName = pieceNames[Math.floor(Math.random() * pieceNames.length)];
            const pieceRotations = MONIE_MINOS[randomPieceName];
            const randomColor = PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)];
            return {
                shape: pieceRotations[0],
                rotations: pieceRotations,
                rotationIndex: 0,
                color: randomColor,
                isEmoji: false,
                x: Math.floor(COLS / 2) - Math.floor(Math.max(...pieceRotations[0].map(p => p[1])) / 2), // Center piece
                y: 0
            };
        }
    }

    function drawPiece(piece) {
        piece.shape.forEach(([yOffset, xOffset]) => {
            drawBlock(piece.x + xOffset, piece.y + yOffset, piece.color);
        });
    }

    function isValidMove(piece, newX, newY, newShape) {
        const shapeToTest = newShape || piece.shape;
        for (const [yOffset, xOffset] of shapeToTest) {
            const boardX = newX + xOffset;
            const boardY = newY + yOffset;

            if (boardX < 0 || boardX >= COLS || boardY >= ROWS) return false;
            if (boardY >= 0 && board[boardY][boardX] !== EMPTY_COLOR) return false;
        }
        return true;
    }

    function lockPiece(piece) {
        if (piece.isEmoji) {
            // Apply emoji effect, then the emoji block itself disappears (usually)
            applyEmojiEffect(piece);
        } else {
            // Regular Monie-mino locking
            piece.shape.forEach(([yOffset, xOffset]) => {
                if (piece.y + yOffset >= 0) {
                    board[piece.y + yOffset][piece.x + xOffset] = piece.color;
                }
            });
        }

        // Common logic after piece is locked or effect applied
        if (!piece.isEmoji && piece.y <= 0 && !isValidMove(piece, piece.x, piece.y + 1)) {
            let isTrulyGameOver = false;
            piece.shape.forEach(([yOffset, xOffset]) => {
                if ((piece.y + yOffset) < 0) {
                    isTrulyGameOver = true;
                }
            });
            if(isTrulyGameOver || piece.y < 1) { // if locked piece is in the very top row or above
                gameOver();
                return;
            }
        }


        clearLines();
        currentPiece = getRandomPiece();
        if (!isValidMove(currentPiece, currentPiece.x, currentPiece.y)) {
            gameOver();
        }
    }

    let isAnimatingLineClear = false; // Flag to control game loop during animation
    let particles = []; // For line clear effects
    let musicNoteParticles = []; // Specifically for emoji music

    function clearLines() {
        if (isAnimatingLineClear) return; // Don't try to clear lines if already animating one

        let linesToClear = [];
        for (let r = ROWS - 1; r >= 0; r--) {
            if (board[r].every(cell => cell !== EMPTY_COLOR)) {
                linesToClear.push(r);
            }
        }

        if (linesToClear.length > 0) {
            isAnimatingLineClear = true;
            clearInterval(gameInterval); // Pause piece falling

            animateLineClear(linesToClear, () => {
                // Callback after animation completes
                // Sort lines to remove from bottom up to maintain correct indices during splice
                linesToClear.sort((a, b) => b - a).forEach(r => {
                    board.splice(r, 1);
                    board.unshift(Array(COLS).fill(EMPTY_COLOR));
                });

                isAnimatingLineClear = false;
                if (!isPaused && !isGameOver) {
                    // Resume gameLoop only if not paused or game over
                    gameInterval = setInterval(gameLoop, gameSpeed);
                }
                updateScore(linesToClear.length);
                // Board is redrawn in gameLoop or by next piece movement
                // Ensure current piece is redrawn if necessary.
                // drawBoard();
                // if(currentPiece && !isGameOver) drawPiece(currentPiece);
            });
        }
    }


    function animateLineClear(clearedRowIndices, callback) {
        const animationTimePerFrame = 50; // ms per visual step
        const totalAnimationSteps = 10; // Number of steps for flashing
        let currentStep = 0;

        const originalBoardColors = JSON.parse(JSON.stringify(board)); // Deep copy for restoring if needed

        function animationStep() {
            if (currentStep >= totalAnimationSteps) {
                // MONIE DROP text and special effects last a bit longer
                if (clearedRowIndices.length >= 4) {
                    setTimeout(() => {
                        particles = []; // Clear particles from MONIE DROP
                        callback();
                    }, 700); // Extra delay for MONIE DROP text to be visible
                } else {
                    particles = [];
                    callback();
                }
                return;
            }

            drawBoard(); // Redraw current state of board (blocks falling above, etc.)

            // Flash the lines
            const flashColor = (currentStep % 2 === 0) ? '#FFFFFF' : (clearedRowIndices.length === 3 ? 'gold' : '#333333');
            clearedRowIndices.forEach(r => {
                for (let c = 0; c < COLS; c++) {
                    // Only draw flash on actual blocks, not empty spaces if a bomb created partial lines
                    if (originalBoardColors[r][c] !== EMPTY_COLOR) {
                         drawBlock(c, r, flashColor);
                    }
                }
            });

            // Particle generation (simple) - generated once at the start of animation
            if (currentStep === 0) {
                particles = []; // Clear previous particles
                clearedRowIndices.forEach(r => {
                    const particleColor = clearedRowIndices.length >= 4 ? (Math.random() < 0.5 ? 'gold' : '#E5E4E2') : (clearedRowIndices.length === 3 ? 'gold' : '#D4AF37');
                    const particleEmoji = clearedRowIndices.length >= 4 ? (Math.random() < 0.3 ? '💎' : (Math.random() < 0.5 ? '🏆' : '✨')) : (clearedRowIndices.length === 3 ? '🌟' : '✨');

                    for (let i = 0; i < (clearedRowIndices.length >=4 ? 15 : 10); i++) { // More particles for Monie Drop
                        particles.push({
                            x: Math.random() * COLS * BLOCK_SIZE,
                            y: (r + 0.5) * BLOCK_SIZE,
                            vx: (Math.random() - 0.5) * 4,
                            vy: (Math.random() - 0.8) * 3 - 1, // Generally upward
                            size: clearedRowIndices.length >= 4 ? (Math.random() * 10 + 10) : (Math.random() * 5 + 5), // Larger for Monie Drop
                            color: particleColor,
                            emoji: particleEmoji,
                            life: 20 + Math.random() * 20, // Shorter life for quick burst
                            isEmojiParticle: clearedRowIndices.length >=4 // Differentiate emoji particles
                        });
                    }
                });

                if (clearedRowIndices.length >= 4) { // MONIE DROP flash
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    setTimeout(() => { /* Redraw after flash if needed, handled by next step */ }, 80);
                }
            }

            // Draw particles
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1; // Gravity
                p.life--;
                if (p.life <= 0) {
                    particles.splice(index, 1);
                } else {
                    if (p.isEmojiParticle) {
                        ctx.font = `${p.size}px Arial`;
                        ctx.textAlign = 'center';
                        ctx.fillText(p.emoji, p.x, p.y);
                    } else {
                        ctx.fillStyle = p.color;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            });

            // MONIE DROP! Text (appears after initial flash and persists during particle effect)
            if (clearedRowIndices.length >= 4 && currentStep > 1) {
                ctx.font = `bold ${BLOCK_SIZE * 1.5}px "Playfair Display", serif`;
                ctx.fillStyle = 'var(--secondary-color)';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'black';
                ctx.shadowBlur = 7;
                ctx.fillText("MONIE DROP!", canvas.width / 2, canvas.height / 2);
                ctx.shadowBlur = 0;
            }

            if (currentPiece && !isGameOver) drawPiece(currentPiece); // Redraw current piece on top

            currentStep++;
            setTimeout(animationStep, animationTimePerFrame);
        }
        animationStep(); // Start the animation steps
    }


    // --- Emoji Effect Functions ---
    function applyEmojiEffect(piece) {
        const { x, y, effect } = piece; // Assuming emoji is 1x1, x,y is its landing position

        switch (effect) {
            case 'clearColumn':
                for (let r = 0; r < ROWS; r++) {
                    board[r][x] = EMPTY_COLOR;
                }
                // Add points for column clear?
                updateScore(0, 50 * ROWS); // e.g. 50 points per block cleared in column
                break;
            case 'explodeRadius':
                const radius = 1; // Clears a 3x3 area (center + radius 1)
                for (let r = Math.max(0, y - radius); r <= Math.min(ROWS - 1, y + radius); r++) {
                    for (let c = Math.max(0, x - radius); c <= Math.min(COLS - 1, x + radius); c++) {
                        // Optional: Check distance for a more circular explosion
                        // if (Math.sqrt(Math.pow(r - y, 2) + Math.pow(c - x, 2)) <= radius) {
                        board[r][c] = EMPTY_COLOR;
                        // }
                    }
                }
                updateScore(0, 200); // e.g. 200 points for bomb
                break;
            case 'snapshotClear':
                const snapshotSize = 3; // Clears a 3x3 area
                const startY = Math.max(0, y - Math.floor(snapshotSize / 2));
                const startX = Math.max(0, x - Math.floor(snapshotSize / 2));
                for (let r = startY; r < Math.min(ROWS, startY + snapshotSize); r++) {
                    for (let c = startX; c < Math.min(COLS, startX + snapshotSize); c++) {
                        board[r][c] = EMPTY_COLOR;
                    }
                }
                updateScore(0, 150); // e.g. 150 points for camera
                break;
            case 'bonusPoints':
                updateScore(0, 500); // e.g. 500 bonus points for money bag
                // Money bag itself doesn't clear blocks, just gives points
                break;
        }
        // After applying effect, check for any lines that might have been formed or cleared indirectly
        clearLines();
    }


    function updateScore(linesCleared, bonusPoints = 0) {
        const points = [0, 100, 300, 500, 800]; // 0, 1, 2, 3, 4 lines
        let lineScore = 0;
        if (linesCleared > 0 && linesCleared <= 4) {
            lineScore = points[linesCleared];
        } else if (linesCleared > 4) {
            // Special handling for more than 4 lines if needed, e.g. from a bomb that clears many
            lineScore = points[4] * (linesCleared / 4) * 1.2; // Example: Proportional with bonus
        }

        // "MONIE DROP!" bonus for 4+ standard lines
        if (linesCleared >= 4) {
            lineScore *= 1.5; // Example: 50% bonus for a "Monie Drop"
            // console.log("MONIE DROP!"); // Placeholder for visual effect
        }

        currentScore += Math.floor(lineScore) + bonusPoints; // Add bonus points directly
        scoreValueElement.textContent = currentScore;

        if (linesCleared > 0) {
            linesClearedForLevel += linesCleared;
            if (linesClearedForLevel >= LINES_PER_LEVEL) {
                linesClearedForLevel -= LINES_PER_LEVEL; // Reset for next level, carry over extra lines
                if (gameSpeed > MIN_GAME_SPEED) {
                    gameSpeed -= SPEED_DECREMENT;
                    if (gameSpeed < MIN_GAME_SPEED) {
                        gameSpeed = MIN_GAME_SPEED;
                    }
                    // Update the game interval with the new speed if game is running
                    if (gameInterval && !isPaused && !isGameOver && !isAnimatingLineClear) {
                        clearInterval(gameInterval);
                        gameInterval = setInterval(gameLoop, gameSpeed);
                    }
                }
            }
        }

        if (currentScore > highScore) {
            highScore = currentScore;
            highScoreValueElement.textContent = highScore;
            localStorage.setItem('monieDropHighScore', highScore);
        }
    }

    function gameLoop() {
        if (isPaused || isGameOver) return;

        if (isValidMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
            currentPiece.y++;
        } else {
            lockPiece(currentPiece);
        }

        drawBoard();
        if (currentPiece && !isGameOver) {
            drawPiece(currentPiece);
        }
        updateAndDrawMusicNotes(); // Add this call
    }

    const MUSIC_NOTES = ['🎵', '🎶', '🎼'];
    const BASE_MUSIC_NOTE_SPAWN_RATE = 0.05; // Chance per game loop iteration
    const BASE_MUSIC_NOTE_SPEED = 1;

    function spawnMusicNote() {
        // Increase spawn rate and speed with score/gameSpeed
        let currentSpawnRate = BASE_MUSIC_NOTE_SPAWN_RATE + (currentScore / 100000); // Example scaling
        if (currentSpawnRate > 0.5) currentSpawnRate = 0.5; // Cap spawn rate

        if (Math.random() < currentSpawnRate) {
            musicNoteParticles.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 20, // Start below screen
                emoji: MUSIC_NOTES[Math.floor(Math.random() * MUSIC_NOTES.length)],
                speed: BASE_MUSIC_NOTE_SPEED + (currentScore / 20000), // Example scaling
                size: Math.random() * 15 + 10, // Random size
                opacity: 0.7 + Math.random() * 0.3
            });
        }
    }

    function updateAndDrawMusicNotes() {
        spawnMusicNote(); // Try to spawn new notes

        for (let i = musicNoteParticles.length - 1; i >= 0; i--) {
            const note = musicNoteParticles[i];
            note.y -= note.speed;

            if (note.y < -30) { // Remove if off-screen
                musicNoteParticles.splice(i, 1);
            } else {
                ctx.font = `${note.size}px Arial`; // Ensure font supports emojis
                ctx.fillStyle = `rgba(220, 220, 220, ${note.opacity})`; // Light gray, semi-transparent
                ctx.textAlign = 'center';
                ctx.fillText(note.emoji, note.x, note.y);
            }
        }
    }


    function startGame() {
        if (gameInterval) clearInterval(gameInterval);
        board = createBoard();
        currentScore = 0;
        scoreValueElement.textContent = currentScore;
        linesClearedForLevel = 0; // Reset lines for level
        gameSpeed = INITIAL_GAME_SPEED; // Reset game speed
        musicNoteParticles = []; // Clear any leftover music notes
        particles = []; // Clear any leftover line clear particles

        currentPiece = getRandomPiece();
        isPaused = false;
        isGameOver = false;
        startGameBtn.textContent = "Restart Game";

        drawBoard();
        if (currentPiece) drawPiece(currentPiece);
        else { // Should not happen if getRandomPiece is correct
            gameOver(); return;
        }

        gameInterval = setInterval(gameLoop, gameSpeed);
        startGameBtn.disabled = true;
        setTimeout(() => { startGameBtn.disabled = false; }, 1000);
    }

    function gameOver() {
        isGameOver = true;
        clearInterval(gameInterval);
        musicNoteParticles = []; // Clear music notes on game over
        particles = []; // Clear line clear particles

        animateGameOver(() => {
            // This callback runs after the burn animation
            ctx.fillStyle = 'rgba(0, 0, 0, 0.85)'; // Darker overlay for text
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Cover screen

            ctx.font = `bold ${BLOCK_SIZE * 1.5}px "Playfair Display", serif`;
            ctx.fillStyle = 'var(--secondary-color)';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - BLOCK_SIZE);

            ctx.font = `${BLOCK_SIZE * 2}px Arial`; // For emoji
            ctx.fillText('🎺', canvas.width / 2, canvas.height / 2 + BLOCK_SIZE * 1.5);

            startGameBtn.textContent = "Play Again?";
            startGameBtn.disabled = false;
        });
    }

    function animateGameOver(callback) {
        let burnProgress = 0; // How much of the screen is "burnt"
        const burnSpeed = canvas.width / 150; // Speed of the burn effect
        const filmStripHoleSize = BLOCK_SIZE / 2;
        const filmStripBorder = BLOCK_SIZE;

        function drawBurnFrame() {
            if (burnProgress >= canvas.width + filmStripBorder*2) { // Burn complete
                callback();
                return;
            }

            // Draw existing board state as background for the burn
            drawBoard();
            // if (currentPiece) drawPiece(currentPiece); // Optionally draw the piece that caused game over

            // Simulate film strip border
            ctx.fillStyle = '#1a1a1a'; // Dark gray for film strip
            ctx.fillRect(0, 0, canvas.width, filmStripBorder); // Top border
            ctx.fillRect(0, canvas.height - filmStripBorder, canvas.width, filmStripBorder); // Bottom border
            for(let y of [filmStripBorder / 2 - filmStripHoleSize / 2, canvas.height - filmStripBorder / 2 - filmStripHoleSize / 2]) {
                for (let x = filmStripHoleSize; x < canvas.width; x += filmStripHoleSize * 2.5) {
                    ctx.fillStyle = '#000000'; // Holes
                    ctx.fillRect(x, y, filmStripHoleSize, filmStripHoleSize);
                }
            }

            // "Burn" effect - a jagged, expanding dark area from left to right
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (let y = 0; y <= canvas.height; y += 10) {
                const xOffset = (y % 20 === 0) ? Math.random() * 20 - 10 : 0; // Jagged edge
                ctx.lineTo(Math.min(burnProgress + xOffset, canvas.width), y);
            }
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.clip(); // Clip to the "unburnt" area

            // Draw the game content (already drawn via drawBoard above)
            // Now, draw the "burnt" area on top or make unburnt area darker
            ctx.fillStyle = `rgba(0, 0, 0, ${0.1 + (burnProgress / canvas.width) * 0.8})`; // Progressively darker
            ctx.fillRect(0,0, canvas.width, canvas.height);
            ctx.restore();


            // Growing "ember" line at the edge of the burn
            if (burnProgress < canvas.width) {
                ctx.beginPath();
                ctx.moveTo(burnProgress, 0);
                for (let y = 0; y <= canvas.height; y += 5) {
                     ctx.lineTo(burnProgress + (Math.random() * 10 - 5), y);
                }
                ctx.lineWidth = 3 + Math.random()*2;
                ctx.strokeStyle = `rgba(255, ${Math.random() * 100 + 50}, 0, ${0.5 + Math.random()*0.3})`; // Fiery colors
                ctx.stroke();
            }


            burnProgress += burnSpeed;
            requestAnimationFrame(drawBurnFrame);
        }
        requestAnimationFrame(drawBurnFrame);
    }


    function pauseGame() {
        if (isGameOver) return;
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(gameInterval);
            ctx.font = '24px "Playfair Display", serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
        } else {
            gameInterval = setInterval(gameLoop, gameSpeed);
        }
    }

    document.addEventListener('keydown', (event) => {
        if (isGameOver || !currentPiece || isPaused) return;

        let moved = false;
        if (event.key === 'ArrowLeft') {
            if (isValidMove(currentPiece, currentPiece.x - 1, currentPiece.y)) {
                currentPiece.x--;
                moved = true;
            }
        } else if (event.key === 'ArrowRight') {
            if (isValidMove(currentPiece, currentPiece.x + 1, currentPiece.y)) {
                currentPiece.x++;
                moved = true;
            }
        } else if (event.key === 'ArrowDown') {
            if (isValidMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
                currentPiece.y++;
                // Reset interval to apply speed consistently and avoid double drop with auto-drop
                clearInterval(gameInterval);
                gameInterval = setInterval(gameLoop, gameSpeed);
                moved = true;
            } else {
                lockPiece(currentPiece); // Lock if it can't move further down
            }
        } else if (event.key === 'ArrowUp') { // Rotate
            const currentRotationIndex = currentPiece.rotationIndex;
            const nextRotationIndex = (currentRotationIndex + 1) % currentPiece.rotations.length;
            const nextShape = currentPiece.rotations[nextRotationIndex];

            // Basic wall kick: try to move left/right if rotation is blocked
            let kickOffset = 0;
            if (!isValidMove(currentPiece, currentPiece.x, currentPiece.y, nextShape)) {
                if (isValidMove(currentPiece, currentPiece.x + 1, currentPiece.y, nextShape)) { // Try kick right
                    kickOffset = 1;
                } else if (isValidMove(currentPiece, currentPiece.x - 1, currentPiece.y, nextShape)) { // Try kick left
                    kickOffset = -1;
                }
                // Could add more complex wall kick (e.g., try move up/down slightly, or further kicks)
            }

            if (isValidMove(currentPiece, currentPiece.x + kickOffset, currentPiece.y, nextShape)) {
                currentPiece.x += kickOffset;
                currentPiece.shape = nextShape;
                currentPiece.rotationIndex = nextRotationIndex;
                moved = true;
            }
        } else if (event.key.toLowerCase() === 'p') {
            pauseGame(); // Pause is handled separately
            return; // Don't redraw if pausing
        }

        if (moved && !isPaused) {
            drawBoard();
            if (currentPiece) drawPiece(currentPiece);
        }
    });

    startGameBtn.addEventListener('click', startGame);

    board = createBoard();
    drawBoard();
    ctx.font = '20px "Playfair Display", serif';
    ctx.fillStyle = 'var(--secondary-color)';
    ctx.textAlign = 'center';
    ctx.fillText('Click "Start Game" to Play!', canvas.width / 2, canvas.height / 2);
});
