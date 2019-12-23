<template>
  <div class="newest-post">
    <h4 class="title pb-2 mb-4">Bài viết gần đây</h4>
    <div class="newest-inner">
      <card-custom
        v-for="(item, id) in threeBlogs"
        :key="`blog_${id}`"
        :cardData="item"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardCustom from './CardCustom'

export default {
  data() {
    return {
      threeBlogs: Object,
    }
  },
  components: {
    CardCustom,
  },
  mounted() {
    axios
      .get(
        'https://cms.eforealifestyle.com/wp-json/wp/v2/posts?_embed&per_page=3',
      )
      .then(response => {
        this.threeBlogs = response.data
      })
  },
}
</script>

<style lang="stylus" scoped>
.title
  border-bottom 1px solid #989898
</style>
