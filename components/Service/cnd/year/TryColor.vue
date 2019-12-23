<template>
  <b-container>
    <b-row>
      <b-col md="8" offset-md="2" class="text-center">
        <div class="wrap-button">
          <b-button class="weight-600 px-5" variant="info">
            Thử màu sơn
          </b-button>
        </div>
        <p class="wrap-title">{{ CNDData.paragraph_2_title }}</p>
        <p style="white-space: pre-line">{{ CNDData.paragraph_2_content }}</p>
      </b-col>
    </b-row>
  </b-container>
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
.wrap-button
  margin-bottom 25px
.wrap-title
  font-weight 600
  font-size 18px
p
  font-size 16px
</style>
