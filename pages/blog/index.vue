<template>
  <div class="app">
    <div class="blog-page">
      <top-menu />
      <navbar />
      <blog
        :blogs="blogs"
        :categories="categories"
        :pageCurrent="pageCurrent"
        :numberPage="numberpage"
        :pagination="pagination"
      />
      <copyright />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { TopMenu, Navbar, Copyright, Blog } from '~/components'
export default {
  watchQuery: ['page'],
  async asyncData({ app, query }) {
    let pageCurrent = parseInt(query.page) || 1
    const dataPost = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/posts?per_page=4',
    )
    const numberpage = parseInt(dataPost.headers['x-wp-totalpages'])
    if (pageCurrent < 1 || pageCurrent > numberpage) pageCurrent = 1
    const data = await app.$axios.$get(
      '/posts?_embed&per_page=4&page=' + pageCurrent,
    )
    const resCategory = await app.$axios.$get('/categories')
    const pagination = []
    if (numberpage < 4) {
      for (let i = 1; i <= numberpage; i++) {
        pagination.push({ numberPage: i, link: '/blog?page=' + i })
      }
    } else if (
      pageCurrent === 1 ||
      pageCurrent === 2 ||
      (pageCurrent === 3 && numberpage > 4)
    ) {
      for (let i = 1; i < 4; i++) {
        pagination.push({ numberPage: i, link: '/blog?page=' + i })
      }
      pagination.push({
        numberPage: '...',
        link: '',
      })
      pagination.push({
        numberPage: numberpage,
        link: '/blog?page=' + numberpage,
      })
    } else if (
      pageCurrent === numberpage ||
      pageCurrent === numberpage - 1 ||
      (pageCurrent === numberpage - 2 && numberpage > 4)
    ) {
      pagination.push({ numberPage: '1', link: '/blog?page=1' })
      pagination.push({ numberPage: '...', link: '/' })
      for (let i = numberpage - 2; i <= numberpage; i++) {
        pagination.push({ numberPage: i, link: '/blog?page=' + i })
      }
    } else {
      pagination.push({ numberPage: '1', link: '/blog?page=1' })
      pagination.push({ numberPage: '...', link: '' })
      for (let i = pageCurrent; i < pageCurrent + 2; i++) {
        pagination.push({ numberPage: i, link: '/blog?page=' + i })
      }
      pagination.push({ numberPage: '...', link: '' })
      pagination.push({
        numberPage: numberpage,
        link: '/blog?page=' + numberpage,
      })
    }
    return {
      numberpage: numberpage,
      pageCurrent: pageCurrent,
      blogs: data,
      categories: resCategory,
      pagination: pagination,
    }
  },
  async fetch({ store }) {
    const response = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=blog',
    )
    const data = await response.data[0].acf
    return await store.commit('setBlogData', data)
  },
  head: {
    title: 'Eforea Blog',
  },
  components: {
    TopMenu,
    Navbar,
    Copyright,
    Blog,
  },
}
</script>
