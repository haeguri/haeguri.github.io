import { Link } from "gatsby";
import React from "react";

interface LayoutProps {
  className?: string;
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

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col h-screen" {...props}>
      <nav className="flex flex-shrink-0 w-full h-16 border-b">
        <div className="flex items-center container mx-auto">
          <Link
            to="/"
            className="text-lg font-medium tracking-normal sm:text-xl"
          >
            Haeguri Blog
          </Link>
          <ul className="flex ml-auto">
            <li>
              <Link to="/" className="tracking-wide text-lg">
                Posts
              </Link>
            </li>
            <li className="ml-4">
              <a
                href="https://github.com/haeguri"
                target="_blank"
                className="tracking-wide text-lg"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container flex-1 mx-auto mt-14 mb-10">{children}</main>
      <footer className="mt-10">
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

export default Layout;
