<template>
  <section class="blog-detail">
    <banner />
    <h1 class="text-center title mt-5 mb-5">Blog</h1>
    <b-container>
      <b-row>
        <b-col md="8"> <detail-content /> </b-col>
        <b-col md="4">
          <newest-post />
          <category :categories="categories" :images="instaImages" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Banner from '../Blog/Banner'
import NewestPost from './NewestPost'
import Category from '../Blog/Category'
import DetailContent from './DetailContent'

export default {
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/categories')
      .then(res => {
        this.categories = res.data
      })
  },
  components: {
    NewestPost,
    Category,
    DetailContent,
    Banner,
  },
  computed: {
    ...mapGetters(['images']),
    instaImages() {
      return this.images.slice(0, 9)
    },
  },
}
</script>

<style lang="stylus" scoped>
.blog-detail {
  background: #f8f8f8;
  padding-bottom: 20px;

  .title {
    color: #76ccdd;
  }
}
</style>
