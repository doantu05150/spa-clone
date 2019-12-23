<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="6" class="text-center vinylux-left">
          <div class="wrap-vinylux">
            <p>5 ĐỘT PHÁ</p>
            <p>Sơn bền màu hơn 14 ngày</p>
            <p>Độ bóng long lanh</p>
            <p>Khô sơn tức thì</p>
            <p>Dễ dàng xóa bỏ</p>
            <p>Không làm hại móng</p>
            <p class="fixed-wrap">7 KHÔNG</p>
            <p>Không acid citric</p>
            <p>Không formaldehyde</p>
            <p>Không toluene</p>
            <p>Không DBP</p>
            <p>Không formaldehyde resin</p>
            <p>Không camphor</p>
            <p>Không xylene/ parabens</p>
          </div>
        </b-col>
        <b-col md="6" class="vinylux-right">
          <div>
            <img
              class="img-fluid error-img"
              :src="CNDData.paragraph_2_image"
              alt="backgroup_image_404"
            />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <div class="wrap-botton">
            <p class="vinylux-title">{{ CNDData.paragraph_3_title }}</p>
            <p class="vinylux-content">{{ CNDData.paragraph_3_content }}</p>
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
  background-color #e9fbff
  padding-left 0
  padding-right 0
.wrap-vinylux
  padding 70px 0
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
    font-weight bold
  .vinylux-content
    font-size 18px
@media (max-width 567px)
  .vinylux-right
    padding-left 0px
    padding-right 0px
</style>
