import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const linksPath = `${__PATH_PREFIX__}/links/`;

  const nav = (
    <nav
      style={{
        marginBottom: rhythm(0.5),
        marginTop: rhythm(0.25),
        fontSize: '0.85rem',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Link
        to="/"
        style={{
          boxShadow: 'none',
          color: location.pathname === rootPath ? 'var(--accent)' : 'var(--text-muted)',
          marginRight: rhythm(1),
          textDecoration: 'none',
          borderBottom: 'none',
        }}
      >
        [ BLOG ]
      </Link>
      <Link
        to="/links/"
        style={{
          boxShadow: 'none',
          color: location.pathname === linksPath ? 'var(--accent)' : 'var(--text-muted)',
          textDecoration: 'none',
          borderBottom: 'none',
        }}
      >
        [ LINKS ]
      </Link>
    </nav>
  );

  return (
    <div
      className="technical-layout"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(0.1)} ${rhythm(3 / 4)}`,
        minHeight: '100vh',
      }}
    >
      <div className="corner-mark top-left" />
      <div className="corner-mark top-right" />
      <div className="corner-mark bottom-left" />
      <div className="corner-mark bottom-right" />
      
      <header style={{ marginBottom: rhythm(1) }}>
        {nav}
      </header>
      <main>{children}</main>
      <footer>
        <hr />
        <span className="date-tag">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
