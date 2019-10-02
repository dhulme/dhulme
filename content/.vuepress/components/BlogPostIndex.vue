<template>
  <div>
    <div class="post" v-for="post in posts" :key="post.key">
      <BlogPostHeader :post="post" />
      <Content :page-key="post.key" />
    </div>
    <button
      class="load-more"
      v-if="$site.pages.length > pages * postsPerPage"
      @click="pages += 1"
    >Load more...</button>
  </div>
</template>
<script>
  import BlogPostHeader from './BlogPostHeader';
  import Content from '@vuepress/core/lib/client/components/Content';

  export default {
    components: {
      BlogPostHeader,
      Content
    },
    data() {
      return {
        pages: 1,
        postsPerPage: 10
      };
    },
    computed: {
      posts() {
        return this.$site.pages
          .filter(
            page => page.path.startsWith('/blog/') && !page.frontmatter.blog_index
          )
          .sort(
            (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
          .slice(0, this.pages * this.postsPerPage);
      }
    }
  };
</script>

<style scoped lang="stylus">
  .load-more {
    display: block;
    margin: auto;
    margin-top: 2rem;
    border: none;
    font-size: 0.75rem;
    color: #fff;
    background-color: #3eaf7c;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #389d70;
  }

  .post {
    margin-bottom: 4rem;
  }
</style>