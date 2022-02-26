import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
interface Mdx {
  id: string;
  slug: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
}
interface Data {
  allMdx: {
    nodes: Array<Mdx>;
  };
}

const Home: React.VFC<{ data: Data }> = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        {data.allMdx.nodes.map((node) => (
          <Link to={node.slug}>
            <article className="my-8" key={node.id}>
              <h2 className="font-bold text-2xl">{node.frontmatter.title}</h2>
              <p className="mt-2 mb-1">{node.excerpt}</p>
              <span className="text-gray-400 m-l-auto flex">
                {node.frontmatter.date}
              </span>
            </article>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        excerpt(truncate: true)
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
        }
      }
    }
  }
`;

export default Home;
