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
                {
                    text: '设计模式开发与实践',
                    items: [
                        { text: '高阶函数', link: '/frontEnd/设计模式开发与实践/高阶函数' }
                    ]
                },
                {
                    text:'Electron',
                    items: [
                        { text: 'Introduction', link: '/frontEnd/electron/electron-fiddle' }
                    ]
                }
            ],
            '/chrome/': [
                {
                    text: 'Chrome Extensions',
                    items: [
                        { text: 'Introduction', link: '/chrome/extension/start' }
                    ]
                },
                {
                    text: 'Automa',
                    items: [
                        { text: 'Introduction', link: '/chrome/extension/automa' }
                    ]
                },
                {
                    text: 'Chrome V8',
                    items: [
                        { text: 'Introduction' , link: '/chrome/v8/start' }
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
            '/vue3/': [
                {
                    text: 'summary',
                    items: [
                        { text: 'reactive的创建过程', link: '/vue3/summary/reactive的创建过程' },
                        { text: 'ref的创建过程', link: '/vue3/summary/ref的创建过程' },
                        { text: 'ref的设值与取值', link: '/vue3/summary/ref的设值与取值' },
                        { text: 'computed', link: '/vue3/summary/computed' }
                    ]
                },
                {
                    text: 'nextTick',
                    items: [
                        { text: 'Source Code Analysis', link: '/vue3/nextTick' }
                    ]
                },
                // {
                //     text: 'reactivity',
                //     items: [
                //         { text: 'reactive', link: '/vue3/reactivity/reactive' }
                //     ]
                // }
            ],
            '/TypeScript/': [
                {
                    text: 'summary',
                    items: [
                        {
                            text: '基础', link: '/TypeScript/'
                        }
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
            { text: 'JavaScript', link: '/JavaScript/ArrayBuffer' },
            { text: 'Java', link: '/Java/Redis/index#安装' },
            { text: 'FrontEnd', link: '/frontEnd/nuxt/create' },
            { text: 'Chrome', link: '/chrome/extension/start' },
            { text: 'Vue3', link: '/vue3/nextTick' },
            { text: 'TypeScript', link: '/TypeScript/'}
        ]
    }
}
