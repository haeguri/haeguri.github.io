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
    <div className="flex flex-col h-screen">
      <nav className="flex w-full h-16 border-b">
        <div className="flex items-center container mx-auto">
          <Link to="/">Devlog</Link>
          <ul className="flex ml-auto">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="ml-2">
              <Link to="/">Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container flex-1 mx-auto">{children}</main>
      <footer className="">
        <div className="container flex items-center mx-auto border-t h-16">
          ©{" "}
          <a href="https://github.com/haeguri" target="_blank">
            haeguri
          </a>
          , Built with Gatsby
        </div>
      </footer>
    </div>
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
