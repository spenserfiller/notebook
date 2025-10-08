# Notebook

A personal site for blog posts and link sharing. Built with Gatsby.

## 🚀 Development

**Note:** This project uses an older version of Gatsby that requires the legacy OpenSSL provider with Node.js 17+.

```shell
# Start the development server
NODE_OPTIONS=--openssl-legacy-provider gatsby develop
```

Your site will be running at `http://localhost:8000`

## 📝 Content Structure

### Blog Posts

Create markdown files in `/content/blog/[post-name]/index.md`:

```markdown
---
title: "Your Post Title"
date: "2025-01-01"
description: "A brief description"
---

Your post content here...
```

### Links

Create markdown files in `/content/links/` with multiple links per file:

```markdown
---
title: "October 2025"
date: "2025-10-07"
---

- [Link Title](https://example.com) - Your commentary about why this is interesting. You can embed [additional links](https://github.com/example) in the description.
- [Another Link](https://example.com/article) - More notes here.
```

Features:
- Multiple links per file for easy bulk entry
- Automatic favicon thumbnails for each link
- Embedded links in descriptions are supported
- Simple list format

## 🚢 Deploy

```shell
npm run deploy
```

Builds and deploys to GitHub Pages.
