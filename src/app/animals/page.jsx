'use client';

import { useState, useEffect } from 'react';
import { getAllAnimals, sortAnimalsByPrice } from '@/lib/animals';
import AnimalCard from '@/components/AnimalCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function AllAnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      const data = getAllAnimals();
      setAnimals(data);
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = sortAnimalsByPrice(animals, order);
    setAnimals(sorted);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            All Animals
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => handleSort('asc')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                sortOrder === 'asc'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => handleSort('desc')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                sortOrder === 'desc'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Price: High to Low
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
}