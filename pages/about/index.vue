<template>
  <div class="about-us" style="overflow-x: hidden">
    <top-menu />
    <navbar /> <about /> <copyright />
  </div>
</template>
<script>
import axios from 'axios'
import { TopMenu, Navbar, About, Copyright } from '~/components'

export default {
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=ve-eforea')
      .then(response => {
        store.commit('setAboutData', response.data[0].acf)
      })
  },
  components: {
    TopMenu,
    Navbar,
    About,
    Copyright,
  },
}
</script>
