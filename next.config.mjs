/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desativa a otimização de imagens
  },
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./build" // Changes the build output directory to `./build`.
};

export default nextConfig;
