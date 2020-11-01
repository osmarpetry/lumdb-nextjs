module.exports = {
    target: "serverless",
    images: {
        deviceSizes: [320, 640, 768, 1024, 1600],
        domains: ['image.tmdb.org']
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public'
    }
}
