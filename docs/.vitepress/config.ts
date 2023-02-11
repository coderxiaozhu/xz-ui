import { defineConfig } from "vitepress"

const sidebar = {
    '/': [
      { text: '快速开始', link: '/', items: [] },
      {
        text: '通用',
        items: [{ text: 'Button 按钮', link: '/components/button/' }]
      },
      { text: '导航' },
      { text: '反馈' },
      {
        text: '数据录入'
      },
      { text: '数据展示' },
      { text: '布局'
      }
    ]
}

export default defineConfig({
    themeConfig: {
        sidebar,
        nav: [
            { text: '向导', link: '/guide' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/coderxiaozhu/xz-ui' }
        ]
    },
    markdown: {
        config(md) {
          const { demoBlockPlugin } = require("vitepress-theme-demoblock");
          md.use(demoBlockPlugin, {
            cssPreprocessor: "scss"
          })
        },
    }
})
