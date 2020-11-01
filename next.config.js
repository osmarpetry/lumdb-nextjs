const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['image.tmdb.org'],
  },
  pwa: {
    dest: 'public',
  },
});
