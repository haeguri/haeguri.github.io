module.exports = {
  siteMetadata: {
    title: "Haeguri Devlog",
    description: "This blog posts about web frontend devlopement.",
    url: "https://haeguri.github.io",
  },
  plugins: [
    "gatsby-plugin-web-font-loader",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `haeguri`,
      },
    },
  ],
};
