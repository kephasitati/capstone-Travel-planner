// src/lib/amadeusService.ts

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const publicAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY;

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-d1af544d`;

interface ApiOptions {
  params?: Record<string, string>;
}

async function makeApiCall(endpoint: string, options: ApiOptions = {}) {
  const { params = {} } = options;

  const url = new URL(`${API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${publicAnonKey}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `API call failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error calling ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Search for airports and cities
 */
export async function searchLocations(keyword: string, subType: string = 'AIRPORT,CITY') {
  return makeApiCall('/locations/search', {
    params: { keyword, subType },
  });
}

/**
 * Search for flight offers
 */
export async function searchFlights(params: {
  origin: string;
  destination: string;
  departureDate: string;
  adults?: string;
  returnDate?: string;
  max?: string;
}) {
  return makeApiCall('/flights/search', {
    params: {
      origin: params.origin,
      destination: params.destination,
      departureDate: params.departureDate,
      adults: params.adults || '1',
      returnDate: params.returnDate || '',
      max: params.max || '10',
    },
  });
}

/**
 * Search hotels by city code
 */
export async function searchHotelsByCity(cityCode: string, radius?: string, radiusUnit?: string) {
  return makeApiCall('/hotels/by-city', {
    params: {
      cityCode,
      radius: radius || '20',
      radiusUnit: radiusUnit || 'KM',
    },
  });
}

/**
 * Get hotel offers for specific hotels
 */
export async function getHotelOffers(params: {
  hotelIds: string;
  adults?: string;
  checkInDate?: string;
  checkOutDate?: string;
}) {
  return makeApiCall('/hotels/offers', {
    params: {
      hotelIds: params.hotelIds,
      adults: params.adults || '1',
      checkInDate: params.checkInDate || '',
      checkOutDate: params.checkOutDate || '',
    },
  });
}

/**
 * Search hotels by geographic coordinates
 */
export async function searchHotelsByGeocode(latitude: string, longitude: string, radius?: string) {
  return makeApiCall('/hotels/by-geocode', {
    params: {
      latitude,
      longitude,
      radius: radius || '20',
    },
  });
}

/**
 * Get airline information
 */
export async function getAirlineInfo(airlineCodes: string) {
  return makeApiCall('/airlines', {
    params: { airlineCodes },
  });
}

/**
 * Search for attractions/points of interest
 */
export async function searchAttractions(latitude: string, longitude: string, radius?: string) {
  return makeApiCall('/attractions', {
    params: {
      latitude,
      longitude,
      radius: radius || '20',
    },
  });
}

/**
 * Format Amadeus flight data
 */
export function formatFlightData(amadeusData: any) {
  if (!amadeusData?.data || amadeusData.data.length === 0) {
    return [];
  }

  return amadeusData.data.map((offer: any, index: number) => {
    const itinerary = offer.itineraries[0];
    const segment = itinerary.segments[0];
    const lastSegment = itinerary.segments[itinerary.segments.length - 1];

    return {
      id: `flight-${index}`,
      airline: segment.carrierCode,
      origin: segment.departure.iataCode,
      destination: lastSegment.arrival.iataCode,
      departureTime: new Date(segment.departure.at).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      arrivalTime: new Date(lastSegment.arrival.at).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      duration: itinerary.duration.replace('PT', '').toLowerCase(),
      price: parseFloat(offer.price.total),
      currency: offer.price.currency,
      stops: itinerary.segments.length - 1,
    };
  });
}

/**
 * Format Amadeus hotel data
 */
export function formatHotelData(hotelListData: any, hotelOffersData?: any) {
  if (!hotelListData?.data || hotelListData.data.length === 0) {
    return [];
  }

  return hotelListData.data.slice(0, 10).map((hotel: any, index: number) => {
    const offer = hotelOffersData?.data?.find((o: any) => o.hotel.hotelId === hotel.hotelId);

    return {
      id: hotel.hotelId,
      name: hotel.name,
      rating: 4,
      price: offer?.offers?.[0]?.price?.total || 150,
      currency: offer?.offers?.[0]?.price?.currency || 'USD',
      pricePerNight: true,
      imageUrl: `https://images.unsplash.com/photo-${1566073771259 + index}?w=800`,
      amenities: hotel.amenities?.slice(0, 3) || ['WiFi', 'Restaurant', 'Pool'],
      distance: hotel.distance?.value
        ? `${hotel.distance.value}${hotel.distance.unit} from center`
        : 'City center',
    };
  });
}
