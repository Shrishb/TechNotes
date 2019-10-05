const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  plugins: ['@vuepress/pwa'],
  base: "/technotes/",
  title: "Personal Tech notes",
  redirectPath: "/en/",
  locales: {
    "/en/": {
      lang: "en-US",
      title: "TechNotes",
    }
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
  themeConfig: {
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    logo: "https://img.icons8.com/dotty/344/learning.png",
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    nav: [
      { text: "Home", link: "/" },
    ],
    locales: {
      "/en/": {
        lang: "us-en", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: "Front-end Development",
            children: [
              {
                title: "vuejs Ecosystem",
                children: [
                  "en/vuejs/",
                  "en/vuejs/vuepress/",
                  "en/vuejs/nuxtjs/",]
              }
            ]
          },
          {
            title: "Tools",
            children: ["en/tools/",
              {
                title: 'Git',
                children: ["en/tools/git-hacks"]
              }
            ]
          }
        ]
      }
    }
  },

  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin({
      openAnalyzer: false,
      statsFilename: 'test',
      generateStatsFile: true,
      analyzerMode: 'static'
    })]
  }
};
