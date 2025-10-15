import { X, Calendar, Plane, Hotel, MapPin, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Flight } from "./FlightCard";
import { HotelOffer } from "./HotelCard";
import { Destination } from "./DestinationCard";

/**
 * @typedef {Object} ItineraryItem
 * @property {string} id
 * @property {'destination' | 'flight' | 'hotel'} type
 * @property {Destination | Flight | HotelOffer} data
 * @property {string} [date]
 */

/**
 * @typedef {Object} ItineraryPanelProps
 * @property {ItineraryItem[]} items
 * @property {(id: string) => void} onRemoveItem
 * @property {() => void} [onClose]
 * @property {boolean} isOpen
 */

export function ItineraryPanel({ items, onRemoveItem, onClose, isOpen }: ItineraryPanelProps) {
  const totalCost = items.reduce((sum, item) => {
    if (item.type === 'flight') {
      return sum + (item.data as Flight).price;
    }
    if (item.type === 'hotel') {
      return sum + (item.data as HotelOffer).price;
    }
    return sum;
  }, 0);

  const destinations = items.filter(item => item.type === 'destination');
  const flights = items.filter(item => item.type === 'flight');
  const hotels = items.filter(item => item.type === 'hotel');

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-card border-l shadow-lg z-50">
      <div className="flex flex-col h-full">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <h3>My Itinerary</h3>
            {onClose && (
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={20} />
              </Button>
            )}
          </div>
        </CardHeader>

        <ScrollArea className="flex-1">
          <CardContent className="pt-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                <p>Your itinerary is empty</p>
                <p className="mt-2">Start adding destinations, flights, and hotels!</p>
              </div>
            ) : (
              <>
                {destinations.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={18} className="text-primary" />
                      <h4>Destinations</h4>
                    </div>
                    <div className="space-y-2">
                      {destinations.map((item) => {
                        const dest = item.data as Destination;
                        return (
                          <Card key={item.id}>
                            <CardContent className="p-3 flex items-center justify-between">
                              <div>
                                <div>{dest.name}</div>
                                <div className="text-muted-foreground">{dest.country}</div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onRemoveItem(item.id)}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {flights.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Plane size={18} className="text-primary" />
                      <h4>Flights</h4>
                    </div>
                    <div className="space-y-2">
                      {flights.map((item) => {
                        const flight = item.data as Flight;
                        return (
                          <Card key={item.id}>
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div>{flight.airline}</div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => onRemoveItem(item.id)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                              <div className="text-muted-foreground">
                                {flight.origin} → {flight.destination}
                              </div>
                              <div className="text-muted-foreground">{flight.departureTime}</div>
                              <div className="mt-2 text-primary">${flight.price}</div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {hotels.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Hotel size={18} className="text-primary" />
                      <h4>Hotels</h4>
                    </div>
                    <div className="space-y-2">
                      {hotels.map((item) => {
                        const hotel = item.data as HotelOffer;
                        return (
                          <Card key={item.id}>
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div>{hotel.name}</div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => onRemoveItem(item.id)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                              <div className="flex items-center gap-1">
                                <Badge variant="secondary">{hotel.rating} stars</Badge>
                              </div>
                              <div className="mt-2 text-primary">${hotel.price}/night</div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </ScrollArea>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <Separator />
            <div className="flex items-center justify-between">
              <span>Estimated Total</span>
              <span className="text-primary">${totalCost.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj,   