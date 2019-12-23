<template>
  <div>
    <cnd />
  </div>
</template>

<script>
import cnd from '~/components/Service/cnd/index'
import axios from 'axios'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=cnd')
      .then(response => {
        store.commit('setCNDData', response.data[0].acf)
      })
  },
  components: {
    cnd,
  },
}
</script>
