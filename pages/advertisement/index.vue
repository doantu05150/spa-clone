<template>
  <div class="about-us" style="overflow-x: hidden">
    <top-menu />
    <navbar /> <advertisement /> <copyright />
  </div>
</template>
<script>
import { TopMenu, Navbar, Copyright, Advertisement } from '~/components'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    Advertisement,
  },
}
</script>
