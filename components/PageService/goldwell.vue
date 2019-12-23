<template>
  <div class="service-goldwell">
    <img :src="goldwellData.banner" class="banner-img" alt="banner" />
    <b-container class="text-center">
      <h1 class="title mt-5 mb-4">Chăm sóc tóc</h1>
      <h2 class="sub-title mb-3">Goldwell<br />{{ goldwellData.title_1 }}</h2>
      <no-ssr>
        <div class="w-75 mx-auto mb-5" v-html="goldwellData.paragraph_1"></div>
      </no-ssr>
      <div class="slide"><goldwell-slide /></div>
      <div class="partition">
        <div class="sub-title my-5" style="white-space: pre-line">
          {{ goldwellData.title_2 }}
        </div>
        <b-row class="justify-content-center">
          <b-col
            cols="3"
            class="text-center"
            v-for="(item, index) in goldwellData.paragraph_2"
            :key="`${index}`"
          >
            <img class="w-100" :src="item.image.url" />
            <div class="text-blue py-2">{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </b-col>
        </b-row>
        <div class="intro py-4" style="white-space: pre-line">
          {{ goldwellData.title_3 }}
        </div>
        <b-row>
          <b-col
            cols="3"
            v-for="(item, index) in goldwellData.paragraph_3"
            :key="`${index}`"
          >
            <div class="text-blue pb-2">{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </b-col>
        </b-row>
      </div>
      <div class="partition w-75 mx-auto">
        <div class="sub-title py-4 mt-4">
          <b>{{ goldwellData.title_4 }}</b>
        </div>
        <div class="mb-4" style="white-space: pre-line">
          {{ goldwellData.paragraph_4.content }}
        </div>
        <img class="w-100" :src="goldwellData.paragraph_4.image.url" />
        <div class="img-text py-1">
          {{ goldwellData.paragraph_4.image_description }}
        </div>
        <no-ssr>
          <div class="intro py-4" v-html="goldwellData.title_5"></div>
        </no-ssr>
        <img class="w-100" :src="goldwellData.paragraph_5.image.url" />
        <no-ssr>
          <div
            class="text-left mt-4"
            v-html="goldwellData.paragraph_5.content"
          ></div>
        </no-ssr>
        <div class="sub-title py-4 mt-4">
          <b style="white-space: pre-line">{{ goldwellData.title_6 }}</b>
        </div>
        <no-ssr> <div v-html="goldwellData.paragraph_6"></div> </no-ssr
        ><no-ssr>
          <div class="intro py-4" v-html="goldwellData.title_7"></div>
        </no-ssr>
        <img class="w-100" :src="goldwellData.paragraph_7.image.url" />
        <div class="mt-4 pt-2">
          <b>{{ goldwellData.paragraph_7.title }}</b>
        </div>
        <b-row
          class="elumen-effect mt-4"
          v-for="(item, index) in goldwellData.animation"
          :key="`${index}`"
        >
          <b-col cols="4"> <img class="w-100" :src="item.image.url" /> </b-col>
          <b-col cols="8">
            <div class="text-left">
              <div class="text-blue">{{ item.title }}</div>
              <div>{{ item.description }}</div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="booking-btn mt-5">Đặt lịch hẹn với Eforea</div>
    </b-container>
  </div>
</template>
<script>
import GoldwellSlide from './goldwell-slide'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['goldwellData']),
  },
  components: {
    GoldwellSlide,
  },
}
</script>

<style lang="stylus" scoped>
.service-goldwell {
  font-size: 18px;
  background-color: #f8f8f8;

  .banner-img {
    width: 100%;
  }

  .title {
    color: #76ccdd;
  }

  .slide {
    margin: 0 auto;
    width: 85%;
  }

  .partition {
    .sub-title {
      font-size: 1.8rem;
      font-family: 'Playfair Display', serif;
      font-style: italic;
    }

    .intro {
      font-size: 30px;
    }

    .img-text {
      font-size: 16px;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #959699;
    }
  }
}

.text-blue {
  color: #76ccdd;
}

ul {
  padding-block-start: 20px !important;
}

.booking-btn {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  background-color: #76ccdd;
  text-transform: uppercase;
  padding: 15px 50px;
  display: inline-block;
  margin-bottom: 5rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #138496;
  }
}
</style>
