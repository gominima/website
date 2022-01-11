// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Minima",
  tagline: "Minimal Go framework",
  url: "https://minima.tech",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gominima", // Usually your GitHub org/user name.
  projectName: "minima", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: "Minima",
        items: [
          {
            to: "docs/General/Welcome",
            position: "right",
            label: "Documentation",
            activeBaseRegex: "^/docs/(General|Documentation)/.+$",
          },
          {
            href: "https://github.com/gominima/minima",
            className: "item-github",
            position: "right",
          },
        ],
      },
      footer: {
				logo: {
					alt: 'Powered By Vercel',
					src: 'img/powered-by-vercel.svg',
					href: 'https://vercel.com/?utm_source=gominima&utm_campaign=oss'
				},
				links: [
					{
						title: 'Support',
						items: [
							{
								label: 'Discord Server',
								href: 'https://minima.studio/discord'
							},
							{
								label: 'GitHub Organization',
								href: 'https://github.com/gominima'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} The Minima Community and its contributors.`
			},
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
