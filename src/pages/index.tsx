import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
interface Mdx {
  id: string;
  slug: string;
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
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <Link to={node.slug}>
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p> Posted: {node.frontmatter.date}</p>
            <p>{node.frontmatter.description}</p>
          </article>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
      }
    }
  }
`;

export default Home;
