import { styled } from "twin.macro";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Disqus } from "gatsby-plugin-disqus";
import { MDXProvider } from "@mdx-js/react";

import React, { Children } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Code from "../components/Code";

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

const components: Record<string, React.FC<any>> = {
  code: Code,
  h2: ({ children }) => (
    <h2 className="mt-7 mb-5 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-5 mb-3 text-xl font-medium my-1">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
  ul: ({ children }) => <ul className="pl-6 list-disc">{children}</ul>,
  li: ({ children }) => <li className="mb-3 leading-6">{children}</li>,
};

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
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
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
