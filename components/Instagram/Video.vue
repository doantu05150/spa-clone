<template>
  <b-container>
    <b-row>
      <b-col md="6" offset-md="3" sm="8" offset-sm="2" class="text-center">
        <iframe :src="homeData.video" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['homeData']),
  },
}
</script>

<style lang="stylus" scoped>
iframe
  border none
  width 100%
  min-height 300px
</style>
