export interface Destination {
  id: string;
  name: string;
  country: string;
  cityCode: string;
  imageUrl: string;
  rating?: number;
  description?: string;
}

interface DestinationCardProps {
  destination: Destination;
  onView: (dest: Destination) => void;
  onAddToItinerary: (dest: Destination) => void;
  isInItinerary: boolean;
}

export function DestinationCard({ 
  destination, 
  onView, 
  onAddToItinerary, 
  isInItinerary 
}: DestinationCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img 
        src={destination.imageUrl} 
        alt={destination.name} 
        onClick={() => onView(destination)} 
        className="w-full aspect-video object-cover cursor-pointer" 
      />
      <div className="p-4">
        <h3>{destination.name}</h3>
        <p className="text-muted-foreground my-2">{destination.country}</p>
        <button 
          onClick={() => !isInItinerary && onAddToItinerary(destination)}
          className={`w-full py-2 rounded-lg ${
            isInItinerary ? 'bg-secondary' : 'bg-primary text-primary-foreground'
          }`}
        >
          {isInItinerary ? "Added" : "Add to Safari"}
        </button>
      </div>
    </div>
  );
}
