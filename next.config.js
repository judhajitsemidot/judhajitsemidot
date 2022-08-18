/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: isProd ? `${process.env.NEXT_PUBLIC_BASE_PATH}` : "",
  assetsPrefix: isProd ? `${process.env.NEXT_PUBLIC_PRODUCTION_FRONT_URL}` : "",
  webpack: (config, { dev }) => {
    // console.log("Config Target: ",config.target);
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    // console.log("Config: ", config)
    return config;
  }
};

module.exports = nextConfig;