<template>
  <div class="service" style="overflow-x: hidden">
    <kerastase />
  </div>
</template>
<script>
import axios from 'axios'
import { Kerastase } from '~/components'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=kerastase')
      .then(response => {
        store.commit('setKerastaseData', response.data[0].acf)
      })
  },
  components: {
    Kerastase,
  },
}
</script>
