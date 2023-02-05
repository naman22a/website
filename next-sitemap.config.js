/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://namanarora.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }]
    }
};
