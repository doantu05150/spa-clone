<template>
  <div>
    <top-menu />
    <navbar />
    <program />
    <copyright />
  </div>
</template>
<script>
import { TopMenu, Navbar, Copyright, Program } from '~/components'
export default {
  components: {
    TopMenu,
    Navbar,
    Program,
    Copyright,
  },
}
</script>
