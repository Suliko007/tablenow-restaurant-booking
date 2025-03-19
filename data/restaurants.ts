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
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Authentic Italian cuisine with a modern twist. Our homemade pasta and wood-fired pizzas are prepared with the freshest ingredients imported directly from Italy.',
    openingHours: {
      Monday: { open: '12:00', close: '22:00' },
      Tuesday: { open: '12:00', close: '22:00' },
      Wednesday: { open: '12:00', close: '22:00' },
      Thursday: { open: '12:00', close: '23:00' },
      Friday: { open: '12:00', close: '23:00' },
      Saturday: { open: '11:00', close: '23:00' },
      Sunday: { open: '11:00', close: '22:00' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '1',
        userName: 'Alex Thompson',
        rating: 5,
        comment: 'The pasta was incredible! Authentic Italian flavors that transported me back to Tuscany.',
        date: '2023-10-15'
      },
      {
        id: uuidv4(),
        userId: '2',
        userName: 'Jessica Green',
        rating: 4,
        comment: 'Great ambiance and service. The Margherita pizza was delicious!',
        date: '2023-11-02'
      }
    ],
    availableTimes: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
    features: ['Outdoor Seating', 'Full Bar', 'Wheelchair Accessible', 'Vegetarian Options']
  },
  {
    id: uuidv4(),
    name: 'Sakura Sushi',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    location: 'New York',
    address: '456 Broadway, New York, NY 10012',
    rating: 4.8,
    priceRange: '$$$$',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium sushi and Japanese dishes prepared by master chefs. We import fresh fish daily and use traditional techniques to create an unforgettable dining experience.',
    openingHours: {
      Monday: { open: '17:00', close: '23:00' },
      Tuesday: { open: '17:00', close: '23:00' },
      Wednesday: { open: '17:00', close: '23:00' },
      Thursday: { open: '17:00', close: '23:00' },
      Friday: { open: '17:00', close: '00:00' },
      Saturday: { open: '16:00', close: '00:00' },
      Sunday: { open: '16:00', close: '22:00' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '3',
        userName: 'Michael Chen',
        rating: 5,
        comment: "Best omakase in the city! Chef Tanaka's nigiri was sublime.",
        date: '2023-11-10'
      },
      {
        id: uuidv4(),
        userId: '4',
        userName: 'Sarah Williams',
        rating: 5,
        comment: 'Worth every penny. The fish quality is exceptional and the presentation is beautiful.',
        date: '2023-10-28'
      }
    ],
    availableTimes: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],
    features: ['Omakase', 'Private Dining', 'Sake Selection', 'Gluten-Free Options']
  },
  {
    id: uuidv4(),
    name: 'The Grill House',
    cuisine: ['American', 'Steakhouse', 'Grill'],
    location: 'Chicago',
    address: '789 Oak St, Chicago, IL 60601',
    rating: 4.5,
    priceRange: '$$$',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium steaks and classic American fare in a sophisticated setting. Our dry-aged beef is sourced from top farms and grilled to perfection.',
    openingHours: {
      Monday: { open: '16:00', close: '22:00' },
      Tuesday: { open: '16:00', close: '22:00' },
      Wednesday: { open: '16:00', close: '22:00' },
      Thursday: { open: '16:00', close: '23:00' },
      Friday: { open: '16:00', close: '00:00' },
      Saturday: { open: '16:00', close: '00:00' },
      Sunday: { open: '16:00', close: '21:00' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '5',
        userName: 'Robert Johnson',
        rating: 4,
        comment: 'The ribeye was cooked perfectly and the bourbon selection is impressive.',
        date: '2023-10-20'
      },
      {
        id: uuidv4(),
        userId: '6',
        userName: 'Emily Davis',
        rating: 5,
        comment: 'Great service and ambiance. The filet mignon melted in my mouth!',
        date: '2023-11-05'
      }
    ],
    availableTimes: ['16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'],
    features: ['Wine List', 'Full Bar', 'Private Dining', 'Valet Parking']
  },
  {
    id: uuidv4(),
    name: 'Coastal Seafood',
    cuisine: ['Seafood', 'American', 'Coastal'],
    location: 'San Francisco',
    address: '321 Beach Dr, San Francisco, CA 94111',
    rating: 4.6,
    priceRange: '$$$',
    imageUrl: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh seafood with a spectacular view of the bay. Our seasonal menu features sustainably caught fish and shellfish from local waters.',
    openingHours: {
      Monday: { open: '11:30', close: '21:30' },
      Tuesday: { open: '11:30', close: '21:30' },
      Wednesday: { open: '11:30', close: '21:30' },
      Thursday: { open: '11:30', close: '22:00' },
      Friday: { open: '11:30', close: '22:30' },
      Saturday: { open: '11:00', close: '22:30' },
      Sunday: { open: '11:00', close: '21:00' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '7',
        userName: 'David Miller',
        rating: 5,
        comment: 'The seafood tower was amazing! So fresh and beautifully presented.',
        date: '2023-11-01'
      },
      {
        id: uuidv4(),
        userId: '8',
        userName: 'Laura Wilson',
        rating: 4,
        comment: 'Loved the cioppino and the view is unbeatable, especially at sunset.',
        date: '2023-10-12'
      }
    ],
    availableTimes: ['11:30', '12:00', '12:30', '13:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
    features: ['Ocean View', 'Raw Bar', 'Outdoor Seating', 'Sustainable Seafood']
  },
  {
    id: uuidv4(),
    name: 'Spice Route',
    cuisine: ['Indian', 'Asian', 'Curry'],
    location: 'Los Angeles',
    address: '567 Spice Ave, Los Angeles, CA 90012',
    rating: 4.4,
    priceRange: '$$',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Authentic Indian flavors with a modern twist. Our diverse menu ranges from classic curries to innovative fusion dishes that celebrate the richness of Indian spices.',
    openingHours: {
      Monday: { open: '11:30', close: '22:00' },
      Tuesday: { open: '11:30', close: '22:00' },
      Wednesday: { open: '11:30', close: '22:00' },
      Thursday: { open: '11:30', close: '22:00' },
      Friday: { open: '11:30', close: '23:00' },
      Saturday: { open: '12:00', close: '23:00' },
      Sunday: { open: '12:00', close: '22:00' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '9',
        userName: 'Priya Patel',
        rating: 5,
        comment: "Finally, authentic Indian food that doesn't hold back on the spices! The butter chicken was divine.",
        date: '2023-10-05'
      },
      {
        id: uuidv4(),
        userId: '10',
        userName: 'James Wilson',
        rating: 4,
        comment: 'Great selection of vegetarian options. The Masala Dosa was crispy and delicious.',
        date: '2023-11-08'
      }
    ],
    availableTimes: ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00'],
    features: ['Vegetarian Options', 'Vegan Options', 'Spicy Food', 'Cocktail Menu']
  },
  {
    id: uuidv4(),
    name: 'Le Bistro',
    cuisine: ['French', 'European', 'Fine Dining'],
    location: 'Chicago',
    address: '890 Rue St, Chicago, IL 60602',
    rating: 4.9,
    priceRange: '$$$$',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Classic French cuisine crafted with precision and passion. Our menu changes seasonally to showcase the finest ingredients and traditional techniques.',
    openingHours: {
      Monday: { open: '17:30', close: '22:00' },
      Tuesday: { open: '17:30', close: '22:00' },
      Wednesday: { open: '17:30', close: '22:00' },
      Thursday: { open: '17:30', close: '22:00' },
      Friday: { open: '17:30', close: '23:00' },
      Saturday: { open: '17:30', close: '23:00' },
      Sunday: { open: '17:30', close: '21:30' }
    },
    reviews: [
      {
        id: uuidv4(),
        userId: '11',
        userName: 'Sophie Martin',
        rating: 5,
        comment: "A truly exceptional dining experience. The coq au vin was the best I've ever had.",
        date: '2023-10-25'
      },
      {
        id: uuidv4(),
        userId: '12',
        userName: 'Thomas Brown',
        rating: 5,
        comment: 'Impeccable service and exquisite food. The wine pairing suggestions were perfect.',
        date: '2023-11-12'
      }
    ],
    availableTimes: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
    features: ['Wine Pairing', 'Tasting Menu', 'Romantic', 'Private Dining']
  }
];