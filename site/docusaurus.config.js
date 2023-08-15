// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindful Software Workflows',
  tagline: 'A collection of helpful, reusable GitHub workflows used by VGV.',
  url: 'https://workflows.vgv.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MindfulSoftwareOpenSource', // Usually your GitHub org/user name.
  projectName: 'mindful_software_workflows', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MindfulSoftwareOpenSource/mindful_software_workflows/tree/main/site',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/meta/open-graph.png',
      navbar: {
        logo: {
          alt: 'Mindful Software Workflows',
          src: 'img/workflows_nav_icon.svg',
        },
        items: [
          {
            to: '/docs/overview',
            label: 'Get Started',
            position: 'right',
            className: 'button nav-button',
          },
          {
            label: 'VGV.DEV',
            to: 'https://vgv.dev',
            position: 'right',
          },
          {
            href: 'https://mindfulsoftware.com',
            position: 'right',
            className: 'navbar-vgv-icon',
            'aria-label': 'VGV website',
          },
          {
            href: 'https://github.com/MindfulSoftwareOpenSource/mindful_software_workflows',
            position: 'right',
            className: 'navbar-github-icon',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Built with 💙 by <a target="_blank" rel="noopener" aria-label="Mindful Software" href="https://mindfulsoftware.com"><b>Mindful Software</b></a><br/>Copyright © ${new Date().getFullYear()} Mindful Software.`,
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
