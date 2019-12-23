<template>
  <section class="banner">
    <no-ssr>
      <carousel
        :autoplay="true"
        :autoplayTimeout="3000"
        :per-page="1"
        :navigation-enabled="true"
        :loop="true"
        pagination-active-color="#76ccdd"
      >
        <slide v-for="(item, index) in banner" :key="`banner_${index}`">
          <div class="slide-image-background">
            <a :href="item.url">
              <img class="img-fluid img-show" :src="item.image" />
            </a>
          </div>
        </slide>
      </carousel>
    </no-ssr>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed: {
    ...mapGetters(['banner']),
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.banner {
  height: auto;

  .slide-image-background {
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }

    .banner-four {
      position: absolute;
      top: 64%;
      left: 52%;

      .btn-banner-four {
        border-top-left-radius: 42px;
        border-top-right-radius: 42px;
        border-bottom-left-radius: 42px;
        border-bottom-right-radius: 42px;
        padding: 18px 42px;
        font-size: 24px;
        outline: none;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        letter-spacing: 1px;
        background: #ECC2C2;
        border: none;
        line-height: 1;
        color: rgba(0, 0, 0, 0.8);
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.3);
      }
    }

    .slide-button {
      position: absolute;
      bottom: 10%;
      left: 50%;

      .slide-button-inner {
        position: relative;
        left: -50%;
        padding: 10px 60px;
        font-weight: bold;
      }
    }
  }

  .banner-text {
    position: absolute;
    top: 0;
    bottom: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;

    .banner-text-left {
      div {
        p {
          font-size: 32px;
          font-weight: 300;
        }
      }
    }

    .banner-text-center {
      position: absolute;
      left: 50%;
      top: 30%;
      text-align: center;
      color: #fff;
      font-size: 70px;
      font-style: italic;

      .banner-sub-center {
        position: relative;
        left: -50%;
      }
    }

    .banner-text-right {
      div {
        p {
          margin-top: -15px;
          font-size: 32px;
          font-weight: 300;
        }
      }
    }

    span {
      background: #76ccdd;
      padding: 0 20px;
      font-family: 'Playfair Display', serif;
    }
  }
}

@media (max-width: 1380px) {
  .banner {
    .banner-text {
      padding: 0px 30px !important;

      .banner-text-left, .banner-text-right {
        div {
          p {
            font-size: 25px !important;
            font-weight: 300 !important;
            margin-top: -20px !important;
          }
        }
      }

      .banner-text-center {
        font-size: 50px !important;
      }
    }
  }
}

@media (max-width: 1076px) {
  .banner-four {
    .btn-banner-four {
      padding: 12px 24px !important;
      font-size: 20px !important;
    }
  }
}

@media (max-width: 1015px) {
  .slide-button {
    bottom: 15% !important;

    .slide-button-inner {
      font-size: 16px !important;
      padding: 5px 20px !important;
      border-radius: 2px !important;
    }
  }

  .banner-text {
    padding: 0px 30px !important;

    .banner-text-left, .banner-text-right {
      div {
        p {
          font-size: 20px !important;
          font-weight: 300 !important;
          margin-top: -20px !important;
        }
      }
    }

    .banner-text-center {
      font-size: 30px !important;
    }
  }
}

@media (max-width: 1076px) {
  .banner-four {
    .btn-banner-four {
      padding: 8px 12px !important;
      font-size: 16px !important;
    }
  }
}

@media (max-width: 576px) {
  .slide-button {
    bottom: 18% !important;

    .slide-button-inner {
      font-size: 8px !important;
      padding: 3px 20px !important;
      border-radius: 2px !important;
    }
  }

  .banner-four {
    .btn-banner-four {
      padding: 4px 6px !important;
      font-size: 7px !important;
    }
  }

  .banner-text {
    padding: 0px 30px !important;

    .banner-text-left, .banner-text-right {
      div {
        p {
          font-size: 20px !important;
          font-weight: 300 !important;
          margin-top: -20px !important;
        }
      }
    }

    .banner-text-center {
      font-size: 25px !important;
    }
  }
}

@media (max-width: 400px) {
  .banner {
    height: auto;

    .slide-button {
      bottom: 18% !important;

      .slide-button-inner {
        font-size: 8px !important;
        padding: 3px 20px !important;
        border-radius: 2px !important;
      }
    }

    .banner-text {
      padding: 0px 20px !important;

      .banner-text-left, .banner-text-right {
        div {
          p {
            font-size: 13px !important;
            font-weight: 300 !important;
            margin-top: -20px !important;
          }
        }
      }

      .banner-text-center {
        font-size: 20px !important;
        top: 15% !important;
      }
    }
  }
}

@media (max-width: 320px) {
  .banner-text {
    padding: 0px 15px !important;

    .banner-text-left, .banner-text-right {
      div {
        p {
          font-size: 10px !important;
        }
      }
    }

    .banner-text-center {
      font-size: 16px !important;
      top: 15% !important;
    }
  }
}
</style>
