import { getFeaturedAnimals } from '@/lib/animals';
import AnimalCard from './AnimalCard';
import Link from 'next/link';

export default function FeaturedAnimals() {
  const animals = getFeaturedAnimals();

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Animals
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Handpicked best quality animals for your Qurbani needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/animals"
            className="inline-block bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition text-sm sm:text-base"
          >
            View All Animals
          </Link>
        </div>
      </div>
    </section>
  );
}