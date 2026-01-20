import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh",
  title: "喵窝资料室",
  description: "喵窝相关的文档",
  lastUpdated: true,
  cleanUrls: true,
  head: [["meta", { name: "theme-color", content: "#62b6e7" }]],
  themeConfig: {
    logo: "/assets/logo/round.svg",

    nav: [
      {
        text: "文档",
        link: "/",
        activeMatch: "/",
      },
      {
        text: "链接",
        items: [
          {
            text: "喵窝",
            link: "https://nya.one",
          },
          {
            text: "服务状态",
            link: "https://status.nya.one",
          },
        ],
      },
      {
        text: "订阅更新",
        link: "https://nya.one/@docs"
      },
    ],

    sidebar: {
      "/": [
        {
          text: "基础规范",
          items: [
            {
              text: "加入喵窝",
              link: "/join/",
            },
            {
              text: "服务条款",
              link: "/tos/",
            },
            {
              text: "合理使用规约",
              link: "/aup/",
            },
          ],
        },
        {
          text: "站点功能",
          items: [
            {
              text: "邀请",
              link: "/invite/",
            },
            {
              text: "检举",
              link: "/report/",
            },
          ],
        },
        {
          text: "周边服务",
          // collapsed: true,
          items: [
            // {
            //   text: "邀请管理系统",
            //   link: "/peripheral/join/",
            //   items: [
            //     {
            //       text: "使用",
            //       link: "/peripheral/join/use/",
            //     },
            //     {
            //       text: "部署",
            //       link: "/peripheral/join/deploy/",
            //     },
            //   ],
            // },
            // {
            //   text: "MiSSO",
            //   link: "/peripheral/misso/",
            //   items: [
            //     {
            //       text: "使用",
            //       link: "/peripheral/misso/use/",
            //     },
            //     {
            //       text: "部署",
            //       link: "/peripheral/misso/deploy/",
            //     },
            //   ],
            // },
            {
              text: "Matrix 通讯",
              link: "/peripheral/matrix/",
              items: [
                {
                  text: "贴图包",
                  link: "/peripheral/matrix/stickers/",
                },
              ],
            },
            {
              text: "电子邮件",
              link: "/peripheral/email/",
              items: [
                {
                  text: "使用",
                  link: "/peripheral/email/use/",
                },
                {
                  text: "部署",
                  link: "/peripheral/email/deploy/",
                },
              ],
            },
          ],
        },
        {
          text: "开发",
          items: [
            {
              text: "Misskey",
              link: "/develop/misskey/",
            },
            {
              text: "周边服务",
              link: "/develop/peripheral/",
              items: [
                {
                  text: "Misskey 的授权模式",
                  link: "/develop/peripheral/auth/",
                },
              ],
            },
          ],
        },
        {
          text: "其它",
          items: [
            {
              text: "附录",
              link: "/appendix/",
            },
            {
              text: "服务架构",
              link: "/service-structure/",
            },
            {
              text: "品牌资源",
              link: "/brand-assets/",
            },
            {
              text: "联系我们",
              link: "/contact/",
            },
            {
              text: "赞助",
              link: "/sponsor/",
            },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/nyaone/docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/nyaone",
      },
    ],

    footer: {
      message:
        '基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC-BY-SA-4.0</a> 授权',
      copyright: `© 2020-${new Date().getFullYear()} 喵窝 (NyaOne) 版权所有`,
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "返回",
            noResultsText: "抱歉，暂时没有相关结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: 'deep',
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },

  sitemap: {
    hostname: 'https://docs.nya.one',
  },
});
