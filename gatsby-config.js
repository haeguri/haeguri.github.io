module.exports = {
  siteMetadata: {
    title: "Devlog",
    description: "This blog posts about web frontend devlopement.",
    url: "haeguri.github.io",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `haeguri`,
      },
    },
  ],
};
