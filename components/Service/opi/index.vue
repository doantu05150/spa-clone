<template>
  <section class="service">
    <h1 class="text-center title mt-5 mb-4">Chăm sóc móng</h1>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="12">
          <div class="text-title text-center mb-3">
            <h2 class="cs-size">Sơn móng OPI</h2>
            <h2 class="cs-size">{{ OPIData.title_1 }}</h2>
          </div>
        </b-col>
        <b-col md="8">
          <no-ssr>
            <div
              class="text-content parameter"
              v-html="OPIData.paragraph_1.content_1"
            ></div>
          </no-ssr>
        </b-col>
        <b-col md="10">
          <img
            class="img-fluid"
            :src="OPIData.paragraph_1.image.url"
            alt="Nails OPI"
          />
        </b-col>
        <b-col md="8">
          <h6 class="description-image">
            {{ OPIData.paragraph_1.image_description }}
          </h6>
        </b-col>
        <b-col md="8 mt-3 parameter" v-html="OPIData.paragraph_1.content_2">
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="4"
          class="pt-3 pb-1"
          v-for="(item, id) in OPIData.cardService"
          :key="id"
        >
          <div class="card-awards text-center">
            <div class="card-img">
              <img :src="item.img.url" alt="Nails Awards" />
            </div>
            <p class="color-primary awards-title mt-3 mb-1">{{ item.title }}</p>
            <p class="description">{{ item.description }}</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <b-button class="btn-icon-menu my-4" href="#" variant="info">
            Thử màu sơn
          </b-button>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="8" class="text-center">
          <div class="footer-title mb-2">{{ OPIData.title_2 }}</div>
          <no-ssr>
            <p class="parameter" v-html="OPIData.paragraph_2"></p>
          </no-ssr>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-2">
        <b-col class="text-center mb-4" cols="12">
          <h2 class="text-black weight-600">{{ OPIData.title_3 }}</h2>
        </b-col>
        <b-col
          v-for="(item, id) in OPIData.infiniteShine"
          :key="`infiniteShine_${id}`"
          md="4"
        >
          <div class="text-center">
            <img class="img-fluid" :src="item.url.url" alt="image" />
            <div class="infinite-inf pt-3">
              <span
                v-for="(item, i) in item.infos"
                :key="`item_${i}`"
                class="item-infinite weight-300"
                >{{ item.text }}</span
              >
            </div>
          </div>
        </b-col>
        <b-col class="mt-4" md="8" v-html="OPIData.paragraph_3"> </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <b-button class="btn-icon-menu-2 my-4" href="#" variant="info">
            Đặt lịch hẹn với Eforea <br />
            để có bộ móng hoàn hảo nhất!
          </b-button>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-4">
        <b-col
          md="8"
          class="text-center parameter-footer"
          v-html="OPIData.paragraph_4"
        >
        </b-col>
        <b-col cols="12">
          <div class="quote text-center">
            <div class="quote-wrap text-header-section">
              <span style="white-space: pre-line;">{{ OPIData.quote }}</span>
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
    ...mapGetters(['OPIData']),
  },
}
</script>

<style lang="stylus" scoped>
.service {
  background: #f8f8f8;

  .title {
    color: #76ccdd;
  }

  .description-image {
    color: #959699;
    margin-top: 10px;
    text-align: center;
  }
}

.card-img {
  position: relative;
  height: 180px;
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    bottom: 0;
  }
}

.con-tx {
  font-weight: bold;
}

.cs-size {
  font-size: 2.3rem !important;
}

.description {
  font-size: 14px;
  line-height: 1.2;
}

.awards-title {
  font-size: 20px;
  font-weight: 500;
}

.btn-icon-menu {
  padding: 18px 96px;
  font-size: 18px;
}

.btn-icon-menu-2 {
  font-size: 18px;
  padding: 8px 18px;
}

.bolder-text {
  font-weight: 500 !important;
}

.list-desc {
  list-style: none;
  padding: 0;

  li {
    font-size: 18px;
    line-height: 1.3;

    &:before {
      content: '-';
      padding-right: 7px;
    }
  }
}

.parameter {
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
}

.footer-title {
  font-weight: 500;
  font-size: 18px;
}

.infinite-inf {
  display: flex;
  flex-direction: column;

  .item-infinite {
    text-transform: uppercase;
    font-size: 20px;
  }
}

.parameter-footer {
  font-size: 22px;
  line-height: 1.25;
  font-weight: 100;
}

.quote {
  margin-top: 5rem;
  margin-bottom: 6rem;
}
</style>
