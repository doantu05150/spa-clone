<template>
  <div>
    <map-tancang />
    <image-tan-cang />
    <time-tan-cang />
  </div>
</template>
<script>
import MapTancang from './MapTancang'
import ImageTanCang from './ImageTC'
import TimeTanCang from './TimeTanCang'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['contactData']),
  },
  components: {
    MapTancang,
    ImageTanCang,
    TimeTanCang,
  },
}
</script>
