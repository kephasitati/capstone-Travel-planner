import type { Destination } from "../components/DestinationCard";
import type { Flight } from "../components/FlightCard";
import type { HotelOffer } from "../components/HotelCard";

// Mock destinations data - Africa focused, mainly Kenya
export const mockDestinations: Record<string, Destination[]> = {
  nairobi: [
    {
      id: "1",
      name: "Nairobi",
      country: "Kenya",
      cityCode: "NBO",
      imageUrl: "https://images.unsplash.com/photo-1664181220731-06219378d8c7?w=800",
      rating: 4.7,
      description: "Kenya's vibrant capital city, gateway to East African safaris"
    }
  ],
  mombasa: [
    {
      id: "2",
      name: "Mombasa",
      country: "Kenya",
      cityCode: "MBA",
      imageUrl: "https://images.unsplash.com/photo-1711802536795-2f5801365ce9?w=800",
      rating: 4.6,
      description: "Coastal paradise with pristine beaches and rich Swahili culture"
    }
  ],
  "masai mara": [
    {
      id: "3",
      name: "Masai Mara",
      country: "Kenya",
      cityCode: "MMR",
      imageUrl: "https://images.unsplash.com/photo-1647718089158-d488578149de?w=800",
      rating: 4.9,
      description: "World-famous wildlife reserve, home to the Great Migration"
    }
  ],
  kisumu: [
    {
      id: "4",
      name: "Kisumu",
      country: "Kenya",
      cityCode: "KIS",
      imageUrl: "https://images.unsplash.com/photo-1618856445394-259e67220916?w=800",
      rating: 4.5,
      description: "Lakeside city on the shores of Lake Victoria, Kenya's third-largest city"
    }
  ],
  "cape town": [
    {
      id: "5",
      name: "Cape Town",
      country: "South Africa",
      cityCode: "CPT",
      imageUrl: "https://images.unsplash.com/photo-1529528070131-eda9f3e90919?w=800",
      rating: 4.8,
      description: "Stunning coastal city with Table Mountain and diverse culture"
    }
  ],
  zanzibar: [
    {
      id: "6",
      name: "Zanzibar",
      country: "Tanzania",
      cityCode: "ZNZ",
      imageUrl: "https://images.unsplash.com/photo-1707296014163-488ae4006ce7?w=800",
      rating: 4.7,
      description: "Exotic island paradise with white sand beaches and spice plantations"
    }
  ],
  "victoria falls": [
    {
      id: "7",
      name: "Victoria Falls",
      country: "Zimbabwe",
      cityCode: "VFA",
      imageUrl: "https://images.unsplash.com/photo-1627347456206-d3df7d8484b0?w=800",
      rating: 4.9,
      description: "One of the world's largest waterfalls, a natural wonder of Africa"
    }
  ],
  serengeti: [
    {
      id: "8",
      name: "Serengeti",
      country: "Tanzania",
      cityCode: "SER",
      imageUrl: "https://images.unsplash.com/photo-1678461048112-2bb5298f7187?w=800",
      rating: 4.8,
      description: "Vast plains teeming with wildlife and endless natural beauty"
    }
  ]
};

export const mockAttractions: Record<string, string[]> = {
  NBO: [
    "Nairobi National Park",
    "David Sheldrick Wildlife Trust (Elephant Orphanage)",
    "Giraffe Centre",
    "Karen Blixen Museum",
    "Bomas of Kenya",
    "Nairobi National Museum",
    "Karura Forest",
    "The Nairobi Railway Museum"
  ],
  MBA: [
    "Fort Jesus",
    "Diani Beach",
    "Old Town Mombasa",
    "Haller Park",
    "Bamburi Beach",
    "Mombasa Marine National Park",
    "Nyali Beach",
    "Mamba Village Centre"
  ],
  MMR: [
    "Great Wildebeest Migration",
    "Big Five Game Viewing",
    "Mara River Crossings",
    "Hot Air Balloon Safari",
    "Maasai Village Visits",
    "Sunset Game Drives",
    "Bird Watching (over 450 species)",
    "Photography Safari"
  ],
  KIS: [
    "Kisumu Impala Sanctuary",
    "Dunga Beach",
    "Kisumu Museum",
    "Ndere Island National Park",
    "Hippo Point",
    "Lake Victoria Boat Tours",
    "Kit Mikayi Rock Formation",
    "Kisumu City Market"
  ],
  CPT: [
    "Table Mountain",
    "Robben Island",
    "Cape of Good Hope",
    "V&A Waterfront",
    "Kirstenbosch National Botanical Garden",
    "Chapman's Peak Drive",
    "Bo-Kaap (Cape Malay Quarter)",
    "Boulders Beach (African Penguins)"
  ],
  ZNZ: [
    "Stone Town UNESCO Site",
    "Nungwi Beach",
    "Jozani Forest (Red Colobus Monkeys)",
    "Spice Farm Tours",
    "Prison Island (Giant Tortoises)",
    "Mnemba Atoll Diving",
    "Kendwa Beach",
    "Forodhani Night Market"
  ],
  VFA: [
    "Victoria Falls Bridge",
    "Devil's Pool",
    "Helicopter Flight over the Falls",
    "Zambezi River Cruise",
    "Bungee Jumping",
    "White Water Rafting",
    "Rainforest Walk",
    "Livingstone Island"
  ],
  SER: [
    "Wildebeest Migration",
    "Serengeti Hot Air Balloon Safari",
    "Big Five Safari",
    "Ngorongoro Crater",
    "Olduvai Gorge",
    "Seronera Valley",
    "Grumeti River",
    "Maasai Cultural Tours"
  ]
};

export const mockFlights: Record<string, Flight[]> = {
  NBO: [
    {
      id: "f1",
      airline: "Kenya Airways",
      origin: "JFK",
      destination: "NBO",
      departureTime: "11:30 PM",
      arrivalTime: "10:30 PM +1",
      duration: "14h 00m",
      price: 850,
      currency: "USD",
      stops: 0
    },
    {
      id: "f2",
      airline: "Ethiopian Airlines",
      origin: "JFK",
      destination: "NBO",
      departureTime: "8:45 PM",
      arrivalTime: "6:15 PM +1",
      duration: "16h 30m",
      price: 720,
      currency: "USD",
      stops: 1
    },
    {
      id: "f3",
      airline: "Qatar Airways",
      origin: "LHR",
      destination: "NBO",
      departureTime: "7:00 PM",
      arrivalTime: "6:00 AM +1",
      duration: "8h 00m",
      price: 650,
      currency: "USD",
      stops: 0
    }
  ],
  MBA: [
    {
      id: "f4",
      airline: "Kenya Airways",
      origin: "NBO",
      destination: "MBA",
      departureTime: "7:00 AM",
      arrivalTime: "8:15 AM",
      duration: "1h 15m",
      price: 120,
      currency: "USD",
      stops: 0
    },
    {
      id: "f5",
      airline: "Jambojet",
      origin: "NBO",
      destination: "MBA",
      departureTime: "2:30 PM",
      arrivalTime: "3:45 PM",
      duration: "1h 15m",
      price: 85,
      currency: "USD",
      stops: 0
    }
  ],
  KIS: [
    {
      id: "f6",
      airline: "Kenya Airways",
      origin: "NBO",
      destination: "KIS",
      departureTime: "6:30 AM",
      arrivalTime: "7:30 AM",
      duration: "1h 00m",
      price: 95,
      currency: "USD",
      stops: 0
    },
    {
      id: "f7",
      airline: "Jambojet",
      origin: "NBO",
      destination: "KIS",
      departureTime: "3:00 PM",
      arrivalTime: "4:00 PM",
      duration: "1h 00m",
      price: 75,
      currency: "USD",
      stops: 0
    }
  ],
  CPT: [
    {
      id: "f8",
      airline: "South African Airways",
      origin: "JFK",
      destination: "CPT",
      departureTime: "10:00 PM",
      arrivalTime: "8:30 PM +1",
      duration: "15h 30m",
      price: 950,
      currency: "USD",
      stops: 0
    },
    {
      id: "f9",
      airline: "Kenya Airways",
      origin: "NBO",
      destination: "CPT",
      departureTime: "11:00 AM",
      arrivalTime: "3:45 PM",
      duration: "4h 45m",
      price: 380,
      currency: "USD",
      stops: 0
    }
  ],
  ZNZ: [
    {
      id: "f10",
      airline: "Precision Air",
      origin: "NBO",
      destination: "ZNZ",
      departureTime: "9:00 AM",
      arrivalTime: "10:30 AM",
      duration: "1h 30m",
      price: 150,
      currency: "USD",
      stops: 0
    },
    {
      id: "f11",
      airline: "Kenya Airways",
      origin: "NBO",
      destination: "ZNZ",
      departureTime: "2:00 PM",
      arrivalTime: "3:30 PM",
      duration: "1h 30m",
      price: 175,
      currency: "USD",
      stops: 0
    }
  ]
};

export const mockHotels: Record<string, HotelOffer[]> = {
  NBO: [
    {
      id: "h1",
      name: "Hemingways Nairobi",
      rating: 5,
      price: 320,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "8km from city center"
    },
    {
      id: "h2",
      name: "Sarova Stanley",
      rating: 4,
      price: 180,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "0.5km from CBD"
    },
    {
      id: "h3",
      name: "Villa Rosa Kempinski",
      rating: 5,
      price: 280,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "1km from city center"
    }
  ],
  MBA: [
    {
      id: "h4",
      name: "Serena Beach Resort & Spa",
      rating: 5,
      price: 250,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "On the beach"
    },
    {
      id: "h5",
      name: "Bamburi Beach Hotel",
      rating: 4,
      price: 140,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "Beachfront"
    },
    {
      id: "h6",
      name: "Diani Reef Beach Resort",
      rating: 4,
      price: 160,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "Diani Beach"
    }
  ],
  MMR: [
    {
      id: "h7",
      name: "Angama Mara",
      rating: 5,
      price: 850,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "In the reserve"
    },
    {
      id: "h8",
      name: "Mara Serena Safari Lodge",
      rating: 4,
      price: 380,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "In the reserve"
    }
  ],
  KIS: [
    {
      id: "h9",
      name: "Acacia Premier Hotel",
      rating: 4,
      price: 95,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "2km from lakefront"
    },
    {
      id: "h10",
      name: "Imperial Hotel Kisumu",
      rating: 3,
      price: 65,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      amenities: ["WiFi", "Restaurant"],
      distance: "City center"
    }
  ],
  CPT: [
    {
      id: "h11",
      name: "One&Only Cape Town",
      rating: 5,
      price: 450,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "V&A Waterfront"
    },
    {
      id: "h12",
      name: "The Table Bay Hotel",
      rating: 5,
      price: 380,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "Waterfront"
    }
  ],
  ZNZ: [
    {
      id: "h13",
      name: "The Residence Zanzibar",
      rating: 5,
      price: 420,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "Kizimkazi Beach"
    },
    {
      id: "h14",
      name: "Zuri Zanzibar",
      rating: 5,
      price: 350,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "Kendwa Beach"
    }
  ]
};

export const mockWeather: Record<string, { temp: number; condition: string }> = {
  NBO: { temp: 22, condition: "Partly Cloudy" },
  MBA: { temp: 28, condition: "Sunny & Humid" },
  MMR: { temp: 25, condition: "Sunny" },
  KIS: { temp: 26, condition: "Warm & Clear" },
  CPT: { temp: 18, condition: "Partly Cloudy" },
  ZNZ: { temp: 30, condition: "Tropical" },
  VFA: { temp: 24, condition: "Sunny" },
  SER: { temp: 23, condition: "Clear" }
};

export function searchDestinations(query: string): Destination[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    return Object.values(mockDestinations).flat();
  }
  
  const exactMatch = mockDestinations[searchTerm];
  if (exactMatch) {
    return exactMatch;
  }
  
  return Object.values(mockDestinations)
    .flat()
    .filter(dest => 
      dest.name.toLowerCase().includes(searchTerm) ||
      dest.country.toLowerCase().includes(searchTerm) ||
      dest.description?.toLowerCase().includes(searchTerm)
    );
}
