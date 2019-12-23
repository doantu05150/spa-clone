<template>
  <div class="app">
    <div class="service">
      <olaplex />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Olaplex from '~/components/PageService/olaplex'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=olaplex')
      .then(response => {
        store.commit('setOlaplexData', response.data[0].acf)
      })
  },
  components: {
    Olaplex,
  },
}
</script>
