<template>
  <section class="blog">
    <banner />
    <h1 class="text-center title mt-5 mb-4">{{ blogTitle }}</h1>
    <b-container>
      <b-row>
        <b-col md="8">
          <b-card-group columns v-if="blogs">
            <nuxt-link
              v-for="blog in blogs"
              :key="blog.id"
              class="link-blog"
              :to="`/blog/${blog.slug}`"
            >
              <blog-card :blog="blog" />
            </nuxt-link>
          </b-card-group>
          <div class="d-flex pagination">
            <nuxt-link :to="pagePre" class="paging">&lt; Previous</nuxt-link>
            <div v-for="(item, index) in pagination" :key="`page${index}`">
              <nuxt-link
                :to="item.link"
                class="paging"
                :class="{ 'page-current': item.numberPage === pageCurrent }"
                v-if="item.numberPage !== '...'"
                >{{ item.numberPage }}</nuxt-link
              >
              <div v-else class="paging">{{ item.numberPage }}</div>
            </div>
            <nuxt-link :to="pageNext" class="paging">Next ></nuxt-link>
          </div>
        </b-col>
        <b-col md="4">
          <category :categories="categories" :images="instaImages" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from './Banner'
import BlogCard from './BlogCard'
import Category from './Category'

export default {
  components: {
    BlogCard,
    Category,
    Banner,
  },
  props: {
    blogs: Array,
    categories: Array,
    pageCurrent: Number,
    numberPage: Number,
    pagination: Array,
  },
  computed: {
    ...mapGetters(['images']),
    instaImages() {
      return this.images.slice(0, 9)
    },
    pagePre: function() {
      const pagePre =
        this.pageCurrent > 1 ? this.pageCurrent - 1 : this.pageCurrent
      return `?page=${pagePre}`
    },
    pageNext: function() {
      const pageNext =
        this.pageCurrent < this.numberPage
          ? this.pageCurrent + 1
          : this.pageCurrent
      return `?page=${pageNext}`
    },
    blogTitle() {
      const { id } = this.$route.params
      return id ? this.categories.find(item => item.id == id).name : 'Blog'
    },
  },
}
</script>

<style lang="stylus" scoped>
.blog {
  background: #f8f8f8;
  padding-bottom: 20px;

  .title {
    color: #76ccdd;
  }
}

.link-blog {
  color: #000;

  &:hover {
    text-decoration: none;
  }
}

.card-columns {
  column-count: 2;
}

.error-img {
  width: 100%;
}

.pagination
  font-family 'Roboto', sans-serif
  font-size 12px
  float right
  margin-top 10px
  .paging
    margin-left 32px
    color #000
  .page-current
    font-weight bold

@media (max-width: 568px) {
  .card-columns {
    column-count: 1 !important;
  }
}
</style>
