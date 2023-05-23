/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || '',
  generateRobotsTxt: false, // (optional)
  generateIndexSitemap: false,
  outDir: './src/app/',
  // ...other options
}
