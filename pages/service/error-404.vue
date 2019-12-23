<template>
  <div class="app">
    <div class="unconstrucion">
      <error404 />
    </div>
  </div>
</template>

<script>
import { Error404 } from '~/components'

export default {
  layout: 'service',
  components: {
    Error404,
  },
}
</script>

<style lang="stylus" scoped>
.unconstrucion {
  height: 100vh;
}
</style>
