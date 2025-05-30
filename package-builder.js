// Package data with all event types, service types, base packages, and add-ons
// MODIFIED Photography package features based on user request
const packageData = {
  eventTypes: [
    {
      id: "wedding",
      name: "Wedding",
      description: "Capture every moment of your special day",
      imageUrl: "https://unsplash.com/photos/464ps_nOflw/download?w=1350&q=80"
    },
    {
      id: "small-event",
      name: "Small Event",
      description: "Perfect for birthdays, parties, and gatherings",
      imageUrl: "https://unsplash.com/photos/Iy6sv_rxZHM/download?w=1350&q=80"
    },
    {
      id: "production",
      name: "Production",
      description: "Commercial, product, and promotional content",
      imageUrl: "https://unsplash.com/photos/aS4Duj2j7r4/download?w=1350&q=80"
    },
    {
      id: "portrait",
      name: "Portrait Session",
      description: "Individual or family portrait photography",
      imageUrl: "https://unsplash.com/photos/EJNwK3IH6GM/download?w=1350&q=80"
    },
    {
      id: "sports",
      name: "Sports",
      description: "Action-packed sports photography and print packages.",
      imageUrl: "https://unsplash.com/photos/xxv_RmEKhT0/download?w=1350&q=80"
    }
  ],
  serviceTypes: [
    {
      id: "photography",
      name: "Photography",
      description: "Professional photography services",
      imageUrl: "https://unsplash.com/photos/qWYvQMIJyfE/download?w=1350&q=80"
    },
    {
      id: "videography",
      name: "Videography",
      description: "Professional videography services",
      imageUrl: "https://unsplash.com/photos/kbd1oAf-9Ms/download?w=1350&q=80"
    },
    {
      id: "both",
      name: "Photography & Videography",
      description: "Combined professional services",
      imageUrl: "https://unsplash.com/photos/Z0KPxMRTxp4/download?w=1350&q=80"
    }
  ],
  packages: {
  "sports-photography": [
    {
      id: "value", name: "VALUE", price: 65, retainer: 0, description: "Generous print collection for sports. Edits can take 2 wks to a month to finish in total.",
      features: ["2 - 8x10", "4 - 5x7", "4 - 4x5", "24 - Wallets", "Online Access", "All packages include 1 - 8x10 Team Composite", "Edits can take 2 wks to a month to finish in total."]
    },
    {
      id: "a_print", name: "A", price: 50, retainer: 0, description: "Good selection of sports prints. Edits can take 2 wks to a month to finish in total.",
      features: ["1 - 8x10", "2 - 5x7", "2 - 4x5", "16 - Wallets", "Online Access", "All packages include 1 - 8x10 Team Composite", "Edits can take 2 wks to a month to finish in total."]
    },
    {
      id: "b_print", name: "B", price: 35, retainer: 0, description: "Basic sports print selection. Edits can take 2 wks to a month to finish in total.",
      features: ["1 - 8x10", "2 - 5x7", "12 - Wallets", "Online Access", "All packages include 1 - 8x10 Team Composite", "Edits can take 2 wks to a month to finish in total."]
    },
    {
      id: "c_print", name: "C", price: 25, retainer: 0, description: "Entry-level sports prints. Edits can take 2 wks to a month to finish in total.",
      features: ["1 - 5x7", "2 - 4x5", "8 - Wallets", "Online Access", "All packages include 1 - 8x10 Team Composite", "Edits can take 2 wks to a month to finish in total."]
    },
    {
      id: "no_print_sports", name: "NO PRINT", price: 20, retainer: 0, description: "Digital only access for sports photos. Edits can take 2 wks to a month to finish in total.",
      features: ["Digital Only", "Online Access", "All packages include 1 - 8x10 Team Composite", "Edits can take 2 wks to a month to finish in total."]
    }
  ],
  "small-event-photography": [
    {
      id: "a_1hr", name: "A (1HR PKG)", price: 150, retainer: 75, description: "1 hour portrait session.",
      features: ["Up to 1 Hr coverage", "1 Location", "1 Outfit Change", "(Minimum of) 5 Detailed Photos", "20 candids with access to cloud folder", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    },
    {
      id: "b_2hr", name: "B (2HR PKG)", price: 250, retainer: 125, description: "2 hour portrait session.",
      features: ["Up to 2 Hr coverage", "2 Locations", "2 Outfit Changes", "(Minimum of) 10 Detailed Photos", "all candids with access to cloud folder", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    },
    {
      id: "c_3hr", name: "C (3HR PKG)", price: 325, retainer: 175, description: "3 hour portrait session with highlight reel.",
      features: ["Up to 3 Hr coverage", "3 Locations", "3 Outfit Changes", "(Minimum of) 15 Detailed Photos", "all candids with access to cloud folder", "highlight reel", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "portrait-photography": [
    {
      id: "a_1hr", name: "A (1HR PKG)", price: 150, retainer: 75, description: "1 hour portrait session.",
      features: ["Up to 1 Hr coverage", "1 Location", "1 Outfit Change", "(Minimum of) 5 Detailed Photos", "20 candids with access to cloud folder", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    },
    {
      id: "b_2hr", name: "B (2HR PKG)", price: 250, retainer: 125, description: "2 hour portrait session.",
      features: ["Up to 2 Hr coverage", "2 Locations", "2 Outfit Changes", "(Minimum of) 10 Detailed Photos", "all candids with access to cloud folder", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    },
    {
      id: "c_3hr", name: "C (3HR PKG)", price: 325, retainer: 175, description: "3 hour portrait session with highlight reel.",
      features: ["Up to 3 Hr coverage", "3 Locations", "3 Outfit Changes", "(Minimum of) 15 Detailed Photos", "all candids with access to cloud folder", "highlight reel", "Edits can take 2 wks or more.", "Additional photos may be purchased: $10/standard edits, $20/high quality edits.", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "wedding-photography": [
    {
      id: "wedding_photo_a", name: "A", price: 500, retainer: 250, description: "Essential wedding photography for ceremony OR reception.",
      features: ["2 Hr coverage", "Ceremony OR Reception", "Consultation", "10 Detailed Edits", "20 Candid Photos", "Deposits are due at time of booking to secure slot and are non-refundable.", "A 24hr notice is required for rescheduling or will result in deposit forfeiture."]
    },
    {
      id: "wedding_photo_b", name: "B", price: 750, retainer: 375, description: "Comprehensive wedding photography for ceremony & reception.",
      features: ["4 Hr coverage", "Ceremony & Reception", "Consultation", "20 Detailed Edits", "Digital access to all photos taken", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "wedding_photo_d", name: "D", price: 900, retainer: 400, description: "Extensive wedding photography with bonus 3D photo.",
      features: ["8 Hr coverage", "Ceremony & Reception", "Consultation", "30 Detailed Edits", "Bonus 3D photo", "Digital access to all photos taken", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "wedding-videography": [
    {
      id: "wedding_video_a", name: "A", price: 300, retainer: 150, description: "Basic wedding videography.",
      features: ["1 Hr coverage", "1 location", "Consultation", "1 Camera Man", "1-2 Min Highlight Video", "Edits can take 2 wks to a month to finish in total.", "Deposits are due at time of booking to secure slot and are non-refundable.", "A 24hr notice is required for rescheduling or will result in deposit forfeiture."]
    },
    {
      id: "wedding_video_b", name: "B", price: 800, retainer: 400, description: "Standard wedding videography with drone.",
      features: ["3 Hr coverage", "2 locations", "Consultation", "2 Cameras", "2 Camera Men", "Drone Footage", "5 min Highlight Video", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "wedding_video_d", name: "D", price: 1500, retainer: 600, description: "Extended wedding videography.",
      features: ["6+ (up to 8) Hr coverage", "multiple locations as needed", "Consultation", "3 Cameras", "2-3 Camera Men", "Drone Footage", "10-15 min Video", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "wedding-both": [
    {
      id: "bundle_a", name: "Bundle A", price: 1499, retainer: 500, description: "4hr Wedding Photo & Video.",
      features: ["4 Hr coverage", "Ceremony & Reception", "Consultation", "VID: 1 Camera, 5 min Video", "PIC: 10 Detailed Edits, 20 Candids", "Edits can take 2 wks to a month to finish in total.", "Deposits are due at time of booking to secure slot and are non-refundable."]
    },
    {
      id: "bundle_b", name: "Bundle B", price: 1999, retainer: 1000, description: "6hr Wedding Photo & Video with drone.",
      features: ["6 Hr coverage", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "VID: 2 Cameras, Drone Footage, Trailer within 48 hrs, 15 min Video", "PIC: 20 Detailed Edits, 30 Candids", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "bundle_c", name: "Bundle C", price: 3499, retainer: 1500, description: "8hr Full Coverage Wedding Photo & Video.",
      features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "VID: 2-3 Cameras, Drone Footage, Social Media Highlight reel, Next Day wedding Trailer, 20 min Video", "PIC: 30 Detailed Edits, 50 Candids"]
    },
    {
      id: "bundle_s", name: "Bundle S", price: 5000, retainer: 2000, description: "Premium Full Coverage Wedding Photo & Video with 360.",
      features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "VID: 3 Cameras, Drone Footage, Next Day wedding Trailer, Social Media Highlight reel, 360 video of full ceremony, PREMIUM Gifts! (includes headset+360 video of ceremony), 1 hr wedding Documentary", "PIC: 30 Detailed Edits, Access to ALL candids"]
    }
  ],
  "production-photography": [
    {
      id: "production_photo_a", name: "Photo Package A", price: 500, retainer: 250, description: "Essential production photography.",
      features: ["2 Hr coverage", "Consultation", "10 Detailed Edits", "20 Processed Images", "Deposits are due at time of booking to secure slot and are non-refundable.", "A 24hr notice is required for rescheduling or will result in deposit forfeiture."]
    },
    {
      id: "production_photo_b", name: "Photo Package B", price: 750, retainer: 375, description: "Comprehensive production photography.",
      features: ["4 Hr coverage", "Consultation", "20 Detailed Edits", "Digital access to all processed images", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "production_photo_d", name: "Photo Package D", price: 900, retainer: 400, description: "Extensive production photography.",
      features: ["8 Hr coverage", "Consultation", "30 Detailed Edits", "Digital access to all processed images", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "production-videography": [
    {
      id: "production_video_a", name: "Video Package A", price: 300, retainer: 150, description: "Basic production videography.",
      features: ["1 Hr coverage", "1 location", "Consultation", "1 Camera Man", "1-2 Min Highlight Video", "Edits can take 2 wks to a month to finish in total.", "Deposits are due at time of booking to secure slot and are non-refundable.", "A 24hr notice is required for rescheduling or will result in deposit forfeiture."]
    },
    {
      id: "production_video_b", name: "Video Package B", price: 800, retainer: 400, description: "Standard production videography with drone.",
      features: ["3 Hr coverage", "2 locations", "Consultation", "2 Cameras", "2 Camera Men", "Drone Footage", "5 min Highlight Video", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "production_video_d", name: "Video Package D", price: 1500, retainer: 600, description: "Extended production videography.",
      features: ["6+ (up to 8) Hr coverage", "multiple locations as needed", "Consultation", "3 Cameras", "2-3 Camera Men", "Drone Footage", "10-15 min Video", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "production-both": [
    {
      id: "production_bundle_a", name: "Bundle A", price: 1499, retainer: 500, description: "4hr Production Photo & Video.",
      features: ["4 Hr coverage", "Consultation", "VID: 1 Camera, 5 min Video", "PIC: 10 Detailed Edits, 20 Processed Images", "Edits can take 2 wks to a month to finish in total.", "Deposits are due at time of booking to secure slot and are non-refundable."]
    },
    {
      id: "production_bundle_b", name: "Bundle B", price: 1999, retainer: 1000, description: "6hr Production Photo & Video with drone.",
      features: ["6 Hr coverage", "Consultation", "VID: 2 Cameras, Drone Footage, Trailer within 48 hrs, 15 min Video", "PIC: 20 Detailed Edits, 30 Processed Images", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "production_bundle_c", name: "Bundle C", price: 3499, retainer: 1500, description: "8hr Full Coverage Production Photo & Video.",
      features: ["Full Coverage (8hrs)", "Consultation", "VID: 2-3 Cameras, Drone Footage, Social Media Highlight reel, Next Day Trailer, 20 min Video", "PIC: 30 Detailed Edits, 50 Processed Images"]
    },
    {
      id: "production_bundle_s", name: "Bundle S", price: 5000, retainer: 2000, description: "Premium Full Coverage Production P&V.",
      features: ["Full Coverage (8hrs)", "Consultation", "VID: 3 Cameras, Drone Footage, Next Day Trailer, Social Media Highlight reel, 1 hr Production Showcase Video", "PIC: 30 Detailed Edits, Access to ALL processed images"]
    }
  ],
  "small-event-videography": [
    {
      id: "sm_event_video_a", name: "A", price: 200, retainer: 100, description: "1hr small event video.",
      features: ["1 Hr coverage", "1 location", "Consultation", "1 Camera Man", "1-2 Min Highlight Video", "Edits can take 2 wks to a month to finish in total.", "Deposits are due at time of booking to secure slot and are non-refundable.", "A 24hr notice is required for rescheduling or will result in deposit forfeiture."]
    },
    {
      id: "sm_event_video_b", name: "B", price: 400, retainer: 200, description: "3hr small event video with drone.",
      features: ["3 Hr coverage", "2 locations", "Consultation", "1 Camera", "1 Camera Man", "Drone Footage", "5 min Highlight Video", "Remaining balance is due by date of service or may pay in full prior to session date."]
    },
    {
      id: "sm_event_video_c", name: "C", price: 800, retainer: 400, description: "6-8hr small event video with drone.",
      features: ["6+ (up to 8) Hr coverage", "multiple locations as needed", "Consultation", "2 Cameras", "1 Camera Man", "Drone Footage", "10-15 min Video", "Retainer/Total includes cost of extra EQ."]
    }
  ],
  "small-event-both": [
    {
      id: "sm_bundle_a",
      name: "Small Event Bundle A",
      price: 300,
      retainer: 175,
      description: "1hr combined photo and video coverage for your small event.",
      features: [
        "Photo: Up to 1 Hr coverage, 1 Location, 1 Outfit Change, (Minimum of) 5 Detailed Photos, 20 candids with access to cloud folder",
        "Video: 1 Hr coverage, 1 location, 1 Camera Man, 1-2 Min Highlight Video",
        "Consultation included",
        "Edits for photos can take 2 wks or more.",
        "Edits for video can take 2 wks to a month.",
        "Deposits are due at time of booking to secure slot and are non-refundable (for video portion).",
        "A 24hr notice is required for rescheduling or will result in deposit forfeiture (for video portion).",
        "Photo Retainer/Total includes cost of extra EQ."
      ]
    },
    {
      id: "sm_bundle_b",
      name: "Small Event Bundle B",
      price: 800,
      retainer: 325,
      description: "3hr combined photo and video coverage for your small event, including drone footage.",
      features: [
        "Photo: Up to 2 Hr coverage, 2 Locations, 2 Outfit Changes, (Minimum of) 10 Detailed Photos, all candids with access to cloud folder",
        "Video: 3 Hr coverage, 2 locations, 1 Camera, 1 Camera Man, Drone Footage, 5 min Highlight Video",
        "Consultation included",
        "Edits for photos can take 2 wks or more.",
        "Remaining balance is due by date of service or may pay in full prior to session date (for video portion).",
        "Photo Retainer/Total includes cost of extra EQ."
      ]
    },
    {
      id: "sm_bundle_c",
      name: "Small Event Bundle C",
      price: 1500,
      retainer: 575,
      description: "Extensive 6-8hr combined photo and video coverage for your small event, including drone footage.",
      features: [
        "Photo: Up to 3 Hr coverage, 3 Locations, 3 Outfit Changes, (Minimum of) 15 Detailed Photos, all candids with access to cloud folder, photo highlight reel",
        "Video: 6+ (up to 8) Hr coverage, multiple locations as needed, 2 Cameras, 1 Camera Man, Drone Footage, 10-15 min Video",
        "Consultation included",
        "Edits for photos can take 2 wks or more.",
        "Retainer/Total includes cost of extra EQ (for photo & video components)."
      ]
    }
  ]
},
  addOns: {
  photography: [
    {
      id: "extra_10_edits", name: "Extra 10 Detailed Edits", price: 50,
      description: "Add 10 additional detailed photo edits to your package.", category: "Digital Services"
    },
    {
      id: "badge_tags_sports", name: "Badge Tags", price: 15,
      description: "Custom badge tag with your photo - perfect for athletes.", category: "Sports Exclusives"
    },
    {
      id: "addon_print_value", name: "Print Package: VALUE", price: 65,
      description: "2-8x10, 4-5x7, 4-4x5, 24 Wallets.", category: "Print Packages Addon"
    },
    {
      id: "addon_print_a", name: "Print Package: A", price: 50,
      description: "1-8x10, 2-5x7, 2-4x5, 16 Wallets.", category: "Print Packages Addon"
    },
    {
      id: "addon_print_b", name: "Print Package: B", price: 35,
      description: "1-8x10, 2-5x7, 12 Wallets.", category: "Print Packages Addon"
    },
    {
      id: "addon_print_c", name: "Print Package: C", price: 25,
      description: "1-5x7, 2-4x5, 8 Wallets.", category: "Print Packages Addon"
    },
    {
      id: "addon_no_print", name: "Digital Only Addon", price: 20,
      description: "Select if you only want digital files from your session (no prints from base package if applicable).", category: "Print Packages Addon"
    },
    {
      id: "extra-time-photo", name: "Extra Hour of Coverage", price: 199,
      description: "Add an additional hour of photography coverage", category: "Time"
    },
    {
      id: "second-photographer", name: "Second Photographer", price: 399,
      description: "Add a second professional photographer for your event", category: "Personnel"
    },
    {
      id: "engagement-session", name: "Engagement Session", price: 299,
      description: "1-hour engagement photo session prior to your wedding day", category: "Sessions"
    },
    {
      id: "bridal-session", name: "Bridal Session", price: 299,
      description: "1-hour bridal portrait session prior to your wedding day", category: "Sessions"
    },
    {
      id: "boudoir-session", name: "Boudoir Session", price: 349,
      description: "1-hour private boudoir photo session", category: "Sessions"
    },
    {
      id: "photo-album", name: "Custom Photo Album", price: 499,
      description: "Premium 40-page custom designed photo album", category: "Products"
    },
    {
      id: "mini-album", name: "Mini Photo Album", price: 299,
      description: "20-page custom designed photo album", category: "Products"
    },
    {
      id: "parent-album", name: "Parent Albums (Set of 2)", price: 399,
      description: "Two duplicate 20-page albums for parents", category: "Products"
    },
    {
      id: "canvas-print", name: "Canvas Print (16x20)", price: 199,
      description: "Gallery-quality canvas print of your favorite image", category: "Products"
    },
    {
      id: "prints-package", name: "Professional Prints Package", price: 249,
      description: "Set of 25 professional prints in various sizes", category: "Products"
    },
    {
      id: "thank-you-cards", name: "Custom Thank You Cards", price: 199,
      description: "Set of 50 custom thank you cards with envelopes", category: "Products"
    },
    {
      id: "rush-delivery", name: "Rush Delivery", price: 199,
      description: "Expedited delivery of your photos within 1 week", category: "Services"
    },
    {
      id: "hair-makeup", name: "Professional Hair & Makeup", price: 249,
      description: "Professional hair styling and makeup application", category: "Services"
    }
  ],
  videography: [
    {
      id: "extra-time-video", name: "Extra Hour of Coverage", price: 249,
      description: "Add an additional hour of videography coverage", category: "Time"
    },
    {
      id: "second-videographer", name: "Second Videographer", price: 499,
      description: "Add a second professional videographer for your event", category: "Personnel"
    },
    {
      id: "drone-footage", name: "Drone Aerial Footage", price: 299,
      description: "Cinematic aerial footage of your venue and event (weather permitting)", category: "Equipment"
    },
    {
      id: "raw-footage", name: "Raw Footage", price: 299,
      description: "All unedited footage from your event", category: "Digital"
    },
    {
      id: "extended-highlight", name: "Extended Highlight Film", price: 349,
      description: "Extend your highlight film by 5-7 minutes", category: "Digital"
    },
    {
      id: "documentary-edit", name: "Documentary Edit", price: 499,
      description: "Full-length documentary style edit of your entire event", category: "Digital"
    },
    {
      id: "same-day-edit", name: "Same-Day Edit", price: 599,
      description: "3-5 minute highlight film delivered same day for reception viewing", category: "Services"
    },
    {
      id: "social-media-teaser", name: "Social Media Teaser", price: 199,
      description: "60-second teaser video for social media sharing", category: "Digital"
    },
    {
      id: "custom-music-licensing", name: "Custom Music Licensing", price: 199,
      description: "License a specific song of your choice for your video", category: "Services"
    },
    {
      id: "video-booth", name: "Video Guest Book", price: 399,
      description: "Video booth setup for guests to leave messages", category: "Equipment"
    },
    {
      id: "livestream", name: "Event Livestreaming", price: 499,
      description: "Professional livestream of your event for remote guests", category: "Services"
    },
    {
      id: "additional-revision", name: "Additional Revision Round", price: 149,
      description: "Additional round of revisions beyond package inclusion", category: "Services"
    },
    {
      id: "video-rush-delivery", name: "Rush Delivery", price: 299,
      description: "Expedited delivery of your videos within 2 weeks", category: "Services"
    },
    {
      id: "usb-delivery", name: "Custom USB Delivery", price: 149,
      description: "Custom USB in wooden box with all your videos", category: "Products"
    }
  ],
  both: [
    {
      id: "extra-time-both", name: "Extra Hour of Coverage", price: 349,
      description: "Add an additional hour of photo & video coverage", category: "Time"
    },
    {
      id: "additional-photographer", name: "Additional Photographer", price: 399,
      description: "Add an additional professional photographer", category: "Personnel"
    },
    {
      id: "additional-videographer", name: "Additional Videographer", price: 499,
      description: "Add an additional professional videographer", category: "Personnel"
    },
    {
      id: "engagement-photo-video", name: "Engagement Photo & Video Session", price: 599,
      description: "2-hour engagement session with photo and video coverage", category: "Sessions"
    },
    {
      id: "complete-package", name: "Complete Digital Package", price: 799,
      description: "All digital photos and videos with extended edits and raw files", category: "Digital"
    },
    {
      id: "premium-album-video", name: "Premium Album & Video Box Set", price: 899,
      description: "Luxury 40-page album and custom video presentation in gift box", category: "Products"
    },
    {
      id: "destination-travel", name: "Destination Travel Fee", price: 999,
      description: "Coverage for destinations requiring overnight travel", category: "Services"
    },
    {
      id: "rehearsal-coverage", name: "Rehearsal Dinner Coverage", price: 699,
      description: "2 hours of photo and video coverage of your rehearsal dinner", category: "Services"
    },
    {
      id: "photo-video-booth", name: "Photo & Video Booth", price: 799,
      description: "Interactive booth with instant prints and video messages", category: "Equipment"
    },
    {
      id: "complete-rush", name: "Complete Rush Delivery", price: 499,
      description: "Expedited delivery of all photo and video content", category: "Services"
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
  setupFormSubmission(); // Sets up the main package booking form

  // Logic for the Individual Photo Request form
  const photoRequestForm = document.getElementById('photo-request-form');
  if (photoRequestForm) {
    const numPeopleInput = document.getElementById('request_num_people');
    const priceDisplaySpan = document.getElementById('displayed_photo_price');
    
    // Ensure the hidden input for calculated price exists or create it
    let calculatedPriceInput = document.getElementById('request_calculated_price');
    if (!calculatedPriceInput) {
      calculatedPriceInput = document.createElement('input');
      calculatedPriceInput.type = 'hidden';
      calculatedPriceInput.name = 'calculated_photo_price'; // Name for Formspree
      calculatedPriceInput.id = 'request_calculated_price';
      photoRequestForm.appendChild(calculatedPriceInput);
    }

    function updatePhotoRequestPrice() {
      const numPeople = parseInt(numPeopleInput.value, 10);
      let price = 0;
      let priceText = "$0.00";

      if (isNaN(numPeople) || numPeople < 1) {
        price = 0;
        priceText = "$0.00";
      } else if (numPeople === 1) {
        price = 10;
        priceText = "$10.00";
      } else { // 2 or more people
        price = 20;
        priceText = "$20.00";
      }

      if (priceDisplaySpan) {
        priceDisplaySpan.textContent = priceText;
      }
      if (calculatedPriceInput) {
        calculatedPriceInput.value = price;
      }
    }

    if (numPeopleInput) {
      numPeopleInput.addEventListener('input', updatePhotoRequestPrice);
      // Initial price calculation on page load
      updatePhotoRequestPrice(); 
    }
  }
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
  
  const packageCardsView = document.getElementById('package-cards-view');
  const packageComparisonView = document.getElementById('package-comparison-view');
  const viewToggle = document.querySelector('.view-toggle');

  if (!packages || packages.length === 0) {
    const message = '<p class="no-packages-message">No packages are currently available for this specific combination of event and service. Please contact us for a custom quote or further assistance.</p>';
    packageCardsView.innerHTML = message;
    packageComparisonView.innerHTML = ''; // Clear comparison view
    if (viewToggle) {
      viewToggle.style.display = 'none'; // Hide view toggle buttons
    }
    return; // Stop further processing
  }

  // If packages are available, ensure view toggle is visible
  if (viewToggle) {
    viewToggle.style.display = 'flex'; // Or 'block' or its original display style
  }

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

    const retainerDisplay = document.createElement('div');
    retainerDisplay.className = 'package-retainer';
    retainerDisplay.textContent = `Retainer: $${pkg.retainer}`;
    
    const description = document.createElement('p');
    description.className = 'package-description';
    description.textContent = pkg.description;
    
    header.appendChild(name);
    header.appendChild(price);
    header.appendChild(retainerDisplay); // Added retainer here
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
    
    const retainerText = document.createElement('div');
    retainerText.className = 'comparison-package-retainer';
    retainerText.textContent = `Retainer: $${pkg.retainer}`;
    
    header.appendChild(name);
    header.appendChild(price);
    header.appendChild(retainerText); // Added retainer here
    headerRow.appendChild(header);
  });
  
  table.appendChild(headerRow);

  // Create retainer fee row
  const retainerRow = document.createElement('tr');
  const retainerLabel = document.createElement('td');
  retainerLabel.className = 'feature-name';
  retainerLabel.textContent = 'Retainer Fee';
  retainerRow.appendChild(retainerLabel);

  packages.forEach(pkg => {
    const retainerCell = document.createElement('td');
    retainerCell.textContent = `$${pkg.retainer}`;
    retainerRow.appendChild(retainerCell);
  });
  table.appendChild(retainerRow);
  
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
  const selectedPackagePriceElement = document.getElementById('selected-package-price');
  selectedPackagePriceElement.textContent = `$${selectedPackage.price}`;
  if (selectedPackage.retainer > 0) {
    const retainerSpan = document.createElement('span');
    retainerSpan.className = 'package-price-retainer-note'; // For potential styling
    retainerSpan.textContent = ` (Retainer: $${selectedPackage.retainer})`;
    selectedPackagePriceElement.appendChild(retainerSpan);
  }
  
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
  
  // Get base add-ons for the selected service type
  const baseAddOns = packageData.addOns[selectedServiceType.id] || [];
  let effectiveAddOns = [];

  // Add non-conditional add-ons
  effectiveAddOns = baseAddOns.filter(addon => 
    addon.category !== "Print Packages Addon" && addon.category !== "Sports Exclusives"
  );

  // Conditional Add-On Logic
  if (selectedEventType && selectedServiceType) {
    if ((selectedEventType.id === "portrait" || selectedEventType.id === "small-event") && selectedServiceType.id === "photography") {
      const portraitAddOns = (packageData.addOns.photography || []).filter(addon => addon.category === "Print Packages Addon");
      effectiveAddOns = effectiveAddOns.concat(portraitAddOns);
    }
    if (selectedEventType.id === "sports" && selectedServiceType.id === "photography") {
      const sportsAddOns = (packageData.addOns.photography || []).filter(addon => addon.category === "Sports Exclusives");
      effectiveAddOns = effectiveAddOns.concat(sportsAddOns);
    }
  }
  
  // Get unique categories from the effective list
  const categories = [...new Set(effectiveAddOns.map(addon => addon.category))];
  
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
  
  // Get base add-ons for the selected service type and filter conditionally
  const baseAddOnsForService = packageData.addOns[selectedServiceType.id] || [];
  let effectiveAddOnsForDisplay = baseAddOnsForService.filter(addon => 
    addon.category !== "Print Packages Addon" && addon.category !== "Sports Exclusives"
  );

  if (selectedEventType && selectedServiceType) {
    if ((selectedEventType.id === "portrait" || selectedEventType.id === "small-event") && selectedServiceType.id === "photography") {
      effectiveAddOnsForDisplay = effectiveAddOnsForDisplay.concat(
        (packageData.addOns.photography || []).filter(addon => addon.category === "Print Packages Addon")
      );
    }
    if (selectedEventType.id === "sports" && selectedServiceType.id === "photography") {
      effectiveAddOnsForDisplay = effectiveAddOnsForDisplay.concat(
        (packageData.addOns.photography || []).filter(addon => addon.category === "Sports Exclusives")
      );
    }
  }
  
  // Filter by the clicked category from the effective list
  const filteredAddOnsToDisplay = effectiveAddOnsForDisplay.filter(addon => addon.category === category);
  
  // Create add-on cards
  filteredAddOnsToDisplay.forEach(addon => {
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
  const summaryPackagePriceElement = document.getElementById('summary-package-price');
  summaryPackagePriceElement.textContent = `$${selectedPackage.price}`;
  if (selectedPackage.retainer > 0) {
    const retainerSpan = document.createElement('span');
    retainerSpan.className = 'summary-price-retainer-note'; // For potential styling
    retainerSpan.textContent = ` (Retainer: $${selectedPackage.retainer})`;
    summaryPackagePriceElement.appendChild(retainerSpan);
  }
  
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
    // Populate hidden fields before the form submits
    if (selectedEventType) {
      document.querySelector('input[name="selected_event_type"]').value = selectedEventType.name;
    }
    if (selectedServiceType) {
      document.querySelector('input[name="selected_service_type"]').value = selectedServiceType.name;
    }
    if (selectedPackage) {
      document.querySelector('input[name="selected_package_name"]').value = selectedPackage.name;
      document.querySelector('input[name="selected_package_price"]').value = selectedPackage.price;
      if (typeof selectedPackage.retainer !== 'undefined') {
        document.querySelector('input[name="selected_package_retainer"]').value = selectedPackage.retainer;
      } else {
        document.querySelector('input[name="selected_package_retainer"]').value = '0';
      }
    }
    
    const addOnsSummary = selectedAddOns.map(addon => `${addon.name} ($${addon.price})`).join(', ');
    document.querySelector('input[name="selected_add_ons"]').value = addOnsSummary;
    
    const basePrice = selectedPackage ? selectedPackage.price : 0;
    const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    const total = basePrice + addOnsTotal;
    document.querySelector('input[name="total_price"]').value = total;
    
    // The form will now submit to Formspree with the hidden fields populated.
    // No e.preventDefault() is called, allowing natural form submission.
    // Optionally, you can add a small delay or a confirmation message before actual submission if desired,
    // but for Formspree, direct submission after populating fields is usually fine.
    // For example, could add a brief "Submitting..." message or disable the button here.
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
