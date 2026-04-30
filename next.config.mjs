/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.postimg.cc', 'lh3.googleusercontent.com'],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
