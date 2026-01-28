# My-Web

个人主页/作品集项目，基于 Vue 3 + Vite 构建，包含多语言、玻璃质感 UI、滚动动画和移动端适配。

## 功能与特点

- CI/CD 友好：标准 Vite 构建流程，适合接入 GitHub Actions 等自动化部署
- 单页结构：Home / About / Skills / Blog / Contacts / Footer
- 语言切换（zh-CN / en-US）
- 玻璃拟态（glassmorphism）背景层与动效
- 滚动进入动画（IntersectionObserver）
- 图片使用 AVIF/WebP/JPEG 回退以提升加载性能
- 移动端响应式布局与折叠导航

## 技术栈

- Vue 3
- Vite
- vue-i18n

## 目录结构

```
my-web/
  src/
    assets/        # 图片与静态资源
    components/    # 组件
    locales/       # 多语言配置
    App.vue        # 页面主体
    main.js        # 应用入口
  public/          # 公共资源
  index.html
```

## 环境要求

- Node.js: ^20.19.0 或 >= 22.12.0

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 部署

构建产物在 `dist/`，将其部署到任意静态站点服务即可。


