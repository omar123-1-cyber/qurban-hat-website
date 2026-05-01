import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">🐄 QurbaniHat</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted platform for Qurbani livestock booking. We connect you with the best quality animals for your religious obligations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <FaPhone className="text-primary" /> +880 1234-567890
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" /> info@qurbanihat.com
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaFacebook />
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaTwitter />
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 QurbaniHat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}