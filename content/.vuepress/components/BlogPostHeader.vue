<template>
  <div v-if="!page.frontmatter.blog_index">
    <router-link class="title-link" :to="page.path">
      <h2>{{ page.frontmatter.title }}</h2>
    </router-link>
    <p>
      <em>{{ date }}</em>
    </p>
  </div>
</template>

<script>
  import { format, parse } from "date-fns";

  export default {
    props: ["post"],
    computed: {
      date() {
        return format(new Date(this.page.frontmatter.date), "Mo MMMM y");
      },
      page() {
        return this.post || this.$page;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .title-link {
    color: #2c3e50;

    h2 {
      color: #2c3e50;
    }
  }
</style>