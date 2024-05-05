import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Nullniverse\'s blog',
  tagline: 'A place to output some states from my holonomic brain',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://blog.nullniverse.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nullniverse', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/nullniverse/blog/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],  
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 200}}),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.png',
    navbar: {
      title: '📎 Nullniverse\'s blog',
      logo: {
        alt: 'Nullniverse',
        src: 'img/favicon.png',
      },
      items: [
        {
          href: 'https://github.com/nullniverse/blog',
          label: 'Github',
          position: 'right',
        },
        {to: 'https://memo.nullniverse.xyz', label: 'Wiki', position: 'left'},
        {to: 'https://derelict.garden/enter.html', label: 'Garden', position: 'left'},
        {
          href: 'https://derelict.garden/',
          label: 'Derelict.Garden',
          position: 'right',
        },
        {to: '#', label: ' | ', position: 'left'},
        {to: 'https://derelict.garden/prev/blog.nullniverse.xyz', label: ' ««', position: 'left'},
        {to: 'https://derelict.garden/next/blog.nullniverse.xyz', label: '»» ', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tags',
          items: [
            {
              label: 'blogging',
              to: '/tags/blogging',
            },
            // {
            //   label: 'public',
            //   to: '/docs/tags/public',
            // },
          ],
        },
        {
          title: 'Communities',
          items: [
            {
              label: 'Goodreads',
              href: 'https://www.goodreads.com/user/show/61440360-null',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/laowaidoug',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nullniverse',
            },
          ],
        },
      ],
      copyright: `MIT License - ${new Date().getFullYear()} | Nullniverse. Built with 💙 using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
