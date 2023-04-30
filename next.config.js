/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: "839901068497-m42ungtqhs4hu9pfla6lmnjh8lg2pn4v.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  }
}

module.exports = nextConfig;
