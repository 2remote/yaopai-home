# 邀拍官网
偷了个懒，用了 [WeFlow](https://weflow.io/) 客户端进行的开发：）

### 启动方式：
1. 下载 WeFlow
2. 监听该项目
3. `src` 目录是开发目录，`dev` 目录（启动 WeFlow 后会出现）是打包目录

### [pure.css](http://purecss.io/)
目前用到了 pure.css 的以下模块：
* base.css
* button.css
* grid.css + responsive.css

### 代码结构
首页 => index.html => home_page.scss
客片 => works.html => works_page.scss
企业 => firm.html =>  firm_page.scss
摄影师 => grapher.html => grapher_page.scss
活动 => activity.html => activity_page.scss
活动详情 => activity_detail.html => activity_detail.scss

public.scss 一共公共的样式，比如导航，footer

### SCSS 编译
`style-*.scss` 为样式的出口文件，WeFlow 只编译 `style-` 开头的 `scss` 文件，其他的文件都可以认为是一个个模块。
目前有两个出口文件：
* `style-index.scss`
* `style-pure.scss`


### WeFlow 开启的功能
1. LiveReload
2. REM 适配解决方案
3. 智能 WebP 解决方案

### 上线之前
* 图片压缩
* css / js 压缩

### TODO
* 图片轮播支持响应式
* 页面响应式
