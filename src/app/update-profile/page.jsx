'use client';

import { useState, useEffect } from 'react';
import { useSession, authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', image: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        image: session.user.image || '',
      });
    }
  }, [session]);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Update failed!');
    } else {
      toast.success('Profile updated successfully!');
      router.push('/my-profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 animate__animated animate__fadeIn">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Update Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Name</label>
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
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                placeholder="Enter image URL"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2.5 sm:py-3 rounded-lg font-bold hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? 'Updating...' : 'Update Information'}
            </button>
          </form>

          <p className="mt-4 text-center">
            <Link href="/my-profile" className="text-primary hover:underline text-sm sm:text-base">
              Back to Profile
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}