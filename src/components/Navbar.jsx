'use client';

import { useState } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success('Logged out successfully!');
    setMenuOpen(false);
    router.push('/');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center gap-2" onClick={closeMenu}>
            🐄 QurbaniHat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-accent transition font-medium">Home</Link>
            <Link href="/animals" className="hover:text-accent transition font-medium">All Animals</Link>

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
                  <span className="hidden lg:inline">{session.user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-secondary px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-sm"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-medium text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block py-2 hover:text-accent transition font-medium" onClick={closeMenu}>Home</Link>
            <Link href="/animals" className="block py-2 hover:text-accent transition font-medium" onClick={closeMenu}>All Animals</Link>

            {isPending ? (
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : session ? (
              <div className="space-y-3 pt-2 border-t border-green-600">
                <Link href="/my-profile" className="flex items-center gap-2 py-2 hover:text-accent transition" onClick={closeMenu}>
                  {session.user.image ? (
                    <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <FaUserCircle className="w-8 h-8" />
                  )}
                  <span>{session.user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-secondary px-4 py-2 rounded-lg hover:bg-red-700 transition text-left font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-2 border-t border-green-600">
                <Link
                  href="/login"
                  className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-center"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-medium text-center"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}