/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['http://127.0.0.1:8000'],
        unoptimized: true,
    },
    output:'standalone',
    trailingSlash: true,


}

module.exports = nextConfig
