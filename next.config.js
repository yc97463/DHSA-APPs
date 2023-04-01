/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/room',
        destination: 'https://dhsa.ndhu.edu.tw/app/index.php?Plugin=school&Action=schoolresapp&Res=78',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
