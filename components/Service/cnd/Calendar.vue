<template>
  <div class="calendar">
    <b-container>
      <b-row>
        <b-col sm="8" offset-sm="2" class="text-center">
          <div class="wrap-button">
            <b-button class="weight-600" variant="info">
              Đặt lịch hẹn với Eforea <br />
              để có bộ móng hoàn hảo nhất
            </b-button>
          </div>
          <p>{{ CNDData.paragraph_5_second }}</p>
          <div class="quote-wrap text-header-section">
            <span style="white-space: pre-line">{{ CNDData.quote }}</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['CNDData']),
  },
}
</script>

<style lang="stylus" scoped>
.calendar
  margin-top 30px
.wrap-button
  margin-bottom 20px
  .weight-600
    font-size 15px
.text-header-section
  margin-top 80px
  margin-bottom 100px
p
  font-size 18px
</style>
