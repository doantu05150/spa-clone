<template>
  <div class="app">
    <div>
      <top-menu />
      <navbar /> <banner /> <copyright />
    </div>
  </div>
</template>

<script>
import { TopMenu, Navbar, Copyright } from '~/components'
import Banner from '~/components/ChooseColor/Banner'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    Banner,
  },
}
</script>
