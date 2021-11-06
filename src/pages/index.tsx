import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

interface MdxNode {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
}
interface Data {
  allMdx: {
    nodes: Array<MdxNode>;
  };
}

const Home: React.VFC<{ data: Data }> = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p> Posted: {node.frontmatter.date}</p>
          <p>{node.frontmatter.description}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
      }
    }
  }
`;

export default Home;
