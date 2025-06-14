import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Posts',
  tagline: 'A place for contemplation.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://blog.16090000.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nullniverse', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['CN'],
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
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Recent Posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Nullniverse.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
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
      title: 'Blog',
      logo: {
        alt: 'Nullniverse',
        src: 'img/favicon.png',
      },
      items: [
        {
          href: 'https://github.com/nullniverse/blog',
          label: 'Github',
          position: 'left',
        },
        {to: 'https://wiki.16090000.xyz/', label: 'Wiki', position: 'left'},
        {to: 'https://derelict.garden/enter.html', label: 'Garden', position: 'left'},
        {
          href: 'https://derelict.garden/',
          label: 'Derelict.Garden',
          position: 'right',
        },
        {to: 'https://derelict.garden/prev/blog.16090000.xyz', label: ' ««', position: 'left'},
        {to: '#', label: ' | ', position: 'left'},
        {to: 'https://derelict.garden/next/blog.16090000.xyz', label: '»» ', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
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
            {
              label: 'GitHub',
              href: 'https://github.com/nullniverse',
            }
          ],
        }
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
