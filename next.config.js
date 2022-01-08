/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    backendUrl: process.env.API_HOST,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },  
}
