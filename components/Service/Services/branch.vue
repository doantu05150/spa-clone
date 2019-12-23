<template>
  <div class="app" style="overflow-x: hidden">
    <top-menu />
    <navbar />
    <menu-list :title="branch" :type="type" />
    <copyright id="footer" />
  </div>
</template>

<script>
import { TopMenu, Navbar, Copyright } from '~/components'
import MenuList from '~/components/Service/Services/menu'

export default {
  props: {
    branch: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'hair',
    },
  },
  components: {
    TopMenu,
    Navbar,
    Copyright,
    MenuList,
  },
}
</script>
