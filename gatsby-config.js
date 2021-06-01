module.exports = {
  siteMetadata: {
    title: "Alek's Tutorials",
  },
  plugins: [
    {
        resolve: `gatsby-source-graphql`,
        options: {
            typeName: `GraphCMS`,
            fieldName: `gcms`,
            url: `https://api-us-east-1.graphcms.com/v2/ckp26rfeey79x01z53zkvacnn/master`,
        }, 
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
