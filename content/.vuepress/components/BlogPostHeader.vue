<template>
  <div v-if="!page.frontmatter.blog_index">
    <router-link class="title-link" :to="page.path">
      <h1>{{ page.frontmatter.title }}</h1>
    </router-link>
    <p>
      <em v-html="date" />
    </p>
  </div>
</template>

<script>
import { format, parse } from 'date-fns';

export default {
  props: ['post'],
  computed: {
    date() {
      return format(new Date(this.page.frontmatter.date), 'do MMMM y').replace(
        /([0-9]+)(st|nd|rd|th)/,
        '$1<sup>$2</sup>'
      );
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
