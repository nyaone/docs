import taskLists from 'markdown-it-task-lists';

import { defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default {
    title: '喵窝资料室',
    description: '喵窝相关的文档',
    theme: defaultTheme({
        sidebar: [
            {
                text: '服务条款',
                link: '/tos/',
            },
            {
                text: '加入我们',
                link: '/join/',
            },
            {
                text: '合理使用公约',
                link: '/aup/',
            },
            {
                text: '周边服务',
                link: '/peripheral/',
                children: [
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
                link: '/develop/',
                children: [
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
                link: '/appendix/',
            }
        ],
        navbar: [
            { 
                text: '喵窝',
                link: 'https://nya.one',
            },
            { 
                text: '服务状态',
                link: 'https://status.nya.one',
            },
        ],
        displayAllHeaders: true,
        repo: 'nyaone/docs',
        repoLabel: 'GitHub',
        editLink: true,
        logo: '/assets/logo.png',
        contributors: true,
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 10,
        }),
    ],
    extendsMarkdown: (md) => {
        md.use(taskLists);
    },
}
