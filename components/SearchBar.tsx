import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    date: new Date(),
    time: '19:00',
    partySize: 2,
    cuisine: ''
  });

  const handleChange = (name: string, value: any) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const times = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30'
  ];

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const locations = ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami'];

  const cuisines = ['Italian', 'Japanese', 'American', 'French', 'Indian', 'Seafood', 'Steakhouse', 'Mexican'];

  return (
    <div className="w-full bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-1">
              Location
            </label>
            <select
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
              value={filters.location || ''}
              onChange={(e) => handleChange('location', e.target.value)}
            >
              <option value="" className="text-gray-900">All locations</option>
              {locations.map((location) => (
                <option key={location} value={location} className="text-gray-900">{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-1">
              Date
            </label>
            <DatePicker
              id="date"
              selected={filters.date}
              onChange={(date) => handleChange('date', date)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
              minDate={new Date()}
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-1">
              Time
            </label>
            <select
              id="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
              value={filters.time || '19:00'}
              onChange={(e) => handleChange('time', e.target.value)}
            >
              {times.map((time) => (
                <option key={time} value={time} className="text-gray-900">{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="partySize" className="block text-sm font-medium text-gray-900 mb-1">
              Party Size
            </label>
            <select
              id="partySize"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
              value={filters.partySize || 2}
              onChange={(e) => handleChange('partySize', parseInt(e.target.value))}
            >
              {partySizes.map((size) => (
                <option key={size} value={size} className="text-gray-900">{size} {size === 1 ? 'person' : 'people'}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-900 mb-1">
              Cuisine
            </label>
            <select
              id="cuisine"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
              value={filters.cuisine || ''}
              onChange={(e) => handleChange('cuisine', e.target.value)}
            >
              <option value="" className="text-gray-900">All cuisines</option>
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine} className="text-gray-900">{cuisine}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-5 mt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Find a Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;