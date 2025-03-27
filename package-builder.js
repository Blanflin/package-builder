    [cite: 349] // Package data with all event types, service types, base packages, and add-ons
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
     [cite: 350]  },
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
     [cite: 351]     name: "Photography",
          description: "Professional photography services with high-quality editing",
          imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: "videography",
          name: "Videography",
          description: "Cinematic video coverage with professional editing",
          imageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: "bundle",
          name: "Photography & Videography",
          description: "Combined services at a special bundle rate",
          imageUrl: "https://images.unsplash.com/photo-1551817958-20204d6ab212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
     [cite: 352]   }
      ],
      basePackages: {
        wedding: {
          photography: [
            {
              id: "wedding-photo-basic",
              name: "Essential",
              price: 499.99,
              hours: 2,
              features: [
                "2 hours of coverage",
     [cite: 353]       "1 photographer",
                "Up to 20 detailed edits", // MODIFIED
                "Access to 100+ candid photos", // MODIFIED
                "Online gallery",
                "Print release"
              ],
              retainer: 250
            },
     [cite: 354]    {
              id: "wedding-photo-standard",
              name: "Classic",
              price: 999.99,
              hours: 4,
              features: [
                "4 hours of coverage",
                "1 photographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 200+ candid photos", // MODIFIED
     [cite: 355]       "Online gallery",
                "Print release",
                "Engagement session (1 hour)"
              ],
              popular: true,
              retainer: 500
            },
            {
              id: "wedding-photo-premium",
     [cite: 356]     name: "Premium",
              price: 1499.99,
              hours: 6,
              features: [
                "6 hours of coverage",
                "2 photographers",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 300+ candid photos", // MODIFIED
                "Online gallery",
     [cite: 357]       "Print release",
                "Engagement session (1 hour)",
                "10x10 wedding album"
              ],
              retainer: 750
            },
            {
              id: "wedding-photo-luxury",
              name: "Luxury",
     [cite: 358]      price: 2499.99,
              hours: 8,
              features: [
                "8 hours of coverage",
                "2 photographers",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 500+ candid photos", // MODIFIED
                "Online gallery",
     [cite: 359]       "Print release",
                "Engagement session (2 hours)",
                "12x12 premium wedding album",
                "Second day coverage (2 hours)"
              ],
              retainer: 1000
            }
          ],
          videography: [
            {
     [cite: 360]    id: "wedding-video-basic",
              name: "Essential",
              price: 699.99,
              hours: 2,
              features: [
                "2 hours of coverage",
                "1 videographer",
                "5-minute highlight film",
     [cite: 361]     "Digital delivery",
                "Licensed music"
              ],
              retainer: 350
            },
            {
              id: "wedding-video-standard",
              name: "Classic",
              price: 1299.99,
     [cite: 362] hours: 4,
              features: [
                "4 hours of coverage",
                "1 videographer",
                "10-minute highlight film",
                "Digital delivery",
                "Licensed music",
                "Drone footage (weather permitting)"
     [cite: 363]  ],
              popular: true,
              retainer: 650
            },
            {
              id: "wedding-video-premium",
              name: "Premium",
              price: 1999.99,
              hours: 6,
              features: [
     [cite: 364]       "6 hours of coverage",
                "2 videographers",
                "15-minute highlight film",
                "Digital delivery",
                "Licensed music",
                "Drone footage (weather permitting)",
                "Next day teaser"
     [cite: 365]  ],
              retainer: 1000
            },
            {
              id: "wedding-video-luxury",
              name: "Luxury",
              price: 2999.99,
              hours: 8,
              features: [
                "8 hours of coverage",
     [cite: 366]       "2 videographers",
                "20-minute highlight film",
                "Digital delivery",
                "Licensed music",
                "Drone footage (weather permitting)",
                "Next day teaser",
                "Documentary edit (30-60 minutes)",
     [cite: 367]       "Raw footage"
              ],
              retainer: 1500
            }
          ],
          bundle: [
            {
              id: "wedding-bundle-basic",
              name: "Essential Bundle",
              price: 999.99,
     [cite: 368]   hours: 4,
              features: [
                "4 hours of coverage",
                "1 photographer",
                "1 videographer",
                "Up to 20 detailed edits", // MODIFIED
                "Access to 150+ candid photos", // MODIFIED
                "5-minute highlight film",
     [cite: 369]     "Online gallery",
                "Digital delivery",
                "Licensed music",
                "Print release"
              ],
              savings: 199.99,
              retainer: 500
            },
            {
              id: "wedding-bundle-standard",
     [cite: 370]      name: "Classic Bundle",
              price: 1999.99,
              hours: 6,
              features: [
                "6 hours of coverage",
                "2 photographers",
                "1 videographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 250+ candid photos", // MODIFIED
     [cite: 371]     "10-minute highlight film",
                "Online gallery",
                "Digital delivery",
                "Licensed music",
                "Print release",
                "Engagement session (1 hour)",
                "Drone footage (weather permitting)"
     [cite: 372]   ],
              popular: true,
              savings: 299.99,
              retainer: 1000
            },
            {
              id: "wedding-bundle-premium",
              name: "Premium Bundle",
              price: 3499.99,
              hours: 8,
              features: [
     [cite: 373]       "8 hours of coverage",
                "2 photographers",
                "2 videographers",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 400+ candid photos", // MODIFIED
                "15-minute highlight film",
                "Online gallery",
     [cite: 374]     "Digital delivery",
                "Licensed music",
                "Print release",
                "Engagement session (2 hours)",
                "10x10 wedding album",
                "Drone footage (weather permitting)",
                "Next day teaser"
     [cite: 375]  ],
              savings: 499.99,
              retainer: 1750
            },
            {
              id: "wedding-bundle-luxury",
              name: "Luxury Bundle",
              price: 4999.99,
              hours: 10,
              features: [
     [cite: 376]       "10 hours of coverage",
                "2 photographers",
                "2 videographers",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 600+ candid photos", // MODIFIED
                "20-minute highlight film",
                "Online gallery",
                "Digital delivery",
     [cite: 377]     "Licensed music",
                "Print release",
                "Engagement session (2 hours)",
                "12x12 premium wedding album",
                "Drone footage (weather permitting)",
                "Next day teaser",
                "Documentary edit (30-60 minutes)",
     [cite: 378]     "Raw footage",
                "Second day coverage (2 hours)"
              ],
              savings: 999.99,
              retainer: 2500
            }
          ]
        },
        "small-event": {
          photography: [
            {
     [cite: 379]     id: "event-photo-basic",
              name: "Basic",
              price: 149.99,
              hours: 1,
              features: [
                "1 hour of coverage",
                "1 photographer",
                "Up to 20 detailed edits", // MODIFIED
                "Access to 50+ candid photos", // MODIFIED
     [cite: 380]     "Online gallery",
                "Digital download",
                "Print release"
              ],
              retainer: 75
            },
            {
              id: "event-photo-standard",
              name: "Standard",
              price: 299.99,
     [cite: 381]    hours: 2,
              features: [
                "2 hours of coverage",
                "1 photographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 100+ candid photos", // MODIFIED
                "Online gallery",
                "Digital download",
     [cite: 382]     "Print release",
                "5 printed 5x7 photos"
              ],
              popular: true,
              retainer: 150
            },
            {
              id: "event-photo-premium",
              name: "Premium",
              price: 499.99,
     [cite: 383]    hours: 4,
              features: [
                "4 hours of coverage",
                "1 photographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 200+ candid photos", // MODIFIED
                "Online gallery",
                "Digital download",
     [cite: 384]     "Print release",
                "10 printed 5x7 photos",
                "Custom photo book"
              ],
              retainer: 250
            }
          ],
          videography: [
            {
              id: "event-video-basic",
     [cite: 385]  name: "Basic",
              price: 199.99,
              hours: 1,
              features: [
                "1 hour of coverage",
                "1 videographer",
                "3-minute highlight video",
                "Digital delivery",
     [cite: 386]  "Licensed music"
              ],
              retainer: 100
            },
            {
              id: "event-video-standard",
              name: "Standard",
              price: 399.99,
              hours: 2,
              features: [
     [cite: 387]    "2 hours of coverage",
                "1 videographer",
                "5-minute highlight video",
                "Digital delivery",
                "Licensed music",
                "Basic color grading"
              ],
              popular: true,
     [cite: 388]      retainer: 200
            },
            {
              id: "event-video-premium",
              name: "Premium",
              price: 699.99,
              hours: 4,
              features: [
                "4 hours of coverage",
     [cite: 389]    "1 videographer",
                "10-minute highlight video",
                "Digital delivery",
                "Licensed music",
                "Advanced color grading",
                "Drone footage (weather permitting)"
              ],
              retainer: 350
     [cite: 390]   }
          ],
          bundle: [
            {
              id: "event-bundle-basic",
              name: "Basic Bundle",
              price: 299.99,
              hours: 2,
              features: [
                "2 hours of coverage",
     [cite: 391]       "1 photographer",
                "1 videographer",
                "Up to 20 detailed edits", // MODIFIED
                "Access to 75+ candid photos", // MODIFIED
                "3-minute highlight video",
                "Online gallery",
                "Digital delivery",
                "Licensed music",
     [cite: 392]     "Print release"
              ],
              savings: 49.99,
              retainer: 150
            },
            {
              id: "event-bundle-standard",
              name: "Standard Bundle",
              price: 599.99,
              hours: 3,
     [cite: 393]     features: [
                "3 hours of coverage",
                "1 photographer",
                "1 videographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 150+ candid photos", // MODIFIED
                "5-minute highlight video",
                "Online gallery",
     [cite: 394]     "Digital delivery",
                "Licensed music",
                "Print release",
                "5 printed 5x7 photos",
                "Basic color grading"
              ],
              popular: true,
              savings: 99.99,
     [cite: 395]  retainer: 300
            },
            {
              id: "event-bundle-premium",
              name: "Premium Bundle",
              price: 999.99,
              hours: 5,
              features: [
                "5 hours of coverage",
     [cite: 396]  "1 photographer",
                "1 videographer",
                "Up to 25 detailed edits", // MODIFIED
                "Access to 250+ candid photos", // MODIFIED
                "10-minute highlight video",
                "Online gallery",
                "Digital delivery",
                "Licensed music",
                "Print release",
     [cite: 397]      "10 printed 5x7 photos",
                "Custom photo book",
                "Advanced color grading",
                "Drone footage (weather permitting)"
              ],
              savings: 199.99,
              retainer: 500
            }
     [cite: 398] ]
        },
        production: {
          photography: [
            {
              id: "production-photo-basic",
              name: "Basic",
              price: 299.99,
              hours: 2,
              features: [
                "2 hours of shooting",
     [cite: 399]    "1 photographer",
                "Up to 20 detailed edits (promotional images)", // MODIFIED
                "Commercial usage rights",
                "Digital delivery",
                "Basic retouching"
              ],
              retainer: 150
            },
     [cite: 400]  {
              id: "production-photo-standard",
              name: "Standard",
              price: 599.99,
              hours: 4,
              features: [
                "4 hours of shooting",
                "1 photographer",
                "Up to 25 detailed edits (promotional images, e.g., 40 total)", // MODIFIED
     [cite: 401]       "Commercial usage rights",
                "Digital delivery",
                "Advanced retouching",
                "Multiple setups"
              ],
              popular: true,
              retainer: 300
            },
            {
     [cite: 402]      id: "production-photo-premium",
              name: "Premium",
              price: 999.99,
              hours: 8,
              features: [
                "8 hours of shooting",
                "1 photographer",
                "Up to 25 detailed edits (promotional images, e.g., 80 total)", // MODIFIED
     [cite: 403]      "Commercial usage rights",
                "Digital delivery",
                "Premium retouching",
                "Multiple setups",
                "Location scouting",
                "Art direction"
              ],
              retainer: 500
     [cite: 404]  }
          ],
          videography: [
            {
              id: "production-video-basic",
              name: "Basic",
              price: 499.99,
              hours: 2,
              features: [
                "2 hours of shooting",
     [cite: 405]     "1 videographer",
                "30-second commercial/promo",
                "Commercial usage rights",
                "Digital delivery",
                "Basic color grading",
                "Licensed music"
              ],
              retainer: 250
     [cite: 406]  },
            {
              id: "production-video-standard",
              name: "Standard",
              price: 999.99,
              hours: 4,
              features: [
                "4 hours of shooting",
                "1 videographer",
     [cite: 407]     "60-second commercial/promo",
                "Commercial usage rights",
                "Digital delivery",
                "Advanced color grading",
                "Licensed music",
                "Basic script development"
              ],
              popular: true,
     [cite: 408]      retainer: 500
            },
            {
              id: "production-video-premium",
              name: "Premium",
              price: 1999.99,
              hours: 8,
              features: [
                "8 hours of shooting",
     [cite: 409]    "2 videographers",
                "90-second commercial/promo",
                "Commercial usage rights",
                "Digital delivery",
                "Premium color grading",
                "Licensed music",
                "Professional script development",
     [cite: 410]  "Drone footage",
                "Location scouting"
              ],
              retainer: 1000
            }
          ],
          bundle: [
            {
              id: "production-bundle-basic",
              name: "Basic Bundle",
              price: 699.99,
     [cite: 411]      hours: 3,
              features: [
                "3 hours of shooting",
                "1 photographer",
                "1 videographer",
                "Up to 20 detailed edits (promotional images)", // MODIFIED
                "30-second commercial/promo",
     [cite: 412]  "Commercial usage rights",
                "Digital delivery",
                "Basic retouching/color grading",
                "Licensed music"
              ],
              savings: 99.99,
              retainer: 350
            },
            {
     [cite: 413]  id: "production-bundle-standard",
              name: "Standard Bundle",
              price: 1399.99,
              hours: 6,
              features: [
                "6 hours of shooting",
                "1 photographer",
                "1 videographer",
     [cite: 414]  "Up to 25 detailed edits (promotional images, e.g., 40 total)", // MODIFIED
                "60-second commercial/promo",
                "Commercial usage rights",
                "Digital delivery",
                "Advanced retouching/color grading",
                "Licensed music",
                "Multiple setups",
                "Basic script development"
     [cite: 415]     ],
              popular: true,
              savings: 199.99,
              retainer: 700
            },
            {
              id: "production-bundle-premium",
              name: "Premium Bundle",
              price: 2499.99,
     [cite: 416]  hours: 10,
              features: [
                "10 hours of shooting",
                "1 photographer",
                "2 videographers",
                "Up to 25 detailed edits (promotional images, e.g., 80 total)", // MODIFIED
                "90-second commercial/promo",
                "Commercial usage rights",
     [cite: 417]     "Digital delivery",
                "Premium retouching/color grading",
                "Licensed music",
                "Multiple setups",
                "Professional script development",
                "Drone footage",
                "Location scouting",
     [cite: 418]  "Art direction"
              ],
              savings: 499.99,
              retainer: 1250
            }
          ]
        },
        portrait: {
          photography: [
            {
              id: "portrait-photo-basic",
              name: "Basic",
     [cite: 419] price: 149.99,
              hours: 1,
              features: [
                "1 hour session",
                "1 location",
                "1 outfit change",
                "Up to 20 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "Online gallery",
     [cite: 420]     "Print release"
              ],
              retainer: 75
            },
            {
              id: "portrait-photo-standard",
              name: "Standard",
              price: 249.99,
              hours: 1.5,
     [cite: 421] features: [
                "1.5 hour session",
                "2 locations",
                "2 outfit changes",
                "Up to 25 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "Online gallery",
                "Print release",
                "5 printed 5x7 photos"
     [cite: 422]     ],
              popular: true,
              retainer: 125
            },
            {
              id: "portrait-photo-premium",
              name: "Premium",
              price: 399.99,
              hours: 2,
     [cite: 423] features: [
                "2 hour session",
                "3 locations",
                "3 outfit changes",
                "Up to 25 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "Online gallery",
                "Print release",
                "10 printed 5x7 photos",
     [cite: 424]       "1 11x14 wall print"
              ],
              retainer: 200
            }
          ],
          videography: [
            {
              id: "portrait-video-basic",
              name: "Basic B-Roll",
              price: 149.99,
     [cite: 425]    hours: 0.5,
              features: [
                "30 minutes of shooting",
                "1 location",
                "30-second highlight reel",
                "Digital delivery",
                "Licensed music",
                "Basic color grading"
     [cite: 426]     ],
              retainer: 75
            },
            {
              id: "portrait-video-standard",
              name: "Standard B-Roll",
              price: 249.99,
              hours: 1,
              features: [
     [cite: 427]   "1 hour of shooting",
                "2 locations",
                "60-second highlight reel",
                "Digital delivery",
                "Licensed music",
                "Advanced color grading"
              ],
              popular: true,
     [cite: 428]    retainer: 125
            },
            {
              id: "portrait-video-premium",
              name: "Premium B-Roll",
              price: 399.99,
              hours: 1.5,
              features: [
                "1.5 hours of shooting",
     [cite: 429]    "3 locations",
                "90-second highlight reel",
                "Digital delivery",
                "Licensed music",
                "Premium color grading",
                "Drone footage (weather permitting)"
              ],
              retainer: 200
     [cite: 430]   }
          ],
          bundle: [
            {
              id: "portrait-bundle-basic",
              name: "Basic Bundle",
              price: 249.99,
              hours: 1.5,
              features: [
                "1.5 hour session",
     [cite: 431]      "1 location",
                "1 outfit change",
                "Up to 20 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "30-second highlight reel",
                "Online gallery",
                "Digital delivery",
                "Licensed music",
     [cite: 432]     "Print release"
              ],
              savings: 49.99,
              retainer: 125
            },
            {
              id: "portrait-bundle-standard",
              name: "Standard Bundle",
              price: 399.99,
              hours: 2,
     [cite: 433]     features: [
                "2 hour session",
                "2 locations",
                "2 outfit changes",
                "Up to 25 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "60-second highlight reel",
                "Online gallery",
     [cite: 434]     "Digital delivery",
                "Licensed music",
                "Print release",
                "5 printed 5x7 photos",
                "Advanced color grading"
              ],
              popular: true,
              savings: 99.99,
     [cite: 435]  retainer: 200
            },
            {
              id: "portrait-bundle-premium",
              name: "Premium Bundle",
              price: 699.99,
              hours: 3,
              features: [
                "3 hour session",
     [cite: 436]  "3 locations",
                "3 outfit changes",
                "Up to 25 detailed edits", // MODIFIED
                "Access to candid photos", // MODIFIED
                "90-second highlight reel",
                "Online gallery",
                "Digital delivery",
                "Licensed music",
                "Print release",
     [cite: 437]      "10 printed 5x7 photos",
                "1 11x14 wall print",
                "Premium color grading",
                "Drone footage (weather permitting)"
              ],
              savings: 99.99, // Note: Original data has 99.99, perhaps intended to be higher like other premium bundles
              retainer: 350
            }
     [cite: 438] ]
        }
      },
      addOns: {
        photography: [
          {
            id: "photo-extra-hour",
            name: "Extra hour of coverage",
            price: 99.99,
            description: "Add an additional hour of photography coverage",
            popular: true,
            category: "Time Extensions"
          },
          {
     [cite: 439]   id: "photo-extra-photographer",
            name: "Additional photographer",
            price: 199.99,
            description: "Add a second photographer for more comprehensive coverage",
            popular: false,
            category: "Personnel"
          },
          {
            id: "photo-engagement",
            name: "Engagement session (1 hour)",
     [cite: 440]  price: 199.99,
            description: "1-hour engagement photo session prior to your wedding day",
            popular: true,
            category: "Special Event Add-Ons"
          },
          {
            id: "photo-boudoir",
            name: "Boudoir session (1 hour)",
            price: 249.99,
            description: "Private 1-hour boudoir photo session",
     [cite: 441]  popular: false,
            category: "Special Event Add-Ons"
          },
          {
            id: "photo-album-small",
            name: "8x8 Photo album (20 pages)",
            price: 199.99,
            description: "Custom designed 8x8 photo album with 20 pages",
            popular: true,
            category: "Prints & Products"
          },
     [cite: 442]  {
            id: "photo-album-large",
            name: "10x10 Photo album (30 pages)",
            price: 299.99,
            description: "Custom designed 10x10 photo album with 30 pages",
            popular: false,
            category: "Prints & Products"
          },
          {
            id: "photo-prints-package",
     [cite: 443]  name: "Print package (5 8x10, 10 5x7, 20 4x6)",
            price: 99.99,
            description: "Collection of professionally printed photos in various sizes",
            popular: false,
            category: "Prints & Products"
          },
          {
            id: "photo-wall-art",
            name: "16x20 Wall art print",
            price: 149.99,
     [cite: 444] description: "Large format print perfect for wall display",
            popular: false,
            category: "Prints & Products"
          },
          {
            id: "photo-digital-all",
            name: "All digital images",
            price: 199.99,
            description: "Receive all usable images from your session (not just the selected edits)",
     [cite: 445] popular: true,
            category: "Editing & Delivery"
          },
          {
            id: "photo-rush-editing",
            name: "Rush editing (1-week turnaround)",
            price: 149.99,
            description: "Expedited editing process with delivery in just one week",
            popular: false,
            category: "Editing & Delivery"
          },
     [cite: 446] {
            id: "photo-retouching",
            name: "Advanced retouching",
            price: 99.99,
            description: "Premium skin retouching and advanced editing techniques",
            popular: false,
            category: "Editing & Delivery"
          }
        ],
        videography: [
          {
            id: "video-extra-hour",
     [cite: 447] name: "Extra hour of coverage",
            price: 149.99,
            description: "Add an additional hour of video coverage",
            popular: true,
            category: "Time Extensions"
          },
          {
            id: "video-extra-videographer",
            name: "Additional videographer",
            price: 249.99,
            description: "Add a second videographer for multiple angles",
     [cite: 448]   popular: false,
            category: "Personnel & Equipment"
          },
          {
            id: "video-drone",
            name: "Drone footage",
            price: 199.99,
            description: "Aerial video footage (weather permitting)",
            popular: true,
            category: "Drone Coverage"
     [cite: 449] },
          {
            id: "video-raw-footage",
            name: "Raw footage delivery",
            price: 199.99,
            description: "Receive all the raw, unedited footage from your event",
            popular: true,
            category: "Editing & Delivery"
          },
          {
            id: "video-rush-editing",
     [cite: 450]  name: "Rush editing (1-week turnaround)",
            price: 249.99,
            description: "Get your edited video in half the standard time",
            popular: true,
            category: "Editing & Delivery"
          },
          {
            id: "video-extended-highlight",
            name: "Extended highlight video (additional 5 minutes)",
            price: 149.99,
     [cite: 451]    description: "Add 5 minutes to your highlight video length",
            popular: false,
            category: "Editing & Delivery"
          },
          {
            id: "video-usb",
            name: "Custom USB drive with all videos",
            price: 49.99,
            description: "Receive all your videos on a custom USB drive",
     [cite: 452] popular: false,
            category: "Editing & Delivery"
          },
          {
            id: "video-revision",
            name: "Additional revision round",
            price: 99.99,
            description: "Add an extra round of revisions to perfect your video",
            popular: false,
            category: "Editing & Delivery"
     [cite: 453] },
          {
            id: "video-360",
            name: "360° video of special moment",
            price: 199.99,
            description: "Immersive 360° video of a key moment at your event",
            popular: false,
            category: "Special Video Products"
          },
          {
            id: "video-livestream",
     [cite: 454]  name: "Live streaming service",
            price: 299.99,
            description: "Live stream your event for remote guests to watch in real-time",
            popular: false,
            category: "Special Video Products"
          },
          {
            id: "video-teaser",
            name: "Next day teaser (if not included)",
            price: 99.99,
     [cite: 455]     description: "30-60 second teaser video delivered the day after your event",
            popular: true,
            category: "Special Video Products"
          },
          {
            id: "video-social",
            name: "Social media highlight reel",
            price: 129.99,
            description: "Specially edited 1-2 minute video optimized for social media",
     [cite: 456]  popular: true,
            category: "Special Video Products"
          },
          {
            id: "video-documentary",
            name: "Documentary edit (30-60 minutes)",
            price: 499.99,
            description: "Extended documentary-style edit of your entire event",
            popular: false,
            category: "Special Video Products"
     [cite: 457] }
        ],
        bundle: [
          {
            id: "bundle-photo-drone",
            name: "Photography + Drone package",
            price: 349.99,
            description: "Add drone coverage to your photography package at a special rate",
            popular: true,
            category: "Combo Deals",
            savings: 49.99
          },
     [cite: 458] {
            id: "bundle-video-album",
            name: "Videography + Album package",
            price: 399.99,
            description: "Add a photo album to your videography package at a special rate",
            popular: false,
            category: "Combo Deals",
            savings: 49.99
          },
          {
     [cite: 459]  id: "bundle-full-media",
            name: "Full media package (drone + album + USB)",
            price: 499.99,
            description: "Complete media package with drone footage, photo album, and USB delivery",
            popular: true,
            category: "Combo Deals",
            savings: 99.99
          },
          {
            id: "bundle-engagement",
     [cite: 460] name: "Engagement session (1 hour)",
            price: 199.99,
            description: "Pre-wedding photo session to capture your engagement",
            popular: true,
            category: "Special Event Add-Ons"
          },
          {
            id: "bundle-rehearsal",
            name: "Rehearsal dinner coverage (2 hours)",
            price: 299.99,
     [cite: 461]description: "Photography/videography coverage of your rehearsal dinner",
            popular: false,
            category: "Special Event Add-Ons"
          },
          {
            id: "bundle-same-day",
            name: "Same-day edit (shown at reception)",
            price: 499.99,
            description: "Edited highlight video ready to show at your reception",
            popular: false,
     [cite: 462]   category: "Premium Experience Add-Ons"
          },
          {
            id: "bundle-premium-editing",
            name: "Premium editing style (film emulation)",
            price: 149.99,
            description: "Cinematic film-look editing style for your photos/videos",
            popular: false,
            category: "Premium Experience Add-Ons"
          },
          {
     [cite: 463]    id: "bundle-vip",
            name: "VIP turnaround (1 week for all deliverables)",
            price: 399.99,
            description: "Priority editing with all deliverables ready within one week",
            popular: true,
            category: "Premium Experience Add-Ons"
          }
        ]
      }
    };
     [cite: 464] // Tooltips for explaining features
    const tooltips = {
      // Event types
      "wedding": "Wedding packages include comprehensive coverage of your special day with high-quality editing and quick delivery of highlight videos.",
      "small-event": "Perfect for birthdays, anniversaries, and gatherings that need professional documentation without the full wedding package scope.",
      "production": "Commercial and promotional content with professional-grade equipment and commercial usage rights included.",
      "portrait": "Individual or family portrait sessions with detailed editing and quick turnaround times.",

      // Service types
      "photography": "Professional photography services with high-resolution images, detailed editing, and online gallery delivery.",
      "videography": "Cinematic video coverage with professional audio, color grading, and custom music licensing.",
     [cite: 465] "bundle": "Combined photography and videography services at a discounted rate compared to booking separately.",

      // Add-on categories
      "Time Extensions": "Extend your coverage time to capture more of your special event.",
      "Personnel": "Add additional photographers for more comprehensive coverage from multiple angles.",
      "Personnel & Equipment": "Enhance your video quality with additional videographers and specialized equipment.",
      "Editing & Delivery": "Customize how your final products are edited and delivered.",
      "Drone Coverage": "Add stunning aerial footage to give your video a cinematic dimension.",
     [cite: 466] "Prints & Products": "Transform your digital photos into beautiful physical products.",
      "Special Video Products": "Specialized video options to enhance your final product.",
      "Combo Deals": "Special combination packages that offer significant savings.",
      "Special Event Add-Ons": "Additional services specific to your event type.",
      "Premium Experience Add-Ons": "Luxury options for those wanting the ultimate experience."
     [cite: 467] };

    // Global variables to store selections
    let currentStep = 1;
    let selectedEventType = null;
    let selectedServiceType = null;
     [cite: 468] let selectedBasePackage = null;
    let selectedAddOns = [];
    let totalPrice = 0;
    let savings = 0;
    let depositAmount = 0;
     [cite: 469] let comparisonView = false;
    let activeTooltip = null;

    // Initialize the package builder
    document.addEventListener('DOMContentLoaded', function() {
      // Set current year in footer
      document.getElementById('current-year').textContent = new Date().getFullYear();

      // Populate event types
      populateEventTypes();

      // Set up form submission
      document.getElementById('booking-form').addEventListener('submit', handleFormSubmit);

      // Set up tooltips
      setupTooltips();
    });
     [cite: 470] // Populate event types in step 1
    function populateEventTypes() {
      const eventTypeGrid = document.getElementById('event-type-grid');
      eventTypeGrid.innerHTML = '';
     [cite: 471] packageData.eventTypes.forEach(eventType => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.setAttribute('data-id', eventType.id);
        card.innerHTML = `
          <div class="card-image" style="background-image: url('${eventType.imageUrl}')"></div>
          <h3>${eventType.name}</h3>
          <p>${eventType.description}</p>
          <button class="select-button">Select</button>
        `;
        card.addEventListener('click', () => selectEventType(eventType));

        // Add tooltip functionality
        card.addEventListener('mouseenter', () => showTooltip(card, eventType.id));
        card.addEventListener('mouseleave', hideTooltip);

        eventTypeGrid.appendChild(card);
      });
     [cite: 472] }

    // Populate service types in step 2
    function populateServiceTypes() {
      const serviceTypeGrid = document.getElementById('service-type-grid');
      serviceTypeGrid.innerHTML = '';
     [cite: 473] packageData.serviceTypes.forEach(serviceType => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.setAttribute('data-id', serviceType.id);
        card.innerHTML = `
          <div class="card-image" style="background-image: url('${serviceType.imageUrl}')"></div>
          <h3>${serviceType.name}</h3>
          <p>${serviceType.description}</p>
          <button class="select-button">Select</button>
        `;
        card.addEventListener('click', () => selectServiceType(serviceType));

        // Add tooltip functionality
        card.addEventListener('mouseenter', () => showTooltip(card, serviceType.id));
        card.addEventListener('mouseleave', hideTooltip);

        serviceTypeGrid.appendChild(card);
      });
     [cite: 474] }

    // Populate base packages in step 3
    function populateBasePackages() {
      // Update title
      document.getElementById('event-service-title').textContent = `${selectedEventType.name} ${selectedServiceType.name}`;
     [cite: 475] // Get packages for the selected event and service type
      const packages = packageData.basePackages[selectedEventType.id][selectedServiceType.id];
     [cite: 476] // Populate card view
      const packageCardsView = document.getElementById('package-cards-view');
      packageCardsView.innerHTML = '';
     [cite: 477] packages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        if (pkg.popular) card.classList.add('popular');
        card.setAttribute('data-id', pkg.id);

        let featuresHTML = '';
        pkg.features.forEach(feature => {
          featuresHTML += `<li>${feature}</li>`;
        });

        card.innerHTML = `
          ${pkg.popular ? '<div class="popular-tag">Most Popular</div>' : ''}
          <h3>${pkg.name}</h3>
          <div class="package-price">$${formatPrice(pkg.price)}</div>
          <div class="package-hours">${pkg.hours} ${pkg.hours === 1 ? 'hour' : 'hours'} of coverage</div>
          <ul class="package-features">
            ${featuresHTML}
          </ul>
          ${pkg.savings ? `<div class="package-savings">Save $${formatPrice(pkg.savings)}</div>` : ''}
          <button class="select-button">Select</button>
        `;
        card.addEventListener('click', () => selectBasePackage(pkg));
        packageCardsView.appendChild(card);
      });
     [cite: 479] // Populate comparison view
      const packageComparisonView = document.getElementById('package-comparison-view');
      packageComparisonView.innerHTML = '';
     [cite: 480] // Get all unique features across all packages
      const allFeatures = [];
     [cite: 481] packages.forEach(pkg => {
        pkg.features.forEach(feature => {
          if (!allFeatures.includes(feature)) {
            allFeatures.push(feature);
          }
        });
      });
     [cite: 482] // Create comparison table
      const table = document.createElement('table');
      table.className = 'comparison-table';
     [cite: 483] // Header row with package names
      let headerRow = '<tr><th>Feature</th>';
     [cite: 484] packages.forEach(pkg => {
        headerRow += `<th class="${pkg.popular ? 'popular-column' : ''}">${pkg.name}${pkg.popular ? '<div class="popular-tag">Most Popular</div>' : ''}</th>`;
      });
     [cite: 485] headerRow += '</tr>';

      // Price row
      let priceRow = '<tr><th>Price</th>';
     [cite: 486] packages.forEach(pkg => {
        priceRow += `<th class="${pkg.popular ? 'popular-column' : ''}">$${formatPrice(pkg.price)}</th>`;
      });
      priceRow += '</tr>';
     [cite: 487] // Hours row
      let hoursRow = '<tr><td>Coverage Hours</td>';
      packages.forEach(pkg => {
        hoursRow += `<td class="${pkg.popular ? 'popular-column' : ''}">${pkg.hours} ${pkg.hours === 1 ? 'hour' : 'hours'}</td>`;
      });
     [cite: 488] hoursRow += '</tr>';

      // Feature rows
      let featureRows = '';
     [cite: 489] allFeatures.forEach(feature => {
        featureRows += `<tr><td>${feature}</td>`;
        packages.forEach(pkg => {
          const included = pkg.features.includes(feature);
          featureRows += `<td class="${pkg.popular ? 'popular-column' : ''}"><span class="${included ? 'feature-included' : 'feature-not-included'}">${included ? '✓' : '✗'}</span></td>`;
        });
        featureRows += '</tr>';
      });
     [cite: 490] // Savings row
      let savingsRow = '<tr><td>Bundle Savings</td>';
      packages.forEach(pkg => {
        savingsRow += `<td class="${pkg.popular ? 'popular-column' : ''}">${pkg.savings ? '$' + formatPrice(pkg.savings) : '-'}</td>`;
      });
     [cite: 491] savingsRow += '</tr>';

      // Select buttons row
      let selectRow = '<tr><td>Select</td>';
     [cite: 492] packages.forEach(pkg => {
        selectRow += `
          <td class="${pkg.popular ? 'popular-column' : ''}">
            <button class="select-button" onclick="selectBasePackage(${JSON.stringify(pkg).replace(/"/g, '&quot;')})">Select</button>
          </td>
        `;
      });
      selectRow += '</tr>';

      // Combine all rows
      table.innerHTML = `
        <thead>
          ${headerRow}
          ${priceRow}
        </thead>
        <tbody>
          ${hoursRow}
          ${featureRows}
          ${savingsRow}
     [cite: 493]    ${selectRow}
        </tbody>
      `;

      packageComparisonView.appendChild(table);
    }

    // Populate add-ons in step 4
    function populateAddOns() {
      // Get relevant add-ons for the selected service type
      let relevantAddOns = [];

      // Get add-ons for the selected service type
      const serviceAddOns = packageData.addOns[selectedServiceType.id] || [];

      // If bundle is selected, also include bundle-specific add-ons
      const bundleAddOns = selectedServiceType.id === 'bundle' ? packageData.addOns.bundle || [] : [];

      // Combine add-ons
      relevantAddOns = [...serviceAddOns, ...bundleAddOns];
     [cite: 494] // Group add-ons by category
      const addOnsByCategory = {};
     [cite: 495] relevantAddOns.forEach(addOn => {
        if (!addOnsByCategory[addOn.category]) {
          addOnsByCategory[addOn.category] = [];
        }
        addOnsByCategory[addOn.category].push(addOn);
      });
     [cite: 496] // Populate category tabs
      const categoryTabs = document.getElementById('category-tabs');
      categoryTabs.innerHTML = '';
     [cite: 497] Object.keys(addOnsByCategory).forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = category;
        tab.addEventListener('click', () => {
          // Scroll to category
          document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`).scrollIntoView({ behavior: 'smooth' });

          // Update active tab
          document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        });

        // Add tooltip functionality
     [cite: 498]  tab.addEventListener('mouseenter', () => showTooltip(tab, category));
        tab.addEventListener('mouseleave', hideTooltip);

        categoryTabs.appendChild(tab);
      });
     [cite: 499] // Populate add-on categories
      const addOnsCategories = document.getElementById('add-ons-categories');
      addOnsCategories.innerHTML = '';
     [cite: 500] Object.entries(addOnsByCategory).forEach(([category, addOns]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'add-on-category';
        categoryDiv.id = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;

        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        addOns.forEach(addOn => {
          const addOnItem = document.createElement('div');
          addOnItem.className = 'add-on-item';
          addOnItem.setAttribute('data-id', addOn.id);

          addOnItem.innerHTML = `
     [cite: 501]     <div class="add-on-checkbox">
              <input type="checkbox" id="${addOn.id}" ${selectedAddOns.some(item => item.id === addOn.id) ? 'checked' : ''}>
              <label for="${addOn.id}"></label>
            </div>
            <div class="add-on-info">
              <div class="add-on-name">
                ${addOn.name}
                ${addOn.popular ? '<span class="popular-tag">Popular</span>' : ''}
     [cite: 502]     </div>
              <div class="add-on-description">${addOn.description}</div>
              ${addOn.savings ? `<div class="add-on-savings">Save $${formatPrice(addOn.savings)}</div>` : ''}
            </div>
            <div class="add-on-price">$${formatPrice(addOn.price)}</div>
          `;
     [cite: 504]   const checkbox = addOnItem.querySelector(`input[type="checkbox"]`);
          checkbox.addEventListener('change', () => toggleAddOn(addOn));

          categoryDiv.appendChild(addOnItem);
        });

        addOnsCategories.appendChild(categoryDiv);
      });

      // Update package summary
      updatePackageSummary();
     [cite: 505] }

    // Populate summary in step 5
    function populateSummary() {
      // Event and service details
      document.getElementById('summary-event-type').textContent = selectedEventType.name;
     [cite: 506] document.getElementById('summary-service-type').textContent = selectedServiceType.name;

      // Base package details
      document.getElementById('summary-package-name').textContent = selectedBasePackage.name;
      document.getElementById('summary-package-price').textContent = `$${formatPrice(selectedBasePackage.price)}`;

      const packageFeatures = document.getElementById('summary-package-features');
     [cite: 507] packageFeatures.innerHTML = '';
      selectedBasePackage.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        packageFeatures.appendChild(li);
      });
     [cite: 508] // Add-ons details
      const summaryAddonsSection = document.getElementById('summary-addons-section');
      const summaryAddonsList = document.getElementById('summary-addons-list');
     [cite: 509] if (selectedAddOns.length > 0) {
        summaryAddonsSection.style.display = 'block';
        summaryAddonsList.innerHTML = '';
     [cite: 510] selectedAddOns.forEach(addOn => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>${addOn.name}</strong> - $${formatPrice(addOn.price)}
            <p>${addOn.description}</p>
          `;
          summaryAddonsList.appendChild(li);
        });
     [cite: 511] } else {
        summaryAddonsSection.style.display = 'none';
      }

      // Pricing summary
      document.getElementById('final-base-price').textContent = `$${formatPrice(selectedBasePackage.price)}`;
     [cite: 512] const finalAddonsContainer = document.getElementById('final-addons-container');
      if (selectedAddOns.length > 0) {
        finalAddonsContainer.style.display = 'block';
     [cite: 513] const addOnsTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('final-addons-price').textContent = `$${formatPrice(addOnsTotal)}`;
     [cite: 514] } else {
        finalAddonsContainer.style.display = 'none';
      }

      const finalSavingsContainer = document.getElementById('final-savings-container');
     [cite: 515] if (savings > 0) {
        finalSavingsContainer.style.display = 'block';
        document.getElementById('final-savings-amount').textContent = `-$${formatPrice(savings)}`;
     [cite: 516] } else {
        finalSavingsContainer.style.display = 'none';
      }

      document.getElementById('final-total-price').textContent = `$${formatPrice(totalPrice)}`;
      document.getElementById('final-deposit-amount').textContent = `$${formatPrice(depositAmount)}`;
     [cite: 517] }

    // Event type selection handler
    function selectEventType(eventType) {
      selectedEventType = eventType;
      selectedServiceType = null;
      selectedBasePackage = null;
      selectedAddOns = [];
     [cite: 518] totalPrice = 0;
      savings = 0;
      depositAmount = 0;

      // Update UI to show selection
      document.querySelectorAll('#event-type-grid .selection-card').forEach(card => {
        card.classList.remove('selected');
        if (card.getAttribute('data-id') === eventType.id) {
          card.classList.add('selected');
        }
      });
     [cite: 519] // Update event name in step 2
      document.getElementById('selected-event-name').textContent = eventType.name.toLowerCase();

      // Populate service types for step 2
      populateServiceTypes();
     [cite: 520] // Go to next step
      goToNextStep();
    }

    // Service type selection handler
    function selectServiceType(serviceType) {
      selectedServiceType = serviceType;
     [cite: 521] selectedBasePackage = null;
      selectedAddOns = [];
      totalPrice = 0;
      savings = 0;
      depositAmount = 0;
     [cite: 522] // Update UI to show selection
      document.querySelectorAll('#service-type-grid .selection-card').forEach(card => {
        card.classList.remove('selected');
        if (card.getAttribute('data-id') === serviceType.id) {
          card.classList.add('selected');
        }
      });
     [cite: 523] // Populate base packages for step 3
      populateBasePackages();

      // Go to next step
      goToNextStep();
     [cite: 524] }

    // Base package selection handler
    function selectBasePackage(pkg) {
      selectedBasePackage = pkg;
      selectedAddOns = [];
      totalPrice = pkg.price;
     [cite: 525] savings = pkg.savings || 0;
      depositAmount = pkg.retainer || (pkg.price * 0.3); // Default 30% deposit if retainer not specified
     [cite: 526] // Update UI to show selection
      document.querySelectorAll('.package-card, .select-button').forEach(el => {
        el.classList.remove('selected');
      });
     [cite: 527] const selectedCard = document.querySelector(`.package-card[data-id="${pkg.id}"]`);
      if (selectedCard) {
        selectedCard.classList.add('selected');
        selectedCard.querySelector('.select-button').classList.add('selected');
     [cite: 528] }

      // Update package summary in step 4
      document.getElementById('base-package-price').textContent = `$${formatPrice(pkg.price)}`;
      updatePackageSummary(); // Call this to reset add-ons summary and total price based on new base package
      document.getElementById('deposit-amount').textContent = `$${formatPrice(depositAmount)}`;
     [cite: 529] // Show/hide savings
      const savingsContainer = document.getElementById('savings-container');
      if (savings > 0) {
        savingsContainer.style.display = 'block';
     [cite: 530] document.getElementById('savings-amount').textContent = `-$${formatPrice(savings)}`;
      } else {
        savingsContainer.style.display = 'none';
     [cite: 531] }

      // Populate add-ons for step 4
      populateAddOns();

      // Go to next step
      goToNextStep();
     [cite: 532] }

    // Add-on toggle handler
    function toggleAddOn(addOn) {
      const isSelected = selectedAddOns.some(item => item.id === addOn.id);
     [cite: 533] if (isSelected) {
        // Remove add-on
        selectedAddOns = selectedAddOns.filter(item => item.id !== addOn.id);
     [cite: 534] } else {
        // Add add-on
        selectedAddOns.push(addOn);
     [cite: 535] }

      // Update UI
      const addOnItem = document.querySelector(`.add-on-item[data-id="${addOn.id}"]`);
     [cite: 536] if (addOnItem) {
        if (isSelected) { // This logic was reversed, fixed now
          addOnItem.classList.remove('selected');
     [cite: 537] } else {
          addOnItem.classList.add('selected');
        }
      }

      // Update package summary
      updatePackageSummary();
     [cite: 538] }

    // Update package summary in step 4
    function updatePackageSummary() {
        // Ensure selectedBasePackage is set
        if (!selectedBasePackage) return;

      // Calculate add-ons total
      const addOnsTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
     [cite: 539] // Update total price
      totalPrice = selectedBasePackage.price + addOnsTotal;

      // Update UI
      document.getElementById('total-price').textContent = `$${formatPrice(totalPrice)}`;
     [cite: 540] // Update add-ons summary
      const addOnsSummaryContainer = document.getElementById('add-ons-summary-container');
      const addOnsSummaryList = document.getElementById('add-ons-summary-list');
     [cite: 541] if (selectedAddOns.length > 0) {
        addOnsSummaryContainer.style.display = 'block';
        document.getElementById('add-ons-total-price').textContent = `$${formatPrice(addOnsTotal)}`;

        addOnsSummaryList.innerHTML = '';
     [cite: 542] selectedAddOns.forEach(addOn => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${addOn.name}</span>
            <span>$${formatPrice(addOn.price)}</span>
          `;
          addOnsSummaryList.appendChild(li);
        });
     [cite: 543] } else {
        addOnsSummaryContainer.style.display = 'none';
      }

      // Update value indicator
      const valueProgress = document.getElementById('value-progress');
     [cite: 544] const progressWidth = Math.min(100, (selectedAddOns.length / 5) * 100); // Example: Max value at 5 add-ons
      valueProgress.style.width = `${progressWidth}%`;
    }

    // Form submission handler
    function handleFormSubmit(e) {
      e.preventDefault();
     [cite: 545] // Prepare package data for submission
        if (!selectedEventType || !selectedServiceType || !selectedBasePackage) {
            alert("Please complete all package selections before submitting.");
            return;
        }

      const packageSummary = {
        eventType: selectedEventType.name,
        serviceType: selectedServiceType.name,
        basePackage: selectedBasePackage.name,
        basePackagePrice: selectedBasePackage.price,
        selectedAddOns: selectedAddOns.map(a => ({ name: a.name, price: a.price })),
        pricing: {
          basePrice: selectedBasePackage.price,
          addOnsTotal: selectedAddOns.reduce((sum, item) => sum + item.price, 0),
          savings: savings,
          totalPrice: totalPrice,
          depositAmount: depositAmount
        },
        customerInfo: {
          name: e.target.name.value,
          email: e.target.email.value,
     [cite: 546]  phone: e.target.phone.value,
          eventDate: e.target.eventDate.value,
          location: e.target.location.value,
          notes: e.target.notes.value
        }
      };
     [cite: 547] console.log('Package Summary:', packageSummary);

      // In a real application, you would send this data to a server using fetch (see implementation guide)
      alert('Booking Request Submitted (Simulation)! We will contact you shortly.');
      // Example using Fetch for Formspree (replace YOUR_FORM_ID):
      /*
      fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(packageSummary)
      }).then(response => {
        if (response.ok) {
          alert("Your package has been submitted! We will contact you shortly.");
          e.target.reset(); // Optionally reset form
          // Optionally reset builder to step 1
        } else {
          alert("There was a problem submitting your form. Please try again.");
        }
      }).catch(error => {
        alert("There was a problem submitting your form. Please try again.");
      });
      */
     [cite: 548] }

    // Navigation functions
    function goToNextStep() {
      // Add checks to ensure selection before proceeding
      if (currentStep === 1 && !selectedEventType) {
          alert("Please select an event type.");
          return;
      }
      if (currentStep === 2 && !selectedServiceType) {
          alert("Please select a service type.");
          return;
      }
       if (currentStep === 3 && !selectedBasePackage) {
          alert("Please select a base package.");
          return;
      }

      if (currentStep < 5) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).style.display = 'none';
     [cite: 549] // Show next step
        currentStep++;
        document.getElementById(`step-${currentStep}`).style.display = 'block';

        // Update progress bar
        updateProgressBar();
     [cite: 550] // If going to summary step, populate summary
        if (currentStep === 5) {
          populateSummary();
     [cite: 551] }

        // Scroll to top of builder
        document.getElementById('package-builder-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
     [cite: 552] }
    }

    function goToPreviousStep() {
      if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).style.display = 'none';
     [cite: 553] // Show previous step
        currentStep--;
        document.getElementById(`step-${currentStep}`).style.display = 'block';

        // Update progress bar
        updateProgressBar();
     [cite: 554] // Scroll to top of builder
        document.getElementById('package-builder-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
     [cite: 555] }
    }

    // Update progress bar
    function updateProgressBar() {
      document.querySelectorAll('.progress-bar .step').forEach((step, index) => {
        if (index + 1 <= currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
     [cite: 556] }

    // Set view mode for base packages
    function setViewMode(mode) {
      comparisonView = mode === 'comparison';
     [cite: 557] // Update toggle buttons
      document.getElementById('card-view-btn').classList.toggle('active', !comparisonView);
      document.getElementById('comparison-view-btn').classList.toggle('active', comparisonView);

      // Show/hide views
      document.getElementById('package-cards-view').style.display = comparisonView ? 'none' : 'grid'; // Use grid for card view
     [cite: 558] document.getElementById('package-comparison-view').style.display = comparisonView ? 'block' : 'none';
    }

    // Tooltip functions
    function setupTooltips() {
      // Add event listeners for tooltips (simplified example)
      // A more robust solution might handle positioning better.
     [cite: 559] }

    function showTooltip(element, id) {
      // Remove any existing tooltips
      hideTooltip();
     [cite: 560] // Check if tooltip content exists
      if (!tooltips[id]) return;

      // Create tooltip
      const tooltip = document.createElement('div');
     [cite: 561] tooltip.className = 'tooltip';
      tooltip.textContent = tooltips[id];
      tooltip.id = 'active-tooltip';

     // Basic positioning relative to element (might need refinement)
      element.style.position = 'relative'; // Ensure parent is positioned
      element.appendChild(tooltip);
     [cite: 562] // Set active tooltip
      activeTooltip = tooltip;
    }

    function hideTooltip() {
      // Remove any existing tooltips
      const existingTooltip = document.getElementById('active-tooltip');
     [cite: 563] if (existingTooltip && existingTooltip.parentNode) {
         existingTooltip.parentNode.removeChild(existingTooltip);
      }

      // Clear active tooltip
      activeTooltip = null;
     [cite: 564] }

    // Helper function to format price
    function formatPrice(price) {
        if (typeof price !== 'number') return '0.00';
      return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
     [cite: 565] }

    // Scroll to builder section
    function scrollToBuilder() {
      document.getElementById('package-builder-section').scrollIntoView({ behavior: 'smooth' });
    }
