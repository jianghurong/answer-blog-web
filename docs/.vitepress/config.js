export default {
    base: '/answer-blog-web/',
    title: '答案博客 | 答案如刀',
    description: '秣马厉兵，砥砺前行。',
    lastUpdated: true,
    themeConfig: {
        // 网页标题
        siteTitle: 'AnswerBlog',
        // 侧边栏菜单
        sidebar: {
            '/frontEnd/': [
                {
                    text: 'Nuxt',
                    items: [
                        { text: 'Introduction', link: '/frontEnd/nuxt/create' }
                    ]
                },
                {
                    text: 'Vite',
                    items: [
                        { text: 'Introduction', link: '/frontEnd/vite/create' }
                    ]
                },
                {
                    text: 'Encrypt',
                    items: [
                        { text: 'crypto-js', link: '/frontEnd/encrypt/crypto-js' }
                    ]
                }
            ],
            '/chrome/': [
                {
                    text: 'Demo',
                    items: [
                        { text: 'Introduction', link: '/chrome/extension/start.html' }
                    ]
                }
            ]
        },
        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jianghurong'}
        ],
        // 导航栏菜单
        nav: [
            { text: 'FrontEnd', link: '/frontEnd/nuxt/create' },
            { text: 'Chrome Extensions', link: '/chrome/extension/start' }
        ]
    }
}
