<script setup>
import { format } from 'date-fns';
import { useData } from 'vitepress';

const page = useData().page.value;

const date =
  page.frontmatter.date &&
  format(new Date(page.frontmatter.date), 'do MMMM y').replace(
    /([0-9]+)(st|nd|rd|th)/,
    '$1<sup>$2</sup>'
  );
</script>

<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>
      <em v-html="date" />
    </p>
  </div>
</template>

