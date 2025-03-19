import { Restaurant } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const restaurants: Restaurant[] = [
  {
    id: uuidv4(),
    name: 'The Italian Garden',
    cuisine: ['Italian', 'Mediterranean'],
    location: 'New York',
    address: '123 Main St, New York, NY 10001',
    rating: 4.7,
    priceRange: '$$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Authentic Italian cuisine with a modern twist...',
    // ... rest of the restaurant data
  },
  {
    id: uuidv4(),
    name: 'Sakura Sushi',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    location: 'New York',
    address: '456 Broadway, New York, NY 10012',
    rating: 4.8,
    priceRange: '$$$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Premium sushi and Japanese dishes prepared by master chefs...',
    // ... rest of the restaurant data
  },
  {
    id: uuidv4(),
    name: 'The Grill House',
    cuisine: ['American', 'Steakhouse', 'Grill'],
    location: 'Chicago',
    address: '789 Oak St, Chicago, IL 60601',
    rating: 4.5,
    priceRange: '$$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Premium steaks and classic American fare in a sophisticated setting...',
    // ... rest of the restaurant data
  },
  {
    id: uuidv4(),
    name: 'Coastal Seafood',
    cuisine: ['Seafood', 'American', 'Coastal'],
    location: 'San Francisco',
    address: '321 Beach Dr, San Francisco, CA 94111',
    rating: 4.6,
    priceRange: '$$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Fresh seafood with a spectacular view of the bay...',
    // ... rest of the restaurant data
  },
  {
    id: uuidv4(),
    name: 'Spice Route',
    cuisine: ['Indian', 'Asian', 'Curry'],
    location: 'Los Angeles',
    address: '567 Spice Ave, Los Angeles, CA 90012',
    rating: 4.4,
    priceRange: '$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Authentic Indian flavors with a modern twist...',
    // ... rest of the restaurant data
  },
  {
    id: uuidv4(),
    name: 'Le Bistro',
    cuisine: ['French', 'European', 'Fine Dining'],
    location: 'Chicago',
    address: '890 Rue St, Chicago, IL 60602',
    rating: 4.9,
    priceRange: '$$$$',
    imageUrl: '/images/restaurant-interior.webp',
    description: 'Classic French cuisine crafted with precision and passion...',
    // ... rest of the restaurant data
  }
];