<template>
  <b-row class="mt-5"> <user /> </b-row>
</template>

<script>
import axios from 'axios'
import { User } from '~/components'
export default {
  layout: 'user',
  middleware: 'authenticated',
  components: {
    User,
  },
  async fetch({ store }) {
    const resultInfo = await axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/users/profile/${
        store.getters.auth.id
      }`,
      headers: {
        'X-API-LINK': `${store.getters.auth.api_link}`,
      },
    })
    await store.commit('setInfoUserData', resultInfo.data.data)
    const result = await axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/users/available_money/${
        store.getters.auth.id
      }`,
      headers: {
        'X-API-LINK': `${store.getters.auth.api_link}`,
      },
    })
    await store.commit('setAvailableMoneyData', result.data.data)

    const resultOrderHistory = await axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/orders/list/phone/${
        store.getters.auth.telephone
      }`,
      headers: {
        'X-API-LINK': `${store.getters.auth.api_link}`,
      },
    })
    await store.commit('setOrderHistory', resultOrderHistory.data.data)

    const resultListService = await axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/services/list/`,
      headers: {
        'X-API-LINK': `${store.getters.auth.api_link}`,
      },
    })
    await store.commit('setListService', resultListService.data.data)
  },
}
</script>

<style lang="stylus" scoped>
.demo-col {
  background: #ffffff;
  box-shadow: 2px 2px 4px 3px #ebebeb;
  border-radius: 7px;
  height: 600px;
}
</style>
