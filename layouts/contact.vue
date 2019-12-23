<template>
  <div class="app">
    <top-menu />
    <navbar />
    <div class="user-page mt-5">
      <b-container>
        <b-row>
          <b-col cols="4"><contact-sidebar :path="fullPath"/></b-col>
          <b-col cols="8">
            <nuxt></nuxt>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <copyright />
  </div>
</template>
<script>
import { TopMenu, Navbar, Copyright, ContactSidebar } from '~/components'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    ContactSidebar,
  },
  computed: {
    page() {
      return this.$route.fullPath.split('/')[2]
    },
    fullPath() {
      if (this.$route.fullPath === '/contact') {
        return '/contact/tan-cang'
      } else {
        return this.$route.fullPath
      }
    },
  },
}
</script>
<style lang="stylus" scoped></style>
