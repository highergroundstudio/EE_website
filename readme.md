[![CircleCI](https://circleci.com/gh/highergroundstudio/ee_website.svg?style=svg)](https://circleci.com/gh/highergroundstudio/ee_website)
  <a href="https://greenkeeper.io/">
    <img
      src="https://badges.greenkeeper.io/fabe/gatsby-universal.svg"
      alt="Greenkeeper badge"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
[![Netlify Status](https://api.netlify.com/api/v1/badges/7773ac33-b529-4732-b08c-c868d60594d9/deploy-status)](https://app.netlify.com/sites/elevatedequities/deploys)

## Usage

[![Edit on CodeSandbox](https://cdn.rawgit.com/fabe/1dd805eed0153b47aba2b50cea2469ec/raw/64b0ea90c2a425d3847da908053f5f337128259b/edit-on-codesandbox-32px.svg)](https://codesandbox.io/s/github/fabe/gatsby-universal)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fabe/gatsby-universal)

```bash
# Installation with `gatsby-cli`
gatsby new my-site https://github.com/fabe/gatsby-universal

# Installation with `git clone`
git clone my-site git@github.com:fabe/gatsby-universal.git
cd my-site
yarn install

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

# To generate favicons (included in `build`)
yarn build:favicons
```

## Configuration

Find the site-wide configuration in `site-config.js`.

```js
module.exports = {
  siteTitle: `Gatsby Universal`,
  siteTitleShort: `GatsbyU`,
  siteDescription: `An opinionated starter for Gatsby.`,
  siteUrl: `https://gu.fabianschultz.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── io # Intersection Observer component, uses render props
│   │   ├── layout # Layout component
│   │   │   ├── layout.css.js # .css.js for component's `styled-components`
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── containers # Container components if store is needed
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   └── global.css.js # Global CSS
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Credits

* Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_)) - [Stink Studios](https://stinkstudios.com)
