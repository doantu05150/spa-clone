<template>
  <b-row align-h="center" class="text-center">
    <b-col class="child">
      <b-card-group columns>
        <b-card v-for="(item, index) in giftUser" :key="index">
          <div>
            <div class="title-card">Quà tặng</div>
            <div class="content-card">{{ item.treatment }}</div>
            <div class="count">
              <div class="count-uses">
                <div class="name-count">Số lần tặng</div>
                <div class="count">{{ item.times }}</div>
              </div>
              <div class="count-uses">
                <div class="name-count">Số lần tặng còn lại</div>
                <div class="count">{{ item.remain_time }}</div>
              </div>
            </div>
          </div>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          title: 'Quà tặng',
          content: 'Sơn móng tay tại Eforea',
          uses: 6,
          avaiable: 66544,
        },
        {
          title: 'Quà tặng',
          content: 'Sơn móng tay tại Eforea',
          uses: 6,
          avaiable: 66544,
        },
        {
          title: 'Quà tặng',
          content: 'Sơn móng tay tại Eforea',
          uses: 6,
          avaiable: 66544,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['giftUser']),
  },
}
</script>

<style lang="stylus" scoped>
.child
  align-self center

  .card
    background-color #fff
    padding 25px
    border 0px
    border-radius 7px
    box-shadow 0px 2px 4px #e0deda

  .title-card
    font-size 20px
    line-height 36px
    color #000000
    font-weight 300
    text-align center

  .content-card
    padding-top 1em
    padding-left 2rem
    padding-right 2rem
    line-height 1.2
    font-size 40px
    color #79cdde
    font-family "Playfair Display"
    font-weight 700
    font-style italic
    text-align center

  .count
    display flex
    justify-content center
    align-self  center
    width 100%

    .count-uses
      padding-top 3em
      width 100%

      .name-count
        font-size 14px
        color #000000
        font-weight 300

      .count
        font-size 20px
        color #79cdde
        font-weight 700
</style>
