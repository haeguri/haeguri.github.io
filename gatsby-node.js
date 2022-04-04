const { format } = require("date-fns");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const postDate = new Date(node.frontmatter.date); // Use moment.js to easily change date format.
    const defaultSlug = createFilePath({ node, getNode, basePath: `pages` });
    const slug = `/${format(postDate, "yyyy/MM/dd")}${defaultSlug}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const slug = node.fields.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/Detail.tsx`),
      context: { id: node.id },
    });
  });
};
