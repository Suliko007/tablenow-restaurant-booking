// ... existing imports and code ...

  return (
    <div className="bg-white">
      {/* Restaurant Header */}
      <div className="relative h-96">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        // ... rest of the component
      </div>
    </div>
  );
}