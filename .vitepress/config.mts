import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 网站元数据
  title: "ChatGPT官网中文版 | ChatGPT网页版入口 | 国内免翻墙使用ChatGPT",
  description: "ChatGPT官网中文版免翻墙入口，支持ChatGPT网页版直接使用。提供GPT-5.4、Claude 4.6、Gemini 3.1 Pro等全球最新AI模型，国内邮箱注册即用。ChatGPT中文版2026年推荐平台，支持AI对话、写作、编程、绘画、翻译。",
  lang: 'zh-CN',
  
  // 2. 关键 SEO 配置 (你漏掉的部分)
  // 自动生成 sitemap，Bing 爬虫全靠它来抓取你的页面
  sitemap: {
    hostname: 'https://www.chatgpt-chinese.chat',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      }))
    }
  },
  // 显示最后更新时间，搜索引擎喜欢新鲜内容
  lastUpdated: true,

  // 3. Head 配置
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.svg' }],
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    // SEO 关键词
    ['meta', { name: 'keywords', content: 'ChatGPT,ChatGPT官网,ChatGPT网页版,ChatGPT中文版,chatgpt,chatgpt官网,chatgpt网页版,ChatGPT入口,ChatGPT免翻墙,ChatGPT中文,ChatGPT镜像站,ChatGPT国内版,GPT-5.4,OpenAI,AI对话,ChatGPT镜像网站,人工智能,ChatGPT国内' }],
    ['meta', { name: 'author', content: 'ChatGPT中文版' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { property: 'og:title', content: 'ChatGPT官网中文版 | ChatGPT网页版入口 | 国内免翻墙使用ChatGPT' }],
    ['meta', { property: 'og:description', content: 'ChatGPT官网中文版免翻墙入口，支持ChatGPT网页版直接使用。GPT-5.4最新模型，国内邮箱注册即用。2026年最靠谱ChatGPT中文平台推荐。' }],
    ['meta', { property: 'og:site_name', content: 'ChatGPT官网中文版' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ChatGPT官网中文版 - ChatGPT网页版国内免翻墙入口' }],
    ['meta', { name: 'twitter:description', content: 'ChatGPT官网中文版入口，免翻墙直接用ChatGPT网页版。支持GPT-5.4、Claude 4.6等最新AI模型。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.chatgpt-chinese.chat' }],
    ['meta', { property: 'og:image', content: 'https://www.chatgpt-chinese.chat/og-image.png' }],
    [
      'script',
      { type: 'application/ld+json' },
      `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ChatGPT官网中文版",
        "url": "https://www.chatgpt-chinese.chat",
        "description": "ChatGPT官网中文版免翻墙入口，支持ChatGPT网页版直接使用。提供GPT-5.4、Claude 4.6等最新AI模型，2026年国内用户首选ChatGPT平台",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.chatgpt-chinese.chat/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }`
    ],
    [
      'script',
      { type: 'application/ld+json' },
      `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ChatGPT官网国内怎么用？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "国内用户可以通过ChatGPT官网中文版免翻墙使用ChatGPT网页版，推荐SnakeGPT（snakegpt.vip）和GPTCat（gptcat.cc），支持GPT-5.4、Claude 4.6等全部最新模型，注册即可使用。"
            }
          },
          {
            "@type": "Question",
            "name": "ChatGPT官网中文版和ChatGPT官网有什么区别？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT官网中文版通过API对接OpenAI官方接口，模型能力与ChatGPT官网完全一致。优势是国内可直接访问ChatGPT网页版、支持支付宝微信付款、中文界面优化，部分还集成了Claude、Gemini等多模型。"
            }
          },
          {
            "@type": "Question",
            "name": "ChatGPT网页版可以免费用吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "多数ChatGPT官网中文版平台提供免费额度，注册即送体验次数。GPT-3.5级别ChatGPT网页版通常免费不限量，GPT-5.4等高级模型需要付费，价格通常比ChatGPT官网Plus订阅更便宜。"
            }
          },
          {
            "@type": "Question",
            "name": "2026年最好用的ChatGPT网页版平台是哪个？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2026年推荐的ChatGPT网页版平台：SnakeGPT（稳定运营超1年，支持GPT-5.4/Claude 4.6）和GPTCat（全模型覆盖，5星稳定性评分）。两者均支持国内直连ChatGPT官网中文版、多模型切换。"
            }
          }
        ]
      }`
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    // 移动端优化 (推荐加上)
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],

  // 4. 死链检查 (建议先设为 true，等文章都写好了再去掉，不然报错很烦)
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ChatGPT官网中文版',
    
    // 开启最后更新时间的显示文本
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'ChatGPT介绍', link: '/chatgpt/' },
      { text: 'ChatGPT使用指南', link: '/guides/' },
      { text: '免责声明', link: '/disclaimer' },
    ],

    // 2. 侧边栏 (基于你提供的源码提供的真·全量数据)
    sidebar: {
      // --- ChatGPT介绍板块 ---
      '/chatgpt/': [
        {
          text: 'ChatGPT介绍',
          collapsed: false,
          items: [
            { text: 'ChatGPT官网网址登录入口｜2026年4月国内怎么用ChatGPT', link: '/chatgpt/chatgpt-guanwang-wangzhi-denglu-rukou-guonei-zhinan-2026' },
            { text: 'OpenAI ChatGPT 国内中文版使用指南，包含 GPT-5、GPT-5 系列【2026年4月最新更新】', link: '/chatgpt/chatgpt_guide_cn20260423' },
            { text: '国内可直接使用的 Claude 中文版 教程（2026最新版），无需魔法，支持 Claude Sonnet / Opus 模型', link: '/chatgpt/claude_chinese_guide20260422' },
            { text: 'Claude AI 中文版：Claude 4\.6 国内使用指南（支持 Claude 4\.6 和 Opus）【2026年最新】', link: '/chatgpt/ClaudeAI-chinese-guide-20260421' },
            { text: 'ChatGPT 和 Claude 怎么选？一篇讲透两大 AI 助手的介绍、区别与使用建议(附中文版官方免翻墙直连入口)', link: '/chatgpt/chatgpt-vs-claude-blog' },
            { text: 'GPT-5.3 和 GPT-5.4 有什么区别？一篇看懂两代模型的能力、定位与适用场景 附gpt官方直连入口（无需翻墙）', link: '/chatgpt/gpt53_vs_gpt54_comparison' },
            { text: '新手如何使用ChatGPT总结新闻发到微信公众号教程，含chatgpt最新官方入口（2026年4月最新）', link: '/chatgpt/chatgpt-news-summary-wechat-guide' },
            { text: '如何用 ChatGPT 写文案：新手也能快速上手的实战指南', link: '/chatgpt/how-to-use-chatgpt-for-copywriting-bing-seo' },
            { text: 'ChatGPT写文案全攻略：零基础也能高效生成优质文案', link: '/chatgpt/How_to_Write_Marketing_Copy_with_ChatGPT_Full_Guide_&_Comparison_with_Gemini_Grok' },
            { text: 'ChatGPT和Claude国内怎么用？2026最新免翻墙中文版指南（附镜像站与聚合平台推荐）', link: '/chatgpt/chatgpt-claude-guide-cn' },
            { text: 'ChatGPT 提示词技巧大全：2026 年最全 Prompt 使用指南（中文版）', link: '/chatgpt/chatgpt-prompt-guide-202604-cn' },
            { text: 'Claude 4.6国内怎么用？2026年4月中文版使用教程（免翻墙｜附ChatGPT对比）', link: '/chatgpt/claude-4-6-guonei-zenme-yong-jiaocheng-april-2026' },
            { text: 'OpenAI ChatGPT 国内中文版使用指南（2026年4月最新）含GPT-5.4、GPT-5.2、GPT-5完整教程', link: '/chatgpt/openai-chatgpt-guo-nei-zhong-wen-ban-shi-yong-zhi-nan-2026-gpt-5-4-zui-xin-wan-zheng-jiao-cheng' },
            { text: 'ChatGPT 中文版国内使用全攻略：支持 GPT-5.4 Thinking 与 GPT-5.3 Instant【2026年4月最新】', link: '/chatgpt/ChatGPT_CN_Usage_Guide_2026' },
            { text: 'ChatGPT 中文版入口推荐与避坑指南：2026 国内稳定使用 GPT-5.1、Claude 4.5 和 DeepSeek', link: '/chatgpt/chatgpt-chinese-entry-recommendation-2026' },
            { text: 'ChatGPT Plus值得买吗？2026年4月GPT-5.4 Plus vs 免费版深度对比（附省钱攻略）', link: '/chatgpt/chatgpt-plus-worth-it-gpt54-comparison-april-2026' },
            { text: 'OpenAI最新动态2026年4月：GPT-6即将发布、GPT Image 2惊艳亮相、Sora被砍', link: '/chatgpt/chatgpt-openai-zuixin-dongtai-gpt6-gpt-image2-2026' },
            { text: 'GPT-6什么时候发布？OpenAI GPT-6最新消息汇总与功能预测（2026年4月）', link: '/chatgpt/gpt-6-zuixin-xiaoxi-fabu-shijian-gongneng-yuce-2026' },
            { text: 'Grok是什么？一文看懂xAI Grok怎么用、和ChatGPT有什么区别（2026年4月实测）', link: '/chatgpt/grok-shi-shenme-zenme-yong-vs-chatgpt-shice-2026' },
            { text: 'DeepSeek vs ChatGPT哪个好？2026年4月国内AI大模型深度对比（GPT-5.4 vs DeepSeek-V3）', link: '/chatgpt/deepseek-vs-chatgpt-duibi-2026-april' },
            { text: 'Grok 4.2中文版国内怎么用？2026年4月最新免翻墙使用教程', link: '/chatgpt/grok-4-2-zhongwen-ban-guonei-jiaocheng-april-2026' },
            { text: 'ChatGPT注册教程2026年4月｜国内手机号注册ChatGPT账号完整指南（免翻墙方案）', link: '/chatgpt/chatgpt-zhuce-jiaocheng-guonei-zhinan-april-2026' },
            { text: 'ChatGPT官网入口在哪？2026年4月国内ChatGPT中文版使用指南（支持GPT-5.4 Thinking）', link: '/chatgpt/chatgpt-guanwang-rukou-zhongwen-ban-shiyong-zhinan-april-2026' },
            { text: 'ChatGPT国内能用吗？2026年4月亲测可用的GPT-5.4中文版平台与完整使用教程', link: '/chatgpt/chatgpt-guonei-neng-yong-ma-gpt54-wanzheng-jiaocheng-april-2026' },
            { text: 'ChatGPT是什么？2026年新手完整入门指南｜一文搞懂ChatGPT怎么用', link: '/chatgpt/chatgpt-xinshourumen-wanzheng-zhinan-april-2026' },
            { text: 'ChatGPT网页版在线使用教程（2026年4月）｜无需下载，打开浏览器直接用', link: '/chatgpt/chatgpt-wangyeban-zaixian-shiyong-jiaocheng-april-2026' },
            { text: 'ChatGPT官网进不去？2026年4月国内打开ChatGPT的全部方法', link: '/chatgpt/chatgpt-guanwang-dabukai-jiejue-fangan-april-2026' },
            { text: 'ChatGPT镜像网站2026年4月实测推荐｜哪个镜像站最稳定、最好用？', link: '/chatgpt/chatgpt-jingxiang-wangzhan-tuijian-shice-april-2026' },
            { text: 'ChatGPT中文版免费入口推荐（2026年4月更新）｜国内免翻墙使用GPT-5.4最全指南', link: '/chatgpt/chatgpt-zhongwen-ban-mianfei-rukou-april-2026' },
            { text: 'ChatGPT写论文靠谱吗？GPT-5.4学术写作实测：开题报告到参考文献全流程', link: '/chatgpt/chatgpt-academic-writing-gpt54-thesis-guide-april-2026' },
            { text: 'ChatGPT中文版APP下载安装指南2026：iOS/安卓/电脑端全平台教程', link: '/chatgpt/chatgpt-app-download-guide-all-platforms-april-2026' },
            { text: 'ChatGPT实用场景TOP10：GPT-5.4写论文/写代码/做PPT实操教程，2026年4月国内直连方案', link: '/chatgpt/chatgpt-gpt54-top10-practical-scenarios-april-2026' },
            { text: 'ChatGPT官网入口国内打开方法｜2026年3月GPT-5.4免翻墙使用全攻略', link: '/chatgpt/chatgpt-official-entry-china-no-vpn-gpt54-guide-2026-march.html' },
            { text: 'ChatGPT官网入口在哪？2026年春季GPT-5.4国内使用完整教程（免翻墙+中文版）', link: '/chatgpt/chatgpt-gpt54-new-features-china-tutorial-2026-spring.html' },
            { text: 'ChatGPT中文版怎么用？2026最新官网入口与国内免翻墙使用全攻略（支持GPT-5.4）', link: '/chatgpt/chatgpt-chinese-how-to-access-gpt54-2026.html' },
            { text: 'ChatGPT怎么用？2026年最新使用教程（国内直连，无需翻墙，支持GPT-5.4）', link: '/chatgpt/chatgpt-how-to-use-beginners-guide-2026.html' },
            { text: 'ChatGPT 中文版：国内免费使用指南', link: '/chatgpt/chatgpt-chinese-gpt.html' },
            { text: 'ChatGPT中文版：最新官网入口与国内使用指南', link: '/chatgpt/chatgpt-chinese-version-latest-official-entry-guide-2026.html' },
            { text: '国内免费使用 GPT 最新指南', link: '/chatgpt/chatgpt-chinese-guide.html' },
            { text: '国内如何使用 ChatGPT？', link: '/chatgpt/chatgpt-guide.html' },
            { text: 'ChatGPT 常见问题解决方案', link: '/chatgpt/chatgpt-faq-solutions.html' },
            { text: 'ChatGPT 免费使用全攻略', link: '/chatgpt/chatgpt-free-guide.html' },
            { text: 'ChatGPT 怎么用？新手教学', link: '/chatgpt/what-is-chatgpt.html' },
            { text: 'ChatGPT vs Claude 深度对比', link: '/chatgpt/chatgpt-vs-claude.html' },
            { text: '国内如何使用 ChatGPT', link: '/chatgpt/how-to-use-chatgpt.html' },
            { text: 'ChatGPT 官网中文版国内使用指南（支持GPT-5 & GPT-4o）【2025年10月持续更新】', link: '/chatgpt/chatgpt-official-website.html' },
            { text: 'ChatGPT 官网 中文版国内使用超全指南', link: '/chatgpt/gpt5-chatgpt-guide.html' },
            { text: 'ChatGPT 新手入门指南', link: '/chatgpt/chatgpt-guide-for-beginners.html' },
            { text: 'ChatGPT官方网址入口及国内使用GPT-5教程', link: '/chatgpt/chatgpt-official-2025.html' },
            { text: 'ChatGPT官方网址入口（官网网址登录入口）- ChatGPT中文版', link: '/chatgpt/chatgpt-chinese-official.html' },
            { text: 'ChatGPT官网入口及ChatGPT中文版国内使用教程(2025最新)', link: '/chatgpt/chatgpt-official-entry.html' },
            { text: 'ChatGPT官方网址入口', link: '/chatgpt/chatgpt-official.html' },
            { text: 'ChatGPT官方网址入口指南', link: '/chatgpt/chatgpt-official-guide.html' },
            { text: 'ChatGPT中文版国内直连推荐', link: '/chatgpt/chatgpt-chinese-access-recommendation.html' },
            { text: 'ChatGPT国内如何使用', link: '/chatgpt/how-to-use-gpt.html' },
            { text: 'ChatGPT中文版', link: '/chatgpt/chatgpt-chinese.html' },
            { text: 'ChatGPT 中文版国内直连指南：无需翻墙，免费体验 GPT-5.1 与 Claude 4.5 (2026最新版)', link: '/chatgpt/chatgpt-china-mirror-guide-2026.md' },
            { text: 'ChatGPT 中文版：2026年免费使用指南与镜像网站推荐（支持 GPT5、GPT-4o，无需翻墙）', link: '/chatgpt/chatgpt-china-guide-2026.html' },
            { text: 'ChatGPT 与 ChatGPT中文版：2026 官方最新介绍与国内使用终极指南 (支持GPT-5.2)', link: '/chatgpt/chatgpt-ultimate-guide-2026.html' },
            { text: 'ChatGPT中文版官网入口 + ChatGPT 完整使用指南（2026最新，支持GPT-5.4）', link: '/chatgpt/chatgpt-gpt54-chinese-guide-2026.html' },
            { text: 'ChatGPT 国内中文版使用指南，支持GPT-5.2，GPT-5', link: '/chatgpt/chatgpt-5.2-chinese.html' },
            { text: '2026年3月重磅更新！ChatGPT中文版首发支持 GPT-5.3、Gemini 3.1 Pro 与 Claude 4.6', link: '/chatgpt/chatgpt-cn-gpt5-3-gemini-3-1-pro-update-2026.html' },
            { text: '2025最新ChatGPT镜像网站与聚合站大全', link: '/chatgpt/chatgpt-mirror-sites-collection.html' }
          ]
        }
      ],

      // --- 使用指南板块 (巨量数据) ---
      '/guides/': [
        {
          text: '使用指南',
          collapsed: false,
          items: [
            { text: '新手入门', link: '/guides/getting-started.html' },
            { text: '常见问题', link: '/guides/faq.html' }
          ]
        },
        {
          text: 'ChatGPT教程',
          collapsed: true,
          items: [
            { text: 'ChatGPT-5 正式上线，国内如何使用？（2026终极指南）', link: '/guides/chatgpt/2026-chatgpt-how-to-use.html' },
            { text: 'ChatGPT中文版入口（2026最新）｜国内免费使用ChatGPT完整指南', link: '/guides/chatgpt/chatgpt-chinese-entry.html' },
            { text: 'ChatGPT镜像网站推荐（2026最新）｜国内稳定可用的ChatGPT中文入口', link: '/guides/chatgpt/chatgpt-mirror-sites-2026.html' },
            { text: 'ChatGPT国内使用指南：2026年最新ChatGPT官网注册与中文版使用全教程', link: '/guides/chatgpt/use-chatgpt-china-method-2026.html' },
            { text: 'ChatGPT 中文版：免费使用指南与镜像网站推荐', link: '/guides/chatgpt/chatgpt-china-guide.html' },
            { text: 'ChatGPT 官网登录入口指南：国内直连 ChatGPT 中文版', link: '/guides/chatgpt/chatgpt-official-login-entry-guide-2026.html' },
            { text: 'ChatGPT 中文版免费还是收费？2025年价格表', link: '/guides/chatgpt/chatgpt-free-vs-plus-pricing-guide-2026.html' },
            { text: 'GPT-5 震撼发布？OpenAI 官网最新消息', link: '/guides/chatgpt/gpt-5-official-release-date-features-2026.html' },
            { text: 'ChatGPT 中文版：GPT5 国内使用教程~【12月更新】', link: '/guides/chatgpt/chatgpt-cn-gpt5-usage-guide-dec.html' },
            { text: 'ChatGPT官网中文版入口：国内直连 GPT-5/GPT-4o 详细使用教程', link: '/guides/chatgpt/chatgpt-official-cn-entry-gpt5-4o-guide.html' },
            { text: 'OpenAI官网国内镜像：ChatGPT 中文版免费使用指南', link: '/guides/chatgpt/openai-mirror-chatgpt-cn-free-guide-dec.html' },
            { text: 'Chat GPT 官网地址发布：GPT-5 中文版国内注册全攻略', link: '/guides/chatgpt/chat-gpt-official-address-gpt5-cn-register.html' },
            { text: 'ChatGPT中国国内使用方法：2025年注册与使用详细步骤', link: '/guides/chatgpt/use-chatgpt-china-method.html' },
            { text: 'ChatGPT 5.2 最新模型使用指南！国内可用入口推荐', link: '/guides/chatgpt/chatgpt-5-2-cn-guide-entry.html' },
            { text: '2025 ChatGPT 官网地址及国内使用指南', link: '/guides/chatgpt/chatgpt-china-official-2026.html' },
            { text: 'ChatGPT中国国内使用方法 – 访问、注册及使用详细步骤', link: '/guides/chatgpt/chatgpt-china-access-registration-usage-detailed-steps.html' },
            { text: 'ChatGPT中文版使用指南：2025年最新入口与镜像推荐', link: '/guides/chatgpt/chatgpt-cn-guide.html' },
            { text: 'ChatGPT 官方国内入口及使用教程【完整指南】', link: '/guides/chatgpt/chatgpt-official-access-tutorial-complete-guide.html' },
            { text: 'ChatGPT 官网国内入口及 GPT-5.2 使用教程', link: '/guides/chatgpt/chatgpt-official-entry-gpt5-2-tutorial.html' },
            { text: '2025 ChatGPT 官网地址及国内使用指南：支持 GPT-4o 与 GPT-5', link: '/guides/chatgpt/chatgpt-official-address-cn-guide-2026.html' },
            { text: 'ChatGPT 中文版国内入口与 GPT-4o 深度使用教程', link: '/guides/chatgpt/chatgpt-cn-entry-gpt4o-deep-guide.html' },
            { text: 'OpenAI 官网入口与 ChatGPT 国内镜像站推荐 2025', link: '/guides/chatgpt/openai-official-entry-chatgpt-mirror-2026.html' },
            { text: 'ChatGPT官网入口：2025年国内使用教程（支持GPT-5）', link: '/guides/chatgpt/chatgpt-official-access-guide-2026.html' },
            { text: '2025最新ChatGPT中文版国内使用指南：免费连接的5种方法', link: '/guides/chatgpt/chatgpt-chinese-free-access-top5.html' },
            { text: 'GPT 5.2 已上线！国内可用 ChatGPT 官网中文版使用指南【2025年更新】', link: '/guides/chatgpt/gpt5-2-chatgpt-official-guide-2026.html' },
            { text: 'ChatGPT 官网：GPT-5 国内使用教程【2025年12月更新】', link: '/guides/chatgpt/chatgpt-official-gpt5-usage-2026.html' },
            { text: 'ChatGPT 国内使用指南：免费使用 ChatGPT 中文版~【12月更新】', link: '/guides/chatgpt/chatgpt-cn-free-guide-2026.html' },
            { text: 'ChatGPT官网入口：国内如何使用GPT-4o及全攻略', link: '/guides/chatgpt/chatgpt-official-gpt4o-guide.html' },
            { text: 'ChatGPT中文版国内使用指南', link: '/guides/chatgpt/chatgpt-chinese-guide.html' },
            { text: 'ChatGPT 官网国内使用指南', link: '/guides/chatgpt/chatgpt-guide.html' },
            { text: 'ChatGPT 官网中文版使用指南', link: '/guides/chatgpt/chatgpt-official-website-url.html' },
            { text: 'Chat GPT 中文版免费使用指南', link: '/guides/chatgpt/chatgpt-chinese.html' },
            { text: 'ChatGPT 怎么用？新手教学', link: '/guides/chatgpt/what-is-chatgpt.html' },
            { text: 'GPT 国内使用指南', link: '/guides/chatgpt/gpt-chatgpt-china.html' },
            { text: 'OpenAI ChatGPT 国内使用指南', link: '/guides/chatgpt/openai-chatgpt-guide.html' },
            { text: '提示词技巧', link: '/guides/chatgpt/prompt-tips.html' },
            { text: 'ChatGPT中文版官网', link: '/guides/chatgpt/chatgpt-cn-site.html' },
            { text: 'ChatGPT 官网中文版国内使用指南【2025年10月持续更新】', link: '/guides/chatgpt/chatgpt-official-website.html' },
            { text: 'ChatGPT 官网 中文版国内使用超全指南', link: '/guides/chatgpt/gpt5-chatgpt-guide.html' },
            { text: 'ChatGPT 新手入门指南', link: '/guides/chatgpt/chatgpt-guide-for-beginners.html' },
            { text: 'ChatGPT官方网址入口及国内使用GPT-5教程', link: '/guides/chatgpt/chatgpt-official-2026.html' },
            { text: 'ChatGPT官方网址入口及国内使用GPT-5教程', link: '/guides/chatgpt/chatgpt-china-official.html' },
            { text: 'ChatGPT官网入口及ChatGPT中文版国内使用教程(2025最新)', link: '/guides/chatgpt/chatgpt-official-entry.html' },
            { text: 'GPT 5.2 已上线！国内可用 ChatGPT 官网中文版使用指南', link: '/guides/chatgpt/chatgpt-official-guide-2026.html' },
            { text: 'ChatGPT 官网入口：OpenAI GPT-5.2 国内使用教程', link: '/guides/chatgpt/chatgpt-official-entry-openai-gpt5-2-usage.html' },
            { text: 'ChatGPT上线全新GPT5.2模型！国内使用指南！', link: '/guides/chatgpt/chatgpt-gpt5-2-official-guide-cn.html' },
            { text: 'GPT 5.2 已上线！国内可用使用指南【2026年1月发布】', link: '/guides/chatgpt/chatgpt-official-guide-2026.html' },
            { text: 'ChatGPT 中文版国内入口与 GPT-5.2 深度使用教程(2026年最新)', link: '/guides/chatgpt/chatgpt-cn-entry-gpt-deep-guide.html' },
            { text: 'ChatGPT官方最新指南！中文版GPT-5.2入口！【2026年1月5日】', link: '/guides/chatgpt/chatgpt-official-gpt5-2-usage-2026.html' },
            { text: 'ChatGPT官方最新指南！中文版GPT-5.2，国内可用入口！', link: '/guides/chatgpt/chatgpt-tutorial.html' },
            { text: 'ChatGPT中文版：免费使用指南与镜像网站推荐', link: '/guides/chatgpt/chatgpt-china.html' },
            { text: '最新ChatGPT官方指南：GPT-5.2官方入口及国内使用教程', link: '/guides/chatgpt/chatgpt-official-guide-gpt5-2-entry.html' },
            { text: 'GPT-5.2 国内使用全攻略【2026年1月首发】', link: '/guides/chatgpt/gpt-5-2-china-usage-review-guide.html' },
            { text: 'ChatGPT中文版5.2使用指南', link: '/guides/chatgpt/chatgpt-chinese-5.2-guide.html' },
            { text: 'ChatGPT 5.2 最新模型使用指南！(2026年1月更新)', link: '/guides/chatgpt/chatgpt-china-5.2-guide.html' },
            { text: 'ChatGPT 国内使用解决方案：2026年1月最新指南', link: '/guides/chatgpt/chatgpt-domestic-access-solutions-2026.html' },
            { text: 'GPT-5.2 深度解析：功能、架构与未来展望', link: '/guides/chatgpt/gpt-5-2-features-deep-dive-2026.html' },
            { text: 'ChatGPT 中文版：免费使用指南与镜像网站推荐', link: '/guides/chatgpt/chatgpt-chinese-gpt5-complete-guide-2026.html' },
            { text: 'ChatGPT 中文版指南', link: '/guides/chatgpt/chinese-guide.html' },
            { text: 'ChatGPT中文指南：2026最新ChatGPT官网使用教程', link: '/guides/chatgpt/chatgpt-chinese-guide-ultimate-2026.html' },
            { text: 'ChatGPT 镜像网站完全上手指南【2026年持续更新】', link: '/guides/chatgpt/chatgpt-mirrors-site.html' },
            { text: 'ChatGPT官网进不去？2026最新 ChatGPT中文版 直连使用全攻略 (支持GPT-5.2)', link: '/guides/chatgpt/chatgpt-official-website-chinese-version-guide.html' },
            { text: 'ChatGPT 中文指南', link: '/guides/chatgpt/chatgpt-chinese-guide-2026.html' }
          ]
        },
        {
          text: 'DeepSeek教程',
          collapsed: true,
          items: [
            { text: 'DeepSeek 中文版', link: '/guides/deepseek/DeepSeek_Chinese.html' },
            { text: 'DeepSeek 中文官网', link: '/guides/deepseek/DeepSeek_guide.html' }
          ]
        },
        {
          text: 'OpenAI 开发',
          collapsed: true,
          items: [
            { text: 'ChatGPT 开发指南', link: '/guides/chatgpt-dev/index.html' },
            { text: 'OpenAI Platform 开发文档概览', link: '/guides/chatgpt-dev/openai-platform-overview.html' },
            { text: 'OpenAI API 开发指南', link: '/guides/chatgpt-dev/openai-api-guide.html' },
            { text: 'OpenAI API 快速入门', link: '/guides/chatgpt-dev/quickstart.html' },
            { text: '文本生成指南', link: '/guides/chatgpt-dev/text-generation.html' },
            { text: 'Prompt Engineering 指南', link: '/guides/chatgpt-dev/prompt-engineering.html' },
            { text: 'Assistants API 开发指南', link: '/guides/chatgpt-dev/assistants.html' },
            { text: 'Embeddings 嵌入指南', link: '/guides/chatgpt-dev/embeddings.html' },
            { text: 'Vision 视觉指南', link: '/guides/chatgpt-dev/vision.html' },
            { text: '图像生成指南', link: '/guides/chatgpt-dev/image-generation.html' },
            { text: '语音 (Speech) 指南', link: '/guides/chatgpt-dev/speech.html' },
            { text: '微调 (Fine-tuning) 指南', link: '/guides/chatgpt-dev/fine-tuning.html' }
          ]
        },
        {
          text: 'Gemini教程',
          collapsed: true,
          items: [
            { text: 'Google Gemini 中文使用指南', link: '/guides/gemini/index.html' },
            { text: '什么是 Google Gemini？', link: '/guides/gemini/what-is-gemini.html' },
            { text: 'Gemini 中文版注册与使用教程', link: '/guides/gemini/gemini-usage.html' },
            { text: 'Gemini 3 vs GPT-5 对比评测', link: '/guides/gemini/gemini-vs-gpt5.html' },
            { text: 'Gemini API 申请与开发指南', link: '/guides/gemini/gemini-api-guide.html' },
            { text: 'Gemini - 谷歌AI 模型 Gemini 3 Pro 国内使用指南', link: '/guides/gemini/gemini-3pro.html' },
            { text: 'Gemini 提示词工程 (Prompt) 指南', link: '/guides/gemini/gemini-prompt-guide.html' }
          ]
        }
      ],

      // --- Blog 板块 (巨量数据) ---
      '/blog/': [
        {
          text: '使用指南',
          collapsed: false,
          items: [
            { text: '新手入门', link: '/blog/guides/getting-started.html' },
            { text: '常见问题', link: '/blog/guides/faq.html' }
          ]
        },
        {
          text: 'ChatGPT 手册',
          collapsed: false,
          items: [
            { text: 'ChatGPT 提示词技巧大全：2026 年最全 Prompt 使用指南（中文版）', link: '/blog/chatgpt-cn/chatgpt-prompt-guide-2026.html' },
            { text: 'Grok 4.2 国内怎么用？2026最新中文版使用教程（无需翻墙）', link: '/blog/chatgpt-cn/grok-4-1-china-guide-2026.html' },
            { text: 'Claude 4.6 国内怎么用？2026最新中文版使用指南（无需翻墙）', link: '/blog/chatgpt-cn/claude-4-5-china-guide-2026.html' },
            { text: 'ChatGPT上线全新GPT5.2模型！使用指南！', link: '/blog/chatgpt-cn/chatgpt-gpt5-2-official-guide-cn.html' },
            { text: 'ChatGPT 中文版免费版怎么用（2026最新）｜免费入口、功能限制与使用建议', link: '/blog/chatgpt-cn/chatgpt-free-guide-2026' },
            { text: 'ChatGPT 国内使用指南（2026最新）｜中国用户如何稳定使用ChatGPT', link: '/blog/chatgpt-cn/how-to-use-chatgpt-in-china-stable-guide-2026' },
            { text: 'ChatGPT官网发布 GPT Image 1.5', link: '/blog/chatgpt-cn/chatgpt-official-gpt-image-1-5-release.html' },
            { text: 'GPT-5 级体验？GPT Image 1.5 全攻略', link: '/blog/chatgpt-cn/chatgpt-chinese-gpt-image-1-5-guide.html' },
            { text: 'ChatGPT官网：GPT-5 正式上线（2026终极指南）', link: '/blog/chatgpt-cn/2026-gpt5-how-to-use.html' },
            { text: 'GPT-5.2 vs Gemini 3：谁是2025年最强AI模型？', link: '/blog/chatgpt-cn/gpt5-2-vs-gemini-3.html' },
            { text: 'ChatGPT 5.2 官网发布？模型参数深度解析', link: '/blog/chatgpt-cn/gpt5-2-official-parameters-2025.html' },
            { text: 'ChatGPT 5.2 国内如何使用？功能评测', link: '/blog/chatgpt-cn/chatgpt-5-2-guide-2025.html' },
            { text: 'OpenAI官网发布GPT-5最新消息？', link: '/blog/chatgpt-cn/gpt5-official-news-2025.html' },
            { text: '程序员如何用 ChatGPT 提效', link: '/blog/chatgpt-coding-assistant.html' },
            { text: 'ChatGPT 提示词工程进阶指南', link: '/blog/chatgpt-prompt-engineering-guide.html' },
            { text: '2025年 AI 展望：未来趋势', link: '/blog/future-of-llm-2025.html' },
            { text: 'ChatGPT官方网址入口（官网网址登录入口）', link: '/blog/chatgpt-official.html' },
            { text: 'ChatGPT官方网址入口指南', link: '/blog/chatgpt-official-guide.html' },
            { text: 'ChatGPT官网入口_注册使用全教程', link: '/blog/chatgpt.html' },
            { text: 'GPT-5 发布：国内使用教程及注册攻略', link: '/blog/chatgpt-cn/openai-gpt5-2025.html' },
            { text: 'ChatGPT官网入口（官方登录&中文版）2025指南', link: '/blog/chatgpt-cn/2025-chatgpt-official.html' },
            { text: 'ChatGPT 中文版使用网站推荐与详细教程', link: '/blog/chatgpt-cn/chatgpt-chinese-usage-websites.html' },
            { text: 'ChatGPT 官网入口网页版直达链接与登录方法', link: '/blog/chatgpt-cn/chatgpt-official-web-entry.html' },
            { text: 'ChatGPT 中国国内使用方法：注册及使用指南', link: '/blog/chatgpt-cn/chatgpt-cn-register.html' },
            { text: 'ChatGPT 官网与中文版使用终极指南', link: '/blog/chatgpt-cn/chatgpt-guide.html' },
            { text: 'GPT-5.3 vs Claude 4.6 vs Gemini 3.1 Pro 国内该选哪个？', link: '/blog/chatgpt-cn/gpt5-3-vs-claude4-6-vs-gemini3-1-pro-china-guide.html' },
            { text: 'ChatGPT 中文版免费：国内使用指南【2026年1月更新】', link: '/blog/chatgpt-cn/chatgpt.html' },
            { text: 'GPT-5.4 国内怎么用？2026最新中文版使用教程（无需翻墙）', link: '/blog/chatgpt-cn/gpt-5-4-china-guide-2026.html' },
            { text: '2026年ChatGPT镜像网站推荐：国内稳定可用的AI工具对比指南', link: '/blog/chatgpt-cn/chatgpt-mirror-sites-recommended-2026.html' }
          ]
        },
        {
          text: 'AI写作专栏',
          collapsed: false,
          items: [
            { text: '写作基础教程', link: '/blog/writing/basics.html' },
            { text: '场景应用', collapsed: true, items: [
              { text: '小红书写作', link: '/blog/writing/xiaohongshu.html' },
              { text: '论文写作', link: '/blog/writing/academic.html' }
            ]}
          ]
        }
      ]
    },



    footer: {
      message: 'Powered by ChatGPT中文版',
      copyright: 'Copyright © 2025-2026 ChatGPT中文版'
    },
    
    search: {
      provider: 'local'
    }
  },

  // 动态注入 per-page canonical + Article Schema + OG tags
  transformPageData(pageData) {
    const SITE_HOST = 'https://www.chatgpt-chinese.chat'
    const SITE_NAME = 'ChatGPT官网中文版'
    const fm = pageData.frontmatter || {}
    pageData.frontmatter.head = pageData.frontmatter.head || []

    // 动态 canonical URL
    const cleanPath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')
    const canonicalUrl = cleanPath ? `${SITE_HOST}/${cleanPath}` : SITE_HOST
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )

    // 动态 OG tags
    const pageTitle = fm.title || pageData.title || SITE_NAME
    const pageDesc = fm.description || pageData.description || ''
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDesc }],
      ['meta', { property: 'og:url', content: canonicalUrl }]
    )

    // 为非首页注入 Article Schema
    if (pageData.relativePath !== 'index.md') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageTitle,
        description: pageDesc,
        datePublished: fm.date
          ? new Date(fm.date).toISOString()
          : new Date('2026-01-01').toISOString(),
        dateModified: fm.lastUpdated
          ? new Date(fm.lastUpdated).toISOString()
          : new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        inLanguage: 'zh-CN'
      }
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(articleSchema)
      ])
    }
  }
})
