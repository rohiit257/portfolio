/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'encrypted-tbn0.gstatic.com',
          "api.microlink.io",
          "cdn.hashnode.com", // Microlink Image Preview
        ],
      },
};

export default nextConfig;
