<template>
  <div class="app">
    <top-menu />
    <navbar />
    <img class="banner" :src="banner.banner" />
    <b-container>
      <div class="service-page  mt-3">
        <b-row>
          <b-col cols="3">
            <service-sidebar :path="fullPath" />
          </b-col>
          <b-col cols="9">
            <nuxt></nuxt>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <copyright />
  </div>
</template>
<script>
import { TopMenu, Navbar, Copyright, ServiceSidebar } from '~/components'
import { mapGetters } from 'vuex'
export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    ServiceSidebar,
  },
  computed: {
    ...mapGetters([
      'kerastaseData',
      'olaplexData',
      'OPIData',
      'doTerraData',
      'goldwellData',
      'dermagolicaData',
      'CNDData',
    ]),
    page() {
      return this.$route.fullPath.split('/')[2]
    },
    fullPath() {
      if (this.$route.fullPath === '/service') {
        return '/service'
      } else {
        return this.$route.fullPath
      }
    },
    banner() {
      if (this.$route.fullPath === '/service/kerastase')
        return this.kerastaseData
      else if (this.$route.fullPath === '/service/goldwell')
        return this.goldwellData
      else if (this.$route.fullPath === '/service/opi') return this.OPIData
      else if (this.$route.fullPath === '/service/doTerra')
        return this.doTerraData
      else if (this.$route.fullPath === '/service/olaplex')
        return this.olaplexData
      else if (this.$route.fullPath === '/service/dermagolica')
        return this.dermagolicaData
      return ''
    },
  },
}
</script>
<style lang="stylus" scoped>
.banner {
  width: 100%;
}
</style>
