<template>
  <section>
    <information /> <solution /> <advanced /> <optimal /> <introduce /> <life />
  </section>
</template>

<script>
import information from './information/information'
import Solution from './solution/Solution'
import Advanced from './solution/advanced'
import Optimal from './solution/optimal'
import introduce from './introduce'
import life from './life'

export default {
  components: {
    information,
    Solution,
    Advanced,
    Optimal,
    introduce,
    life,
  },
}
</script>
