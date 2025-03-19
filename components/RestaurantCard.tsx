import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const { id, name, cuisine, location, rating, priceRange, imageUrl } = restaurant;

  // ... existing code ...

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/restaurants/${id}`} className="block">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        // ... rest of the component
      </Link>
    </div>
  );
};

export default RestaurantCard;