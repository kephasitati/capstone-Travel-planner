import { useState } from "react";
import { X } from "lucide-react";
import { searchDestinations, mockAttractions, mockFlights, mockHotels } from "./lib/mockData";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { DestinationCard, type Destination } from "./components/DestinationCard";
import { ItineraryPlanner } from "./components/ItineraryPlanner";

export default function App() {
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState(searchDestinations(""));
  const [itinerary, setItinerary] = useState<Destination[]>([]);
  const [showItinerary, setShowItinerary] = useState(false);
  const [selected, setSelected] = useState<Destination | null>(null);
  const [tab, setTab] = useState<'attractions' | 'flights' | 'hotels'>('attractions');

  const handleSearch = () => {
    setDestinations(searchDestinations(search));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        itineraryCount={itinerary.length}
        onToggleItinerary={() => setShowItinerary(!showItinerary)}
      />

      <main className="max-w-7xl mx-auto p-4">
        <SearchBar 
          value={search}
          onChange={setSearch}
          onSearch={handleSearch}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onView={setSelected}
              onAddToItinerary={(dest) => setItinerary([...itinerary, dest])}
              isInItinerary={!!itinerary.find(d => d.id === dest.id)}
            />
          ))}
        </div>
      </main>

      {/* Itinerary */}
      <ItineraryPlanner
        itinerary={itinerary}
        isOpen={showItinerary}
        onClose={() => setShowItinerary(false)}
        onRemove={(id) => setItinerary(itinerary.filter(d => d.id !== id))}
      />

      {/* Details */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selected.imageUrl} alt={selected.name} className="w-full aspect-video object-cover" />
            
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h2>{selected.name}</h2>
                <button onClick={() => setSelected(null)}>
                  <X size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="border-b mb-6 flex gap-4">
                <button onClick={() => setTab('attractions')} className={`px-4 py-2 border-b-2 ${tab === 'attractions' ? 'border-primary' : 'border-transparent'}`}>
                  Attractions
                </button>
                <button onClick={() => setTab('flights')} className={`px-4 py-2 border-b-2 ${tab === 'flights' ? 'border-primary' : 'border-transparent'}`}>
                  Flights
                </button>
                <button onClick={() => setTab('hotels')} className={`px-4 py-2 border-b-2 ${tab === 'hotels' ? 'border-primary' : 'border-transparent'}`}>
                  Hotels
                </button>
              </div>

              {/* Content */}
              {tab === 'attractions' && (
                <div className="space-y-2 mb-6">
                  {(mockAttractions[selected.cityCode] || []).map((attr, i) => (
                    <div key={i} className="p-3 border rounded-lg">{attr}</div>
                  ))}
                </div>
              )}

              {tab === 'flights' && (
                <div className="space-y-3 mb-6">
                  {(mockFlights[selected.cityCode] || []).map((flight) => (
                    <div key={flight.id} className="border rounded-lg p-4">
                      <div className="mb-3">
                        <span>{flight.airline}</span>
                        <span className="text-muted-foreground ml-2">{flight.stops === 0 ? 'Direct' : `${flight.stops} stops`}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-muted-foreground">From</p>
                          <p>{flight.origin}</p>
                          <p className="text-muted-foreground">{flight.departureTime}</p>
                        </div>
                        <div className="text-center text-muted-foreground">{flight.duration}</div>
                        <div className="text-right">
                          <p className="text-muted-foreground">To</p>
                          <p>{flight.destination}</p>
                          <p className="text-muted-foreground">{flight.arrivalTime}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t text-primary">${flight.price}</div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'hotels' && (
                <div className="space-y-3 mb-6">
                  {(mockHotels[selected.cityCode] || []).map((hotel) => (
                    <div key={hotel.id} className="border rounded-lg overflow-hidden grid md:grid-cols-3">
                      <img src={hotel.imageUrl} alt={hotel.name} className="w-full aspect-square object-cover" />
                      <div className="md:col-span-2 p-4">
                        <h4>{hotel.name}</h4>
                        <p className="text-muted-foreground my-2">{hotel.rating} stars</p>
                        <p className="text-muted-foreground mb-3">{hotel.distance}</p>
                        <p className="text-muted-foreground mb-4">{hotel.amenities.join(', ')}</p>
                        <div className="text-primary">${hotel.price} / night</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button 
                onClick={() => { !itinerary.find(d => d.id === selected.id) && setItinerary([...itinerary, selected]); setSelected(null); }}
                className={`w-full py-2 rounded-lg ${itinerary.find(d => d.id === selected.id) ? 'bg-secondary' : 'bg-primary text-primary-foreground'}`}
              >
                {itinerary.find(d => d.id === selected.id) ? "Added" : "Add to Safari"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
