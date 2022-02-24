const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

// module.exports = {
//   reactStrictMode: true,
//   disableStaticImages: true,
//   withImages: withImages(),
//   redirects: async () => {
//     return [
//       {
//         source: '/',
//         destination: '/Home', // Matched parameters can be used in the destination
//         permanent: true,
//       },
//     ]
//   },

// }
module.exports = withPlugins([
  [withImages], {
    reactStrictMode: true,
    disableStaticImages: true,
    withImages: withImages(),
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/Home', // Matched parameters can be used in the destination
          permanent: true,
        },
      ]
    }
  }
]);

