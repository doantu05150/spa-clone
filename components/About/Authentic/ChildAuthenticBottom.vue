<template>
  <b-row>
    <b-col md="6" offset="md-3">
      <p class="text-center weight-300">
        {{
          $i18n.locale === 'vi'
            ? aboutData.paragraph_5.content_2
            : aboutData.paragraph_5.content_2_en
        }}
      </p>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['aboutData']),
  },
}
</script>

<style lang="stylus" scoped>
p {
  margin-top: 30px;
  margin-bottom: 50px;
}

@media (max-width: 576px) {
  p {
    font-size: 12px;
    margin-bottom: 10px;
  }
}
</style>
