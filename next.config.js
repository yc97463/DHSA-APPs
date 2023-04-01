/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/card',
        destination:
          'https://dhsa.ndhu.edu.tw/p/412-1110-19720.php?Lang=zh-tw',
        permanent: false,
        basePath: false,
      },
      {
        source: '/room',
        destination:
          'https://dhsa.ndhu.edu.tw/app/index.php?Plugin=school&Action=schoolresapp&Res=78',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
