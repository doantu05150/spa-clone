<template>
  <event />
</template>

<script>
import axios from 'axios'
import Event from '~/components/Event'
export default {
  layout: 'user',
  middleware: 'authenticated',
  components: {
    Event,
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
    const giftUser = await axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/treatments/user/${
        store.getters.auth.id
      }`,
      headers: {
        'X-API-LINK': `${store.getters.auth.api_link}`,
      },
    })
    await store.commit('setGiftUser', giftUser.data.data)
    console.log('dizzz', giftUser.data.data)
  },
}
</script>
