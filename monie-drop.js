// Basic structure for Monie Drop game logic

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('monieDropCanvas');
    const ctx = canvas.getContext('2d');
    const scoreValueElement = document.getElementById('scoreValue');
    const highScoreValueElement = document.getElementById('highScoreValue');
    const startGameBtn = document.getElementById('startGameBtn');
    // Touch control buttons
    const touchLeftBtn = document.getElementById('touchLeftBtn');
    const touchRightBtn = document.getElementById('touchRightBtn');
    const touchRotateBtn = document.getElementById('touchRotateBtn');
    const touchDownBtn = document.getElementById('touchDownBtn');


    // Game constants
    const COLS = 10;
    const ROWS = 20;
    let BLOCK_SIZE; // Will be calculated dynamically
    const EMPTY_COLOR = '#0a0a0a';

    // Canvas dimension settings (percentages of viewport)
    const CANVAS_HEIGHT_PERCENT = 0.60; // Try to use 60% of viewport height for canvas
    const CANVAS_WIDTH_PERCENT = 0.95;  // Try to use 95% of viewport width for canvas

    function calculateBlockSizeAndSetCanvas() {
        const availableHeight = window.innerHeight * CANVAS_HEIGHT_PERCENT;
        let potentialBlockSizeH = Math.floor(availableHeight / ROWS);

        const availableWidth = window.innerWidth * CANVAS_WIDTH_PERCENT;
        let potentialBlockSizeW = Math.floor(availableWidth / COLS);

        // Ensure touch controls have some space if canvas width is very constrained by height
        // This is a heuristic; might need refinement.
        // If potentialBlockSizeH makes canvas very wide, it might crowd out touch controls on wide, short screens.
        // However, usually height is the constraint on mobile.
        BLOCK_SIZE = Math.min(potentialBlockSizeH, potentialBlockSizeW);

        if (BLOCK_SIZE < 5) BLOCK_SIZE = 5; // Minimum block size to prevent issues

        canvas.width = COLS * BLOCK_SIZE;
        canvas.height = ROWS * BLOCK_SIZE;

        // Adjust canvas style if it's centered or needs specific margins based on new size
        // For example, if canvas is centered using margin auto, its parent might need to be display:flex.
        // For now, assuming direct sizing and CSS handles centering.
        console.log(`DEBUG: Calculated BLOCK_SIZE: ${BLOCK_SIZE}, Canvas: ${canvas.width}x${canvas.height}`);
    }

    // Calculate initial size
    calculateBlockSizeAndSetCanvas();

    const DEFAULT_BLOCK_SIZE_FOR_FONT_SCALING = 30; // The BLOCK_SIZE used when initially designing font sizes

    function getScaledFontSize(baseSize) {
        const scaleFactor = BLOCK_SIZE / DEFAULT_BLOCK_SIZE_FOR_FONT_SCALING;
        return Math.max(8, Math.floor(baseSize * scaleFactor)); // Minimum font size of 8px
    }

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
    // Pivot point for rotation is [0,0] of the first rotation's shape array.
    const MONIE_MINOS = {
        'Classic_GM': [
            // Rotation 0: As per text drawing
            // XX.X.X  (0,0), (0,1), (0,3), (0,5)
            // X..X.X  (1,0), (1,3), (1,5)
            // XXX.X.  (2,0), (2,1), (2,2), (2,4)
            // X.X...  (3,0), (3,2)
            [
                [[0,0],[0,1],       [0,3],       [0,5]],
                [[1,0],             [1,3],       [1,5]],
                [[2,0],[2,1],[2,2], [2,4]            ],
                [[3,0],       [3,2]                  ]
            ],
            // Rotation 1: (Classic_GM rotated 90 degrees right - conceptual)
            // X.X.X
            // .XX.X
            // X.X.X
            // X.X.X
            // .X.X
            // .X.X
            [
                [[0,0],[0,2],[0,4]],
                [[1,1],[1,2],[1,4]],
                [[2,0],[2,2],[2,4]],
                [[3,0],[3,2],[3,4]],
                [[4,1],[4,3]],
                [[5,1],[5,3]]
            ]
            // Add more rotations if desired, can be complex
        ],
        'G_Only': [
            // Rotation 0:
            // XXX
            // X..
            // X.X
            // XXX
            [
                [[0,0],[0,1],[0,2]],
                [[1,0]            ],
                [[2,0],       [2,2]],
                [[3,0],[3,1],[3,2]]
            ],
            // Rotation 1 (90 deg right):
            // XXXX
            // X.X.
            // X...
            [
                [[0,0],[0,1],[0,2],[0,3]],
                [[1,0],[1,2]            ],
                [[2,0]                  ]
            ],
            // Rotation 2 (180 deg):
            // XXX
            // X.X
            // ..X
            // XXX
             [
                [[0,0],[0,1],[0,2]],
                [[1,0],       [1,2]],
                [            ,[2,2]],
                [[3,0],[3,1],[3,2]]
            ],
            // Rotation 3 (270 deg right):
            // ...X
            // .X.X
            // XXXX
            [
                [[0,3]                  ],
                [[1,1],[1,3]            ],
                [[2,0],[2,1],[2,2],[2,3]]
            ]
        ],
        'Heavy_3D': [ // Chunky, squarish G-like or C-like shape
                     // Trying a thick C shape for "heavy" feel
            // XXX
            // X
            // X
            // XXX
            [
                [[0,0],[0,1],[0,2]],
                [[1,0]            ],
                [[2,0]            ],
                [[3,0],[3,1],[3,2]]
            ],
            // Rotation 1:
            // X.XX
            // XXXX
            [
                [[0,0],       [0,2],[0,3]],
                [[1,0],[1,1],[1,2],[1,3]]
            ],
             // Rotation 2:
            // XXX
            //   X
            //   X
            // XXX
            [
                [[0,0],[0,1],[0,2]],
                [            ,[1,2]],
                [            ,[2,2]],
                [[3,0],[3,1],[3,2]]
            ],
            // Rotation 3:
            // XXXX
            // XX.X
            [
                [[0,0],[0,1],[0,2],[0,3]],
                [[1,0],[1,1],       [1,3]]
            ]
        ],
        /* --- Temporarily commenting out simpler shapes to test custom GM logos ---
        'GM_Bar': [
            [ [[0,0], [1,0], [2,0], [3,0]] ],
            [ [[0,0], [0,1], [0,2], [0,3]] ]
        ],
        'GM_Square': [
            [ [[0,0], [0,1], [1,0], [1,1]] ]
        ],
        'GM_L_Shape': [
            [ [[0,0], [1,0], [2,0], [2,1]] ],
            [ [[0,0], [0,1], [0,2], [1,0]] ],
            [ [[0,1], [1,1], [2,1], [0,0]] ],
            [ [[2,0], [2,1], [2,2], [1,2]] ]
        ]
        */
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
    const EMOJI_SPAWN_RATE = 0.15; // 15% chance to spawn an emoji block
    const CANDY_DROP_SPAWN_RATE = 0.05; // 5% chance for a Candy Drop piece (on top of regular piece spawns)

    // --- Candy Drop specific visuals ---
    const CANDY_COLORS = ['#FF69B4', '#00FFFF', '#7FFF00', '#FFD700', '#FF8C00']; // HotPink, Aqua, Chartreuse, Gold, DarkOrange
    const CANDY_EMOJIS = ['🍬', '🍭', '🍫', '🍩', '🍦'];


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
        // --- AGGRESSIVE DEBUGGING: Force simplest piece (Now removed) ---
        // console.log("DEBUG: getRandomPiece called, forcing simple piece.");
        // return {
        //     shape: [[[0,0]]], // Single block piece
        //     rotations: [[[[0,0]]]],
        //     rotationIndex: 0,
        //     color: '#FF0000', // Bright Red for visibility
        //     isCandyDrop: false,
        //     isEmoji: false,
        //     x: Math.floor(COLS / 2),
        //     y: 0
        // };
        // --- END AGGRESSIVE DEBUGGING ---

        // Original getRandomPiece logic (restored)
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
        } else if (Math.random() < CANDY_DROP_SPAWN_RATE && MONIE_MINOS['Classic_GM']) {
            // Spawn a Candy Drop piece (uses Classic_GM shape)
            const pieceRotations = MONIE_MINOS['Classic_GM'];
            // For Candy Drop, we'll make each block a different candy color
            // This requires a more complex piece structure or drawing logic.
            // For now, let's give the piece a general "candy" type and a base candy color.
            // The multi-color block effect will be handled in drawPiece.
            return {
                shape: pieceRotations[0], // Or a random rotation
                rotations: pieceRotations,
                rotationIndex: 0,
                color: CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)], // A base color for the piece
                isCandyDrop: true, // Special flag
                isEmoji: false, // Not a 1x1 emoji block, but special
                effect: 'candyExplosion', // Effect name
                x: Math.floor(COLS / 2) - Math.floor(Math.max(...pieceRotations[0].map(p => p[1])) / 2),
                y: 0
            };
        }
        else { // Regular Monie-Mino
            const pieceNames = Object.keys(MONIE_MINOS);
            const randomPieceName = pieceNames[Math.floor(Math.random() * pieceNames.length)];
            const pieceRotations = MONIE_MINOS[randomPieceName];
            const randomColor = PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)];
            return {
                shape: pieceRotations[0],
                rotations: pieceRotations,
                rotationIndex: 0,
                color: randomColor,
                isCandyDrop: false,
                isEmoji: false,
                x: Math.floor(COLS / 2) - Math.floor(Math.max(...pieceRotations[0].map(p => p[1])) / 2), // Center piece
                y: 0
            };
        } else if (Math.random() < CANDY_DROP_SPAWN_RATE && MONIE_MINOS['Classic_GM']) {
            // Spawn a Candy Drop piece (uses Classic_GM shape)
            const pieceRotations = MONIE_MINOS['Classic_GM'];
            return {
                shape: pieceRotations[0], // Or a random rotation
                rotations: pieceRotations,
                rotationIndex: 0,
                color: CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)], // A base color for the piece
                isCandyDrop: true, // Special flag
                isEmoji: false, // Not a 1x1 emoji block, but special
                effect: 'candyExplosion', // Effect name
                x: Math.floor(COLS / 2) - Math.floor(Math.max(...pieceRotations[0].map(p => p[1])) / 2),
                y: 0
            };
        }
        else { // Regular Monie-Mino
            const pieceNames = Object.keys(MONIE_MINOS);
            const randomPieceName = pieceNames[Math.floor(Math.random() * pieceNames.length)];
            const pieceRotations = MONIE_MINOS[randomPieceName];
            const randomColor = PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)];
            return {
                shape: pieceRotations[0],
                rotations: pieceRotations,
                rotationIndex: 0,
                color: randomColor,
                isCandyDrop: false,
                isEmoji: false,
                x: Math.floor(COLS / 2) - Math.floor(Math.max(...pieceRotations[0].map(p => p[1])) / 2), // Center piece
                y: 0
            };
        }
    }

    function drawPiece(piece) {
        if (piece.isCandyDrop) {
            piece.shape.forEach(([yOffset, xOffset]) => {
                // Assign a random candy color to each block of the Candy Drop piece dynamically
                const blockCandyColor = CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];
                drawBlock(piece.x + xOffset, piece.y + yOffset, blockCandyColor);
            });
        } else {
            piece.shape.forEach(([yOffset, xOffset]) => {
                drawBlock(piece.x + xOffset, piece.y + yOffset, piece.color);
            });
        }
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
        if (piece.isEmoji || piece.isCandyDrop) { // Updated condition
            // Apply effect, then the piece itself disappears (usually)
            applyEmojiEffect(piece); // Will use this for CandyDrop too
        } else {
            // Regular Monie-mino locking
            piece.shape.forEach(([yOffset, xOffset]) => {
                if (piece.y + yOffset >= 0) {
                    board[piece.y + yOffset][piece.x + xOffset] = piece.color;
                }
            });
        }

        // Common logic after piece is locked or effect applied
        if (!piece.isEmoji && !piece.isCandyDrop && piece.y <= 0 && !isValidMove(piece, piece.x, piece.y + 1)) { // Updated condition
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
                        const baseParticleSize = clearedRowIndices.length >= 4 ? (Math.random() * 0.3 + 0.3) : (Math.random() * 0.15 + 0.15); // Factor of BLOCK_SIZE
                        particles.push({
                            x: Math.random() * COLS * BLOCK_SIZE,
                            y: (r + 0.5) * BLOCK_SIZE,
                            vx: (Math.random() - 0.5) * 4,
                            vy: (Math.random() - 0.8) * 3 - 1, // Generally upward
                            size: BLOCK_SIZE * baseParticleSize, // Scaled size
                            fontSize: getScaledFontSize(clearedRowIndices.length >= 4 ? 20 : 15), // For emoji text particles
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
                p.vy += p.vyGravity || 0.1; // Use custom gravity if defined, else default
                p.life--;
                if (p.life <= 0) {
                    particles.splice(index, 1);
                } else {
                    if (p.isEmojiParticle) {
                        ctx.font = `${p.fontSize}px Arial`; // Use pre-calculated scaled font size
                        ctx.textAlign = 'center';
                        ctx.fillText(p.emoji, p.x, p.y);
                    } else { // Non-emoji, drawn with arc
                        ctx.fillStyle = p.color;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2); // p.size is already scaled
                        ctx.fill();
                    }
                }
            });

            // MONIE DROP! Text (appears after initial flash and persists during particle effect)
            if (clearedRowIndices.length >= 4 && currentStep > 1) { // Also for the re-draw part of animation
                ctx.font = `bold ${getScaledFontSize(45)}px "Playfair Display", serif`;
                ctx.fillStyle = 'var(--secondary-color)';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'black';
                ctx.shadowBlur = getScaledFontSize(7); // Scale shadow blur
                ctx.fillText("MONIE DROP!", canvas.width / 2, canvas.height / 2);
                ctx.shadowBlur = 0;
                ctx.font = `${getScaledFontSize(30)}px Arial`; // For 💎🏆
                ctx.fillText('💎🏆', canvas.width / 2, canvas.height / 2 + getScaledFontSize(50));
            }

            if (currentPiece && !isGameOver) drawPiece(currentPiece); // Redraw current piece on top

            currentStep++;
            setTimeout(animationStep, animationTimePerFrame);
        }
        animationStep(); // Start the animation steps
    }

    function animateMonieFlash(piece, originalEffectAction) {
        isAnimatingLineClear = true; // Reuse this flag to pause game, or use a new one
        clearInterval(gameInterval);

        const flashDuration = 100; // ms for the main flash
        const sparkleDuration = 400; // ms for sparkles to fade
        const numSparkles = 30;

        // 1. Big Flash
        ctx.fillStyle = 'rgba(255, 255, 224, 0.8)'; // Light yellow, nearly white flash
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create sparkles around the piece's landing position (or center screen for rocket)
        const centerX = (piece.effect === 'clearColumn') ? (piece.x + 0.5) * BLOCK_SIZE : (piece.x + 0.5) * BLOCK_SIZE;
        const centerY = (piece.effect === 'clearColumn') ? canvas.height / 2 : (piece.y + 0.5) * BLOCK_SIZE;

        for (let i = 0; i < numSparkles; i++) {
            particles.push({
                x: centerX,
                y: centerY,
                vx: (Math.random() - 0.5) * 8, // Spread out
                vy: (Math.random() - 0.5) * 8,
                fontSize: getScaledFontSize(18), // Scaled font size for sparkles
                emoji: '✨',
                life: 20 + Math.random() * 10, // Sparkles fade relatively quickly
                isEmojiParticle: true,
                vyGravity: 0.05 // Slight gravity for sparkles
            });
        }

        // Redraw board and piece under flash quickly, then particles will be drawn over by gameLoop/animation system
        setTimeout(() => {
            drawBoard(); // Draw current board state
            if(currentPiece && currentPiece !== piece) drawPiece(currentPiece); // Draw current falling piece if not the effect piece

            // The main particle drawing loop is in animateLineClear, need to ensure particles are drawn
            // For simplicity here, we'll rely on the fact that originalEffectAction will likely call clearLines,
            // which then handles particle drawing. Or, we add a temporary particle draw here.
            // Let's assume for now the line clear animation handles ongoing particle drawing.

        }, flashDuration / 2); // Draw under flash quickly


        setTimeout(() => {
            // After flash and sparkle generation, execute the original effect
            originalEffectAction(); // This will clear blocks and likely trigger clearLines animation

            // Reset animation flag after original effect and its animations are expected to start
            // This timing is tricky; ideally, originalEffectAction's own animations handle this.
            // For now, we assume clearLines will handle the isAnimatingLineClear flag.
            // If originalEffectAction doesn't call clearLines, this flag might get stuck.
            // Let's ensure applyEmojiEffect sets it false if no line clear animation.
            if (!particles.length) { // If no line clear particles were generated by the effect
                 isAnimatingLineClear = false;
                 if(!isPaused && !isGameOver) gameInterval = setInterval(gameLoop, gameSpeed);
            }

        }, sparkleDuration); // Execute after sparkles have had some time
    }


    // --- Emoji Effect Functions ---
    function applyEmojiEffect(piece) {
        const { x, y, effect } = piece; // Assuming emoji is 1x1, x,y is its landing position

        switch (effect) {
            case 'clearColumn':
                animateMonieFlash(piece, () => {
                    for (let r = 0; r < ROWS; r++) {
                        board[r][x] = EMPTY_COLOR;
                    }
                    updateScore(0, 50 * ROWS);
                    clearLines(); // Check if this clearing action itself cleared lines
                });
                return; // Return early as animation handles follow-up
            case 'explodeRadius':
                animateMonieFlash(piece, () => {
                    const radius = 1;
                    for (let r = Math.max(0, y - radius); r <= Math.min(ROWS - 1, y + radius); r++) {
                        for (let c = Math.max(0, x - radius); c <= Math.min(COLS - 1, x + radius); c++) {
                            board[r][c] = EMPTY_COLOR;
                        }
                    }
                    updateScore(0, 200);
                    clearLines(); // Check if this clearing action itself cleared lines
                });
                return; // Return early
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
            case 'candyExplosion':
                updateScore(0, 1000); // Generous bonus points for Candy Drop
                // Trigger candy particle shower
                const pieceCenterX = (piece.x + Math.max(...piece.shape.map(p=>p[1])) / 2) * BLOCK_SIZE;
                const pieceCenterY = (piece.y + Math.max(...piece.shape.map(p=>p[0])) / 2) * BLOCK_SIZE;

                for (let i = 0; i < 50; i++) { // More particles for candy explosion
                    particles.push({
                        x: pieceCenterX + (Math.random() - 0.5) * BLOCK_SIZE * 3, // Spread wider
                        y: pieceCenterY + (Math.random() - 0.5) * BLOCK_SIZE * 2,
                        vx: (Math.random() - 0.5) * 5,
                        vy: (Math.random() - 0.7) * 4 - 2, // Stronger upward burst initially
                        size: Math.random() * 15 + 10,
                        emoji: CANDY_EMOJIS[Math.floor(Math.random() * CANDY_EMOJIS.length)],
                        life: 40 + Math.random() * 30, // Longer life for candy particles
                        isEmojiParticle: true, // Use emoji drawing logic
                        vyGravity: 0.15 // Slightly stronger gravity for candy
                    });
                }
                // The Candy Drop piece itself does not remain on the board.
                // No need to call clearLines() here unless the explosion itself could form lines,
                // but candy drop is about bonus and visual flair.
                break;
        }
        // After applying effect, if it's not a candy explosion, check for cleared lines.
        if (effect !== 'candyExplosion') {
            clearLines();
        }
    }

    // Modify particle drawing logic slightly to accommodate custom gravity for candy
    // This will be done in animateLineClear and gameLoop (if particles are drawn there too)
    // For now, let's assume the particle drawing in animateLineClear is the main one for effects


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

        // Draw general particles (e.g., from Candy Drop) if no line clear animation is running
        if (!isAnimatingLineClear && particles.length > 0) {
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.vyGravity || 0.1;
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
        }

        updateAndDrawMusicNotes();
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

        // Explicitly clear canvas before drawing new game state
        // ctx.fillStyle = EMPTY_COLOR; // This will be handled by drawBoard after resize
        // ctx.fillRect(0, 0, canvas.width, canvas.height); // This too

        calculateBlockSizeAndSetCanvas(); // Recalculate and set canvas size
        // Now clear with new dimensions
        ctx.fillStyle = EMPTY_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        board = createBoard();
        currentScore = 0;
        scoreValueElement.textContent = currentScore;
        linesClearedForLevel = 0; // Reset lines for level
        gameSpeed = INITIAL_GAME_SPEED; // Reset game speed
        musicNoteParticles = []; // Clear any leftover music notes
        particles = []; // Clear any leftover line clear particles

        // console.log("DEBUG: startGame - Before getRandomPiece"); // Keep for now if helpful
        currentPiece = getRandomPiece();
        console.log("DEBUG: startGame - After getRandomPiece, piece:", currentPiece);

        isPaused = false;
        isGameOver = false;
        isAnimatingLineClear = false; // Ensure this flag is reset

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

            ctx.font = `bold ${getScaledFontSize(45)}px "Playfair Display", serif`; // Base 45 for BLOCK_SIZE*1.5 feel
            ctx.fillStyle = 'var(--secondary-color)';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - getScaledFontSize(30)); // Adjust Y offset

            ctx.font = `${getScaledFontSize(60)}px Arial`; // Base 60 for BLOCK_SIZE*2 feel (for emoji 🎺)
            ctx.fillText('🎺', canvas.width / 2, canvas.height / 2 + getScaledFontSize(45)); // Adjust Y offset

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
            ctx.font = `bold ${getScaledFontSize(24)}px "Playfair Display", serif`; // Base 24
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
        } else {
            // On unpause, redraw board immediately before interval starts to avoid old frame flash
            drawBoard();
            if (currentPiece) drawPiece(currentPiece);
            updateAndDrawMusicNotes(); // And music notes
            gameInterval = setInterval(gameLoop, gameSpeed);
        }
    }

    // --- Game Control Functions ---
    function handleMoveLeft() {
        if (isGameOver || !currentPiece || isPaused) return false;
        if (isValidMove(currentPiece, currentPiece.x - 1, currentPiece.y)) {
            currentPiece.x--;
            return true;
        }
        return false;
    }

    function handleMoveRight() {
        if (isGameOver || !currentPiece || isPaused) return false;
        if (isValidMove(currentPiece, currentPiece.x + 1, currentPiece.y)) {
            currentPiece.x++;
            return true;
        }
        return false;
    }

    function handleMoveDown() {
        if (isGameOver || !currentPiece || isPaused) return false;
        if (isValidMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
            currentPiece.y++;
            // Reset interval to apply speed consistently and avoid double drop with auto-drop
            clearInterval(gameInterval);
            gameInterval = setInterval(gameLoop, gameSpeed);
            return true;
        } else {
            lockPiece(currentPiece); // Lock if it can't move further down
            return false; // Movement didn't happen, piece locked
        }
    }

    function handleRotate() {
        if (isGameOver || !currentPiece || isPaused) return false;
        const currentRotationIndex = currentPiece.rotationIndex;
        const nextRotationIndex = (currentRotationIndex + 1) % currentPiece.rotations.length;
        const nextShape = currentPiece.rotations[nextRotationIndex];

        let kickOffset = 0;
        if (!isValidMove(currentPiece, currentPiece.x, currentPiece.y, nextShape)) {
            if (isValidMove(currentPiece, currentPiece.x + 1, currentPiece.y, nextShape)) {
                kickOffset = 1;
            } else if (isValidMove(currentPiece, currentPiece.x - 1, currentPiece.y, nextShape)) {
                kickOffset = -1;
            }
        }

        if (isValidMove(currentPiece, currentPiece.x + kickOffset, currentPiece.y, nextShape)) {
            currentPiece.x += kickOffset;
            currentPiece.shape = nextShape;
            currentPiece.rotationIndex = nextRotationIndex;
            return true;
        }
        return false;
    }

    document.addEventListener('keydown', (event) => {
        if (isGameOver || !currentPiece || isPaused) return; // Initial check

        let moved = false;
        switch (event.key) {
            case 'ArrowLeft':
                moved = handleMoveLeft();
                break;
            case 'ArrowRight':
                moved = handleMoveRight();
                break;
            case 'ArrowDown':
                moved = handleMoveDown();
                break;
            case 'ArrowUp':
                moved = handleRotate();
                break;
            case 'p':
            case 'P':
                pauseGame();
                return; // Pause doesn't count as a "move" for redraw
        }

        if (moved && !isPaused) { // Redraw only if a move happened and not paused
            drawBoard();
            if (currentPiece) drawPiece(currentPiece);
        }
    });

    startGameBtn.addEventListener('click', startGame);

    // --- Touch Control Event Listeners ---
    if (touchLeftBtn) {
        touchLeftBtn.addEventListener('click', () => {
            if (handleMoveLeft() && !isPaused) {
                drawBoard();
                if (currentPiece) drawPiece(currentPiece);
            }
        });
    }
    if (touchRightBtn) {
        touchRightBtn.addEventListener('click', () => {
            if (handleMoveRight() && !isPaused) {
                drawBoard();
                if (currentPiece) drawPiece(currentPiece);
            }
        });
    }
    if (touchRotateBtn) {
        touchRotateBtn.addEventListener('click', () => {
            if (handleRotate() && !isPaused) {
                drawBoard();
                if (currentPiece) drawPiece(currentPiece);
            }
        });
    }
    if (touchDownBtn) {
        touchDownBtn.addEventListener('click', () => {
            // handleMoveDown() already includes redraw logic if piece locks,
            // but we need to redraw if it just moves down one step.
            if (handleMoveDown() && !isPaused) { // Check if it moved (didn't lock)
                 drawBoard();
                 if (currentPiece) drawPiece(currentPiece);
            } else if (!isPaused && !currentPiece) { // It locked, new piece generated
                 drawBoard(); // Redraw board for new piece
                 if (currentPiece) drawPiece(currentPiece);
            }
        });
    }

    board = createBoard();
    drawBoard(); // Initial draw with calculated BLOCK_SIZE

    // Initial message - also needs to be drawn after canvas is sized.
    // This logic might better be placed inside a function called after calculateBlockSizeAndSetCanvas
    // or drawn once in startGame if no game is active.
    // For now, let's ensure its font is scaled if it's drawn.
    function drawInitialMessage() {
        if (!gameInterval && !isGameOver) { // Only if game not started/over
            ctx.font = `bold ${getScaledFontSize(20)}px "Playfair Display", serif`; // Base 20
            ctx.fillStyle = 'var(--secondary-color)';
            ctx.textAlign = 'center';
            // Clear a space for the text, or ensure drawBoard happened first
            // ctx.clearRect(0, canvas.height / 2 - getScaledFontSize(20), canvas.width, getScaledFontSize(40));
            ctx.fillText('Click "Start Game" to Play!', canvas.width / 2, canvas.height / 2);
        }
    }
    drawInitialMessage(); // Call it once on load
    // And ensure startGame clears it by calling drawBoard() after canvas resize.
});
