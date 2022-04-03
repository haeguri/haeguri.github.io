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
  a: ({ children, href }) => (
    <a
      className="text-blue-500 font-semibold"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  code: Code,
  h2: ({ children }) => (
    <div className="mt-14 mb-5">
      <h2 className="inline-block pb-0.5 text-2xl font-bold">{children}</h2>
    </div>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold my-1">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 mb-3 text-lg font-semibold my-1">{children}</h4>
  ),
  p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 pl-6 list-disc">{children}</ul>,
  li: ({ children }) => <li className="mb-2 leading-6">{children}</li>,
  ol: ({ children }) => <ul className="mb-4 pl-6 list-decimal">{children}</ul>,
  em: ({ children }) => <em className="text-gray-500">{children}</em>,
  img: ({ children, ...props }) => (
    <img className="mx-auto" {...props}>
      {children}
    </img>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 pt-6 pb-1 px-6 bg-gray-100 rounded">
      {children}
    </blockquote>
  ),
};

const PostHeader: React.FC = ({ children }) => {
  return <div className="mb-10">{children}</div>;
};

const PostTitle: React.FC = ({ children }) => {
  return <h1 className="font-bold text-4xl">{children}</h1>;
};

const PublishedDate: React.FC = ({ children }) => {
  return <div className="mt-2 text-gray-400 m-l-auto flex">{children}</div>;
};

const BlogPost: React.VFC<{
  data: { mdx: Mdx; site: { siteMetadata: SiteMetadata } };
  location: {
    pathname: string;
  };
}> = ({ data, location }) => {
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
        <PostHeader>
          <PostTitle>{data.mdx.frontmatter.title}</PostTitle>
          <PublishedDate>{data.mdx.frontmatter.date}</PublishedDate>
        </PostHeader>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
        <div className="mb-20"></div>
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
