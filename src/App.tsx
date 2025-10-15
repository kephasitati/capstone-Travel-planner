import { useState } from "react";
import { Calendar, Sun, Moon } from "lucide-react";
import { Button } from "./components/ui/button";
import { SearchBar } from "./components/SearchBar";
import { DestinationCard } from "./components/DestinationCard";
import { DestinationDetails } from "./components/DestinationDetails";
import { ItineraryPanel } from "./components/ItineraryPanel";
import { Flight } from "./components/FlightCard";
import { HotelOffer } from "./components/HotelCard";
import { searchDestinations, mockAttractions, mockFlights, mockHotels, mockWeather } from "./lib/mockData";
import { Badge } from "./components/ui/badge";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import { Footer } from "./components/footer";

// Types
export interface Destination {
  id: string;
  name: string;
  cityCode: string;
  description?: string;
  image?: string;
}

export type ItineraryItemType = "destination" | "flight" | "hotel";

export interface ItineraryItem {
  id: string;
  type: ItineraryItemType;
  data: Destination | Flight | HotelOffer;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [itineraryItems, setItineraryItems] = useState<ItineraryItem[]>([]);
  const [showItinerary, setShowItinerary] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSearch = (): void => {
    setHasSearched(true);
    const results = searchDestinations(searchQuery);
    setDestinations(results);

    if (results.length === 0) {
      toast.error(
        "No destinations found. Try searching for Nairobi, Mombasa, Masai Mara, or other African destinations."
      );
    }
  };

  const handleAddToItinerary = (
    type: ItineraryItemType,
    data: Destination | Flight | HotelOffer
  ): void => {
    const newItem: ItineraryItem = {
      id: `${type}-${(data as any).id}-${Date.now()}`,
      type,
      data
    };

    setItineraryItems((prev) => [...prev, newItem]);
    toast.success("Added to itinerary!");
  };

  const handleRemoveFromItinerary = (id: string): void => {
    setItineraryItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from itinerary");
  };

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const displayDestinations = hasSearched ? destinations : searchDestinations("");

  return (
    <div className="min-h-screen bg-background">
      <Toaster />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                ✈️
              </div>
              <h1 className="text-primary">Travel Planner</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>

              <Button
                variant="outline"
                onClick={() => setShowItinerary(!showItinerary)}
                className="gap-2"
              >
                <Calendar size={20} />
                <span className="hidden sm:inline">Itinerary</span>
                {itineraryItems.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {itineraryItems.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!hasSearched && (
          <div className="text-center mb-12">
            <div className="mb-6">
              <h2 className="mb-4">Discover Africa's Finest Destinations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore Kenya and beyond. From wildlife safaris to pristine beaches, find the best flights, hotels, and create your perfect African adventure.
              </p>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="Search African destinations (e.g., Nairobi, Mombasa, Masai Mara)..."
          />
        </div>

        {/* Results Section */}
        {hasSearched && destinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No destinations found for "{searchQuery}"
            </p>
            <p className="text-muted-foreground">
              Try searching for: Nairobi, Mombasa, Masai Mara, Kisumu, Cape Town, Zanzibar, Victoria Falls, or Serengeti
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3>{hasSearched ? "Search Results" : "Popular Destinations"}</h3>
              {hasSearched && destinations.length > 0 && (
                <p className="text-muted-foreground">
                  Found {destinations.length} destination
                  {destinations.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={() => setSelectedDestination(destination)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Destination Details Modal */}
      {selectedDestination && (
        <DestinationDetails
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          flights={mockFlights[selectedDestination.cityCode] || []}
          hotels={mockHotels[selectedDestination.cityCode] || []}
          attractions={mockAttractions[selectedDestination.cityCode] || []}
          weather={mockWeather[selectedDestination.cityCode]}
          onAddFlight={(flight) => handleAddToItinerary("flight", flight)}
          onAddHotel={(hotel) => handleAddToItinerary("hotel", hotel)}
          onAddDestination={(dest) => handleAddToItinerary("destination", dest)}
        />
      )}

      {/* Itinerary Panel */}
      <ItineraryPanel
        items={itineraryItems}
        onRemoveItem={handleRemoveFromItinerary}
        onClose={() => setShowItinerary(false)}
        isOpen={showItinerary}
      />

      <Footer />
    </div>
  );
}
