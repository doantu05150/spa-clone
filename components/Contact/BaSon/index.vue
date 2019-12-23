<template>
  <div>
    <map-bason />
    <imagine />
    <content-time />
  </div>
</template>
<script>
import MapBason from './MapBason'
import Imagine from './ImageBS'
import ContentTime from './ContentTime'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['contactData']),
  },
  components: {
    MapBason,
    Imagine,
    ContentTime,
  },
}
</script>
