// ignore
//@name:[嗅]OMOFun
//@version:1
//@webSite:https://www.omofun.li
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'https://www.omofun.li'
// 网站搜索
// https://www.clicli.pro/search/page/2/wd/海.html
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/index.php/vod/search/page/@{page}/wd/@{searchWord}.html'
// 当前网站任意视频详情页
// https://www.clicli.pro/bangumi/3384.html
const videoDetailPage = '@{webSite}/index.php/vod/detail/id/365.html'
// 当前网站任意视频播放页
// https://www.clicli.pro/video/3384/1-1.html
const videoPlayPage = '@{webSite}/index.php/vod/play/id/365/sid/3/nid/2.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '日本动漫',
        // https://www.clicli.pro/show/id/1/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/type/id/20/page/@{page}.html',
    },
    {
        name: '动漫电影',
        // https://www.clicli.pro/show/id/2/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/type/id/22/page/@{page}.html',
    },
    {
        name: '欧美动漫',
        // https://www.clicli.pro/show/id/2/page/2.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/index.php/vod/type/id/23/page/@{page}.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#