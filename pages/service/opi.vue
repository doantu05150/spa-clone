<template>
  <div class="app">
    <div class="service-page">
      <opi />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Opi from '~/components/Service/opi/index'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=opi')
      .then(response => {
        store.commit('setOPIData', response.data[0].acf)
      })
  },
  components: {
    Opi,
  },
}
</script>
