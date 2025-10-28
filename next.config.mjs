/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // <- to wyłącza optymalizację obrazów, żeby <Image /> działał w eksporcie
  },
};

export default nextConfig;
