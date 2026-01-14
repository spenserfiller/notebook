import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#4caf50';
      case 'in-progress': return '#2196f3';
      case 'todo': return '#ff9800';
      default: return '#999';
    }
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: rhythm(0.5) }}>
            <span 
              style={{
                backgroundColor: getStatusColor(post.frontmatter.status),
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginRight: rhythm(0.5)
              }}
            >
              {post.frontmatter.status || 'Status Unknown'}
            </span>
            <span style={{ fontSize: '0.9rem', color: '#666' }}>
              Started: {post.frontmatter.date}
            </span>
          </div>

          <h1
            style={{
              marginTop: 0,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.title}
          </h1>

          {post.frontmatter.tags && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: rhythm(1) }}>
              {post.frontmatter.tags.map(tag => (
                <span 
                  key={tag}
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: '#555',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        {/* Project Thumbnail (optional to show large at top) */}
        {post.frontmatter.thumbnail && (
          <div style={{ marginBottom: rhythm(1.5), borderRadius: '8px', overflow: 'hidden' }}>
            <img 
              src={post.frontmatter.thumbnail} 
              alt={post.frontmatter.title} 
              style={{ width: '100%', display: 'block', margin: 0 }} 
            />
          </div>
        )}

        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default ProjectPostTemplate;

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        status
        tags
        thumbnail
      }
    }
  }
`;
