<template>
  <div class="app">
    <div class="service">
      <goldwell />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Goldwell } from '~/components'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=goldwell')
      .then(response => {
        store.commit('setGoldwellData', response.data[0].acf)
      })
  },
  components: {
    Goldwell,
  },
}
</script>
