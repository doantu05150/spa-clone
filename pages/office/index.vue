<template>
  <div class="app" style="overflow-x: hidden">
    <top-menu />
    <navbar />
    <office />
    <copyright id="footer" />
  </div>
</template>

<script>
import axios from 'axios'
import { TopMenu, Navbar, Copyright, Office } from '~/components'

export default {
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=contact')
      .then(response => {
        store.commit('setContactData', response.data[0].acf)
      })
  },
  components: {
    TopMenu,
    Navbar,
    Office,
    Copyright,
  },
}
</script>
