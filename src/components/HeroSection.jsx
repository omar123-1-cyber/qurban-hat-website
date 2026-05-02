'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Find Your Perfect Qurbani Animal
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-green-100 max-w-2xl mx-auto">
            Book premium quality cows and goats for your Qurbani. Healthy, well-fed, and ready for the holy occasion.
          </p>
          <Link
            href="/animals"
            className="inline-block bg-accent text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg"
          >
            Browse Animals
          </Link>
        </div>
      </div>
    </section>
  );
}