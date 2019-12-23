<template>
  <b-col md="4">
    <div class="wrapper-cards">
      <div class="cards">
        <div class="img-card"><img :src="`${image}`" /></div>
        <div class="infomation">
          <h2 class="name-branch">{{ name }}</h2>
          <p class="address">{{ address }}</p>
          <p class="note">{{ description }}</p>
          <b-button
            :href="`/service/${menu}`"
            target="_blank"
            class="branch-button"
            variant="info"
            >XEM MENU</b-button
          >
        </div>
      </div>
      <div class="name-number">
        <div>
          <p class="name-eforea">{{ name }}</p>
        </div>
        <div>
          <p class="number-eforea">{{ number }}</p>
        </div>
      </div>
    </div>
  </b-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      flipped: false,
    }
  },
  props: {
    image: String,
    name: String,
    address: String,
    description: String,
    number: String,
    menu: String,
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
  },
}
</script>
<style lang="stylus" scoped>
.wrapper-cards
  display flex;
  flex-direction column;
  flex-wrap wrap;
  height 550px;
  .name-number
    position relative;
    top 0;
    bottom 0;
    margin-top 515px;
    display flex;
    flex-direction row;
    justify-content space-between;
    .name-eforea
      font-weight bold;
      font-size 20px;
      text-transform uppercase;
    .number-eforea
      font-weight bold;
      color #959699;
      font-size 20px;
.cards
  height 502px;
  width 350px;
  position absolute;
  -webkit-transition -webkit-transform 1s;
  -moz-transition -moz-transform 1s;
  -o-transition -o-transform 1s;
  transition transform 1s;
  -webkit-transform-style preserve-3d;
  -moz-transform-style preserve-3d;
  -o-transform-style preserve-3d;
  transform-style preserve-3d;
  -webkit-transform-origin 50% 50%;
  &:hover
    -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
  .img-card
    cursor pointer;
.cards div
  display: block;
  text-align: center;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

.infomation
  background-color #fff !important;
  height 502px;
  width 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 20px 0px 20px;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
  cursor pointer;
  .name-branch
    font-size 2rem;
    color #76ccdd;
  .address
    font-weight 300;
    text-align center
    margin-bottom 20px;
  .note
    font-weight 300;
    text-align center;
    margin-bottom 20px;
  .branch-button
    font-weight 600;
    padding-left 30px;
    padding-right 30px;
</style>
