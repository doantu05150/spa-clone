<template>
  <div>
    <tan-cang />
  </div>
</template>
<script>
import { TanCang } from '~/components'
import axios from 'axios'
export default {
  layout: 'contact',
  fetch({ store }) {
    return axios
      .get('https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=contact')
      .then(response => {
        store.commit('setContactData', response.data[0].acf)
      })
  },
  components: {
    TanCang,
  },
}
</script>
