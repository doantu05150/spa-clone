<template>
  <input
    type="range"
    max="5"
    min="1"
    step="1"
    class="slider custom-slide"
    :value="value"
    @change="e => $emit('change', +e.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: ['value'],
}
</script>

<style lang="stylus" scoped>
.slider {
  outline: 0;
  -webkit-appearance: none;
  -moz-apperance: none;
  border-radius: 6px;
  height: 6px;
  background-image: linear-gradient( 90deg, rgb(255,251,232) 0%, rgb(247,148,29) 49%, rgb(28,21,0) 100%);
  box-shadow: 0px 0px 3px #0003;
}
.custom-slide
  flex 1
</style>
