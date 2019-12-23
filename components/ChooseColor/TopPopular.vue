<template>
  <div class="top-popular">
    <b-container>
      <b-row>
        <b-col class="text" md="6">
          <h2 class="color-primary">5 màu sơn được ưa thích</h2>
        </b-col>
        <b-col md="6">
          <b-row>
            <b-col
              class="item-popular"
              v-for="(color, index) in topFives"
              :key="index"
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['topFives']),
  },
  methods: {
    ...mapMutations(['setCurrent']),
    getBackground(value) {
      if (value.color && value.color.startsWith('#')) return value.color
      // eslint-disable-next-line
      return value.image
    },
  },
}
</script>

<style lang="stylus" scoped>
.top-popular
  background #fff
  padding-top 20px
  padding-bottom 20px
  .text
    display flex
    align-items center
    justify-content flex-end
    padding-right 3%
.item-popular
  padding 0 9px

.btn-custom
  border-radius 50%
  position relative
  border none
  outline 0
  cursor pointer
  height 96px
  width 96px
  box-shadow 0px 0px 12px rgba(0, 0, 0, 0.3)
  &::after
    content ""
    background url('/images/color/highlight.png')
    background-size contain
    width 100%
    height 100%
    position absolute
    top 0
    left 0
</style>
