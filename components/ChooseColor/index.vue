<template>
  <section class="try-color">
    <h1 class="text-center title pt-5">Thử màu sơn</h1>
    <b-container>
      <b-row class="first-form my-4">
        <b-col md="6" lg="4" class="mt-2">
          <div class="search-box">
            <div class="hot-input d-flex">
              <input
                v-model="searchText"
                class="search"
                placeholder="Tìm màu sơn"
                type="text"
              />
              <b-button
                v-if="searchText"
                @click="clearable"
                size="sm"
                class="danger__btn--icon clearable p-0"
                variant="link"
              >
                <i class="fas fa-times"></i>
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="4" class="choose-skin-color mt-2 d-flex">
          <span class="input-title color-primary mr-5">CHỌN MÀU DA</span>
          <range-slider v-model="skin" />
        </b-col>
        <b-col md="6" lg="4" class="length-nail mt-2 d-flex">
          <span class="input-title color-primary ml-4">ĐỘ DÀI MÓNG</span>
          <nail-size v-model="long" />
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col md="3">
          <div class="dropdown-ground">
            <div class="label mb-2">Thương hiệu</div>
            <t-dropdown :options="branch" v-model="branchSelected" />
          </div>
        </b-col>
        <b-col md="3">
          <div class="dropdown-ground">
            <div class="label mb-2">Nhóm màu</div>
            <t-dropdown :options="colorGroup" />
          </div>
        </b-col>
        <b-col md="3">
          <div class="dropdown-ground">
            <div class="label mb-2">Loại sơn</div>
            <t-dropdown :options="paint" />
          </div>
        </b-col>
        <b-col md="3">
          <div class="dropdown-ground">
            <div class="label mb-2">Theo mùa</div>
            <t-dropdown :options="seasonal" />
          </div>
        </b-col>
      </b-row>
      <nail-wrapper :skin="skin" :long="long" :colors="getColor" />
    </b-container>
    <top-popular />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TopPopular from './TopPopular'
import RangeSlider from './RangeSlide'
import NailWrapper from './NailWrapper'
import NailSize from './NailSize'
import TDropdown from './Dropdown'

export default {
  components: {
    TopPopular,
    RangeSlider,
    NailWrapper,
    NailSize,
    TDropdown,
  },
  data() {
    return {
      skin: 1,
      long: 'short',
      branchSelected: -1,
      colorSelected: null,
      paintSelected: null,
      seasonalSelected: null,
      searchText: '',
      branch: [
        {
          value: 1,
          text: 'CND',
        },
        {
          value: 2,
          text: 'OPI',
        },
        {
          value: 3,
          text: 'Chanel',
        },
      ],
      colorGroup: [
        {
          value: 1,
          text: 'Xanh',
        },
        {
          value: 2,
          text: 'Đỏ',
        },
        {
          value: 3,
          text: 'Tím',
        },
        {
          value: 4,
          text: 'Vàng',
        },
        {
          value: 5,
          text: 'Neon',
        },
        {
          value: 6,
          text: 'Pastel',
        },
      ],
      paint: [
        {
          value: 1,
          text: 'Gel',
        },
        {
          value: 2,
          text: 'Thường',
        },
      ],
      seasonal: [
        {
          value: 1,
          text: 'Tết',
        },
        {
          value: 2,
          text: 'Giáng sinh',
        },
        {
          value: 3,
          text: 'Mùa cưới',
        },
      ],
    }
  },
  methods: {
    clearable() {
      this.searchText = ''
    },
  },
  computed: {
    ...mapGetters(['colors']),
    getColor() {
      switch (this.branchSelected) {
        case 1:
          return this.colors.filter(color => color.type === 'cnd')
        case 2:
          return this.colors.filter(color => color.type === 'opi')
        case 3:
          return this.colors.filter(color => color.type === 'chanel')
        default:
          return this.colors
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.try-color
  background #f8f8f8
  padding-bottom 40px
  .title
    color #76ccdd
  .first-form
    .search-box
      width 100%
      display inline-block
      white-space nowrap
      .clearable
        position relative
        right 15px
        i
          color #a9a9a9
      .hot-input
        display inline
        width 100%
        .search
          border none
          width 80%
          border-bottom 1px solid #a9a9a9
          color #a9a9a9
          font-style italic
          font-size 18px
          background url('/images/find-paint-color.png')
          background-repeat no-repeat
          padding-left 25px
          outline none
          text-overflow ellipsis
    .choose-skin-color,
    .length-nail
      align-items center
      justify-content space-between
      h5
        color #76ccdd
.dropdown-ground
  .label
    text-transform uppercase
    font-size 18px

.input-title
  font-size 18px

@media (max-width 768px)
  .input-title
    margin-left 0!important
  .nail-long
    flex 1
    margin-left 54px
</style>
