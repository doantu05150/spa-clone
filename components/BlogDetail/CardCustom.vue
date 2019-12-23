<template>
  <div class="card-custom">
    <div
      class="img-wrapper"
      :style="
        `background: url(${
          cardData._embedded['wp:featuredmedia']
            ? cardData._embedded['wp:featuredmedia'][0].media_details.sizes.full
                .source_url
            : '/images/cwQhA1A.png'
        }) center center; background-size: cover`
      "
    ></div>
    <div class="card-text-custom">
      <h6 class="published-date">{{ date }}</h6>
      <router-link :to="`/blog/${cardData.slug}`" class="card-title-custom">{{
        cardData.title.rendered
      }}</router-link>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  props: {
    cardData: Object,
  },
  computed: {
    date() {
      return format(this.cardData.date, 'MMM DD')
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-custom
  display flex
  padding 15px 0

  .card-text-custom
    padding-left 15px
    flex 1

    .published-date
      opacity 0.7

    .card-title-custom
      font-size 19px
      font-weight 600
      line-height 1
      color #000
      text-decoration none

  .img-wrapper
    width 130px
    height 130px
    overflow hidden
    text-align center

    .img
      height 130px
      vertical-align unset
</style>
