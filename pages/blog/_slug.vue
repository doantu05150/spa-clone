<template>
  <div class="app">
    <top-menu />
    <navbar />
    <blog-detail />
    <copyright />
  </div>
</template>

<script>
/* global FB */
import { TopMenu, Navbar, Copyright, BlogDetail } from '~/components'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    BlogDetail,
  },
  async fetch({ store, params }) {
    const { slug } = params
    await store.dispatch('getBySlug', { slug })
    const response = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=blog',
    )
    const data = await response.data[0].acf
    return await store.commit('setBlogData', data)
  },
  head() {
    return {
      title: this.blog.title.rendered || 'Eforea Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.excerpt.rendered || 'This is eforea blog',
        },
        {
          property: 'og:image',
          content: this.blog.featured_image || '',
        },
      ],
    }
  },
  mounted() {
    FB.XFBML.parse()
  },
  computed: {
    ...mapGetters({
      blog: 'currentBlog',
    }),
  },
}
</script>
