const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withImages], {
    reactStrictMode: true,
    disableStaticImages: true,
    trailingSlash: undefined,
    // redirects: async () => {
    //   // return [
    //   //   {
    //   //     source: '/',
    //   //     destination: ' ', // Matched parameters can be used in the destination
    //   //     permanent: true,
    //   //   },
    //   // ]
    // }
  }
]);

