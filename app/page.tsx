'use client';

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import { SearchFilters } from '../types';
import { restaurants } from '../data/restaurants';

export default function Home() {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find your table for any occasion
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-red-50 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Book the perfect restaurant from our handpicked collection of top venues.
          </p>
        </div>
      </div>

      <SearchBar onSearch={handleSearch} />
      
      <div className="flex-grow">
        <RestaurantList restaurants={restaurants} filters={filters} />
      </div>
      
      {/* Featured section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Why Choose TableNow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Instant Booking</h3>
              <p className="text-gray-800">Secure your table in seconds with our real-time availability system.</p>
            </div>
            
            <div className="text-center px-4">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Curated Selection</h3>
              <p className="text-gray-800">We handpick only the best restaurants with outstanding food and service.</p>
            </div>
            
            <div className="text-center px-4">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Special Offers</h3>
              <p className="text-gray-800">Enjoy exclusive deals and special menu options only available through TableNow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}