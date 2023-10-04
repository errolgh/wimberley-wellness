/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `wimberley-wellness`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`, //https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image#customizing-the-defaults
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -40,
      },
    },
  ],
}
