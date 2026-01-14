import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm } from "../utils/typography";

const ProjectsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allMarkdownRemark.edges;

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
      <Seo title="Projects" />
      <div style={{ marginBottom: rhythm(2) }}>
        <h2 style={{ marginTop: 0 }}>Projects</h2>
        <p>A collection of things I'm working on, finished, or planning to do.</p>
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: rhythm(1.5),
            marginTop: rhythm(1.5)
          }}
        >
          {projects.map(({ node }) => {
            const title = node.frontmatter.title;
            const status = node.frontmatter.status || 'todo';
            
            return (
              <Link 
                to={node.fields.slug}
                key={node.fields.slug}
                className="project-card"
                style={{
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {/* Thumbnail Image */}
                <div 
                  style={{
                    height: '180px',
                    backgroundImage: `url(${node.frontmatter.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f5f5f5',
                    position: 'relative'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: getStatusColor(status),
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {status}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: rhythm(0.75), flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 
                    style={{ 
                      marginTop: 0, 
                      marginBottom: rhythm(0.25),
                      fontSize: '1.1rem',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    {title}
                  </h3>
                  
                  <p
                    style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      marginBottom: rhythm(0.5),
                      flex: 1
                    }} 
                  >
                    {node.frontmatter.description}
                  </p>
                  
                  {node.frontmatter.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {node.frontmatter.tags.map(tag => (
                        <span 
                          key={tag}
                          style={{
                            backgroundColor: '#f0f0f0',
                            color: '#555',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontSize: '0.7rem'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
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
    }
  }
`;
