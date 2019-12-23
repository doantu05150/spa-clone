<template>
  <div
    @mouseout="onMouseOut"
    @mouseover="onMouseOver"
    :class="[
      'dropdown',
      {
        show,
      },
    ]"
  >
    <button @click="openSelectBox" class="dropbtn">
      {{ value }}
      <div class="icon-box"></div>
    </button>
    <div class="dropdown-content">
      <a
        class="sub-dropdown-border"
        v-for="(option, id) in localOptions"
        :key="id"
        @click="selectValue(option.value)"
        >{{ option.text }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      horizontal: true,
      value: 'Tất cả',
    }
  },
  model: {
    prop: 'selected',
    event: 'onSelect',
  },
  props: {
    selected: Number,
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    localOptions() {
      return [{ value: -1, text: 'Tất cả' }, ...this.options]
    },
  },
  methods: {
    onMouseOut() {
      this.show = false
    },
    onMouseOver() {
      this.show = true
    },
    openSelectBox() {
      this.show = !this.show
    },
    selectValue(id) {
      const index = this.localOptions.findIndex(option => option.value === id)
      this.value = this.localOptions[index].text
      this.show = !this.show
      this.$emit('onSelect', id)
    },
  },
}
</script>

<style lang="stylus" scoped>
.dropdown
  position relative
  display inline-block
  width 100%
  font-family 'Roboto', sans-serif
  .dropdown-content
    opacity 0
    position absolute
    width 100%
    z-index 1
    transition all 0.2s ease-in-out
    a
      display block
      padding 6px 16px
      text-decoration none
      color #000
    .sub-dropdown-border
      background #fff
      border-bottom 1px solid #6c757d
      border-left 1px solid #6c757d
      border-right 1px solid #6c757d
      overflow hidden
      cursor pointer
  .dropbtn
    background-color #fff
    color #000
    padding 6px 16px
    width 100%
    border 1px solid #6c757d
    border-radius .25rem
    font-size 16px
    cursor pointer
    text-align left
    display flex
    outline 0
  .icon-box
    margin-left auto
    background-image url("/images/icon-select-horizontal.png")
    width 16px
    height 24px
    background-repeat no-repeat
    background-position center
    transition all 0.15s ease-in-out
  &.show
    .dropdown-content
      opacity 1
    .dropbtn
      border-bottom-left-radius 0
      border-bottom-right-radius 0
    .sub-dropdown-border:last-child
      border-bottom-left-radius .25rem
      border-bottom-right-radius .25rem
    .icon-box
      transform rotate(90deg)
</style>
