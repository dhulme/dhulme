module.exports = {
  title: 'David Hulme',
  description: "Find out more about me and see what projects I'm working on.",
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'CV', link: 'https://dhulme.uk/cv/' }
    ]
  }
};
