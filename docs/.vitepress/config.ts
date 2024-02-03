import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "animate.ts",
  description: "an animation library for Typescript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [{
      text: 'Start',
      items: [
        { text: 'Get Started', link: '/guide/getting-started' },
      ]
    }, {
      text: 'Easing function',
      items: []
    }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xing403/animate.ts' }
    ]
  }
})
