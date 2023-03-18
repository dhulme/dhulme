<script setup>
  import { format } from 'date-fns';
  import { data } from '../blog.data.ts'

  const posts = data.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  )

  function getDate(date) {
    return date && format(new Date(date), 'do MMMM y').replace(
      /([0-9]+)(st|nd|rd|th)/,
      '$1<sup>$2</sup>'
    )
  }

  function getPath(file) {
    return file && file.match(/.+(\/blog\/.+)\.md/)[1];
  }
</script>

# Blog

<div class="post" v-for="post in posts" :key="post.file">
  <a :href="getPath(post.file)">
    <h2 class="title">{{ post.data.title }}</h2>
  </a>
  <p>
    <em v-html="getDate(post.data.date)" />
  </p>
</div>