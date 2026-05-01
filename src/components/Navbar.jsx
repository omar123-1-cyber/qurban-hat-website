'use client';

import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    toast.success('Logged out successfully!');
    router.push('/');
  };

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            🐄 QurbaniHat
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <Link href="/animals" className="hover:text-accent transition">All Animals</Link>

            {isPending ? (
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : session ? (
              <div className="flex items-center gap-4">
                <Link href="/my-profile" className="flex items-center gap-2 hover:text-accent transition">
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-8 h-8" />
                  )}
                  <span className="hidden sm:inline">{session.user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-secondary px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}