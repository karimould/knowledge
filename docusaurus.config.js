// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Knowledge",
  tagline: "Knowledge",
  url: "https://wiki.karimould.dev",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "karimould", // Usually your GitHub org/user name.
  projectName: "knowledge", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/karimould/knowledge",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "Knowledge",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://twitter.com/krimould",
            position: "right",
            label: "Twitter",
          },
          {
            href: "https://github.com/karimould",
            position: "right",
            label: "Github",
          },
          {
            href: "https://karimould.dev",
            position: "right",
            label: "Homepage",
          },
          {
            href: "https://github.com/karimould/knowledge",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // Application ID provided by Algolia
      //   appId: "VZMWVWCY2I",
      //   // Public API key
      //   apiKey: "8f34bfba01b4422d26cce783e7792f75",
      //   indexName: "nikiv",
      // },
    }),
};

module.exports = config;
