<template>
  <div class="wrap-user-wallet"><gift /> <history /></div>
</template>

<script>
import Gift from './Gift'
import History from './History'

export default {
  components: {
    Gift,
    History,
  },
}
</script>

<style lang="stylus" scoped>
.wrap-user-wallet
  background-color #f8f8f8
</style>
