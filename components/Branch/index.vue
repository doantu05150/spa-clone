<template>
  <div class="branch">
    <no-ssr>
      <carousel
        ref="feedbackCarousel"
        :per-page="1"
        :navigation-enabled="true"
        pagination-active-color="#76ccdd"
      >
        <slide>
          <b-container>
            <b-row>
              <slider
                v-for="(item, id) in branchData"
                :key="id"
                :name="item.name"
                :image="item.image"
                :address="item.address"
                :description="item.description"
                :number="item.number"
                :menu="item.menu"
              />
            </b-row>
          </b-container>
        </slide>
      </carousel>
      <div class="branch-slide">
        <div class="container">
          <div class="btn-slide">
            <i class="icon-arrow-left icon-left"></i>
            <i class="space">___________</i>
            <i class="icon-arrow-right icon-right"></i>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Slider from './slider'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      flipped: false,
    }
  },
  components: {
    Slider,
  },
  computed: {
    ...mapGetters(['branchData']),
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
    flip() {
      this.flipped = !this.flipped
    },
  },
}
</script>
<style lang="stylus" scoped>
.branch
  background url('/images/branch_bg.jpg');
  background-size cover;
  margin-top 40px;
  padding-top 100px;
  padding-bottom 100px;

.branch-slide
  margin-bottom: -80px;
  margin-top: 20px;
  .icon-arrow-left
    color #79cdde;
    font-weight bold;
    font-size 30px;
    margin-right 10px;

  .icon-arrow-right
    color #79cdde;
    font-weight bold;
    font-size 30px;
    margin-left 10px;

  .space
    color #79cdde;
    font-weight bold;
</style>
