import DefaultTheme from 'vitepress/theme'
import BlogPostHeader from '../../components/BlogPostHeader.vue'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('BlogPostHeader', BlogPostHeader)
  }
}