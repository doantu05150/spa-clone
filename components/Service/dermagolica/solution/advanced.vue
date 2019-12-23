<template>
  <div class="advanced">
    <b-container>
      <b-row>
        <b-col lg="5" md="12">
          <div class="wrapper-content">
            <p class="wc-title">{{ dermagolicaData.paragraph_3[1].title }}</p>
            <p style="white-space: pre-line">
              {{ dermagolicaData.paragraph_3[1].content }}
            </p>
          </div>
          <h1 class="number">2</h1>
        </b-col>
        <b-col lg="7" md="12">
          <div class="solution-dermalogica">
            <img
              class="img-fluid"
              :src="dermagolicaData.paragraph_3[1].image.url"
            />
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
.advanced {
  margin-top: 30px;
  margin-bottom: 30px;
}

.wrapper-content {
  font-size: 17px;
  margin-top: 20px;

  .wc-title {
    text-transform: uppercase;
    font-weight: bold;
  }
}

.number {
  font-size: 250px;
  color: #76ccdd;
  position: absolute;
  top: 200px;
  right: -75px;
  z-index: 10;
  display: block;
}

@media (max-width: 1200px) {
  .wrapper-content {
    font-size: 15px;
  }

  .number {
    font-size: 200px;
    top: 180px;
    right: -75px;
  }
}

@media (max-width: 990px) {
  .number {
    display: none !important;
  }
}
</style>
