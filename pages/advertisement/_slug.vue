<template>
  <div class="about-us" style="overflow-x: hidden">
    <top-menu />
    <navbar /> <advertisement-detail /> <copyright />
  </div>
</template>
<script>
import axios from 'axios'
import { TopMenu, Navbar, Copyright, AdvertisementDetail } from '~/components'

export default {
  async fetch({ store }) {
    const adverData = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=advertisement',
    )
    store.commit('setAdverData', adverData.data[0].acf)
  },
  components: {
    TopMenu,
    Navbar,
    Copyright,
    AdvertisementDetail,
  },
}
</script>
