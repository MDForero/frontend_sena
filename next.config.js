/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [process.env.NEXT_PUBLIC_API_URL + ''],
        unoptimized: true,
    },
    trailingSlash: true,


}

module.exports = nextConfig
