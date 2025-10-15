import { X, MapPin, Star, Cloud, Plus } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FlightCard, type Flight } from "./FlightCard";
import { HotelCard, type HotelOffer } from "./HotelCard";
import type { Destination } from "./DestinationCard";

interface DestinationDetailsProps {
  destination: Destination;
  onClose: () => void;
  flights: Flight[];
  hotels: HotelOffer[];
  attractions: string[];
  weather?: {
    temp: number;
    condition: string;
  };
  onAddFlight: (flight: Flight) => void;
  onAddHotel: (hotel: HotelOffer) => void;
  onAddDestination: (destination: Destination) => void;
}

export function DestinationDetails({
  destination,
  onClose,
  flights,
  hotels,
  attractions,
  weather,
  onAddFlight,
  onAddHotel,
  onAddDestination,
}: DestinationDetailsProps) {
  return (
    <div className="fixed inset-0 bg-background z-40 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <ImageWithFallback
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="mb-2 text-white">{destination.name}</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{destination.country}</span>
              </div>
              {destination.rating && (
                <div className="flex items-center gap-1">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating}</span>
                </div>
              )}
              {weather && (
                <div className="flex items-center gap-2">
                  <Cloud size={18} />
                  <span>{weather.temp}°C - {weather.condition}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6 max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3>Plan Your Trip</h3>
                <Button onClick={() => onAddDestination(destination)}>
                  <Plus size={16} className="mr-2" />
                  Add to Itinerary
                </Button>
              </div>

              <Tabs defaultValue="attractions" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="flights">Flights</TabsTrigger>
                  <TabsTrigger value="hotels">Hotels</TabsTrigger>
                </TabsList>

                <TabsContent value="attractions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <h4>Top Attractions</h4>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {attractions.map((attraction, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                            <Badge variant="outline" className="mt-1">{index + 1}</Badge>
                            <div>
                              <div>{attraction}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="flights" className="space-y-4">
                  {flights.length === 0 ? (
                    <Card>
                      <CardContent className="pt-6 text-center text-muted-foreground">
                        No flights available for this destination
                      </CardContent>
                    </Card>
                  ) : (
                    flights.map((flight) => (
                      <FlightCard
                        key={flight.id}
                        flight={flight}
                        onAddToItinerary={() => onAddFlight(flight)}
                      />
                    ))
                  )}
                </TabsContent>

                <TabsContent value="hotels" className="space-y-4">
                  {hotels.length === 0 ? (
                    <Card>
                      <CardContent className="pt-6 text-center text-muted-foreground">
                        No hotels available for this destination
                      </CardContent>
                    </Card>
                  ) : (
                    hotels.map((hotel) => (
                      <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        onAddToItinerary={() => onAddHotel(hotel)}
                      />
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
