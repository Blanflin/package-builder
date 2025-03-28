// Package data with all event types, service types, base packages, and add-ons
// MODIFIED Photography package features based on user request
const packageData = {
  eventTypes: [
    {
      id: "wedding",
      name: "Wedding",
      description: "Capture every moment of your special day",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "small-event",
      name: "Small Event",
      description: "Perfect for birthdays, parties, and gatherings",
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "production",
      name: "Production",
      description: "Commercial, product, and promotional content",
      imageUrl: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "portrait",
      name: "Portrait Session",
      description: "Individual or family portrait photography",
      imageUrl: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ],
  serviceTypes: [
    {
      id: "photography",
      name: "Photography",
      description: "Professional photography services",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        id: "basic",
        name: "Essential",
        price: 1499,
        description: "Perfect for intimate weddings with essential coverage",
        features: [
          "6 hours of coverage",
          "1 professional photographer",
          "Online gallery with 300+ edited photos",
          "Digital download of all images",
          "Engagement photo session (1 hour)",
          "Pre-wedding consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 2499,
        description: "Our most popular package for comprehensive wedding coverage",
        features: [
          "8 hours of coverage",
          "2 professional photographers",
          "Online gallery with 500+ edited photos",
          "Digital download of all images",
          "Engagement photo session (2 hours)",
          "Pre-wedding consultation",
          "Wedding day timeline planning",
          "Custom USB in wooden box with prints"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 3499,
        description: "Complete coverage for your perfect day with premium services",
        features: [
          "10 hours of coverage",
          "2 professional photographers",
          "Online gallery with 700+ edited photos",
          "Digital download of all images",
          "Engagement photo session (3 hours)",
          "Bridal or boudoir session (2 hours)",
          "Pre-wedding consultation",
          "Wedding day timeline planning",
          "Custom designed wedding album (40 pages)",
          "Custom USB in wooden box with prints",
          "20 thank you cards with envelopes"
        ]
      }
    ],
    "wedding-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 1699,
        description: "Capture the key moments of your special day",
        features: [
          "6 hours of coverage",
          "1 professional videographer",
          "5-7 minute highlight film",
          "Digital delivery of final video",
          "Professional audio recording of ceremony",
          "Pre-wedding consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 2699,
        description: "Comprehensive video coverage of your wedding day",
        features: [
          "8 hours of coverage",
          "2 professional videographers",
          "7-10 minute highlight film",
          "30-minute feature film",
          "Digital delivery of all videos",
          "Professional audio recording of ceremony and speeches",
          "Drone footage (weather permitting)",
          "Pre-wedding consultation",
          "Custom USB in wooden box"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 3699,
        description: "Premium video coverage with cinematic storytelling",
        features: [
          "10 hours of coverage",
          "2 professional videographers",
          "10-15 minute highlight film",
          "60-90 minute feature film",
          "Digital delivery of all videos",
          "Professional audio recording of ceremony and speeches",
          "Drone footage (weather permitting)",
          "Same-day edit (3-5 minute preview)",
          "Pre-wedding consultation",
          "Custom USB in wooden box",
          "Raw footage of entire day"
        ]
      }
    ],
    "wedding-both": [
      {
        id: "basic",
        name: "Essential",
        price: 2899,
        description: "Essential photo and video coverage for your wedding day",
        features: [
          "6 hours of coverage",
          "1 professional photographer",
          "1 professional videographer",
          "Online gallery with 300+ edited photos",
          "5-7 minute highlight film",
          "Digital download of all content",
          "Engagement photo session (1 hour)",
          "Professional audio recording of ceremony",
          "Pre-wedding consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 4699,
        description: "Comprehensive photo and video coverage for your special day",
        features: [
          "8 hours of coverage",
          "2 professional photographers",
          "2 professional videographers",
          "Online gallery with 500+ edited photos",
          "7-10 minute highlight film",
          "30-minute feature film",
          "Digital download of all content",
          "Engagement photo session (2 hours)",
          "Professional audio recording of ceremony and speeches",
          "Drone footage (weather permitting)",
          "Pre-wedding consultation",
          "Wedding day timeline planning",
          "Custom USB in wooden box with prints"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 6499,
        description: "Premium photo and video coverage with luxury deliverables",
        features: [
          "10 hours of coverage",
          "2 professional photographers",
          "2 professional videographers",
          "Online gallery with 700+ edited photos",
          "10-15 minute highlight film",
          "60-90 minute feature film",
          "Digital download of all content",
          "Engagement photo session (3 hours)",
          "Bridal or boudoir session (2 hours)",
          "Professional audio recording of ceremony and speeches",
          "Drone footage (weather permitting)",
          "Same-day edit (3-5 minute preview)",
          "Pre-wedding consultation",
          "Wedding day timeline planning",
          "Custom designed wedding album (40 pages)",
          "Custom USB in wooden box with prints",
          "20 thank you cards with envelopes"
        ]
      }
    ],
    "small-event-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 499,
        description: "Basic coverage for small events and gatherings",
        features: [
          "2 hours of coverage",
          "1 professional photographer",
          "Online gallery with 100+ edited photos",
          "Digital download of all images",
          "Pre-event consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 799,
        description: "Comprehensive coverage for your special event",
        features: [
          "4 hours of coverage",
          "1 professional photographer",
          "Online gallery with 200+ edited photos",
          "Digital download of all images",
          "Pre-event consultation",
          "Event timeline planning",
          "10 professional prints (5x7)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1199,
        description: "Premium coverage for important celebrations",
        features: [
          "6 hours of coverage",
          "1 professional photographer",
          "Online gallery with 300+ edited photos",
          "Digital download of all images",
          "Pre-event consultation",
          "Event timeline planning",
          "Custom photo album (20 pages)",
          "20 professional prints (5x7)"
        ]
      }
    ],
    "small-event-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 599,
        description: "Basic video coverage for small events",
        features: [
          "2 hours of coverage",
          "1 professional videographer",
          "3-5 minute highlight video",
          "Digital delivery of final video",
          "Pre-event consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 899,
        description: "Comprehensive video coverage for special events",
        features: [
          "4 hours of coverage",
          "1 professional videographer",
          "5-7 minute highlight video",
          "15-20 minute feature video",
          "Digital delivery of all videos",
          "Professional audio recording",
          "Pre-event consultation"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1299,
        description: "Premium video coverage for important celebrations",
        features: [
          "6 hours of coverage",
          "1 professional videographer",
          "7-10 minute highlight video",
          "25-30 minute feature video",
          "Digital delivery of all videos",
          "Professional audio recording",
          "Drone footage (weather permitting)",
          "Pre-event consultation",
          "Custom USB with all footage"
        ]
      }
    ],
    "small-event-both": [
      {
        id: "basic",
        name: "Essential",
        price: 999,
        description: "Basic photo and video coverage for small events",
        features: [
          "2 hours of coverage",
          "1 professional photographer",
          "1 professional videographer",
          "Online gallery with 100+ edited photos",
          "3-5 minute highlight video",
          "Digital delivery of all content",
          "Pre-event consultation"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 1599,
        description: "Comprehensive photo and video coverage for special events",
        features: [
          "4 hours of coverage",
          "1 professional photographer",
          "1 professional videographer",
          "Online gallery with 200+ edited photos",
          "5-7 minute highlight video",
          "15-20 minute feature video",
          "Digital delivery of all content",
          "Professional audio recording",
          "Pre-event consultation",
          "Event timeline planning",
          "10 professional prints (5x7)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 2299,
        description: "Premium photo and video coverage for important celebrations",
        features: [
          "6 hours of coverage",
          "1 professional photographer",
          "1 professional videographer",
          "Online gallery with 300+ edited photos",
          "7-10 minute highlight video",
          "25-30 minute feature video",
          "Digital delivery of all content",
          "Professional audio recording",
          "Drone footage (weather permitting)",
          "Pre-event consultation",
          "Event timeline planning",
          "Custom photo album (20 pages)",
          "20 professional prints (5x7)",
          "Custom USB with all footage"
        ]
      }
    ],
    "production-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 799,
        description: "Basic product or promotional photography",
        features: [
          "3 hours of studio time",
          "1 professional photographer",
          "Up to 10 final edited images",
          "Digital delivery of all images",
          "Basic retouching",
          "Pre-shoot consultation"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 1299,
        description: "Comprehensive product or promotional photography",
        features: [
          "5 hours of studio time",
          "1 professional photographer",
          "Up to 20 final edited images",
          "Digital delivery of all images",
          "Advanced retouching",
          "Pre-shoot consultation",
          "Multiple setups",
          "Commercial usage rights"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 1999,
        description: "Premium commercial photography for businesses",
        features: [
          "Full day studio time (8 hours)",
          "1 professional photographer",
          "1 assistant",
          "Up to 30 final edited images",
          "Digital delivery of all images",
          "Premium retouching",
          "Pre-shoot consultation",
          "Multiple setups",
          "Commercial usage rights",
          "Rush delivery option",
          "Raw files included"
        ]
      }
    ],
    "production-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 999,
        description: "Basic commercial video production",
        features: [
          "4 hours of filming",
          "1 professional videographer",
          "1-2 minute final video",
          "2 rounds of revisions",
          "Digital delivery of final video",
          "Basic color grading",
          "Pre-production consultation"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 1799,
        description: "Comprehensive commercial video production",
        features: [
          "6 hours of filming",
          "1 professional videographer",
          "1 production assistant",
          "2-3 minute final video",
          "3 rounds of revisions",
          "Digital delivery of final video",
          "Professional color grading",
          "Basic motion graphics",
          "Pre-production consultation",
          "Script assistance",
          "Commercial usage rights"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 2999,
        description: "Premium commercial video production for businesses",
        features: [
          "Full day filming (8 hours)",
          "1 professional videographer",
          "1 production assistant",
          "1 audio technician",
          "3-5 minute final video",
          "Unlimited rounds of revisions",
          "Digital delivery of final video",
          "Premium color grading",
          "Custom motion graphics",
          "Professional voiceover",
          "Licensed music",
          "Pre-production consultation",
          "Script development",
          "Commercial usage rights",
          "Rush delivery option"
        ]
      }
    ],
    "production-both": [
      {
        id: "basic",
        name: "Essential",
        price: 1599,
        description: "Basic commercial photo and video production",
        features: [
          "4 hours of studio/filming time",
          "1 professional photographer",
          "1 professional videographer",
          "Up to 10 final edited images",
          "1-2 minute final video",
          "2 rounds of revisions",
          "Digital delivery of all content",
          "Basic retouching/color grading",
          "Pre-production consultation"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 2799,
        description: "Comprehensive commercial photo and video production",
        features: [
          "6 hours of studio/filming time",
          "1 professional photographer",
          "1 professional videographer",
          "1 production assistant",
          "Up to 20 final edited images",
          "2-3 minute final video",
          "3 rounds of revisions",
          "Digital delivery of all content",
          "Advanced retouching/color grading",
          "Basic motion graphics",
          "Pre-production consultation",
          "Script assistance",
          "Multiple setups",
          "Commercial usage rights"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 4499,
        description: "Premium commercial photo and video production for businesses",
        features: [
          "Full day studio/filming time (8 hours)",
          "1 professional photographer",
          "1 professional videographer",
          "2 production assistants",
          "1 audio technician",
          "Up to 30 final edited images",
          "3-5 minute final video",
          "Unlimited rounds of revisions",
          "Digital delivery of all content",
          "Premium retouching/color grading",
          "Custom motion graphics",
          "Professional voiceover",
          "Licensed music",
          "Pre-production consultation",
          "Script development",
          "Multiple setups",
          "Commercial usage rights",
          "Rush delivery option",
          "Raw files included"
        ]
      }
    ],
    "portrait-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 299,
        description: "Basic portrait session for individuals or families",
        features: [
          "1 hour session at one location",
          "1 outfit change",
          "Online gallery with 20+ edited photos",
          "Digital download of 10 images",
          "Print release for purchased images"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 499,
        description: "Comprehensive portrait session with more options",
        features: [
          "2 hour session at one location",
          "2-3 outfit changes",
          "Online gallery with 40+ edited photos",
          "Digital download of all images",
          "Print release for all images",
          "10 professional prints (5x7)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 799,
        description: "Premium portrait experience with luxury products",
        features: [
          "3 hour session at two locations",
          "Unlimited outfit changes",
          "Online gallery with 60+ edited photos",
          "Digital download of all images",
          "Print release for all images",
          "Professional hair and makeup",
          "Custom photo album (20 pages)",
          "20 professional prints (5x7)",
          "1 canvas print (16x20)"
        ]
      }
    ],
    "portrait-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 399,
        description: "Basic video portrait session",
        features: [
          "1 hour session at one location",
          "1-2 minute highlight video",
          "Digital delivery of final video",
          "Basic color grading",
          "Licensed music"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 599,
        description: "Comprehensive video portrait session",
        features: [
          "2 hour session at one location",
          "2-3 minute highlight video",
          "Digital delivery of final video",
          "Professional color grading",
          "Licensed music",
          "Basic interview footage (optional)",
          "1 round of revisions"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 899,
        description: "Premium video portrait experience",
        features: [
          "3 hour session at two locations",
          "3-5 minute cinematic video",
          "Digital delivery of final video",
          "Premium color grading",
          "Custom licensed music",
          "Professional interview footage (optional)",
          "Drone footage (weather permitting)",
          "2 rounds of revisions",
          "Custom USB with final video"
        ]
      }
    ],
    "portrait-both": [
      {
        id: "basic",
        name: "Essential",
        price: 599,
        description: "Basic photo and video portrait session",
        features: [
          "1 hour session at one location",
          "1 outfit change",
          "Online gallery with 20+ edited photos",
          "1-2 minute highlight video",
          "Digital download of 10 images",
          "Digital delivery of final video",
          "Print release for purchased images",
          "Basic color grading",
          "Licensed music"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 899,
        description: "Comprehensive photo and video portrait session",
        features: [
          "2 hour session at one location",
          "2-3 outfit changes",
          "Online gallery with 40+ edited photos",
          "2-3 minute highlight video",
          "Digital download of all images",
          "Digital delivery of final video",
          "Print release for all images",
          "Professional color grading",
          "Licensed music",
          "Basic interview footage (optional)",
          "10 professional prints (5x7)",
          "1 round of revisions"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1499,
        description: "Premium photo and video portrait experience",
        features: [
          "3 hour session at two locations",
          "Unlimited outfit changes",
          "Online gallery with 60+ edited photos",
          "3-5 minute cinematic video",
          "Digital download of all images",
          "Digital delivery of final video",
          "Print release for all images",
          "Professional hair and makeup",
          "Premium color grading",
          "Custom licensed music",
          "Professional interview footage (optional)",
          "Drone footage (weather permitting)",
          "Custom photo album (20 pages)",
          "20 professional prints (5x7)",
          "1 canvas print (16x20)",
          "2 rounds of revisions",
          "Custom USB with all content"
        ]
      }
    ]
  },
  addOns: {
    photography: [
      {
        id: "extra-time-photo",
        name: "Extra Hour of Coverage",
        price: 199,
        description: "Add an additional hour of photography coverage",
        category: "Time"
      },
      {
        id: "second-photographer",
        name: "Second Photographer",
        price: 399,
        description: "Add a second professional photographer for your event",
        category: "Personnel"
      },
      {
        id: "engagement-session",
        name: "Engagement Session",
        price: 299,
        description: "1-hour engagement photo session prior to your wedding day",
        category: "Sessions"
      },
      {
        id: "bridal-session",
        name: "Bridal Session",
        price: 299,
        description: "1-hour bridal portrait session prior to your wedding day",
        category: "Sessions"
      },
      {
        id: "boudoir-session",
        name: "Boudoir Session",
        price: 349,
        description: "1-hour private boudoir photo session",
        category: "Sessions"
      },
      {
        id: "photo-album",
        name: "Custom Photo Album",
        price: 499,
        description: "Premium 40-page custom designed photo album",
        category: "Products"
      },
      {
        id: "mini-album",
        name: "Mini Photo Album",
        price: 299,
        description: "20-page custom designed photo album",
        category: "Products"
      },
      {
        id: "parent-album",
        name: "Parent Albums (Set of 2)",
        price: 399,
        description: "Two duplicate 20-page albums for parents",
        category: "Products"
      },
      {
        id: "canvas-print",
        name: "Canvas Print (16x20)",
        price: 199,
        description: "Gallery-quality canvas print of your favorite image",
        category: "Products"
      },
      {
        id: "prints-package",
        name: "Professional Prints Package",
        price: 249,
        description: "Set of 25 professional prints in various sizes",
        category: "Products"
      },
      {
        id: "thank-you-cards",
        name: "Custom Thank You Cards",
        price: 199,
        description: "Set of 50 custom thank you cards with envelopes",
        category: "Products"
      },
      {
        id: "digital-images",
        name: "Additional Digital Images",
        price: 149,
        description: "10 additional fully edited digital images",
        category: "Digital"
      },
      {
        id: "rush-delivery",
        name: "Rush Delivery",
        price: 199,
        description: "Expedited delivery of your photos within 1 week",
        category: "Services"
      },
      {
        id: "hair-makeup",
        name: "Professional Hair & Makeup",
        price: 249,
        description: "Professional hair styling and makeup application",
        category: "Services"
      }
    ],
    videography: [
      {
        id: "extra-time-video",
        name: "Extra Hour of Coverage",
        price: 249,
        description: "Add an additional hour of videography coverage",
        category: "Time"
      },
      {
        id: "second-videographer",
        name: "Second Videographer",
        price: 499,
        description: "Add a second professional videographer for your event",
        category: "Personnel"
      },
      {
        id: "drone-footage",
        name: "Drone Aerial Footage",
        price: 299,
        description: "Cinematic aerial footage of your venue and event (weather permitting)",
        category: "Equipment"
      },
      {
        id: "raw-footage",
        name: "Raw Footage",
        price: 299,
        description: "All unedited footage from your event",
        category: "Digital"
      },
      {
        id: "extended-highlight",
        name: "Extended Highlight Film",
        price: 349,
        description: "Extend your highlight film by 5-7 minutes",
        category: "Digital"
      },
      {
        id: "documentary-edit",
        name: "Documentary Edit",
        price: 499,
        description: "Full-length documentary style edit of your entire event",
        category: "Digital"
      },
      {
        id: "same-day-edit",
        name: "Same-Day Edit",
        price: 599,
        description: "3-5 minute highlight film delivered same day for reception viewing",
        category: "Services"
      },
      {
        id: "social-media-teaser",
        name: "Social Media Teaser",
        price: 199,
        description: "60-second teaser video for social media sharing",
        category: "Digital"
      },
      {
        id: "custom-music-licensing",
        name: "Custom Music Licensing",
        price: 199,
        description: "License a specific song of your choice for your video",
        category: "Services"
      },
      {
        id: "video-booth",
        name: "Video Guest Book",
        price: 399,
        description: "Video booth setup for guests to leave messages",
        category: "Equipment"
      },
      {
        id: "livestream",
        name: "Event Livestreaming",
        price: 499,
        description: "Professional livestream of your event for remote guests",
        category: "Services"
      },
      {
        id: "additional-revision",
        name: "Additional Revision Round",
        price: 149,
        description: "Additional round of revisions beyond package inclusion",
        category: "Services"
      },
      {
        id: "video-rush-delivery",
        name: "Rush Delivery",
        price: 299,
        description: "Expedited delivery of your videos within 2 weeks",
        category: "Services"
      },
      {
        id: "usb-delivery",
        name: "Custom USB Delivery",
        price: 149,
        description: "Custom USB in wooden box with all your videos",
        category: "Products"
      }
    ],
    both: [
      {
        id: "extra-time-both",
        name: "Extra Hour of Coverage",
        price: 349,
        description: "Add an additional hour of photo & video coverage",
        category: "Time"
      },
      {
        id: "additional-photographer",
        name: "Additional Photographer",
        price: 399,
        description: "Add an additional professional photographer",
        category: "Personnel"
      },
      {
        id: "additional-videographer",
        name: "Additional Videographer",
        price: 499,
        description: "Add an additional professional videographer",
        category: "Personnel"
      },
      {
        id: "engagement-photo-video",
        name: "Engagement Photo & Video Session",
        price: 599,
        description: "2-hour engagement session with photo and video coverage",
        category: "Sessions"
      },
      {
        id: "complete-package",
        name: "Complete Digital Package",
        price: 799,
        description: "All digital photos and videos with extended edits and raw files",
        category: "Digital"
      },
      {
        id: "premium-album-video",
        name: "Premium Album & Video Box Set",
        price: 899,
        description: "Luxury 40-page album and custom video presentation in gift box",
        category: "Products"
      },
      {
        id: "destination-travel",
        name: "Destination Travel Fee",
        price: 999,
        description: "Coverage for destinations requiring overnight travel",
        category: "Services"
      },
      {
        id: "rehearsal-coverage",
        name: "Rehearsal Dinner Coverage",
        price: 699,
        description: "2 hours of photo and video coverage of your rehearsal dinner",
        category: "Services"
      },
      {
        id: "photo-video-booth",
        name: "Photo & Video Booth",
        price: 799,
        description: "Interactive booth with instant prints and video messages",
        category: "Equipment"
      },
      {
        id: "complete-rush",
        name: "Complete Rush Delivery",
        price: 499,
        description: "Expedited delivery of all photo and video content",
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
  
  packageData.serviceTypes.forEach(serviceType => {
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
