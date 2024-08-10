import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";

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
    themeConfig: {
      nav: [],
      sidebar: [
        {
          text: 'Prologue',
          base: '/01-prologue',
          collapsed: true,
          items: [
            { text: 'Release Notes', link: '/01-release-notes/' },
            { text: 'Upgrade Guide', link: '/02-upgrade-guide/' },
          ],
        },
        {
          text: 'Getting Started',
          base: '/02-getting-started',
          collapsed: true,
          items: [
            { text: 'Installation', link: '/01-installation' },
            { text: 'Configuration', link: '/02-configuration' },
            { text: 'Directory Structure', link: '/03-directory-structure' },
          ]
        },
        {
          text: 'Architecture Concepts',
          base: '/03-architecture-concepts',
          collapsed: true,
          items: [
            { text: 'App Lifecycle', link: '/01-app-lifecycle' },
            { text: 'Container', link: '/02-container' },
            { text: 'Hooks', link: '/03-hooks' },
            { text: 'Plugins', link: '/04-plugins' },
          ]
        },
        {
          text: "The Basics",
          base: "/04-the-basics",
          collapsed: true,
          items: [
            { text: "Routing", link: "/01-routing" },
            { text: "Bootstrap", link: "/02-bootstrap" },
            { text: "Http Client", link: "/03-http-client" },
            { text: "Persistence", link: "/04-persistence" },
            { text: "Local State Management", link: "/05-local-state-management" },
            { text: "Global State Management", link: "/06-global-state-management" },
            { text: "Form", link: "/07-form" },
            { text: "Error Handling", link: "/08-error-handling" },
            { text: "Localization", link: "/09-localization" },
          ]
        },
        {
          text: "Digging Deeper",
          base: "/05-digging-deeper",
          collapsed: true,
          items: [            
            { text: "Cli using Pfy", link: "/01-cli" },
            { text: "Caching", link: "/02-caching" },
            { text: "Helpers", link: "/03-helpers" },
            { text: "Linting", link: "/04-linting" },
          ]
        },
        {
          text: "Plugins",
          base: "/06-plugins",
          collapsed: true,
          items: [
            { text: "Write a plugin", link: "/01-write-a-plugin" },
            { text: "Official Plugins", link: "/02-official-plugins" },
          ]
        }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/dedecube' },
      ]
    }
  })
);
