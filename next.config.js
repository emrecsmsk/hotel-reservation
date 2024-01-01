/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img001.prntscr.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
