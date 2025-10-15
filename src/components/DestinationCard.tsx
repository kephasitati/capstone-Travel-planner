import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DestinationCard({ destination, onClick }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="aspect-video w-full overflow-hidden">
        <ImageWithFallback
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="mb-2">{destination.name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin size={16} />
          <span>{destination.country}</span>
        </div>
        {destination.rating && (
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{destination.rating}</span>
          </div>
        )}
        {destination.description && (
          <p className="text-muted-foreground mt-2 line-clamp-2">{destination.description}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
