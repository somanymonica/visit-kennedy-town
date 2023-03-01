/** @type {import('next').NextConfig} */
module.exports = {
  // basePath: "/kennedytown",

  output: "standalone",
  assetPrefix: "kennedytown", //是用docker-compose和nginx部署时才用的
  async rewrites() {
    // 看起来没有用到
    return [
      {
        source: "/about",
        destination: "/kennedytown/about",
      },
    ];
  },
};
