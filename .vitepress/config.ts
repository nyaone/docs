import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'zh',
    title: '喵窝资料室',
    description: '喵窝相关的文档',
    lastUpdated: true,
    cleanUrls: true,
    head: [['meta', { name: 'theme-color', content: '#62b6e7' }]],
    themeConfig: {

        logo: '/assets/logo/round.svg',

        nav: [
            {
                text: '文档',
                link: '/',
                activeMatch: '/',
            },
            {
                text: '链接',
                items: [
                    {
                        text: '喵窝',
                        link: 'https://nya.one',
                    },
                    {
                        text: '服务状态',
                        link: 'https://status.nya.one',
                    },
                ],
            }
        ],

        sidebar: {
            '/': [
                {
                    text: '基础规范',
                    items: [
                        {
                            text: '加入我们',
                            link: '/join/',
                        },
                        {
                            text: '服务条款',
                            link: '/tos/',
                        },
                        {
                            text: '合理使用规约',
                            link: '/aup/',
                        }
                    ],
                },
                {
                    text: '周边服务',
                    collapsed: true,
                    items: [
                        {
                            text: '邀请管理系统',
                            link: '/peripheral/join/',
                            items: [
                                {
                                    text: '使用',
                                    link: '/peripheral/join/use/',
                                },
                                {
                                    text: '部署',
                                    link: '/peripheral/join/deploy/',
                                }
                            ]
                        },
                        {
                            text: 'MiSSO',
                            link: '/peripheral/misso/',
                            items: [
                                {
                                    text: '使用',
                                    link: '/peripheral/misso/use/',
                                },
                                {
                                    text: '部署',
                                    link: '/peripheral/misso/deploy/',
                                }
                            ],
                        },
                        {
                            text: 'Matrix 通讯',
                            link: '/peripheral/matrix/',
                            items: [
                                {
                                    text: '贴图包',
                                    link: '/peripheral/matrix/stickers/',
                                }
                            ],
                        },
                        {
                            text: '电子邮件',
                            link: '/peripheral/email/',
                            items: [
                                {
                                    text: '使用',
                                    link: '/peripheral/email/use/',
                                },
                                {
                                    text: '部署',
                                    link: '/peripheral/email/deploy/',
                                }
                            ],
                        }
                    ],
                },
                {
                    text: '开发',
                    items: [
                        {
                            text: 'Misskey',
                            link: '/develop/misskey/',
                        },
                        {
                            text: '周边服务',
                            link: '/develop/peripheral/',
                            items: [
                                {
                                    text: 'Misskey 的授权模式',
                                    link: '/develop/peripheral/auth/',
                                }
                            ],
                        }
                    ]
                },
                {
                    text: '其它',
                    items: [
                        {
                            text: '附录',
                            link: '/appendix/',
                        },
                        {
                            text: '品牌资源',
                            link: '/brand-assets/',
                        },
                        {
                            text: '联系我们',
                            link: '/contact/',
                        },
                        {
                            text: '赞助',
                            link: '/sponsor/',
                        }
                    ]
                }
            ],
        },

        editLink: {
            pattern: 'https://github.com/nyaone/docs/edit/main/:path',
            text: '在 GitHub 上编辑此页'
        },

        socialLinks: [
            {
                icon: {
                    svg: '<svg width="100%" height="100%" viewBox="0 0 512 512" fill="currentColor"><g><path d="M256,0C397.29,0 512,114.71 512,256C512,397.29 397.29,512 256,512C114.71,512 0,397.29 0,256C0,114.71 114.71,0 256,0ZM404.5,225.16L404.08,224.08L362.26,115.012C361.42,112.87 359.92,111.058 357.94,109.828C356.5,108.898 354.88,108.319 353.14,108.142C351.4,107.965 349.72,108.192 348.1,108.808C346.48,109.42 345.04,110.404 343.84,111.676C342.7,112.948 341.86,114.478 341.38,116.14L313.18,202.54L198.88,202.54L170.62,116.14C170.14,114.478 169.3,112.954 168.16,111.682C166.96,110.41 165.52,109.432 163.9,108.82C162.3,108.204 160.577,107.975 158.872,108.152C157.155,108.326 155.503,108.9 154.048,109.828C152.103,111.057 150.598,112.873 149.752,115.012L107.96,224.08L107.526,225.16C101.51,240.895 100.769,258.167 105.414,274.36C110.062,290.5 119.842,304.78 133.282,314.92L133.444,315.04L133.798,315.28L197.38,362.98L228.94,386.8L248.14,401.32C250.36,402.46 253.12,403.9 255.94,403.9C258.76,403.9 261.52,402.46 263.74,401.32L282.94,386.8L314.5,362.98L378.52,315.04L378.7,314.86C392.14,304.72 401.92,290.5 406.06,274.36C411.22,258.16 410.5,240.88 404.5,225.16Z" /></g></svg>',
                },
                link: 'https://nya.codes/nyaone'
            },
            {
                icon: 'github',
                link: 'https://github.com/nyaone'
            }
        ],

        footer: {
            message: 'CC-BY-SA-4.0 Licensed',
            copyright: `Copyright © 2020-${new Date().getFullYear()} NyaOne`
        },

        search: {
            provider: 'local',
        }
    }
})
