import dns from "node:dns";
dns.setServers(["8.8.8.8","8.8.4.4"])
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';

export const metadata = {
  title: 'QurbaniHat - Livestock Booking Platform',
  description: 'Book premium quality cows and goats for your Qurbani',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ToastProvider />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}