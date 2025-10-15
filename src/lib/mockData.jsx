import type { Destination } from "../components/DestinationCard";
import type { Flight } from "../components/FlightCard";
import type { HotelOffer } from "../components/HotelCard";

// Mock destinations data
export const mockDestinations: Record<string, Destination[]> = {
  paris: [
    {
      id: "1",
      name: "Paris",
      country: "France",
      cityCode: "PAR",
      imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      rating: 4.8,
      description: "The City of Light, known for the Eiffel Tower, art, and cuisine"
    }
  ],
  london: [
    {
      id: "2",
      name: "London",
      country: "United Kingdom",
      cityCode: "LON",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
      rating: 4.7,
      description: "Historic city featuring Big Ben, the British Museum, and royal palaces"
    }
  ],
  tokyo: [
    {
      id: "3",
      name: "Tokyo",
      country: "Japan",
      cityCode: "TYO",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      rating: 4.9,
      description: "Modern metropolis blending tradition with cutting-edge technology"
    }
  ],
  rome: [
    {
      id: "4",
      name: "Rome",
      country: "Italy",
      cityCode: "ROM",
      imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
      rating: 4.8,
      description: "Ancient city with the Colosseum, Vatican, and incredible history"
    }
  ],
  barcelona: [
    {
      id: "5",
      name: "Barcelona",
      country: "Spain",
      cityCode: "BCN",
      imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
      rating: 4.7,
      description: "Mediterranean city famous for Gaudí's architecture and vibrant culture"
    }
  ],
  dubai: [
    {
      id: "6",
      name: "Dubai",
      country: "United Arab Emirates",
      cityCode: "DXB",
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      rating: 4.6,
      description: "Futuristic city with towering skyscrapers and luxury experiences"
    }
  ],
  "new york": [
    {
      id: "7",
      name: "New York",
      country: "United States",
      cityCode: "NYC",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      rating: 4.7,
      description: "The Big Apple - iconic skyline, Broadway, and diverse neighborhoods"
    }
  ],
  bali: [
    {
      id: "8",
      name: "Bali",
      country: "Indonesia",
      cityCode: "DPS",
      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      rating: 4.8,
      description: "Tropical paradise with beautiful beaches, temples, and rice terraces"
    }
  ]
};

export const mockAttractions: Record<string, string[]> = {
  PAR: [
    "Eiffel Tower",
    "Louvre Museum",
    "Notre-Dame Cathedral",
    "Arc de Triomphe",
    "Sacré-Cœur Basilica",
    "Palace of Versailles"
  ],
  LON: [
    "Big Ben & Houses of Parliament",
    "British Museum",
    "Tower of London",
    "Buckingham Palace",
    "London Eye",
    "Westminster Abbey"
  ],
  TYO: [
    "Senso-ji Temple",
    "Tokyo Skytree",
    "Meiji Shrine",
    "Shibuya Crossing",
    "Imperial Palace",
    "Tsukiji Outer Market"
  ],
  ROM: [
    "Colosseum",
    "Vatican Museums & Sistine Chapel",
    "Roman Forum",
    "Trevi Fountain",
    "Pantheon",
    "Spanish Steps"
  ],
  BCN: [
    "Sagrada Familia",
    "Park Güell",
    "Las Ramblas",
    "Casa Batlló",
    "Gothic Quarter",
    "Camp Nou Stadium"
  ],
  DXB: [
    "Burj Khalifa",
    "Dubai Mall",
    "Palm Jumeirah",
    "Dubai Marina",
    "Gold Souk",
    "Desert Safari"
  ],
  NYC: [
    "Statue of Liberty",
    "Central Park",
    "Times Square",
    "Empire State Building",
    "Brooklyn Bridge",
    "Metropolitan Museum of Art"
  ],
  DPS: [
    "Tanah Lot Temple",
    "Ubud Monkey Forest",
    "Tegallalang Rice Terraces",
    "Uluwatu Temple",
    "Sacred Monkey Forest Sanctuary",
    "Mount Batur"
  ]
};

export const mockFlights: Record<string, Flight[]> = {
  PAR: [
    {
      id: "f1",
      airline: "Air France",
      origin: "JFK",
      destination: "CDG",
      departureTime: "10:00 AM",
      arrivalTime: "11:30 PM",
      duration: "7h 30m",
      price: 650,
      currency: "USD",
      stops: 0
    },
    {
      id: "f2",
      airline: "British Airways",
      origin: "JFK",
      destination: "CDG",
      departureTime: "2:00 PM",
      arrivalTime: "3:45 AM",
      duration: "9h 45m",
      price: 520,
      currency: "USD",
      stops: 1
    }
  ],
  LON: [
    {
      id: "f3",
      airline: "British Airways",
      origin: "JFK",
      destination: "LHR",
      departureTime: "8:00 PM",
      arrivalTime: "8:00 AM",
      duration: "7h 00m",
      price: 580,
      currency: "USD",
      stops: 0
    },
    {
      id: "f4",
      airline: "Virgin Atlantic",
      origin: "JFK",
      destination: "LHR",
      departureTime: "11:00 AM",
      arrivalTime: "11:00 PM",
      duration: "7h 00m",
      price: 615,
      currency: "USD",
      stops: 0
    }
  ],
  TYO: [
    {
      id: "f5",
      airline: "Japan Airlines",
      origin: "JFK",
      destination: "NRT",
      departureTime: "1:00 PM",
      arrivalTime: "4:00 PM +1",
      duration: "14h 00m",
      price: 1200,
      currency: "USD",
      stops: 0
    },
    {
      id: "f6",
      airline: "ANA",
      origin: "JFK",
      destination: "HND",
      departureTime: "11:00 AM",
      arrivalTime: "2:30 PM +1",
      duration: "14h 30m",
      price: 1150,
      currency: "USD",
      stops: 0
    }
  ]
};

export const mockHotels: Record<string, HotelOffer[]> = {
  PAR: [
    {
      id: "h1",
      name: "Hotel Le Bristol Paris",
      rating: 5,
      price: 450,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "0.5km"
    },
    {
      id: "h2",
      name: "Hotel Eiffel Trocadéro",
      rating: 4,
      price: 280,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["WiFi", "Restaurant"],
      distance: "1.2km"
    }
  ],
  LON: [
    {
      id: "h3",
      name: "The Savoy",
      rating: 5,
      price: 520,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "0.3km"
    },
    {
      id: "h4",
      name: "Thistle Piccadilly",
      rating: 4,
      price: 210,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      amenities: ["WiFi", "Restaurant"],
      distance: "0.8km"
    }
  ],
  TYO: [
    {
      id: "h5",
      name: "The Peninsula Tokyo",
      rating: 5,
      price: 600,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      amenities: ["WiFi", "Restaurant", "Pool"],
      distance: "0.2km"
    },
    {
      id: "h6",
      name: "Shinjuku Granbell Hotel",
      rating: 4,
      price: 180,
      currency: "USD",
      pricePerNight: true,
      imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
      amenities: ["WiFi", "Restaurant"],
      distance: "1.5km"
    }
  ]
};

export const mockWeather: Record<string, { temp: number; condition: string }> = {
  PAR: { temp: 18, condition: "Partly Cloudy" },
  LON: { temp: 15, condition: "Rainy" },
  TYO: { temp: 22, condition: "Sunny" },
  ROM: { temp: 24, condition: "Sunny" },
  BCN: { temp: 26, condition: "Clear" },
  DXB: { temp: 35, condition: "Hot & Sunny" },
  NYC: { temp: 20, condition: "Clear" },
  DPS: { temp: 28, condition: "Tropical" }
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
