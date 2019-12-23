<template>
  <section class="booking">
    <b-container>
      <b-row>
        <b-col md="6" xl="6" sm="6">
          <h4 class="booking__text">{{ bookingText }}</h4>
        </b-col>
        <b-col md="6" xl="6" sm="6" cols="12" class="booking-right">
          <b-button to="booking" class="weight-600 px-5" variant="info">
            Book your visit
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['bookingText']),
  },
}
</script>

<style lang="stylus" scoped>
.booking {
  padding: 15px;
  background: #959699;
  color: #fff;

  &__text {
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }

  .booking-right {
    text-align: right;
  }
}

@media (max-width: 400px) {
  .booking {
    padding: 15px;
    text-align: center;

    &__text {
      font-size: 14px;
      text-align: center;
    }

    .booking-right {
      text-align: center !important;
    }

    .weight-600 {
      font-size: 16px;
    }
  }
}

@media (max-width: 576px) {
  .booking {
    padding: 15px;
    text-align: center;

    &__text {
      font-size: 17px;
      text-align: center;
    }

    .booking-right {
      text-align: center !important;
    }

    .weight-600 {
      font-size: 12px;
    }
  }
}
</style>
