import React from 'react';
import { Restaurant, SearchFilters } from '../types';
import RestaurantCard from './RestaurantCard';

interface RestaurantListProps {
  restaurants: Restaurant[];
  filters?: SearchFilters;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, filters }) => {
  // Apply filters if they exist
  const filteredRestaurants = filters
    ? restaurants.filter((restaurant) => {
        // Filter by location
        if (filters.location && restaurant.location !== filters.location) {
          return false;
        }

        // Filter by cuisine
        if (filters.cuisine && !restaurant.cuisine.includes(filters.cuisine)) {
          return false;
        }

        // Additional filters can be applied here

        return true;
      })
    : restaurants;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'Restaurant' : 'Restaurants'} Available
      </h2>
      
      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-700">No restaurants found matching your criteria. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;