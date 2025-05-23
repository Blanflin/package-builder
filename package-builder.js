// Package data with all event types, service types, base packages, and add-ons
// MODIFIED Photography package features based on user request
const packageData = {
  eventTypes: [
    {
      id: "wedding",
      name: "Wedding",
      description: "Capture every moment of your special day",
      imageUrl: "https://files.fm/f/zpf783wpe7"
    },
    {
      id: "small-event",
      name: "Small Event",
      description: "Perfect for birthdays, parties, and gatherings",
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "production",
      name: "Production",
      description: "Commercial, product, and promotional content",
      imageUrl: "https://files.fm/f/7q9hsapjas"
    },
    {
      id: "portrait",
      name: "Portrait Session",
      description: "Individual or family portrait photography",
      imageUrl: "https://files.fm/f/3njv5pn9n3"
    },
    {
      id: "sports",
      name: "Sports Photography",
      description: "Action shots and team photos",
      imageUrl: "https://files.fm/f/ny2nyg9tnb"
    }
  ],
  serviceTypes: [
    {
      id: "photography",
      name: "Photography",
      description: "Professional photography services",
      imageUrl: "https://files.fm/f/bz8kaq37aj"
    },
    {
      id: "videography",
      name: "Videography",
      description: "Professional videography services",
      imageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "both",
      name: "Photography & Videography",
      description: "Combined professional services",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ],
  packages: {
    "wedding-photography": [
      {
        id: "photo-a",
        name: "Package A",
        price: 500,
        description: "Photography Package A for Weddings.",
        features: [
          "2 Hr Coverage",
          "Ceremony OR Reception",
          "10 Detailed Edits",
          "20 Candid Photos",
          "Consultation",
          "Retainer: $250"
        ]
      },
      {
        id: "photo-b",
        name: "Package B",
        price: 750,
        description: "Photography Package B for Weddings.",
        features: [
          "4 Hr Coverage",
          "Ceremony & Reception",
          "20 Detailed Edits",
          "Digital access to all photos taken",
          "Consultation",
          "Retainer: $375"
        ]
      },
      {
        id: "photo-d",
        name: "Package D",
        price: 900,
        description: "Photography Package D for Weddings.",
        features: [
          "8 Hr Coverage",
          "Ceremony & Reception (Extra EQ Cost Incl.)",
          "30 Detailed Edits",
          "Digital access to all photos taken",
          "Bonus 3D photo",
          "Consultation",
          "Retainer: $400"
        ]
      }
    ],
    "wedding-videography": [
      {
        id: "video-a",
        name: "Video Package A",
        price: 1000,
        description: "Videography Package A for Weddings.",
        features: [
          "3 Hr Coverage",
          "Ceremony OR Reception",
          "1-2 min Highlight Reel",
          "20 Candid Photos",
          "10 Detailed Edits",
          "Consultation",
          "Retainer: $500"
        ]
      },
      {
        id: "video-b",
        name: "Video Package B",
        price: 1500,
        description: "Videography Package B for Weddings.",
        features: [
          "4 Hr Coverage",
          "Ceremony & Reception",
          "Drone Footage",
          "3-4 min Highlight Reel",
          "30 Candid Photos",
          "15 Detailed Edits",
          "Consultation",
          "Retainer: $750"
        ]
      },
      {
        id: "video-d",
        name: "Video Package D",
        price: 2800,
        description: "Videography Package D for Weddings.",
        features: [
          "8 Hr Coverage",
          "Ceremony & Reception",
          "Drone Footage",
          "Nxt Day Trailer",
          "10-15 min Video",
          "Equipment: 3 Cameras",
          "50/75 Candid Photos",
          "20 Detailed Edits",
          "Consultation",
          "Retainer: $1000"
        ]
      }
    ],
    "wedding-both": [
      {
        id: "bundle-a",
        name: "Bundle A",
        price: 1499,
        description: "Photo & Video Bundle A for Weddings.",
        features: [
          "4 Hr Coverage",
          "Ceremony & Reception",
          "5 min Video",
          "Online gallery with digital photos",
          "Consultation",
          "Retainer: $500"
        ]
      },
      {
        id: "bundle-b",
        name: "Bundle B",
        price: 1999,
        description: "Photo & Video Bundle B for Weddings.",
        features: [
          "6 Hr Coverage",
          "Ceremony, wedding party venue (dress/gathering & Reception)",
          "Drone Footage",
          "Trailer within 48 hrs",
          "15 min Video",
          "Online gallery with digital photos",
          "Consultation",
          "Retainer: $1000"
        ]
      },
      {
        id: "bundle-c",
        name: "Bundle C",
        price: 3499,
        description: "Photo & Video Bundle C for Weddings.",
        features: [
          "Full Coverage (8hrs)",
          "Ceremony, wedding party venue (dress/gathering & Reception)",
          "Drone Footage",
          "Social Media Highlight reel",
          "Next Day wedding Trailer",
          "20 min Video",
          "Online gallery with digital photos",
          "Consultation",
          "Retainer: $1500"
        ]
      },
      {
        id: "bundle-s",
        name: "Bundle S (Premium)",
        price: 5000,
        description: "Premium Photo & Video Bundle S for Weddings.",
        features: [
          "Full Coverage (8hrs)",
          "Ceremony, wedding party venue (dress/gathering & Reception)",
          "Equipment: 3 Cameras",
          "Drone Footage",
          "Next Day wedding Trailer",
          "Social Media Highlight reel",
          "360 video of full ceremony",
          "PREMIUM Gifts! (headset + 3D video of ceremony)",
          "1 hr wedding Documentary",
          "Online gallery with digital photos",
          "Consultation",
          "Retainer: $2000"
        ]
      }
    ],
    "small-event-photography": [
      {
        id: "sme-photo-a",
        name: "Photo Package A",
        price: 249,
        description: "Small Event Photography Package A.",
        features: ["Up to 1 Hr session", "1 Location", "1 Outfit Change", "Minimum of 5 Detailed Photos", "20 candids", "Retainer: $75"]
      },
      {
        id: "sme-photo-b",
        name: "Photo Package B",
        price: 339,
        description: "Small Event Photography Package B.",
        features: ["Up to 2 Hr session", "2 Locations", "2 Outfit Changes", "Minimum of 10 Detailed Photos", "All candids", "Retainer: $125"]
      },
      {
        id: "sme-photo-c",
        name: "Photo Package C",
        price: 399,
        description: "Small Event Photography Package C.",
        features: ["Up to 3 Hr session", "3 Locations", "3 Outfit Changes", "Minimum of 15 Detailed Photos", "All candids", "Highlight reel", "Retainer: $175"]
      }
    ],
    "small-event-videography": [
      {
        id: "sme-video-a",
        name: "Video Package A",
        price: 200,
        description: "Small Event Videography Package A.",
        features: ["1 Hr Coverage", "1 Location", "1-2 Min Highlight Video", "Retainer: $100"]
      },
      {
        id: "sme-video-b",
        name: "Video Package B",
        price: 400,
        description: "Small Event Videography Package B.",
        features: ["3 Hr Coverage", "2 Locations", "Drone Footage", "5 min Highlight Video", "Retainer: $200"]
      },
      {
        id: "sme-video-d",
        name: "Video Package D",
        price: 800,
        description: "Small Event Videography Package D.",
        features: ["6-8 Hr Coverage", "Multiple Locations", "Drone Footage", "10-15 min Video", "Equipment: 2 Cameras", "Retainer: $400"]
      }
    ],
    "small-event-both": [
      {
        id: "sme-both-a",
        name: "Bundle Package A",
        price: 449,
        description: "Small Event Photo & Video Bundle A.",
        features: ["Up to 1 Hr session", "1 Location", "5 Detailed Photos", "1-2 Min Highlight Video", "Retainer: $175"]
      },
      {
        id: "sme-both-b",
        name: "Bundle Package B",
        price: 799,
        description: "Small Event Photo & Video Bundle B.",
        features: ["Up to 2 Hr session", "2 Locations", "10 Detailed Photos", "5 min Highlight Video", "Drone Footage", "Retainer: $325"]
      },
      {
        id: "sme-both-c",
        name: "Bundle Package C",
        price: 1199,
        description: "Small Event Photo & Video Bundle C.",
        features: ["Up to 3 Hr session", "3 Locations", "15 Detailed Photos", "10-15 min Highlight Video", "Drone Footage", "Retainer: $575"]
      }
    ],
    "production-photography": [
      {
        id: "prod-photo-a",
        name: "Basic Photo",
        price: 499,
        description: "Production Photography Package A.",
        features: ["2 hours coverage", "10 final edited images", "Retainer: $200"]
      },
      {
        id: "prod-photo-b",
        name: "Standard Photo",
        price: 799,
        description: "Production Photography Package B.",
        features: ["4 hours coverage", "20 final edited images", "Basic retouching", "Retainer: $350"]
      },
      {
        id: "prod-photo-c",
        name: "Premium Photo",
        price: 1199,
        description: "Production Photography Package C.",
        features: ["6 hours coverage", "30 final edited images", "Advanced retouching", "Retainer: $500"]
      }
    ],
    "production-videography": [
      {
        id: "prod-video-a",
        name: "Video Package A",
        price: 300,
        description: "Production Videography Package A.",
        features: ["1 Hr Coverage", "1 Location", "1-2 Min Highlight Video", "Retainer: $150"]
      },
      {
        id: "prod-video-b",
        name: "Video Package B",
        price: 800,
        description: "Production Videography Package B.",
        features: ["3 Hr Coverage", "2 Locations", "Equipment: 2 Cameras", "Drone Footage", "5 min Highlight Video", "Retainer: $400"]
      },
      {
        id: "prod-video-d",
        name: "Video Package D",
        price: 1500,
        description: "Production Videography Package D.",
        features: ["6-8 Hr Coverage", "Multiple Locations", "Equipment: 3 Cameras", "Drone Footage", "10-15 min Video", "Retainer: $600"]
      }
    ],
    "production-both": [
      {
        id: "prod-both-a",
        name: "Basic Bundle",
        price: 999,
        description: "Production Photo & Video Bundle A.",
        features: ["3 hours coverage", "10 edited photos", "1-2 min video", "Retainer: $400"]
      },
      {
        id: "prod-both-b",
        name: "Standard Bundle",
        price: 1699,
        description: "Production Photo & Video Bundle B.",
        features: ["5 hours coverage", "20 edited photos", "2-3 min video", "Drone Footage", "Retainer: $700"]
      },
      {
        id: "prod-both-c",
        name: "Premium Bundle",
        price: 2499,
        description: "Production Photo & Video Bundle C.",
        features: ["7 hours coverage", "30 edited photos", "3-5 min video", "Drone Footage", "Advanced retouching/grading", "Retainer: $1000"]
      }
    ],
    "portrait-photography": [
      {
        id: "portrait-a",
        name: "Portrait Package A",
        price: 249,
        description: "Portrait Package A.",
        features: ["Up to 1 Hr session", "1 Location", "1 Outfit Change", "Minimum of 5 Detailed Photos", "20 candids with access to cloud folder", "Retainer: $75"]
      },
      {
        id: "portrait-b",
        name: "Portrait Package B",
        price: 339,
        description: "Portrait Package B.",
        features: ["Up to 2 Hr session", "2 Locations", "2 Outfit Changes", "Minimum of 10 Detailed Photos", "All candids with access to cloud folder", "Retainer: $125"]
      },
      {
        id: "portrait-c",
        name: "Portrait Package C",
        price: 399,
        description: "Portrait Package C.",
        features: ["Up to 3 Hr session", "3 Locations", "3 Outfit Changes", "Minimum of 15 Detailed Photos", "All candids with access to cloud folder", "Highlight reel", "Retainer: $175"]
      }
    ],
    "sports-photography": [
      {
        id: "sports-a",
        name: "Sports Package A",
        price: 20,
        description: "Sports Package A.",
        features: ["Digital link to download", "Includes collage of 2 team pictures & individual", "Individual solo pictures"]
      },
      {
        id: "sports-b",
        name: "Sports Package B",
        price: 25,
        description: "Sports Package B.",
        features: ["8x10 Collage print", "5x7 individual picture print"]
      }
    ]
  },
  addOns: {
    photography: [
      {
        id: "extra-time-photo",
        name: "Extra Hour of Coverage",
        price: 199,
        description: "Add an additional hour of photography coverage.",
        category: "Time"
      },
      {
        id: "second-photographer",
        name: "Second Photographer",
        price: 399,
        description: "Add a second professional photographer (if not already included in your selected package).",
        category: "Personnel"
      },
      {
        id: "engagement-session",
        name: "Engagement Session",
        price: 299,
        description: "1-hour engagement photo session, can be added if not part of the main package.",
        category: "Sessions"
      },
      {
        id: "photo-album-mini",
        name: "Mini Photo Album",
        price: 299,
        description: "20-page custom designed photo album.",
        category: "Products"
      },
      {
        id: "badge-tags",
        name: "Badge Tags (1)",
        price: 15,
        description: "Custom photo badge tag.",
        category: "Products"
      },
      {
        id: "raw-photo-files",
        name: "Raw Photo Files",
        price: 249,
        description: "Access to all unedited RAW photo files.",
        category: "Digital"
      },
      {
        id: "rush-delivery-photo",
        name: "Rush Photo Delivery",
        price: 199,
        description: "Expedited delivery of your photos.",
        category: "Services"
      },
      {
        id: "print-value",
        name: "VALUE Print Package",
        price: 65,
        description: "2-8x10, 4-5x7, 4-4x5, 24-Wallets, Online Access",
        category: "Prints"
      },
      {
        id: "print-a",
        name: "Print Package A",
        price: 50,
        description: "1-8x10, 2-5x7, 2-4x5, 16-Wallets, Online Access",
        category: "Prints"
      },
      {
        id: "print-b",
        name: "Print Package B",
        price: 35,
        description: "1-8x10, 2-5x7, 12-Wallets, Online Access",
        category: "Prints"
      },
      {
        id: "print-c",
        name: "Print Package C",
        price: 25,
        description: "1-5x7, 2-4x5, 8-Wallets, Online Access",
        category: "Prints"
      },
      {
        id: "print-digital",
        name: "NO PRINT (Digital Only)",
        price: 20,
        description: "Receive digital files only (if not already included or for additional sets).",
        category: "Prints"
      }
    ],
    videography: [
      {
        id: "extra-time-video",
        name: "Extra Hour of Video Coverage",
        price: 249,
        description: "Add an additional hour of videography coverage.",
        category: "Time"
      },
      {
        id: "second-videographer",
        name: "Second Videographer",
        price: 499,
        description: "Add a second professional videographer (if not already included in your selected package).",
        category: "Personnel"
      },
      {
        id: "drone-footage",
        name: "Drone Aerial Footage",
        price: 299,
        description: "Cinematic aerial footage (if not already included in your selected package).",
        category: "Equipment"
      },
      {
        id: "raw-video-files",
        name: "Raw Video Footage",
        price: 349,
        description: "All unedited video footage from your event.",
        category: "Digital"
      },
      {
        id: "social-media-teaser",
        name: "Social Media Teaser",
        price: 199,
        description: "60-second teaser video for social media.",
        category: "Digital"
      },
      {
        id: "rush-delivery-video",
        name: "Rush Video Delivery",
        price: 299,
        description: "Expedited delivery of your videos.",
        category: "Services"
      }
    ],
    both: [
      {
        id: "extra-time-both",
        name: "Extra Hour of Photo & Video Coverage",
        price: 349,
        description: "Add an additional hour of combined photo and video coverage.",
        category: "Time"
      },
      {
        id: "rehearsal-coverage",
        name: "Rehearsal Dinner Coverage",
        price: 699,
        description: "2 hours of photo and video coverage of your rehearsal dinner.",
        category: "Services"
      },
      {
        id: "complete-rush-delivery",
        name: "Complete Rush Delivery (Photo & Video)",
        price: 499,
        description: "Expedited delivery of all photo and video content.",
        category: "Services"
      }
    ]
  }
};

// Global variables to store user selections
let selectedEventType = null;
let selectedServiceType = null;
let selectedPackage = null;
let selectedAddOns = [];
let currentStep = 1;
let viewMode = 'card';

// Initialize the builder when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeEventTypes();
  setupFormSubmission();
});

// Function to scroll to the package builder section
function scrollToBuilder() {
  const builderSection = document.getElementById('package-builder-section');
  builderSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the event type selection grid
function initializeEventTypes() {
  const eventTypeGrid = document.getElementById('event-type-grid');
  eventTypeGrid.innerHTML = '';

  packageData.eventTypes.forEach(eventType => {
    const card = createSelectionCard(eventType, selectEventType);
    eventTypeGrid.appendChild(card);
  });
}

// Create a selection card element
function createSelectionCard(item, clickHandler) {
  const card = document.createElement('div');
  card.className = 'selection-card';
  card.dataset.id = item.id;

  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  cardImage.style.backgroundImage = `url(${item.imageUrl})`;
  
  const cardTitle = document.createElement('h3');
  cardTitle.textContent = item.name;
  
  const cardDescription = document.createElement('p');
  cardDescription.textContent = item.description;
  
  const selectButton = document.createElement('button');
  selectButton.className = 'select-button';
  selectButton.textContent = 'Select';
  
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(selectButton);
  
  card.addEventListener('click', () => clickHandler(item));
  
  return card;
}

// Handle event type selection
function selectEventType(eventType) {
  selectedEventType = eventType;
  
  // Update UI to show selection
  const eventCards = document.querySelectorAll('#event-type-grid .selection-card');
  eventCards.forEach(card => {
    if (card.dataset.id === eventType.id) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
  
  // Initialize service type options
  initializeServiceTypes();
  
  // Move to next step
  goToNextStep();
}

// Initialize the service type selection grid
function initializeServiceTypes() {
  const serviceTypeGrid = document.getElementById('service-type-grid');
  serviceTypeGrid.innerHTML = '';
  
  // Update the event name in the UI
  document.getElementById('selected-event-name').textContent = selectedEventType.name;

  let availableServiceTypes = packageData.serviceTypes;

  if (selectedEventType && (selectedEventType.id === "portrait" || selectedEventType.id === "sports")) {
    availableServiceTypes = packageData.serviceTypes.filter(service => service.id === "photography");
  }
  
  availableServiceTypes.forEach(serviceType => {
    const card = createSelectionCard(serviceType, selectServiceType);
    serviceTypeGrid.appendChild(card);
  });
}

// Handle service type selection
function selectServiceType(serviceType) {
  selectedServiceType = serviceType;
  
  // Update UI to show selection
  const serviceCards = document.querySelectorAll('#service-type-grid .selection-card');
  serviceCards.forEach(card => {
    if (card.dataset.id === serviceType.id) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
  
  // Initialize package options
  initializePackages();
  
  // Move to next step
  goToNextStep();
}

// Initialize the package selection view
function initializePackages() {
  // Get the packages for the selected event and service type
  const packageKey = `${selectedEventType.id}-${selectedServiceType.id}`;
  const packages = packageData.packages[packageKey];
  
  // Update the title in the UI
  document.getElementById('event-service-title').textContent = `${selectedEventType.name} ${selectedServiceType.name}`;
  
  // Initialize both views
  initializePackageCardsView(packages);
  initializePackageComparisonView(packages);
}

// Initialize the package cards view
function initializePackageCardsView(packages) {
  const packageCardsView = document.getElementById('package-cards-view');
  packageCardsView.innerHTML = '';
  
  packages.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.dataset.id = pkg.id;
    
    const header = document.createElement('div');
    header.className = 'package-header';
    
    const name = document.createElement('h3');
    name.className = 'package-name';
    name.textContent = pkg.name;
    
    const price = document.createElement('div');
    price.className = 'package-price';
    price.textContent = `$${pkg.price}`;
    
    const description = document.createElement('p');
    description.className = 'package-description';
    description.textContent = pkg.description;
    
    header.appendChild(name);
    header.appendChild(price);
    header.appendChild(description);
    
    const features = document.createElement('div');
    features.className = 'package-features';
    
    pkg.features.forEach(feature => {
      const featureItem = document.createElement('div');
      featureItem.className = 'feature-item';
      
      const icon = document.createElement('span');
      icon.className = 'feature-icon';
      icon.textContent = '✓';
      
      const text = document.createElement('span');
      text.className = 'feature-text';
      text.textContent = feature;
      
      featureItem.appendChild(icon);
      featureItem.appendChild(text);
      features.appendChild(featureItem);
    });
    
    const selectButton = document.createElement('button');
    selectButton.className = 'select-package-button';
    selectButton.textContent = 'Select Package';
    selectButton.addEventListener('click', () => selectPackage(pkg));
    
    card.appendChild(header);
    card.appendChild(features);
    card.appendChild(selectButton);
    
    packageCardsView.appendChild(card);
  });
}

// Initialize the package comparison view
function initializePackageComparisonView(packages) {
  const comparisonView = document.getElementById('package-comparison-view');
  comparisonView.innerHTML = '';
  
  const table = document.createElement('table');
  table.className = 'comparison-table';
  
  // Create header row
  const headerRow = document.createElement('tr');
  const emptyHeader = document.createElement('th');
  headerRow.appendChild(emptyHeader);
  
  packages.forEach(pkg => {
    const header = document.createElement('th');
    
    const name = document.createElement('div');
    name.className = 'comparison-package-name';
    name.textContent = pkg.name;
    
    const price = document.createElement('div');
    price.className = 'comparison-package-price';
    price.textContent = `$${pkg.price}`;
    
    header.appendChild(name);
    header.appendChild(price);
    headerRow.appendChild(header);
  });
  
  table.appendChild(headerRow);
  
  // Create description row
  const descRow = document.createElement('tr');
  const descLabel = document.createElement('td');
  descLabel.className = 'feature-name';
  descLabel.textContent = 'Description';
  descRow.appendChild(descLabel);
  
  packages.forEach(pkg => {
    const descCell = document.createElement('td');
    descCell.textContent = pkg.description;
    descRow.appendChild(descCell);
  });
  
  table.appendChild(descRow);
  
  // Create feature rows
  // Get the maximum number of features across all packages
  const maxFeatures = Math.max(...packages.map(pkg => pkg.features.length));
  
  for (let i = 0; i < maxFeatures; i++) {
    const featureRow = document.createElement('tr');
    
    // First column is empty for the first row, then contains "Features" for subsequent rows
    const labelCell = document.createElement('td');
    labelCell.className = 'feature-name';
    
    if (i === 0) {
      labelCell.textContent = 'Features';
    }
    
    featureRow.appendChild(labelCell);
    
    // Add feature cells for each package
    packages.forEach(pkg => {
      const featureCell = document.createElement('td');
      
      if (i < pkg.features.length) {
        const featureText = document.createElement('div');
        featureText.className = 'comparison-feature';
        
        const icon = document.createElement('span');
        icon.className = 'feature-icon';
        icon.textContent = '✓';
        
        featureText.appendChild(icon);
        featureText.appendChild(document.createTextNode(' ' + pkg.features[i]));
        featureCell.appendChild(featureText);
      } else {
        featureCell.textContent = '-';
      }
      
      featureRow.appendChild(featureCell);
    });
    
    table.appendChild(featureRow);
  }
  
  // Create select button row
  const selectRow = document.createElement('tr');
  const selectLabel = document.createElement('td');
  selectRow.appendChild(selectLabel);
  
  packages.forEach(pkg => {
    const selectCell = document.createElement('td');
    selectCell.className = 'select-row';
    
    const selectButton = document.createElement('button');
    selectButton.className = 'comparison-select-button';
    selectButton.dataset.id = pkg.id;
    selectButton.textContent = 'Select Package';
    selectButton.addEventListener('click', () => selectPackage(pkg));
    
    selectCell.appendChild(selectButton);
    selectRow.appendChild(selectCell);
  });
  
  table.appendChild(selectRow);
  comparisonView.appendChild(table);
}

// Handle package selection
function selectPackage(pkg) {
  selectedPackage = pkg;
  
  // Update UI to show selection
  if (viewMode === 'card') {
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
      if (card.dataset.id === pkg.id) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  } else {
    const selectButtons = document.querySelectorAll('.comparison-select-button');
    selectButtons.forEach(button => {
      if (button.dataset.id === pkg.id) {
        button.classList.add('selected');
        button.textContent = 'Selected';
      } else {
        button.classList.remove('selected');
        button.textContent = 'Select Package';
      }
    });
  }
  
  // Initialize add-ons
  initializeAddOns();
  
  // Move to next step
  goToNextStep();
}

// Set the view mode (card or comparison)
function setViewMode(mode) {
  viewMode = mode;
  
  const cardViewBtn = document.getElementById('card-view-btn');
  const comparisonViewBtn = document.getElementById('comparison-view-btn');
  const packageCardsView = document.getElementById('package-cards-view');
  const packageComparisonView = document.getElementById('package-comparison-view');
  
  if (mode === 'card') {
    cardViewBtn.classList.add('active');
    comparisonViewBtn.classList.remove('active');
    packageCardsView.style.display = 'grid';
    packageComparisonView.style.display = 'none';
  } else {
    cardViewBtn.classList.remove('active');
    comparisonViewBtn.classList.add('active');
    packageCardsView.style.display = 'none';
    packageComparisonView.style.display = 'block';
  }
}

// Initialize the add-ons section
function initializeAddOns() {
  // Update selected package display
  document.getElementById('selected-package-name').textContent = `${selectedPackage.name} Package`;
  document.getElementById('selected-package-price').textContent = `$${selectedPackage.price}`;
  
  const featuresContainer = document.getElementById('selected-package-features');
  featuresContainer.innerHTML = '';
  
  selectedPackage.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';
    
    const icon = document.createElement('span');
    icon.className = 'feature-icon';
    icon.textContent = '✓';
    
    const text = document.createElement('span');
    text.className = 'feature-text';
    text.textContent = feature;
    
    featureItem.appendChild(icon);
    featureItem.appendChild(text);
    featuresContainer.appendChild(featureItem);
  });
  
  // Update price displays
  document.getElementById('base-package-price').textContent = `$${selectedPackage.price}`;
  updateTotalPrice();
  
  // Initialize add-ons categories and grid
  initializeAddOnCategories();
}

// Initialize add-on categories
function initializeAddOnCategories() {
  const categoryTabs = document.getElementById('category-tabs');
  categoryTabs.innerHTML = '';
  
  // Get add-ons for the selected service type
  const addOns = packageData.addOns[selectedServiceType.id];
  
  // Get unique categories
  const categories = [...new Set(addOns.map(addon => addon.category))];
  
  // Create category tabs
  categories.forEach((category, index) => {
    const tab = document.createElement('div');
    tab.className = 'category-tab';
    if (index === 0) tab.classList.add('active');
    tab.dataset.category = category;
    tab.textContent = category;
    
    tab.addEventListener('click', () => {
      // Update active tab
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter add-ons by category
      displayAddOnsByCategory(category);
    });
    
    categoryTabs.appendChild(tab);
  });
  
  // Display add-ons for the first category
  if (categories.length > 0) {
    displayAddOnsByCategory(categories[0]);
  }
}

// Display add-ons filtered by category
function displayAddOnsByCategory(category) {
  const addOnsGrid = document.getElementById('add-ons-grid');
  addOnsGrid.innerHTML = '';
  
  // Get add-ons for the selected service type
  const addOns = packageData.addOns[selectedServiceType.id];
  
  // Filter by category
  const filteredAddOns = addOns.filter(addon => addon.category === category);
  
  // Create add-on cards
  filteredAddOns.forEach(addon => {
    const card = document.createElement('div');
    card.className = 'add-on-card';
    card.dataset.id = addon.id;
    
    // Check if this add-on is already selected
    if (selectedAddOns.some(a => a.id === addon.id)) {
      card.classList.add('selected');
    }
    
    const header = document.createElement('div');
    header.className = 'add-on-header';
    
    const name = document.createElement('div');
    name.className = 'add-on-name';
    name.textContent = addon.name;
    
    const price = document.createElement('div');
    price.className = 'add-on-price';
    price.textContent = `$${addon.price}`;
    
    header.appendChild(name);
    header.appendChild(price);
    
    const description = document.createElement('div');
    description.className = 'add-on-description';
    description.textContent = addon.description;
    
    const button = document.createElement('button');
    button.className = 'add-on-button';
    
    if (selectedAddOns.some(a => a.id === addon.id)) {
      button.textContent = 'Remove';
    } else {
      button.textContent = 'Add to Package';
    }
    
    button.addEventListener('click', () => toggleAddOn(addon, card));
    
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(button);
    
    addOnsGrid.appendChild(card);
  });
}

// Toggle add-on selection
function toggleAddOn(addon, card) {
  const isSelected = selectedAddOns.some(a => a.id === addon.id);
  
  if (isSelected) {
    // Remove from selected add-ons
    selectedAddOns = selectedAddOns.filter(a => a.id !== addon.id);
    card.classList.remove('selected');
    card.querySelector('.add-on-button').textContent = 'Add to Package';
  } else {
    // Add to selected add-ons
    selectedAddOns.push(addon);
    card.classList.add('selected');
    card.querySelector('.add-on-button').textContent = 'Remove';
  }
  
  // Update selected add-ons display
  updateSelectedAddOns();
  
  // Update total price
  updateTotalPrice();
}

// Update the selected add-ons display
function updateSelectedAddOns() {
  const selectedAddOnsList = document.getElementById('selected-add-ons-list');
  selectedAddOnsList.innerHTML = '';
  
  if (selectedAddOns.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'No add-ons selected yet';
    selectedAddOnsList.appendChild(emptyMessage);
    return;
  }
  
  selectedAddOns.forEach(addon => {
    const addOnItem = document.createElement('div');
    addOnItem.className = 'selected-add-on';
    
    const addOnInfo = document.createElement('div');
    addOnInfo.className = 'add-on-info';
    
    const name = document.createElement('h4');
    name.textContent = addon.name;
    
    const description = document.createElement('p');
    description.textContent = addon.description;
    
    addOnInfo.appendChild(name);
    addOnInfo.appendChild(description);
    
    const price = document.createElement('div');
    price.className = 'add-on-price';
    price.textContent = `$${addon.price}`;
    
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-add-on';
    removeButton.textContent = '×';
    removeButton.addEventListener('click', () => {
      // Remove from selected add-ons
      selectedAddOns = selectedAddOns.filter(a => a.id !== addon.id);
      
      // Update the add-on card if it's visible
      const card = document.querySelector(`.add-on-card[data-id="${addon.id}"]`);
      if (card) {
        card.classList.remove('selected');
        card.querySelector('.add-on-button').textContent = 'Add to Package';
      }
      
      // Update displays
      updateSelectedAddOns();
      updateTotalPrice();
    });
    
    addOnItem.appendChild(addOnInfo);
    addOnItem.appendChild(price);
    addOnItem.appendChild(removeButton);
    
    selectedAddOnsList.appendChild(addOnItem);
  });
}

// Update the total price display
function updateTotalPrice() {
  const basePrice = selectedPackage ? selectedPackage.price : 0;
  const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const total = basePrice + addOnsTotal;
  
  document.getElementById('base-package-price').textContent = `$${basePrice}`;
  document.getElementById('add-ons-price').textContent = `$${addOnsTotal}`;
  document.getElementById('total-price').textContent = `$${total}`;
}

// Initialize the summary section
function initializeSummary() {
  // Event details
  document.getElementById('summary-event-type').textContent = selectedEventType.name;
  document.getElementById('summary-service-type').textContent = selectedServiceType.name;
  
  // Package details
  document.getElementById('summary-package-name').textContent = selectedPackage.name;
  document.getElementById('summary-package-price').textContent = `$${selectedPackage.price}`;
  
  const featuresContainer = document.getElementById('summary-package-features');
  featuresContainer.innerHTML = '';
  
  selectedPackage.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'summary-feature';
    
    const icon = document.createElement('span');
    icon.className = 'summary-feature-icon';
    icon.textContent = '✓';
    
    featureItem.appendChild(icon);
    featureItem.appendChild(document.createTextNode(' ' + feature));
    
    featuresContainer.appendChild(featureItem);
  });
  
  // Add-ons
  const addOnsContainer = document.getElementById('summary-add-ons');
  addOnsContainer.innerHTML = '';
  
  if (selectedAddOns.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'No add-ons selected';
    addOnsContainer.appendChild(emptyMessage);
  } else {
    selectedAddOns.forEach(addon => {
      const addOnItem = document.createElement('div');
      addOnItem.className = 'summary-add-on';
      
      const name = document.createElement('span');
      name.textContent = addon.name;
      
      const price = document.createElement('span');
      price.textContent = `$${addon.price}`;
      
      addOnItem.appendChild(name);
      addOnItem.appendChild(price);
      
      addOnsContainer.appendChild(addOnItem);
    });
  }
  
  // Price summary
  const basePrice = selectedPackage.price;
  const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const total = basePrice + addOnsTotal;
  
  document.getElementById('summary-base-price').textContent = `$${basePrice}`;
  document.getElementById('summary-addons-price').textContent = `$${addOnsTotal}`;
  document.getElementById('summary-total-price').textContent = `$${total}`;
}

// Set up form submission
function setupFormSubmission() {
  const bookingForm = document.getElementById('booking-form');
  
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather Form Data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventDate = document.getElementById('event-date').value;
    const message = document.getElementById('message').value;

    // Gather Package Details
    let emailBody = "New Booking Request:\n\n";

    emailBody += `Customer Name: ${name}\n`;
    emailBody += `Customer Email: ${email}\n`;
    emailBody += `Customer Phone: ${phone}\n`;
    emailBody += `Event Date: ${eventDate}\n`;
    emailBody += `Additional Information: ${message}\n\n`;

    emailBody += "--- Package Details ---\n";

    if (selectedEventType && selectedEventType.name) {
      emailBody += `Event Type: ${selectedEventType.name}\n`;
    } else {
      emailBody += "Event Type: Not selected\n";
    }

    if (selectedServiceType && selectedServiceType.name) {
      emailBody += `Service Type: ${selectedServiceType.name}\n`;
    } else {
      emailBody += "Service Type: Not selected\n";
    }

    let basePrice = 0;
    if (selectedPackage && selectedPackage.name && typeof selectedPackage.price !== 'undefined') {
      basePrice = selectedPackage.price;
      emailBody += `Base Package: ${selectedPackage.name} - $${selectedPackage.price}\n`;
      if (selectedPackage.features && Array.isArray(selectedPackage.features)) {
        emailBody += "Features:\n";
        selectedPackage.features.forEach(feature => {
          emailBody += `  - ${feature}\n`;
        });
      }
    } else {
      emailBody += "Base Package: Not selected\n";
    }
    emailBody += "\n";

    emailBody += "Add-Ons:\n";
    let addOnsTotalPrice = 0;
    if (selectedAddOns && Array.isArray(selectedAddOns) && selectedAddOns.length > 0) {
      selectedAddOns.forEach(addon => {
        if (addon && addon.name && typeof addon.price !== 'undefined') {
          emailBody += `  - ${addon.name} - $${addon.price}\n`;
          addOnsTotalPrice += addon.price;
        }
      });
    } else {
      emailBody += "  No add-ons selected.\n";
    }
    emailBody += "\n";

    emailBody += "--- Total Price ---\n";
    const totalPrice = basePrice + addOnsTotalPrice;
    emailBody += `Total: $${totalPrice}\n\n`;

    // Construct mailto link
    const recipientEmail = "getmonieproductions@gmail.com";
    const subject = "New Package Booking Request";
    const encodedBody = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;

    // Open mailto link
    window.location.href = mailtoLink;
    
    // In a real application, you would send this data to a server
    alert('Thank you for your booking request! We will contact you shortly to confirm your package details.');
    
    // Reset the form
    bookingForm.reset();
  });
}

// Navigation functions
function goToNextStep() {
  // Hide current step
  document.getElementById(`step-${currentStep}`).style.display = 'none';
  
  // Update progress bar
  document.querySelector(`.step[data-text="${getStepName(currentStep)}"]`).classList.remove('active');
  
  // Increment step
  currentStep++;
  
  // Update progress bar for new step
  document.querySelector(`.step[data-text="${getStepName(currentStep)}"]`).classList.add('active');
  
  // Show new step
  document.getElementById(`step-${currentStep}`).style.display = 'block';
  
  // If moving to summary step, initialize it
  if (currentStep === 5) {
    initializeSummary();
  }
}

function goToPreviousStep() {
  // Hide current step
  document.getElementById(`step-${currentStep}`).style.display = 'none';
  
  // Update progress bar
  document.querySelector(`.step[data-text="${getStepName(currentStep)}"]`).classList.remove('active');
  
  // Decrement step
  currentStep--;
  
  // Update progress bar for new step
  document.querySelector(`.step[data-text="${getStepName(currentStep)}"]`).classList.add('active');
  
  // Show new step
  document.getElementById(`step-${currentStep}`).style.display = 'block';
}

// Helper function to get step name
function getStepName(step) {
  switch (step) {
    case 1: return 'Event Type';
    case 2: return 'Service Type';
    case 3: return 'Base Package';
    case 4: return 'Add-Ons';
    case 5: return 'Summary';
    default: return '';
  }
}
