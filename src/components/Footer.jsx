import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">🐄 QurbaniHat</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Your trusted platform for Qurbani livestock booking. We connect you with the best quality animals for your religious obligations.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
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
            <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaFacebook />
              </Link>
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaTwitter />
              </Link>
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 QurbaniHat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}