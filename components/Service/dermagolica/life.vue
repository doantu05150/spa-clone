<template>
  <div class="calendar">
    <b-container>
      <b-row>
        <b-col sm="8" offset-sm="2" class="text-center">
          <div class="wrap-button">
            <b-button class="weight-600" variant="info">
              Bạn đã sẵn sàng để <br />
              Trải nghiệm tại Eforea?
            </b-button>
          </div>
          <div class="quote-wrap text-header-section">
            <span style="white-space: pre-line">{{
              dermagolicaData.quote
            }}</span>
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
    ...mapGetters(['dermagolicaData']),
  },
}
</script>

<style lang="stylus" scoped>
.calendar {
  margin-top: 30px;
}

.wrap-button {
  margin-bottom: 20px;

  .weight-600 {
    font-size: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }
}

.text-header-section {
  margin-top: 80px;
  margin-bottom: 100px;
}

p {
  font-size: 18px;
}
</style>
