import { X } from "lucide-react";
import type { HotelOffer } from "./HotelCard";

interface HotelComparisonProps {
  hotels: HotelOffer[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function HotelComparison({ hotels, onClose, onRemove }: HotelComparisonProps) {
  if (hotels.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-card rounded-lg max-w-6xl w-full max-h-[85vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-card border-b p-6 flex justify-between items-center">
          <h2>Compare Hotels ({hotels.length})</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${Math.min(hotels.length, 3)}, 1fr)` }}>
            {hotels.map((hotel) => (
              <div key={hotel.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={hotel.imageUrl} alt={hotel.name} className="w-full aspect-video object-cover" />
                  <button 
                    onClick={() => onRemove(hotel.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-100"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <div className="p-4 space-y-3">
                  <h3>{hotel.name}</h3>
                  
                  <div className="border-t pt-3">
                    <p className="text-muted-foreground">Rating</p>
                    <p>{hotel.rating} stars</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-muted-foreground">Price per night</p>
                    <p className="text-primary">${hotel.price}</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-muted-foreground">Location</p>
                    <p>{hotel.distance}</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-muted-foreground">Amenities</p>
                    <p>{hotel.amenities.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
