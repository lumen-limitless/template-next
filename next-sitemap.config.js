/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
