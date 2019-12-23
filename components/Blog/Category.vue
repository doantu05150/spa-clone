<template>
  <div class="category pt-4">
    <div class="category-title text-center">Category</div>
    <div class="category-list mb-5">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="category-item py-2"
        :class="{ 'category-active': item.id == $route.params.id }"
        @click="$router.push(`/blog/category/${item.id}`)"
      >
        <span>{{ item.name }}</span> ({{
          item.count > 10 ? item.count : '0' + item.count
        }})
      </div>
    </div>
    <instagram :images="images" />
  </div>
</template>

<script>
import Instagram from './Instagram'

export default {
  components: {
    Instagram,
  },
  props: {
    categories: Array,
    images: Array,
  },
  data() {
    return {
      adsText: 'This is half frame ads',
      splitedText: [],
    }
  },
  mounted() {
    this.splitedText = this.adsText.split(' ')
  },
}
</script>

<style lang="stylus" scoped>
.category-title
  font-size 21px
  text-transform uppercase
  font-weight 500
  color #76ccdd
.category-item
  border-bottom 1px solid #989898
  cursor pointer
  span
    font-weight 500
.category-active
  color #76ccdd
.blog-ads
  position relative
  justify-content center
  .div-ads
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    text-align center
    justify-content center
    display flex
    flex-direction column
    .text-ads
      color #fff
      text-align center
      font-family 'Playfair Display', serif
      font-style italic
      font-size 2.5rem
      margin-bottom 0
</style>
