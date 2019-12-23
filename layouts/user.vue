<template>
  <div class="app">
    <top-menu />
    <navbar />
    <div class="user-page">
      <b-row>
        <b-col cols="3"><user-sidebar :path="fullPath"/></b-col>
        <b-col cols="9">
          <b-row>
            <b-col><user-infor :page="page"/></b-col>
          </b-row>
          <nuxt></nuxt>
        </b-col>
      </b-row>
    </div>
    <copyright />
  </div>
</template>
<script>
import {
  TopMenu,
  Navbar,
  Copyright,
  UserSidebar,
  UserInfor,
} from '~/components'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    UserSidebar,
    UserInfor,
  },
  computed: {
    page() {
      return this.$route.fullPath.split('/')[2]
    },
    fullPath() {
      if (this.$route.fullPath === '/user') {
        return '/user/wallet'
      } else {
        return this.$route.fullPath
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.user-page {
  background-color: #f8f8f8;
  padding: 50px;
}
</style>
