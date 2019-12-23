<template>
  <div class="app">
    <div class="service">
      <do-terra />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DoTerra from '~/components/PageService/doTerra'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=doTerra')
      .then(response => {
        store.commit('setdoTerraData', response.data[0].acf)
      })
  },
  components: {
    DoTerra,
  },
}
</script>
