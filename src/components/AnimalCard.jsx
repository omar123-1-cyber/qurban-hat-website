'use client';

import Link from 'next/link';

export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:scale-[1.03] transition-transform duration-300">
      <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300?text=No+Image';
          }}
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">{animal.name}</h3>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
            {animal.category}
          </span>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-1">Breed: {animal.breed}</p>
        <p className="text-gray-600 text-xs sm:text-sm mb-1">Weight: {animal.weight} kg</p>
        <p className="text-gray-600 text-xs sm:text-sm mb-3">Location: {animal.location}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-secondary">
            ৳{animal.price.toLocaleString()}
          </span>
          <Link
            href={`/details-page/${animal.id}`}
            className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm w-full sm:w-auto text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}