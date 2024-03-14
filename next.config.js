/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: true,
    // output: "export",
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'admin.your-rules.com.ua',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
};

module.exports = nextConfig;
