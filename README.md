# 邀拍官网
偷了个懒，用了 [WeFlow](https://weflow.io/) 客户端进行的开发：）

### 启动方式：
1. 下载 WeFlow
2. 监听该项目
3. `src` 目录是开发目录，`dev` 目录（启动 WeFlow 后会出现）是打包目录，故未同步 Git
4. `src` 目录下的 img 目录因为图片太大，故未同步 Git


### 代码结构
* 首页 => index.html => home_page.scss
* 客片 => works.html => works_page.scss
* 企业 => firm.html =>  firm_page.scss
* 摄影师 => grapher.html => grapher_page.scss
* 活动 => activity.html => activity_page.scss
* 活动详情 => activity_detail.html => activity_detail.scss

* 公共组件（导航，底部说明）=> public.scss
* 图片轮播 => pic_slide.css

* pure_*.scss （[pure.css](http://purecss.io/)） 目前用到了 pure.css 的以下模块：
  * base
  * button
  * grid + responsive

* mixin/utility/variable  

### SCSS 编译
`style-*.scss` 为样式的出口文件，WeFlow 只编译 `style-` 开头的 `scss` 文件，其他的文件都可以认为是一个个模块。
目前有一个出口文件：
* `style-index.scss`


### WeFlow 开启的功能
1. LiveReload
2. REM 适配解决方案（好像没效果）
3. 智能 WebP 解决方案（好像没效果）

### WeFlow 的坑
如果 sass 某一句语法写错了，正常的反馈是页面会报错，然后告诉你错在哪里。    
但是 WeFlow 不会报错，页面正上显示，不过显示的是最后一次正确代码的样子。
