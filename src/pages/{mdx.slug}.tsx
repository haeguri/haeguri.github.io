import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
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
  return (
    <>
      <SEO
        article
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <Layout>
        <p>My blog post contents will go here (eventually).</p>
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
