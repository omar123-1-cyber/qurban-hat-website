'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-green-700 text-white py-20 overflow-hidden animate__animated animate__fadeIn">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Qurbani Animal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
            Book premium quality cows and goats for your Qurbani. Healthy, well-fed, and ready for the holy occasion.
          </p>
          <Link
            href="/animals"
            className="inline-block bg-accent text-white text-lg px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg"
          >
            Browse Animals
          </Link>
        </div>
      </div>
    </section>
  );
}