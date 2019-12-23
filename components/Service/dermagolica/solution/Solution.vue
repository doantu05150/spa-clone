<template>
  <section>
    <div class="solution-title">
      <h4>{{ dermagolicaData.title_2 }}</h4>
    </div>
    <b-container>
      <b-row align-h="center">
        <b-col lg="6" md="12" sm="12">
          <div class="solution-dermalogica">
            <img
              class="img-fluid"
              :src="dermagolicaData.paragraph_3[0].image.url"
            />
          </div>
        </b-col>
        <b-col lg="4" md="12" sm="12">
          <div class="wrapper-solution">
            <h1>1</h1>
            <div class="wrapper-content">
              <p class="wc-title">{{ dermagolicaData.paragraph_3[0].title }}</p>
              <p style="white-space: pre-line">
                {{ dermagolicaData.paragraph_3[0].content }}
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
.solution-title {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }
}

.solution-dermalogica {
  position: relative;
}

.wrapper-solution {
  h1 {
    font-size: 250px;
    color: #76ccdd;
    position: absolute;
    top: -81px;
    left: -60px;
    display: block;
  }
}

.wrapper-content {
  font-size: 17px;
  margin-top: 220px;

  .wc-title {
    text-transform: uppercase;
    font-weight: bold;
  }
}

@media (max-width: 1200px) {
  .wrapper-content {
    font-size: 17px;
    margin-top: 220px;

    p {
      font-size: 14px;
    }
  }
}

@media (max-width: 992px) {
  .solution-dermalogica {
    text-align: center;
  }

  .wrapper-solution {
    h1 {
      display: none;
    }
  }

  .wrapper-content {
    margin-top: 20px;
  }
}
</style>
