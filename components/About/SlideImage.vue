<template>
  <figure class="about-img">
    <img class="img-fluid" :src="aboutData.banner" />
  </figure>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['aboutData']),
  },
}
</script>

<style lang="stylus" scoped>
.about-img
  margin-bottom 20px

  img
    width 100%
</style>
