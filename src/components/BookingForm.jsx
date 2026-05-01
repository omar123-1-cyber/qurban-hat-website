'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking placed successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your address"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
      >
        Place Booking
      </button>
    </form>
  );
}