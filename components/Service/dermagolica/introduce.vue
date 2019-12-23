<template>
  <div class="introduce">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <no-ssr>
            <p
              v-html="dermagolicaData.paragraph_4"
              style="white-space: pre-line"
            ></p>
          </no-ssr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['dermagolicaData']),
  },
}
</script>

<style lang="stylus" scoped>
.introduce {
  margin-top: 40px;
}

p {
  font-size: 16px;
}
</style>
