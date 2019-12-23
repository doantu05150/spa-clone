<template>
  <div>
    <no-ssr>
      <carousel
        ref="feedbackCarousel"
        :per-page="1"
        :navigation-enabled="true"
        pagination-active-color="#76ccdd"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <slide v-for="(item, index) in peopleSay" :key="`people_say_${index}`">
          <b-row>
            <b-col md="8" offset-md="2">
              <div class="slide-content text-center">
                <p>{{ item.description }}</p>
                <div class="custom-icon-carousel">
                  <a class="pre" @click.prevent="prevSlide">
                    <i class="icon-arrow-left"></i>
                  </a>
                  <a class="next" @click.prevent="nextSlide">
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
                <img
                  width="75"
                  height="75"
                  alt="img"
                  class="m-1 rounded-circle"
                  :src="item.avatar.url"
                />
                <div class="title">{{ item.name }}</div>
              </div>
            </b-col>
          </b-row>
        </slide>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed: {
    ...mapGetters(['peopleSay']),
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    nextSlide() {
      this.$refs.feedbackCarousel.goToPage(
        this.$refs.feedbackCarousel.getNextPage(),
      )
    },
    prevSlide() {
      this.$refs.feedbackCarousel.goToPage(
        this.$refs.feedbackCarousel.getPreviousPage(),
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.slide-content
  p
    font-weight 300

  .title
    color #76ccdd
    font-weight 600

  .subtitle
    font-weight 300

.custom-icon-carousel
  font-size 18px
  position absolute
  top 15px
  width calc(100% - 30px)
  display flex
  justify-content space-between

  a
    cursor pointer
    color #76ccdd

    &:hover
      color #17a2b8

  .pre
    margin-left -70px

  .next
    margin-right -70px

@media (max-width: 400px)
  .pre
    display none

  .next
    display none

  .slide-content
    p
      font-size 12px

  .title
    font-size 11px

  .subtitle
    font-size 13px

@media (max-width: 576px)
  .pre
    display none

  .next
    display none

  .slide-content
    p
      font-size 12px

  .title
    font-size 11px

  .subtitle
    font-size 13px
</style>
