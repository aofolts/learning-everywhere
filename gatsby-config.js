let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
