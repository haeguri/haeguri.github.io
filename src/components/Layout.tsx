import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <ul>about</ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
