'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnimalById } from '@/lib/animals';
import { useSession } from '@/lib/auth-client';
import BookingForm from '@/components/BookingForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function DetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimal = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = getAnimalById(params.id);
      setAnimal(data);
      setLoading(false);
    };
    fetchAnimal();
  }, [params.id]);

  if (loading || isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Animal not found</h2>
          <Link href="/animals" className="text-primary hover:underline">
            Back to All Animals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-96 lg:h-auto bg-gray-200">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x500?text=No+Image';
                }}
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                  {animal.category}
                </span>
                <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {animal.type}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{animal.name}</h1>
              <p className="text-secondary text-3xl font-bold mb-6">
                ৳{animal.price.toLocaleString()}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-sm">Breed</p>
                  <p className="font-semibold text-gray-800">{animal.breed}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-sm">Weight</p>
                  <p className="font-semibold text-gray-800">{animal.weight} kg</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-sm">Age</p>
                  <p className="font-semibold text-gray-800">{animal.age} years</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-semibold text-gray-800">{animal.location}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{animal.description}</p>
              </div>

              {session ? (
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Book This Animal
                  </h3>
                  <BookingForm />
                </div>
              ) : (
                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4">
                    Please login to book this animal.
                  </p>
                  <Link
                    href="/login"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    Login to Book
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}