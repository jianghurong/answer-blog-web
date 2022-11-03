export default {
    base: '/answer-blog-web/',
    title: '答案博客 | 答案如刀',
    description: '秣马厉兵，砥砺前行。',
    lastUpdated: true,
    themeConfig: {
        // 网页标题
        siteTitle: 'AnswerBlog',
        // 侧边栏菜单
        sidebar: [
            {
                text: 'Nuxt',
                items: [
                    { text: 'Introduction', link: '/nuxt/create' }
                ]
            },
            {
                text: 'Vite',
                items: [
                    { text: 'Introduction', link: '/vite/create' }
                ]
            },
            {
                text: 'Encrypt',
                items: [
                    { text: 'crypto-js', link: '/encrypt/crypto-js' }
                ]
            }
        ],
        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jianghurong'}
        ]
    }
}
