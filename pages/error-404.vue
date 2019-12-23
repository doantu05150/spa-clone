<template>
  <div class="app">
    <div class="unconstrucion">
      <top-menu />
      <navbar /> <error404 /> <copyright />
    </div>
  </div>
</template>

<script>
import { TopMenu, Navbar, Copyright, Error404 } from '~/components'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    Error404,
  },
}
</script>

<style lang="stylus" scoped>
.unconstrucion {
  height: 100vh;
}
</style>
