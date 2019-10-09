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
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/en/" },
    ],
    locales: {
      "/en/": {
        lang: "us-en", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: "Libraries",
            children: [
              {
                title: "Vuejs",
                children: [
                  "en/vuejs/",
                  "en/vuejs/vuepress/",
                  "en/vuejs/nuxtjs/",]
              }
            ]
          },
          {
            title: "Css",
            children: [
                {
                  title: "Css reset",
                  children: [
                    "en/css/cssreset/"]
                }
              ]
          },
          {
            title: "Development Tools",
            children: [
              {
                title: 'Git',
                children: ["en/tools/Git/"]
              },
              {
                title: 'Markdown',
                children: ["en/tools/Markdown/"]
              }
            ]
           }
        ]
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
  }
};
