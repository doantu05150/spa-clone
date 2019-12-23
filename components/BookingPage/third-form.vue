<template>
  <div class="third-form">
    <div class="form-data">
      <b-row class="pb-3 header">
        <b-col cols="6">
          <div class="title">Nhuộm & nhuộm highlights</div>
          <div class="subtitle">/ Color and Highlights</div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div class="title">Ngắn</div>
          <div class="subtitle">Short</div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div class="title">Trung bình</div>
          <div class="subtitle">Medium</div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div class="title">Dài</div>
          <div class="subtitle">Long</div>
        </b-col>
      </b-row>
      <b-row
        class="record mt-1"
        v-for="(service, index) in services"
        :key="`service_${index}`"
        :style="service.selected && { background: '#ffffff' }"
        @click="service.selected = !service.selected"
      >
        <b-col cols="6" class="d-flex">
          <div class="checkbox">
            <div class="checkbox-inside" v-if="service.selected" />
          </div>
          <div>
            <div class="name">{{ service.name }}</div>
            <div class="subname">{{ service.subName }}</div>
          </div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div>{{ service.short }}</div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div>{{ service.medium }}</div>
        </b-col>
        <b-col cols="2" class="text-center">
          <div>{{ service.long }}</div>
        </b-col>
      </b-row>
    </div>
    <div class="form-addition">
      <div class="info">
        <div>
          Bạn đã chọn<br /><b>{{ numberSelected }} DỊCH VỤ</b>
        </div>
        <div class="mt-3">Danh mục<br /><b>CHĂM SÓC TÓC</b></div>
      </div>
      <div class="next-step" @click="$emit('nextStep')">
        <div>BƯỚC<br />TIẾP<br />THEO</div>
        <img src="/images/arrow.png" class="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          name: 'Nhuộm một màu(*)',
          subName: 'Single process color(*)',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Tẩy tóc',
          subName: 'Bleach',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Nhuộm vật lý elumen goldwell(*)',
          subName: 'Color and goldwell elumen(*)',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Nhuộm highlights(*)',
          subName: 'Highlight(*)',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Nhuộm chân tóc(*)',
          subName: 'Root color(*)',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Phủ bóng goldwell',
          subName: 'Coating and Goldwell',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
        {
          name: 'Phủ bóng goldwell elumen',
          subName: 'Coating and Goldwell elumen',
          short: '1.400.000',
          medium: '1.700.000',
          long: '1.900.000',
          selected: false,
        },
      ],
    }
  },
  computed: {
    numberSelected() {
      return this.services.filter(service => service.selected).length
    },
  },
}
</script>
<style lang="stylus" scoped>
.row
  margin-left 0 !important
  margin-right 0 !important
  padding 0.5rem 1rem 0

.col-6,
.col-2
  padding-left 0 !important
  padding-right 0 !important

.third-form
  display flex
  font-size 1.15rem

  .form-data
    width 85%
    border-right 0.3rem solid #cccccc

    .header
      border-right 0.3rem solid #959699
      margin 0 -0.3rem !important

      .title
        font-family 'Playfair Display', serif
        text-transform uppercase
        font-weight bold
        font-size 1.2rem

      .subtitle
        font-family 'Playfair Display', serif
        font-style italic
        line-height 1
        font-size 1.2rem

    .record
      .name
        font-weight bold
        text-transform uppercase

      .subname
        font-style italic
        line-height 1
        font-weight 400
        font-size 0.95rem

      .checkbox
        width 1rem
        height 1rem
        border-radius 50%
        border 0.1rem solid #7ecfdf
        margin 0.3rem 0.5rem 0 0
        cursor pointer

        .checkbox-inside
          width 100%
          height 100%
          border-radius 50%
          border 0.1rem solid #ffffff
          background-color #7ecfdf

      &:hover
        background-color #ffffff

  .form-addition
    width 15%
    position relative
    display flex
    align-items flex-end
    justify-content flex-end

    .info
      line-height 1.15
      position absolute
      top 0
      left 1rem
      right 0

    .next-step
      text-align right
      display flex
      align-items center
      font-weight 300
      line-height 1.2
      cursor pointer

      .arrow
        padding-left 1rem
</style>
