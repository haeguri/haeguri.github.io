module.exports = {
  siteMetadata: {
    title: "Devlog",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
