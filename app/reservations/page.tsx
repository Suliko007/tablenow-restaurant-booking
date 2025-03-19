'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { restaurants } from '../../data/restaurants';
import { format } from 'date-fns';

// Sample reservations data (in a real app, this would come from a database)
const sampleReservations = [
  {
    id: '1',
    restaurantId: restaurants[0].id,
    userId: 'user-1',
    date: '2023-12-15',
    time: '19:00',
    partySize: 2,
    status: 'confirmed',
    specialRequests: 'Window seat please'
  },
  {
    id: '2',
    restaurantId: restaurants[1].id,
    userId: 'user-1',
    date: '2023-12-20',
    time: '18:30',
    partySize: 4,
    status: 'confirmed',
    specialRequests: ''
  },
  {
    id: '3',
    restaurantId: restaurants[2].id,
    userId: 'user-1',
    date: '2023-11-05',
    time: '20:00',
    partySize: 2,
    status: 'completed',
    specialRequests: ''
  }
];

export default function ReservationsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Filter reservations based on active tab
  const currentDate = new Date();
  const upcomingReservations = sampleReservations.filter(reservation => {
    const reservationDate = new Date(`${reservation.date}T${reservation.time}`);
    return reservationDate >= currentDate && reservation.status !== 'cancelled';
  });
  
  const pastReservations = sampleReservations.filter(reservation => {
    const reservationDate = new Date(`${reservation.date}T${reservation.time}`);
    return reservationDate < currentDate || reservation.status === 'cancelled';
  });
  
  const displayReservations = activeTab === 'upcoming' ? upcomingReservations : pastReservations;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">My Reservations</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`${
              activeTab === 'upcoming'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`${
              activeTab === 'past'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Past
          </button>
        </nav>
      </div>
      
      {/* Reservations List */}
      <div className="space-y-6">
        {displayReservations.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">
              {activeTab === 'upcoming'
                ? "You don't have any upcoming reservations."
                : "You don't have any past reservations."}
            </p>
            {activeTab === 'upcoming' && (
              <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition duration-150">
                Make a Reservation
              </Link>
            )}
          </div>
        ) : (
          displayReservations.map(reservation => {
            const restaurant = restaurants.find(r => r.id === reservation.restaurantId);
            if (!restaurant) return null;
            
            return (
              <div key={reservation.id} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                <div className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{restaurant.name}</h2>
                      <p className="text-gray-600">{restaurant.location} • {restaurant.cuisine.join(', ')}</p>
                      <div className="mt-2">
                        <p className="text-gray-900">
                          <span className="font-medium">Date:</span> {format(new Date(reservation.date), 'MMMM d, yyyy')}
                        </p>
                        <p className="text-gray-900">
                          <span className="font-medium">Time:</span> {reservation.time}
                        </p>
                        <p className="text-gray-900">
                          <span className="font-medium">Party Size:</span> {reservation.partySize} {reservation.partySize === 1 ? 'person' : 'people'}
                        </p>
                        {reservation.specialRequests && (
                          <p className="text-gray-900">
                            <span className="font-medium">Special Requests:</span> {reservation.specialRequests}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        reservation.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        reservation.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                {activeTab === 'upcoming' && (
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
                    <Link href={`/restaurants/${restaurant.id}`} className="text-red-600 hover:text-red-500 font-medium text-sm">
                      View Restaurant
                    </Link>
                    <button className="text-gray-600 hover:text-gray-500 font-medium text-sm">
                      Cancel Reservation
                    </button>
                  </div>
                )}
                {activeTab === 'past' && (
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
                    <Link href={`/restaurants/${restaurant.id}`} className="text-red-600 hover:text-red-500 font-medium text-sm">
                      View Restaurant
                    </Link>
                    {reservation.status === 'completed' && (
                      <button className="text-gray-600 hover:text-gray-500 font-medium text-sm">
                        Leave a Review
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}