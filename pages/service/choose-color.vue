<template>
  <div class="app">
    <div class="blog">
      <choose-color />
    </div>
  </div>
</template>

<script>
import { ChooseColor } from '~/components'
import axios from 'axios'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get(
        'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=thu-mau-son',
      )
      .then(response => {
        store.commit('setTopFives', response.data[0].acf['5_fav_colors'])
      })
  },
  components: {
    ChooseColor,
  },
}
</script>
