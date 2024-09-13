/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/**",
    },
  ],
};

export default nextConfig;
