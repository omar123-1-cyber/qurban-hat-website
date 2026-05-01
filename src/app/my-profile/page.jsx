'use client';

import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 animate__animated animate__fadeIn">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary h-24 sm:h-32" />
          
          <div className="px-4 sm:px-8 pb-6 sm:pb-8">
            <div className="relative -mt-12 sm:-mt-16 mb-4 sm:mb-6">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              ) : (
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                  <FaUser className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                </div>
              )}
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{user.name}</h1>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                <FaEnvelope className="text-primary" />
                <span>{user.email}</span>
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/update-profile"
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-700 transition text-sm sm:text-base"
                >
                  <FaEdit />
                  Update Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}