import { Link } from "gatsby";
import React from "react";

const Layout: React.FC = ({ children }) => {
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
      <main>{children}</main>
      <footer>
        ©{" "}
        <a href="https://github.com/haeguri" target="_blank">
          haeguri
        </a>
        , Built with Gatsby
      </footer>
    </>
  );
};

export default Layout;
