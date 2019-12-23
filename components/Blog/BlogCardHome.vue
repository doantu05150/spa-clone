<template>
  <div class="card mb-3">
    <div class="card__header">
      <div class="date">{{ date }}</div>
      <div class="divide"></div>
    </div>
    <img
      :src="
        blog._embedded['wp:featuredmedia']
          ? blog._embedded['wp:featuredmedia'][0].media_details.sizes
              .medium_large.source_url
          : `/images/cwQhA1A.png`
      "
      class="img-fluid"
    />
    <div class="card__content">
      <router-link class="title-custom" :to="`/blog/${blog.slug}`">
        <h4 class="title mt-4">{{ blog.title.rendered }}</h4></router-link
      >
      <div class="excerpt" v-html="blog.excerpt.rendered"></div>
      <div class="text-right">
        <router-link :to="`/blog/${blog.slug}`">
          Xem thêm <i class="fas fa-long-arrow-alt-right"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  props: ['blog'],
  computed: {
    date() {
      return format(this.blog.date, 'MMM DD')
    },
  },
}
</script>

<style lang="stylus" scoped>
.card
  border 0
  background-color transparent

  &__header
    display flex
    align-items center
    margin-bottom 5px

    .date
      font-family 'Playfair Display', serif
      font-style italic
      color #959699
      margin-right 3px
      font-size 18px

    .divide
      height 1px
      flex 1
      background #959699

  &__content
    .title-custom
      color #333 !important

    .title
      font-family 'Playfair Display', serif
      font-style italic

    .excerpt
      font-weight 300
      font-size 18px
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      line-height 18px
      max-height 54px
      -webkit-line-clamp 3
      -webkit-box-orient vertical
      margin-bottom 20px

  a
    color #76ccdd
    font-family 'Playfair Display', serif
    font-style italic
  .text-right
    a
      color #76ccdd
      font-family 'Playfair Display', serif
      font-style italic
      font-size 18px
</style>
