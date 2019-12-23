<template>
  <b-row class="pb-5" v-if="current">
    <b-col md="6">
      <div class="img-wrapper">
        <img
          :src="`/images/color/nail-color/color_${skin}.jpg`"
          class="img-fluid hand"
        />
        <div
          v-if="current.color"
          class="img-fluid nail-mark"
          :style="
            `background: ${getBackground(current)}; mask-image: url(${getMask})`
          "
        />
        <div
          v-else
          class="img-fluid nail-mark"
          :style="
            `background: url(${getBackground(
              current,
            )}); background-size: 7.25rem 7.25rem; mask-image: url(${getMask})`
          "
        />
        <img
          :src="`/images/color/${this.long}/nail-highlight.png`"
          class="img-fluid highlight"
        />
      </div>
    </b-col>
    <b-col md="6">
      <div class="current mb-4 px-5">
        <div class="img-color mr-4">
          <div
            v-if="current.color"
            class="current-color"
            :style="`background: ${getBackground(current)}`"
          />
          <div
            v-else
            class="current-color"
            :style="
              `background: url(${getBackground(
                current,
              )}); background-size: cover`
            "
          />
        </div>
        <div class="color-info pt-3">
          <div class="branch color-primary mb-3">{{ current.type }}</div>
          <div class="name">{{ current.name }}</div>
        </div>
      </div>
      <div class="list-colors mb-5">
        <b-row class="row-custom">
          <b-col
            class="col-custom"
            v-for="(color, id) in getSlide(indexOfSlide)"
            :key="id"
          >
            <button
              v-if="color.color"
              class="btn-custom"
              :style="`background: ${getBackground(color)}`"
              @click="setCurrent(color)"
            />
            <button
              v-else
              class="btn-custom"
              :style="
                `background: url(${getBackground(
                  color,
                )}); background-size: cover`
              "
              @click="setCurrent(color)"
            />
          </b-col>
        </b-row>
        <div class="button-slide-group">
          <div class="button-backward">
            <i @click="slide(-1)" class="icon-arrow-left"></i>
          </div>
          <div class="button-forward">
            <i @click="slide(1)" class="icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="booking-button">
        <b-btn size="lg" variant="info">
          <div class="adx-text">Đặt lịch hẹn với eforea</div>
        </b-btn>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import chuck from 'lodash.chunk'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      indexOfSlide: 0,
    }
  },
  props: {
    skin: {
      type: Number,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['current']),
    getMask() {
      // eslint-disable-next-line
      return `/images/color/${this.long}/nail-color-mask.png`
    },
  },
  methods: {
    ...mapMutations(['setCurrent']),
    getBackground(value) {
      if (value.color && value.color.startsWith('#')) return value.color
      if (value.image.startsWith('http')) return value.image
      // eslint-disable-next-line
      return `/colors/${value.image}`
    },
    getSlide(index) {
      return chuck(this.colors, 16)[index]
    },
    slide(value) {
      this.indexOfSlide += value
      if (this.indexOfSlide > chuck(this.colors, 16).length - 1) {
        this.indexOfSlide = 0
      } else if (this.indexOfSlide < 0) {
        this.indexOfSlide = chuck(this.colors, 16).length - 1
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.current
  width 100%
  display flex
  .img-color
    .current-color
      width 180px
      height 180px
      border-radius 50%
      position relative
      box-shadow 0 0 10px rgba(0, 0, 0, 0.2)
      &::after
        content ""
        background url('/images/color/highlight.png')
        padding 49%
        background-size contain
        width 100%
        height 100%
        position absolute
        top 0
        left 0
  .color-info
    font-size 22px
    line-height 1.2
    .branch
      text-transform uppercase
      font-weight 500
    .name
      font-weight 500
      word-break break-word
    .paint, .number
      font-weight 300
.booking-button
  text-align center
  .adx-text
    padding 10px 36px
.list-colors
  padding 0 40px
  position relative
  width 100%

  .button-slide-group
    position absolute
    left 0
    width 100%
    top 42%
    display flex
    justify-content space-between
    z-index 1

    i
      cursor pointer

.img-wrapper
  position relative

  .highlight
    position absolute
    top 0
    left 0

  .nail-mark
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    mask-image url('/images/color/nail-color-mark.png')
    mask-size 100%

.row-custom
  position relative
  font-size 1.6rem
  flex 0 1 auto
  z-index 2

  .col-custom
    flex 0 0 12.5%
    max-width 12.5%
    padding 4px 6px
    order 0

    .btn-custom
      border-radius 50%
      position relative
      border none
      padding 49%
      box-shadow 0px 0px 12px rgba(0, 0, 0, 0.3)
      outline 0
      cursor pointer
      &::after
        content ""
        background url('/images/color/highlight.png')
        padding 49%
        background-size contain
        width 100%
        height 100%
        position absolute
        top 0
        left 0
</style>
