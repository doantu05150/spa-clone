<template>
  <section class="feedback">
    <b-container>
      <b-row>
        <b-col sm="8" offset-sm="2" class="text-center">
          <no-ssr>
            <div class="quote-wrap text-header-section">
              <span style="white-space: pre-line;">{{ homeData.quote_2 }}</span>
            </div>
          </no-ssr>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" class="mt-4 pt-5 pb-4">
          <h1 class="title text-center">Mọi người nói gì về Eforea</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col> <carousel /> </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Carousel from './Carousel'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['homeData']),
  },
  components: {
    Carousel,
  },
}
</script>

<style lang="stylus" scoped>
.feedback
  background #f8f8f8
  color #000
  padding-top 90px
  padding-bottom 90px

  .title
    color #76ccdd

@media (max-width: 400px)
  .feedback
    margin-bottom -60px

  .quote-wrap
    span
      font-size 20px

  .title
    font-size 22px

@media (max-width: 576px)
  .feedback
    margin-bottom 0px

  .quote-wrap
    span
      font-size 17px
    &:before, &:after
      content ''
      background-repeat no-repeat
      position absolute
      background-position center
      width 100%
      height 40px
      left 110px
      right 0
      width 140px
  .title
    font-size 22px
</style>
