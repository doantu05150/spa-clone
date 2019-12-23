<template>
  <b-container class="gallery">
    <h1 class="text-center title mt-4">@eforea_salonspa</h1>
    <b-row>
      <b-col
        md="4"
        sm="6"
        v-for="(img, index) in images"
        :key="`insta_${index}`"
      >
        <div class="image-wrapper">
          <img :src="img.src" :alt="`instagram_${index}`" class="img-fluid" />
          <a class="text" :href="img.href" target="_blank"> Instagram </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="stylus" scoped>
.gallery
  background #fff
  margin-top 30px
  padding 30px

  .title
    color #76ccdd
    margin-bottom 40px

  .image-wrapper
    margin-bottom 30px
    position relative
    cursor pointer

    &:before
      content ''
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      right 0
      bottom 0
      background-color rgba(118, 204, 221, 0.7)
      opacity 0
      transition all 0.15s ease-in

    &:hover
      &:before
        opacity 1

      .text
        opacity 1
        transform translateY(0) scale(1)

    .text
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      right 0
      bottom 0
      display flex
      justify-content center
      align-items center
      text-decoration none
      color #ffffff
      font-size 30px
      transform translateY(30px) scale(0.5)
      transition all 0.15s ease-in-out
      text-transform uppercase
      font-family 'Montserrat', sans-serif
      opacity 0

@media (max-width: 400px)
  .gallery
    display none

@media (max-width: 576px)
  .gallery
    display none
</style>
