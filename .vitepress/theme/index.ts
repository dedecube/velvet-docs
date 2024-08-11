
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import type { Theme } from 'vitepress'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    vitepressBackToTop({
      threshold: 300,
    });
    app.use(NolebaseGitChangelogPlugin);
  },
} satisfies Theme;
