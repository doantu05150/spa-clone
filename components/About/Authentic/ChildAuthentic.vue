<template>
  <b-row align-h="center" class="text-center">
    <b-col
      md="3"
      cols="3"
      class="child-auth"
      v-for="(item, index) in aboutData.images"
      :key="index"
    >
      <div class="child-aut-img">
        <img class="img-fluid" :src="item.image.url" />
      </div>
    </b-col>
  </b-row>
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
.child-auth
  align-self center

  .child-aut-img
    margin-top 20px
</style>
