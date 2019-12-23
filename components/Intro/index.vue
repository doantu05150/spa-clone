<template>
  <section class="intro">
    <b-container>
      <b-row>
        <b-col md="6" sm="12" cols="8">
          <about-us :content="aboutUsData.content" />
        </b-col>
        <b-col md="6" sm="12" cols="4">
          <img class="img-fluid" :src="aboutUsData.image" />
        </b-col>
      </b-row>
      <b-row>
        <b-col> <quote :data="homeData.quote_1" /> </b-col>
      </b-row>
      <div class="btn-phone">
        <b-button
          href="tel:18009467"
          class="buttom-phone"
          size="lg"
          variant="info"
        >
          <i class="fa fa-phone icon-phone"></i> 1800-9467
        </b-button>
      </div>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutUs from './AboutUs'
import Quote from './Quote'

export default {
  components: {
    AboutUs,
    Quote,
  },
  props: {
    isHome: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scrolled: false,
    }
  },
  computed: {
    ...mapGetters(['aboutUsData', 'homeData']),
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.handleScroll)
    })
  },
}
</script>

<style lang="stylus" scoped>
.intro {
  background: #f8f8f8;
}

.btn-phone {
  display: none;
}

@media (max-width: 400px) {
  .img-fluid {
    margin-top: 60px;
    height: 300px;
    width: 300px;
    margin-left: -20px;
    object-fit: cover;
    max-width: 300%;
  }

  .btn-phone {
    display: block;
    text-align: center;

    .buttom-phone {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 20px;
      margin-top: -40px;
      font-size: 10px;
      font-weight: bold;
    }

    .icon-phone {
      transform: rotate(4deg);
    }
  }
}

@media (max-width: 600px) {
  .img-fluid {
    margin-top: 60px;
    height: 300px;
    width: 300px;
    margin-left: -20px;
    object-fit: cover;
    max-width: 300%;
  }

  .btn-phone {
    display: block;
    text-align: center;
    position: fixed;
    bottom: 5px;
    left: 10px;
    z-index: 20;

    .buttom-phone {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 20px;
      margin-top: -40px;
      font-size: 10px;
    }

    .icon-phone {
      transform: rotate(4deg);
    }
  }
}
</style>
