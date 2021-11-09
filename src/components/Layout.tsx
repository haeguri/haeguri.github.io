import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import SEO from "./SEO";

interface LayoutProps {
  title?: string;
  data?: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        url: string;
      };
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site } = useStaticQuery(query);
  console.log("data is", site);

  return (
    <>
      <nav className="flex w-full h-16">
        <div className="flex container mx-auto">
          <Link to="/">Devlog</Link>
          <ul className="flex ">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto">{children}</main>
      <footer>
        <div className="container mx-auto">
          ©{" "}
          <a href="https://github.com/haeguri" target="_blank">
            haeguri
          </a>
          , Built with Gatsby
        </div>
      </footer>
    </>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
  }
`;

export default Layout;
