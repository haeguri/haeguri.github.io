import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

interface Mdx {
  id: string;
  body: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
}

const BlogPost: React.VFC<{ data: { mdx: Mdx } }> = ({ data }) => {
  // let disqusConfig = {
  //   url: `${config.siteUrl + location.pathname}`,
  //   identifier: post.id,
  //   title: post.title,
  // };

  return (
    <>
      <SEO
        article
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <Layout>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`;

export default BlogPost;
