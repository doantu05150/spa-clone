<template>
  <section>
    <div class="title-cnd">
      <h4>Chăm sóc móng</h4>
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2" class="text-center">
            <div class="trademake">
              <h3 class="wrap-trademake">{{ CNDData.title }}</h3>
              <p v-html="CNDData.paragraph_1_first"></p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="10" offset-md="1" class="text-center">
            <div><img class="img-fluid error-img" :src="CNDData.image" /></div>
            <h3 class="imt-title">{{ CNDData.image_description }}</h3>
            <div class="wrap-trademake-content">
              <p>{{ CNDData.paragraph_1_second }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
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
.title-cnd
  text-align center
  margin-bottom 30px
  margin-top 45px
  h4
    font-size 48px
    color #76ccdd
.trademake
  .wrap-trademake
    font-size 36px
    font-weight bold
  p
    font-size 17px
    span
      font-weight bold
.error-img
  width 100%
.imt-title
  font-size 18px
  color #bdbdbd
  margin-top 10px
.wrap-trademake-content
  margin-right 95px
  margin-left 95px
  margin-top 15px
  p
    font-size 18px
</style>
