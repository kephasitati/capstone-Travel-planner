// Amadeus API Integration Module
// Handles authentication and API calls to Amadeus Travel APIs

interface AmadeusToken {
  access_token: string;
  expires_at: number;
}

let cachedToken: AmadeusToken | null = null;

/**
 * Get OAuth access token from Amadeus
 * Caches token until it expires
 */
async function getAccessToken(): Promise<string> {
  // Return cached token if still valid
  if (cachedToken && cachedToken.expires_at > Date.now()) {
    return cachedToken.access_token;
  }

  const apiKey = Deno.env.get('AMADEUS_API_KEY');
  const apiSecret = Deno.env.get('AMADEUS_API_SECRET');

  if (!apiKey || !apiSecret) {
    throw new Error('Amadeus API credentials not configured');
  }

  try {
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Amadeus authentication failed: ${error}`);
    }

    const data = await response.json();
    
    // Cache token (expires in ~30 minutes, cache for 25 minutes to be safe)
    cachedToken = {
      access_token: data.access_token,
      expires_at: Date.now() + (25 * 60 * 1000),
    };

    return cachedToken.access_token;
  } catch (error) {
    console.error('Error getting Amadeus access token:', error);
    throw new Error(`Failed to authenticate with Amadeus: ${error.message}`);
  }
}

/**
 * Make authenticated request to Amadeus API
 */
async function makeAmadeusRequest(endpoint: string, params: Record<string, string> = {}) {
  const token = await getAccessToken();
  
  const url = new URL(`https://test.api.amadeus.com${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Amadeus API error: ${response.status} - ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error calling Amadeus API ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Search for airport/city by keyword
 */
export async function searchLocations(keyword: string, subType: string = 'AIRPORT,CITY') {
  return makeAmadeusRequest('/v1/reference-data/locations', {
    keyword,
    subType,
  });
}

/**
 * Search flight offers
 */
export async function searchFlights(params: {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  adults: string;
  returnDate?: string;
  max?: string;
}) {
  return makeAmadeusRequest('/v2/shopping/flight-offers', params);
}

/**
 * Search hotels by city code
 */
export async function searchHotelsByCity(cityCode: string, radius?: string, radiusUnit?: string) {
  return makeAmadeusRequest('/v1/reference-data/locations/hotels/by-city', {
    cityCode,
    radius: radius || '20',
    radiusUnit: radiusUnit || 'KM',
  });
}

/**
 * Get hotel offers
 */
export async function getHotelOffers(hotelIds: string, adults?: string, checkInDate?: string, checkOutDate?: string) {
  return makeAmadeusRequest('/v3/shopping/hotel-offers', {
    hotelIds,
    adults: adults || '1',
    checkInDate: checkInDate || '',
    checkOutDate: checkOutDate || '',
  });
}

/**
 * Search hotels by geocode
 */
export async function searchHotelsByGeocode(latitude: string, longitude: string, radius?: string) {
  return makeAmadeusRequest('/v1/reference-data/locations/hotels/by-geocode', {
    latitude,
    longitude,
    radius: radius || '20',
  });
}

/**
 * Get airline information
 */
export async function getAirlineInfo(airlineCodes: string) {
  return makeAmadeusRequest('/v1/reference-data/airlines', {
    airlineCodes,
  });
}

/**
 * Get airport/city information
 */
export async function getLocationInfo(keyword: string) {
  return makeAmadeusRequest('/v1/reference-data/locations', {
    keyword,
    subType: 'AIRPORT,CITY',
  });
}

/**
 * Search for points of interest (attractions)
 */
export async function searchPointsOfInterest(latitude: string, longitude: string, radius?: string) {
  return makeAmadeusRequest('/v1/shopping/activities', {
    latitude,
    longitude,
    radius: radius || '20',
  });
}

/**
 * Search activities by destination
 */
export async function searchActivitiesBySquare(north: string, west: string, south: string, east: string) {
  return makeAmadeusRequest('/v1/shopping/activities/by-square', {
    north,
    west,
    south,
    east,
  });
}
