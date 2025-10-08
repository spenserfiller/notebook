import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const linksPath = `${__PATH_PREFIX__}/links/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(0.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          marginBottom: rhythm(0.5),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }

  const nav = (
    <nav
      style={{
        marginBottom: rhythm(1),
        fontSize: '0.9rem',
      }}
    >
      <Link
        to="/"
        style={{
          boxShadow: 'none',
          color: location.pathname === rootPath ? '#007acc' : 'inherit',
          marginRight: rhythm(1),
          textDecoration: 'none',
        }}
      >
        Blog
      </Link>
      <Link
        to="/links/"
        style={{
          boxShadow: 'none',
          color: location.pathname === linksPath ? '#007acc' : 'inherit',
          textDecoration: 'none',
        }}
      >
        Links
      </Link>
    </nav>
  );

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        {header}
        {nav}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
