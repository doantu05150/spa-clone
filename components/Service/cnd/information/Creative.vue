<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="6" class="vinylux-right">
          <div>
            <img
              class="img-fluid error-img"
              :src="CNDData.paragraph_3_image"
              alt="backgroup_image_404"
            />
          </div>
        </b-col>
        <b-col md="6" class="text-center vinylux-left">
          <div class="wrap-vinylux">
            <p>CÔNG THỨC MỚI</p>
            <p>HIỆU QUẢ HƠN</p>
            <p>Đẹp tự nhiên không cần son nền</p>
            <p class="fixed-wrap">MÀU ĐẸP HƠN</p>
            <p>BÁM DÍNH LÂU HƠN</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <div class="wrap-botton">
            <p class="vinylux-title">{{ CNDData.paragraph_4_title }}</p>
            <p class="vinylux-content">{{ CNDData.paragraph_4_content }}</p>
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
  background-color #fff4f5
  padding-left 0
  padding-right 0
.wrap-vinylux
  padding 180px 0
  p
   margin-bottom 0
   font-size 22px
   line-height 1.25
   font-weight 200
.fixed-wrap
  margin-top 30px
.vinylux-right
  padding-right 0
  .error-img
    width 100%
.wrap-botton
  margin-top 15px
  .vinylux-title
    font-size 18px
    font-weight bold
  .vinylux-content
    font-size 18px
@media (max-width 567px)
  .vinylux-right
    padding-left 0px
    padding-right 0px
</style>
