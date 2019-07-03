module.exports = {
  title: 'TezBridge',
  head: [
    ['link', { rel: 'icon', href: 'https://www.tezbridge.com/favicon.90b42df8.png' }]
  ],
  themeConfig: {
    logo: 'https://avatars2.githubusercontent.com/u/33521489?s=200&v=4',
    nav: [
      {text: 'Github', link: 'https://github.com/tezbridge'}
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'User manual',
        collapsable: false,
        children: [
          '/user'
        ]
      },
      {
        title: 'Developer manual',
        collapsable: false,
        children: [
          '/developer'
        ]
      },
      {
        title: 'Complete sample',
        collapsable: false,
        children: [
          '/sample'
        ]
      }
    ]
  }
}