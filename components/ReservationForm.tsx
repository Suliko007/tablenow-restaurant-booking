import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Restaurant } from '../types';
import Link from 'next/link';

interface ReservationFormProps {
  restaurant: Restaurant;
  onSubmit: (data: {
    date: Date;
    time: string;
    partySize: number;
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
  }) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ restaurant, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: restaurant.availableTimes[0] || '19:00',
    partySize: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Reservation</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-1">
              Date
            </label>
            <DatePicker
              id="date"
              selected={formData.date}
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
              value={formData.time}
              onChange={(e) => handleChange('time', e.target.value)}
            >
              {restaurant.availableTimes.map((time) => (
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
              value={formData.partySize}
              onChange={(e) => handleChange('partySize', parseInt(e.target.value))}
            >
              {partySizes.map((size) => (
                <option key={size} value={size} className="text-gray-900">{size} {size === 1 ? 'person' : 'people'}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black`}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black`}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black`}
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-900 mb-1">
            Special Requests (optional)
          </label>
          <textarea
            id="specialRequests"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-black"
            value={formData.specialRequests}
            onChange={(e) => handleChange('specialRequests', e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-150"
        >
          Complete Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;