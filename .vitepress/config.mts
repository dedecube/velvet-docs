import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
  vite: {
    plugins: [
      GitChangelog
      ({ 
              repoURL: () => 'https://github.com/dedecube/docs-web.git', 
            }), 
            GitChangelogMarkdownSection
      (),
    ],
    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ],
    },
  },
  title: "dedecube",
  description: "Comprehensive guides and resources for developing and deploying Dedecube Laravel web applications.",
  srcDir: './src',
  lang: 'en-US',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction/' },
    ],
    sidebar: [
      {
        text: 'Prologue',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/introduction/' },
        ],
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/getting-started/' },
        ]
      },
      {
        text: 'Git Flow',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/git-flow/' },
          { text: 'Branch', link: '/git-flow/branch' },
          { text: 'Commit', link: '/git-flow/commit' },
          { text: 'Workflow', link: '/git-flow/workflow' },
          { text: 'FAQ', link: '/git-flow/faq' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dedecube' },
    ]
    }
}));
