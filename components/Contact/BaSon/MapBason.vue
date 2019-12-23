<template>
  <div>
    <h3>
      <no-ssr>
        <iframe
          :src="contactData.map[1].index"
          width="100%"
          height="300"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </no-ssr>
    </h3>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['contactData']),
  },
}
</script>
