import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'David Hulme',
  description:
    "Read my blog and CV and check out the projects I'm currently working on",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-149705925-1',
      },
    ],
    [
      'script',
      {},
      `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-149705925-1');`,
    ],
  ],
  lang: 'en-GB',
  outDir: '../dist',
  cleanUrls: true,
  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      // { text: 'CV', link: 'https://dhulme.uk/cv/' }
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/hulmed' },
      { icon: 'github', link: 'https://github.com/dhulme' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dhulme/' },
      { icon: 'youtube', link: 'https://www.youtube.com/user/dhulme2' },
      { icon: 'instagram', link: 'https://www.instagram.com/davhulme/' },
    ]
  }
});
