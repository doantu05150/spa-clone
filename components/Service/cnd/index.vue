<template>
  <section class="trademake-cnd">
    <trade-make />
    <year /> <information /> <calendar />
  </section>
</template>

<script>
import TradeMake from './trademake/trademake'
import Year from './year/Year'
import Calendar from './Calendar'
import Information from './information/index'

export default {
  components: {
    TradeMake,
    Year,
    Calendar,
    Information,
  },
}
</script>
<style lang="stylus" scoped>
section.trademake-cnd
    background-color #f8f8f8
</style>
