const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const webpackConfig = {
  webpack: (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "@assets": path.join(__dirname, "assets"),
          "@views": path.join(__dirname, "components/views"),
        },
      },
    });

    return config;
  },
};

module.exports = {
  ...nextConfig,
  ...webpackConfig,
};
