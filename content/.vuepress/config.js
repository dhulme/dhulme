const staticFolders = ['multitrack-player', 'cv', 'spotify-stats', 'creation'];

module.exports = {
  title: 'David Hulme',
  description:
    "Read my blog and CV and check out the projects I'm currently working on",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-149705925-1'
      }
    ],
    [
      'script',
      {},
      `
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149705925-1');`
    ]
  ],
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      // { text: 'CV', link: 'https://dhulme.uk/cv/' }
    ]
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://dhulme.uk',
        outFile: 'other/sitemap.xml',
        urls: staticFolders.map(url => ({
          url: '/' + url,
          changefreq: 'daily'
        }))
      }
    ]
  ]
};
