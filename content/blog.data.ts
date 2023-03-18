import { defineLoader } from 'vitepress'
import fs from 'node:fs'
import parseFrontmatter from 'gray-matter'

export default defineLoader ({
  watch: ['./blog/*.md'],
  load(watchedFiles) {
    return watchedFiles.map(file => {
      const content = fs.readFileSync(file, 'utf-8')
      const { data, excerpt } = parseFrontmatter(content)
      return {
        file,
        data,
        excerpt
      }
    })
  }
})