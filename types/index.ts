export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  location: string;
  address: string;
  rating: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  imageUrl: string;
  description: string;
  openingHours: {
    [key: string]: { open: string; close: string }; // day: {open, close}
  };
  reviews: Review[];
  availableTimes: string[];
  features: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Reservation {
  id: string;
  restaurantId: string;
  userId: string;
  date: string;
  time: string;
  partySize: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  specialRequests?: string;
}

export interface SearchFilters {
  location?: string;
  date?: Date;
  time?: string;
  partySize?: number;
  cuisine?: string;
  priceRange?: string;
}