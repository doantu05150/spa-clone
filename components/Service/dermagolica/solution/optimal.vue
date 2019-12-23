<template>
  <section>
    <b-container>
      <b-row align-h="center">
        <b-col lg="6" md="12">
          <div class="solution-dermalogica">
            <img
              class="img-fluid"
              :src="dermagolicaData.paragraph_3[2].image.url"
            />
          </div>
        </b-col>
        <b-col lg="4" md="12">
          <div class="wrapper-solution">
            <h1>3</h1>
            <div class="wrapper-content">
              <p class="wc-title">{{ dermagolicaData.paragraph_3[2].title }}</p>
              <p style="white-space: pre-line">
                {{ dermagolicaData.paragraph_3[2].content }}
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
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
.solution-dermalogica {
  position: relative;
}

.wrapper-solution {
  h1 {
    font-size: 250px;
    color: #76ccdd;
    position: absolute;
    top: 370px;
    left: -605px;
    display: none;
  }
}

.wrapper-content {
  font-size: 17px;
  margin-top: 20px;

  .wc-title {
    text-transform: uppercase;
    font-weight: bold;
  }
}

@media (max-width: 1200px) {
  .wrapper-content {
    font-size: 15px;
  }

  .wrapper-solution {
    h1 {
      font-size: 220px;
      color: #76ccdd;
      position: absolute;
      top: 280px;
      left: -510px;
    }
  }
}

@media (max-width: 990px) {
  .solution-dermalogica {
    text-align: center;
  }

  .wrapper-solution, h1 {
    display: block;
  }
}
</style>
