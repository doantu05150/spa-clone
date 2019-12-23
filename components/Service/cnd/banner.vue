<template>
  <div>
    <figure>
      <img
        class="img-fluid error-img"
        :src="CNDData.banner"
        alt="backgroup_image_404"
      />
    </figure>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['CNDData']),
  },
}
</script>

<style lang="stylus" scoped>
.error-img
  width 100%
</style>
