<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="6" class="text-center vinylux-left">
          <div class="wrap-vinylux">
            <p>65+ MÀU SƠN</p>
            <p>14 BỀN MÀU</p>
            <p>3 BƯỚC ĐẸP HOÀN HẢO</p>
          </div>
        </b-col>
        <b-col md="6" class="vinylux-right">
          <div>
            <img
              class="img-fluid error-img"
              :src="CNDData.paragraph_4_image"
              alt="backgroup_image_404"
            />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <div class="wrap-botton">
            <p class="vinylux-title" style="white-space: pre-line">
              {{ CNDData.paragraph_5_first }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
.vinylux-left
  background-color #ffedf2
  padding-left 0
  padding-right 0
.wrap-vinylux
  padding 235px 0
  p
    margin-bottom 0
    font-size 22px
    line-height 1.25
    font-weight 200
.fixed-wrap
  margin-top 30px
.vinylux-right
  padding-left 0
  .error-img
    width 100%
.wrap-botton
  margin-top 15px
  .vinylux-title
    font-size 18px
  .vinylux-content
    font-size 18px
@media (max-width 567px)
  .vinylux-right
    padding-left 0px
    padding-right 0px
</style>
