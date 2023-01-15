import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'zh',
    title: '喵窝资料室',
    description: '喵窝相关的文档',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [['meta', { name: 'theme-color', content: '#62b6e7' }]],
    themeConfig: {

        logo: '/assets/logo.svg',
        
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
                    text: '基础',
                    collapsible: false,
                    items: [
                        {
                            text: '服务条款',
                            link: '/tos/',
                        },
                        {
                            text: '加入我们',
                            link: '/join/',
                        },
                        {
                            text: '合理使用规约',
                            link: '/aup/',
                        },
                    ],
                },
                {
                    text: '周边服务',
                    collapsible: true,
                    items: [
                        {
                            text: '邀请管理系统',
                            link: '/peripheral/join/',
                        },
                        {
                            text: 'Matrix 通讯',
                            link: '/peripheral/matrix/',
                        },
                        {
                            text: '电子邮件',
                            link: '/peripheral/email/',
                        }
                    ],
                },
                {
                    text: '开发',
                    collapsible: true,
                    items: [
                        {
                            text: 'Misskey',
                            link: '/develop/misskey/',
                        },
                        {
                            text: '周边服务',
                            link: '/develop/peripheral/',
                        }
                    ]
                },
                {
                    text: '附录',
                    collapsible: true,
                    items: [
                        {
                            text: '附录',
                            link: '/appendix/',
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
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="currentColor"><rect data-element="frame" x="0" y="0" width="512" height="512" rx="512" ry="512" stroke="none"></rect><g transform="translate(102.4 102.4) scale(0.6)" fill="#ffffff"><path d="M503.5 204.6l-.7-1.8-69.7-181.78c-1.4-3.57-3.9-6.59-7.2-8.64-2.4-1.55-5.1-2.515-8-2.81-2.9-.295-5.7.083-8.4 1.11-2.7 1.02-5.1 2.66-7.1 4.78-1.9 2.12-3.3 4.67-4.1 7.44l-47 144H160.8l-47.1-144c-.8-2.77-2.2-5.31-4.1-7.43-2-2.12-4.4-3.75-7.1-4.77a18.1 18.1 0 0 0-8.38-1.113 18.4 18.4 0 0 0-8.04 2.793 18.09 18.09 0 0 0-7.16 8.64L9.267 202.8l-.724 1.8a129.57 129.57 0 0 0-3.52 82c7.747 26.9 24.047 50.7 46.447 67.6l.27.2.59.4 105.97 79.5 52.6 39.7 32 24.2c3.7 1.9 8.3 4.3 13 4.3 4.7 0 9.3-2.4 13-4.3l32-24.2 52.6-39.7 106.7-79.9.3-.3c22.4-16.9 38.7-40.6 45.6-67.5 8.6-27 7.4-55.8-2.6-82z"></path></g></svg>',
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
            copyright: 'Copyright © 2020-2023 NyaOne'
        },
    }
})
