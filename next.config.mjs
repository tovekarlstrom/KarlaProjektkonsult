/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.ctfassets.net'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
