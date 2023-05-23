/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || '',
  generateRobotsTxt: true, // (optional)
  outDir: './src/app',
  // ...other options
}
