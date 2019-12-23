<template>
  <div>
    <dermagolical />
  </div>
</template>

<script>
import axios from 'axios'
import Dermagolical from '../../components/Service/dermagolica/index'

export default {
  layout: 'service',
  fetch({ store }) {
    return axios
      .get(
        'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=dermagolica',
      )
      .then(response => {
        store.commit('setDermagolicaData', response.data[0].acf)
      })
  },
  components: {
    Dermagolical,
  },
}
</script>
