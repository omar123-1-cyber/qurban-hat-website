'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp, signIn } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoUrl: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      image: formData.photoUrl,
      callbackURL: '/login',
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Registration failed!');
    } else {
      toast.success('Registration successful! Please login.');
      router.push('/login');
    }
  };

  const handleGoogleRegister = async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 sm:py-12 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md animate__animated animate__fadeInUp">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-6 sm:mb-8 text-sm sm:text-base">Join QurbaniHat today</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              placeholder="Enter photo URL (optional)"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2.5 sm:py-3 rounded-lg font-bold hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <button
            onClick={handleGoogleRegister}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
          >
            <FaGoogle className="text-red-500" />
            Google
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}