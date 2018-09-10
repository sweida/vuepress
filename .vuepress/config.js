module.exports = {
  base: '/',    // 默认路径
  title: 'Start Here',
  description: 'vuepress个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  host: '192.168.4.85',     // ip
  port: '8200',             // 端口号
  evergreen: true,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    sidebarDepth: 2,  // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '首页', link: '/' },
      { text: '前端分享', link: '/guide/' },
      { text: '后端积累', link: '/foo/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      {
        text: 'Langua',
        items: [
          { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
          ] }
        ]
      }
    ],
    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/guide/': [
        '/guide/', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '侧边栏下拉框的标题1',
          children: [
            '/guide/JS/test', // 以docs为根目录来查找文件 
          ]
        }
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/foo/': [
        '/foo/', 
        {
          title: '第二组侧边栏下拉框的标题2',
          children: [
            '/foo/simple/test' 
          ]
        }
      ]
    },
  }
}