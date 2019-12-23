<template>
  <div class="detail-content">
    <div id="fb-root"></div>
    <h2 class="mb-4">{{ blog.title.rendered }}</h2>
    <h6 class="dt-published-date mb-5">{{ date }}</h6>
    <h4 class="dt-description mb-3" v-html="blog.excerpt.rendered"></h4>
    <div class="dt-img-post mb-4">
      <img
        class="img-fluid"
        :src="
          blog._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url
        "
        alt="image-post"
      />
    </div>
    <div class="dt-text-content" v-html="blog.content.rendered"></div>
    <div class="dt-signal"><h6>Updated by Windy</h6></div>
    <div class="mt-3 mb-5">
      <div
        class="fb-like"
        :data-href="blog.link"
        data-width="32"
        data-layout="button"
        data-action="like"
        data-size="large"
        data-show-faces="true"
        data-share="false"
      />
      <div
        class="fb-share-button"
        :data-href="blog.link"
        data-layout="button"
        data-size="large"
        data-mobile-iframe="true"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
          >Chia sẻ</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import format from 'date-fns/format'

export default {
  data() {
    return {
      isFBReady: false,
    }
  },
  computed: {
    date() {
      return format(this.blog.date, 'MMM DD-YYYY')
    },
    ...mapGetters({
      blog: 'currentBlog',
    }),
  },
}
</script>

<style lang="stylus">
.detail-content

  .dt-published-date, .dt-description
    opacity 0.6

  .dt-img-post
    margin-left -121px

  .dt-description
    font-size 18px!important

  .dt-signal
    h6
      text-align right
      color #adadad

  .dt-text-content
    font-size 20px

    p
      margin-bottom 1.6em

      img
        display block
        margin auto

      i, em
        font-family 'Playfair Display', serif
        opacity 0.6

      b
        i
          font-family 'Roboto', sans-serif
          opacity 1

    .tiled-gallery
      clear both
      margin 0 0 20px
      overflow hidden

      .gallery-row
        margin auto

        .gallery-group
          float left
          position relative

@media (max-width 768px)
  .img-post
    margin-left 0!important

@media (max-width 540px)
  .text-content
    font-size 16px !important

.wp-block-image
  figcaption
    font-size 15px
    text-align center
    margin-top 3px
  text-align: center
</style>
