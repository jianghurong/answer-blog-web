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
                },
            ],
            '/chrome/': [
                {
                    text: 'Demo',
                    items: [
                        { text: 'Introduction', link: '/chrome/extension/start' }
                    ]
                },
                {
                    text: 'Automa',
                    items: [
                        { text: 'Introduction', link: '/chrome/extension/automa' }
                    ]
                }
            ],
            '/JavaScript/': [
                {
                    text: 'ArrayBuffer',
                    items: [
                        { text: 'Introduction', link: '/JavaScript/ArrayBuffer' }
                    ]
                },
                {
                    text: 'TypedArray',
                    items: [
                        { text: 'Introduction', link: '/JavaScript/TypedArray' }
                    ]
                }
            ],
            '/Java/': [
                {
                    text: 'Redis',
                    items: [
                        { text: '安装/启动', link: '/Java/Redis/index#安装' },
                        { text: '数据结构', link: '/Java/Redis/index#数据结构' },
                        { text: 'String', link: '/Java/Redis/index#string' },
                        { text: 'List', link: '/Java/Redis/index#list' },
                    ]
                }
            ],
            '/Vue3/': [
                {
                    text: 'summary',
                    items: [
                        { text: 'reactive的创建过程', link: '/Vue3/summary/reactive的创建过程' },
                        { text: 'ref的创建过程', link: '/Vue3/summary/ref的创建过程' },
                        { text: 'ref的设值与取值', link: '/Vue3/summary/ref的设值与取值' }
                    ]
                },
                {
                    text: 'nextTick',
                    items: [
                        { text: 'Source Code Analysis', link: '/Vue3/nextTick' }
                    ]
                },
                // {
                //     text: 'reactivity',
                //     items: [
                //         { text: 'reactive', link: '/Vue3/reactivity/reactive' }
                //     ]
                // }
            ]
        },
        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jianghurong'}
        ],
        // 导航栏菜单
        nav: [
            { text: 'JavaScript', link: '/JavaScript/ArrayBuffer' },
            { text: 'Java', link: '/Java/Redis/index#安装' },
            { text: 'FrontEnd', link: '/frontEnd/nuxt/create' },
            { text: 'Chrome Extensions', link: '/chrome/extension/start' },
            { text: 'Vue3', link: '/Vue3/nextTick' }
        ]
    }
}
