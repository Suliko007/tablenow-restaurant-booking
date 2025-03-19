'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { restaurants } from '../../../data/restaurants';
import ReservationForm from '../../../components/ReservationForm';
import { v4 as uuidv4 } from 'uuid';

export default function RestaurantDetails() {
  const params = useParams();
  const restaurantId = params.id as string;
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant not found</h2>
          <p className="text-gray-600 mb-6">The restaurant you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition duration-150">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(restaurant.rating);
    const halfStar = restaurant.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (halfStar) {
      stars.push(
        <svg key="half-star" className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const handleReservationSubmit = (data: {
    date: Date;
    time: string;
    partySize: number;
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
  }) => {
    console.log('Reservation submitted:', {
      ...data,
      id: uuidv4(),
      restaurantId: restaurant.id,
      userId: 'user-' + uuidv4(),
      status: 'confirmed'
    });
    
    // In a real app, you would send this to the server
    setReservationSuccess(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setReservationSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-white">
      {/* Restaurant Header */}
      <div className="relative h-96">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
            <div className="text-white">
              <h1 className="text-4xl font-bold">{restaurant.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex mr-2">
                  {renderStars()}
                </div>
                <span className="text-lg">{restaurant.rating.toFixed(1)}</span>
                <span className="mx-2">•</span>
                <span>{restaurant.reviews.length} reviews</span>
              </div>
              <div className="mt-2 flex items-center text-lg">
                <span>{restaurant.cuisine.join(', ')}</span>
                <span className="mx-2">•</span>
                <span>{restaurant.priceRange}</span>
                <span className="mx-2">•</span>
                <span>{restaurant.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700">{restaurant.description}</p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">{restaurant.address}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hours</h3>
                  <ul className="text-gray-700">
                    {Object.entries(restaurant.openingHours).map(([day, hours]) => (
                      <li key={day} className="flex justify-between text-sm mb-1">
                        <span className="font-medium w-32">{day}</span>
                        <span>{hours.open} - {hours.close}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="flex flex-wrap gap-2">
                {restaurant.features.map((feature) => (
                  <span key={feature} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-6">
                {restaurant.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="font-medium text-gray-900">{review.userName}</div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Make a Reservation</h2>
              
              {reservationSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reservation Confirmed!</p>
                      <p className="text-sm mt-1">Check your email for details.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <ReservationForm 
                  restaurant={restaurant} 
                  onSubmit={handleReservationSubmit} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}