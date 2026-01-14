import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm } from "../utils/typography";

const LinksIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const linkFiles = data.allMarkdownRemark.edges;

  // Helper function to decode HTML entities
  const decodeHtmlEntities = (text) => {
    // Simple regex-based decoder for common HTML entities
    const entities = {
      '&#x26;': '&',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&apos;': "'",
    };
    
    return text.replace(/&#x26;|&amp;|&lt;|&gt;|&quot;|&#39;|&apos;/g, (match) => entities[match] || match);
  };

  // Parse links from HTML (rendered markdown)
  // Expected format: <li><a href="url">title</a> - description (with possible embedded links)</li>
  const parseLinks = (html) => {
    const links = [];
    
    // Match list items with links
    const liRegex = /<li>(.*?)<\/li>/gs;
    const matches = html.matchAll(liRegex);
    
    for (const match of matches) {
      const liContent = match[1];
      
      // Extract the first link (the main link)
      const linkMatch = liContent.match(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/);
      if (linkMatch) {
        const url = linkMatch[1];
        // Decode HTML entities in the title
        const title = decodeHtmlEntities(linkMatch[2]);
        
        // Extract description (everything after the first link)
        const firstLinkEnd = liContent.indexOf('</a>') + 4;
        let afterLink = liContent.substring(firstLinkEnd).trim();
        
        // Remove leading dash or hyphen
        afterLink = afterLink.replace(/^[-–—]\s*/, '').trim();
        
        // The description can contain HTML (including other links) which is fine
        // We'll render it as dangerouslySetInnerHTML to preserve embedded links
        const description = afterLink;
        
        links.push({ url, title, description });
      }
    }
    
    return links;
  };

  // Collect all links from all files with their dates
  const allLinks = [];
  linkFiles.forEach(({ node }) => {
    const date = node.frontmatter.date;
    const category = node.frontmatter.title;
    
    // Parse links from HTML
    const links = parseLinks(node.html);
    links.forEach(link => {
      allLinks.push({ ...link, date, category });
    });
  });

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Links" />
      <p style={{ marginBottom: rhythm(1.5) }}>
        A collection of interesting links and resources I've found around the web.
      </p>
      {allLinks.map((link, index) => {
        // Extract domain for favicon
        let domain = '';
        try {
          const url = new URL(link.url);
          domain = url.hostname;
        } catch (e) {
          // If URL parsing fails, use the link as-is
          domain = link.url;
        }

        return (
          <article 
            key={index} 
            style={{ 
              marginBottom: rhythm(1.5),
              display: 'flex',
              gap: rhythm(0.75),
            }}
          >
            <div
              style={{
                flexShrink: 0,
                marginTop: rhythm(0.25),
              }}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                alt=""
                style={{
                  width: '20px',
                  height: '20px',
                  margin: 0,
                  borderRadius: '2px',
                }}
                onError={(e) => {
                  // Fallback to a simple icon if favicon fails
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0,
                  }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ boxShadow: `none` }}
                  >
                    {link.title} →
                  </a>
                </h3>
                <small>{link.date}</small>
                {link.category && (
                  <small style={{ marginLeft: rhythm(0.5), color: '#666' }}>
                    · {link.category}
                  </small>
                )}
              </header>
              {link.description && (
                <section>
                  <p 
                    style={{ marginTop: rhythm(0.5) }}
                    dangerouslySetInnerHTML={{ __html: link.description }}
                  />
                </section>
              )}
            </div>
          </article>
        );
      })}
    </Layout>
  );
};

export default LinksIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { collection: { eq: "links" } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

