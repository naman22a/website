const siteUrl = 'https://namanarora.vercel.app';

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }]
    }
};
