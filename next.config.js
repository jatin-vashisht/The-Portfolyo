const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-image-store.s3.ap-south-1.amazonaws.com',
      },
    ],
    dangerouslyAllowSVG: true,
  }
}