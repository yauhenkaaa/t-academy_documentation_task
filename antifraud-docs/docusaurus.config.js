import { themes as prismThemes } from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Anti-Fraud System',
  tagline: 'Система антифрода ',
  favicon: 'img/favicon.ico',
  url: 'https://yauhenkaaa.github.io',
  baseUrl: '/t-academy_documentation_task/',
  organizationName: 'yauhenkaaa',
  projectName: 't-academy_documentation_task',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  plugins: [
    [require.resolve('docusaurus-plugin-drawio'),
      {
        name: 'docusaurus-plugin-drawio'
      }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'style_guide',
        path: 'style_guide',
        routeBasePath: 'style-guide',
        sidebarPath: require.resolve('./sidebars-style-guide.js'),
        remarkPlugins: [simplePlantUML],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/yauhenkaaa/t-academy_documentation_task/edit/main/antifraud-docs/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'antifraud-docs',
            spec: 'api_specs/antifraud-openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI Anti-Fraud System',
        logo: {
          alt: 'AI Anti-Fraud System Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/API/',
            label: 'API',
            position: 'left',
          },
          {
            to: '/style_guide/',
            label: 'Style Guide',
            position: 'left',
          },
          {
            href: 'https://github.com/yauhenkaaa/t-academy_documentation_task',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Карточка сервиса',
                to: '/docs/intro',
              },
              {
                label: 'Архитектура',
                to: '/docs/architecture',
              },
              {
                label: 'API Reference',
                to: '/docs/API/herotask',
              },
            ],
          },
          {
            title: 'Для авторов',
            items: [
              {
                label: 'Style Guide',
                to: '/style_guide/',
              },
              {
                label: 'Репозиторий',
                href: 'https://github.com/yauhenkaaa/t-academy_documentation_task',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Anti-Fraud System. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;