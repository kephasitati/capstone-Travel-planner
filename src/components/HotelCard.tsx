export interface HotelOffer {
  id: string;
  name: string;
  rating: number;
  price: number;
  currency: string;
  pricePerNight: boolean;
  imageUrl: string;
  amenities: string[];
  distance: string;
}
