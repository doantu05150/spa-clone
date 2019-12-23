<template>
  <div class="authentic">
    <div><child-authentic-top /></div>
    <b-container> <child-authentic /> </b-container>
    <div><child-authentic-bottom /></div>
  </div>
</template>
<script>
import ChildAuthentic from './Authentic/ChildAuthentic'
import ChildAuthenticTop from './Authentic/ChildAuthenticTop'
import ChildAuthenticBottom from './Authentic/ChildAuthenticBottom'

export default {
  components: {
    ChildAuthentic,
    ChildAuthenticTop,
    ChildAuthenticBottom,
  },
}
</script>
<style lang="stylus" scoped>
.authentic
  margin 30px 0 20px 0

@media (max-width: 400px)
  .text-center
    margin-top -25px
    margin-bottom -25px
</style>
