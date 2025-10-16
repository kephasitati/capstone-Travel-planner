import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import * as amadeus from "./amadeus.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d1af544d/health", (c) => {
  return c.json({ status: "ok" });
});

// Amadeus API Routes

// Search locations (airports/cities)
app.get("/make-server-d1af544d/locations/search", async (c) => {
  try {
    const keyword = c.req.query("keyword");
    if (!keyword) {
      return c.json({ error: "keyword parameter is required" }, 400);
    }
    
    const subType = c.req.query("subType") || "AIRPORT,CITY";
    const data = await amadeus.searchLocations(keyword, subType);
    return c.json(data);
  } catch (error) {
    console.error("Location search error:", error);
    return c.json({ error: `Location search failed: ${error.message}` }, 500);
  }
});

// Search flights
app.get("/make-server-d1af544d/flights/search", async (c) => {
  try {
    const origin = c.req.query("origin");
    const destination = c.req.query("destination");
    const departureDate = c.req.query("departureDate");
    const adults = c.req.query("adults") || "1";
    
    if (!origin || !destination || !departureDate) {
      return c.json({ 
        error: "origin, destination, and departureDate parameters are required" 
      }, 400);
    }
    
    const params = {
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate,
      adults,
      returnDate: c.req.query("returnDate"),
      max: c.req.query("max") || "10",
    };
    
    const data = await amadeus.searchFlights(params);
    return c.json(data);
  } catch (error) {
    console.error("Flight search error:", error);
    return c.json({ error: `Flight search failed: ${error.message}` }, 500);
  }
});

// Search hotels by city
app.get("/make-server-d1af544d/hotels/by-city", async (c) => {
  try {
    const cityCode = c.req.query("cityCode");
    if (!cityCode) {
      return c.json({ error: "cityCode parameter is required" }, 400);
    }
    
    const radius = c.req.query("radius");
    const radiusUnit = c.req.query("radiusUnit");
    
    const data = await amadeus.searchHotelsByCity(cityCode, radius, radiusUnit);
    return c.json(data);
  } catch (error) {
    console.error("Hotel search by city error:", error);
    return c.json({ error: `Hotel search failed: ${error.message}` }, 500);
  }
});

// Get hotel offers
app.get("/make-server-d1af544d/hotels/offers", async (c) => {
  try {
    const hotelIds = c.req.query("hotelIds");
    if (!hotelIds) {
      return c.json({ error: "hotelIds parameter is required" }, 400);
    }
    
    const adults = c.req.query("adults");
    const checkInDate = c.req.query("checkInDate");
    const checkOutDate = c.req.query("checkOutDate");
    
    const data = await amadeus.getHotelOffers(hotelIds, adults, checkInDate, checkOutDate);
    return c.json(data);
  } catch (error) {
    console.error("Hotel offers error:", error);
    return c.json({ error: `Hotel offers failed: ${error.message}` }, 500);
  }
});

// Search hotels by geocode
app.get("/make-server-d1af544d/hotels/by-geocode", async (c) => {
  try {
    const latitude = c.req.query("latitude");
    const longitude = c.req.query("longitude");
    
    if (!latitude || !longitude) {
      return c.json({ error: "latitude and longitude parameters are required" }, 400);
    }
    
    const radius = c.req.query("radius");
    const data = await amadeus.searchHotelsByGeocode(latitude, longitude, radius);
    return c.json(data);
  } catch (error) {
    console.error("Hotel search by geocode error:", error);
    return c.json({ error: `Hotel search failed: ${error.message}` }, 500);
  }
});

// Get airline information
app.get("/make-server-d1af544d/airlines", async (c) => {
  try {
    const airlineCodes = c.req.query("airlineCodes");
    if (!airlineCodes) {
      return c.json({ error: "airlineCodes parameter is required" }, 400);
    }
    
    const data = await amadeus.getAirlineInfo(airlineCodes);
    return c.json(data);
  } catch (error) {
    console.error("Airline info error:", error);
    return c.json({ error: `Airline lookup failed: ${error.message}` }, 500);
  }
});

// Search points of interest (attractions)
app.get("/make-server-d1af544d/attractions", async (c) => {
  try {
    const latitude = c.req.query("latitude");
    const longitude = c.req.query("longitude");
    
    if (!latitude || !longitude) {
      return c.json({ error: "latitude and longitude parameters are required" }, 400);
    }
    
    const radius = c.req.query("radius");
    const data = await amadeus.searchPointsOfInterest(latitude, longitude, radius);
    return c.json(data);
  } catch (error) {
    console.error("Attractions search error:", error);
    return c.json({ error: `Attractions search failed: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);