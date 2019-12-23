<template>
  <img
    class="img-fluid error-img"
    :src="blogData.banner"
    alt="backgroup_image_404"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['blogData']),
  },
}
</script>

<style lang="stylus" scoped>
.error-img {
  width: 100%;
}
</style>
