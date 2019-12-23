<template>
  <div>
    <div class="category-title text-center mt-5 mb-2">@eforea_salonspa</div>
    <div ref="instagramInner" class="blog-instagram-image">
      <div
        v-for="(img, index) in images"
        :key="`img_${index}`"
        :class="`img-${index}`"
        :ref="`image${index}`"
        @click="onImageClick(img.href)"
      >
        <img :src="img.src" :alt="`img-${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  methods: {
    handleResize() {
      if (this.$refs.image1) {
        const img1 = this.$refs.image1
        const container = this.$refs.instagramInner
        const imgWidth = img1.clientWidth
        container.setAttribute(
          'style',
          `grid-template-rows: repeat(6, ${imgWidth / 3}px)`,
        )
      }
    },
    onImageClick(href) {
      window.open(href, '_blank')
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.handleResize)
    })
  },
}
</script>

<style lang="stylus" scoped>
.category-title
  font-size 21px
  font-weight 500
  color #76ccdd
.blog-instagram-image
  width 100%
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 0
  img
    width 100%
    height 100%
    object-fit cover
    padding 5px
    cursor pointer
  .img-1
    grid-column 1/2
    grid-row 1/4
  .img-2
    grid-column 2/3
    grid-row 1/4
  .img-3
    grid-column 3/-1
    grid-row 1/4
  .img-4
    grid-column 1/2
    grid-row 4/7
  .img-5
    grid-column 2/3
    grid-row 4/7
  .img-6
    grid-column 3/-1
    grid-row 4/7
  .img-7
    grid-column 1/2
    grid-row 7/11
  .img-8
    grid-column 2/3
    grid-row 7/11
  .img-9
    grid-column 3/-1
    grid-row 7/11
</style>
