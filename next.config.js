/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['https://hammerhead-app-7ljp5.ondigitalocean.app'],
        unoptimized: true,
    },
    output:'standalone',
    trailingSlash: true,


}

module.exports = nextConfig
