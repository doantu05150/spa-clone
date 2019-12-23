<template>
  <section class="blog">
    <h1 class="text-center title">Blog</h1>
    <b-container v-if="blogs">
      <b-row>
        <b-col v-for="blog in blogs" :key="blog.id">
          <blog-card :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BlogCard from './BlogCardHome'

export default {
  components: {
    BlogCard,
  },
  props: {
    blogs: Array,
  },
}
</script>

<style lang="stylus" scoped>
.blog
  background #fff
  padding-top 50px
  padding-bottom 50px

  .title
    color #76ccdd
</style>
