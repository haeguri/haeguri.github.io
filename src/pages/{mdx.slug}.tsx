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
    disqus_id?: string;
  };
}

interface SiteMetadata {
  url: string;
}

const BlogPost: React.VFC<{
  data: { mdx: Mdx; site: { siteMetadata: SiteMetadata } };
}> = ({ data }) => {
  let disqusConfig = {
    url: `${data.site.siteMetadata.url + location.pathname}`,
    identifier: data.mdx.frontmatter.disqus_id ?? data.mdx.id,
    title: data.mdx.frontmatter.title,
  };

  return (
    <>
      <SEO
        article
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <Layout>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        disqus_id
      }
    }

    site {
      siteMetadata {
        url
      }
    }
  }
`;

export default BlogPost;
