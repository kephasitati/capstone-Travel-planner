import { X, Trash2 } from "lucide-react";
import type { Destination } from "./DestinationCard";

interface ItineraryPlannerProps {
  itinerary: Destination[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function ItineraryPlanner({ 
  itinerary, 
  isOpen, 
  onClose, 
  onRemove 
}: ItineraryPlannerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-card border-l z-50">
      <div className="p-6 border-b flex justify-between">
        <h3>My Safari</h3>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      
      <div className="p-6 space-y-4">
        {itinerary.map((dest) => (
          <div key={dest.id} className="border rounded-lg p-4 flex justify-between">
            <div>
              <h4>{dest.name}</h4>
              <p className="text-muted-foreground">{dest.country}</p>
            </div>
            <button onClick={() => onRemove(dest.id)}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
