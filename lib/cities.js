// lib/cities.js - Seed data for major US cities

export const cities = [
  { name: "New York", state: "NY", slug: "new-york" },
  { name: "Los Angeles", state: "CA", slug: "los-angeles" },
  { name: "Chicago", state: "IL", slug: "chicago" },
  { name: "Houston", state: "TX", slug: "houston" },
  { name: "Phoenix", state: "AZ", slug: "phoenix" },
  { name: "Philadelphia", state: "PA", slug: "philadelphia" },
  { name: "San Antonio", state: "TX", slug: "san-antonio" },
  { name: "San Diego", state: "CA", slug: "san-diego" },
  { name: "Dallas", state: "TX", slug: "dallas" },
  { name: "San Jose", state: "CA", slug: "san-jose" },
  { name: "Austin", state: "TX", slug: "austin" },
  { name: "Jacksonville", state: "FL", slug: "jacksonville" },
];

export const neighborhoods = {
  "New York": ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
  "Los Angeles": [
    "Downtown LA",
    "Santa Monica",
    "Beverly Hills",
    "West Hollywood",
    "Long Beach",
  ],
  Chicago: ["Loop", "Lincoln Park", "Wicker Park", "Hyde Park", "Pilsen"],
  Houston: ["Downtown", "Midtown", "Montrose", "Bellaire", "The Woodlands"],
  Phoenix: [
    "Downtown",
    "Scottsdale",
    "Ahwatukee",
    "Arcadia",
    "Paradise Valley",
  ],
  Philadelphia: [
    "Center City",
    "Rittenhouse Square",
    "Fairmount",
    "Fishtown",
    "University City",
  ],
  "San Antonio": [
    "Downtown",
    "SouthTown",
    "Medical Center",
    "Loop 1604",
    "Northside",
  ],
  "San Diego": [
    "Downtown",
    "La Jolla",
    "Mission Beach",
    "Gaslamp Quarter",
    "Balboa Park",
  ],
  Dallas: ["Downtown", "Uptown", "Deep Ellum", "Oak Lawn", "East Dallas"],
  "San Jose": [
    "Downtown",
    "Almaden Valley",
    "Evergreen",
    "Cambrian Park",
    "Berryessa",
  ],
  Austin: [
    "Downtown",
    "South Congress",
    "East Austin",
    "North Austin",
    "West Lake Hills",
  ],
  Jacksonville: ["Downtown", "San Marco", "Beach", "Riverside", "Arlington"],
};

export const getCityBySlug = (slug) => cities.find((c) => c.slug === slug);
