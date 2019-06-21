module.exports = {
  head: [
    ['link', { rel: 'icon', href: 'https://www.tezbridge.com/favicon.90b42df8.png' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: 'https://avatars2.githubusercontent.com/u/33521489?s=200&v=4',
    nav: [
      {text: 'Github', link: 'https://github.com/tezbridge'}
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [
          '/'
        ]
      },
      {
        title: 'User manual',
        children: [
          '/user'
        ]
      },
      {
        title: 'Developer manual',
        children: [
          '/developer'
        ]
      },
      {
        title: 'Complete sample',
        children: [
          '/sample'
        ]
      }
    ]
  }
}