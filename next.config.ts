import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org', // Example: Unsplash images
            },

            // Add more objects for other allowed domains
        ],
    },
};

export default nextConfig;
