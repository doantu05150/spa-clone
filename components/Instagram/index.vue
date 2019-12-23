<template>
  <section class="instagram">
    <video-component />
    <gallery :images="instaImages" />
    <gallery-mobile :images="instaImages" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VideoComponent from './Video'
import Gallery from './Gallery'
import GalleryMobile from './GalleryMobile'

export default {
  components: {
    VideoComponent,
    Gallery,
    GalleryMobile,
  },
  computed: {
    ...mapGetters(['images']),
    instaImages() {
      return this.images.slice(0, 6)
    },
  },
}
</script>

<style lang="stylus" scoped>
.instagram
  background url('/images/instagram-bg.png')
  background-size cover
  padding-bottom 60px
  background-color #f8f8f8
</style>
