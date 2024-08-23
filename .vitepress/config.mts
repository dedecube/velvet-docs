import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite';
import path from 'path';
import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";
import { generateRewrites } from './utils/generate-rewrites';
import { generateSidebar } from './utils/generate-sidebar';

export default withMermaid(
  defineConfig({
    vite: {
      plugins: [
        GitChangelog({ 
          repoURL: () => 'https://github.com/dedecube/docs-web.git', 
        }), 
        GitChangelogMarkdownSection(),
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
    title: "Velvet",
    description: "Velvet is a robust development framework that helps you build fast, reliable, and secure flutter applications.",
    srcDir: './src',
    lang: 'en-US',
    cleanUrls: true,
    ignoreDeadLinks: true,
    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
    },
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
      ['link', { href: 'https://fonts.cdnfonts.com/css/satoshi', rel: 'stylesheet' }],
    ],
    markdown: {
      toc: {
        level: [2, 3, 4, 5],
        shouldAllowNested: true,
      },
      anchor: {
        level: [2, 3, 4, 5],
      }
    },
    rewrites: generateRewrites(path.resolve(__dirname, '..', 'src')),
    themeConfig: {
      editLink: {
        pattern: (page) => {
          return `https://github.com/dedecube/velvet-docs/tree/main/src/${page.filePath}`;
        },
        text: 'Edit this page on GitHub',
      },
      logo: '/velvet-logo.svg',
      nav: [],
      sidebar: generateSidebar(path.resolve(__dirname, '..', 'src')),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/dedecube' },
        { icon: "discord", link: "https://discord.gg/BBjvZeJY" },
      ],
      search: {
        provider: 'local'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Dedecube S.R.L.',
      }
    },
  })
);
