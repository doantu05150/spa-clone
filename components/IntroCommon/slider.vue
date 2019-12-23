<template>
  <div>
    <no-ssr>
      <div class="flex-container my-container">
        <div
          v-for="(item, index) in slides"
          :key="`index${index}`"
          :id="`slide_${index}`"
          class="flex-slide"
          :class="parseInt(currentSlide) !== index || 'active'"
          :style="
            `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${
              item.image
            }) center center; background-size: cover`
          "
        >
          <div
            :style="
              currentSlide === index
                ? 'background-color: rgba(0, 0, 0, 0.6)'
                : 'background-color: rgba(0, 0, 0, 0)'
            "
            class="blur-bg"
          ></div>
          <div id="spin-in" class="content-bg">
            <transition name="fade" :duration="{ leave: 0 }">
              <img
                v-if="currentSlide === index"
                class="logo-service"
                :src="item.imageMini"
                alt="logo-service"
              />
            </transition>
            <div class="logos d-flex align-items-center">
              <router-link
                v-for="(it, i) in item.logoImages"
                :key="`item_logo_${i}`"
                :to="it.link"
                ><transition
                  :name="i % 2 ? 'slide-up' : 'slide-down'"
                  :duration="{ leave: 0 }"
                >
                  <img
                    v-if="currentSlide === index"
                    class="logos-item"
                    :src="it.url"
                    alt="logo-item"
                  /> </transition
              ></router-link>
            </div>
            <transition name="fade" :duration="{ leave: 0 }">
              <div v-if="currentSlide === index" class="text-more">
                <a v-on:click="nextSlide" class="flex-title d-flex readmore">
                  <img
                    class="image-arrow ml-3"
                    src="/images/service/arrow-slide.png"
                    alt="arrow"
                  />
                </a>
              </div>
            </transition>
            <transition name="fade" :duration="{ leave: 0 }">
              <div v-if="currentSlide === index" class="text-more">
                <div class="slide-title">{{ item.title }}</div>
                <a class="flex-title d-flex readmore">
                  <router-link
                    :to="`/service/${sendPath(item.title)}`"
                    class="sendPath"
                  >
                    <p class="text-center services-title">Xem thêm</p>
                  </router-link></a
                >
              </div>
            </transition>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '/images/service/slide1.png',
          logoImages: [
            {
              url: '/images/service/main/doterra-canada-logo.png',
              link: '/service/doTerra',
            },
            {
              url: '/images/service/main/Dermalogica-Logo.png',
              link: '/service/dermagolica',
            },
          ],
          imageMini: '/images/service/main/spa.png',
          title: 'SPA',
        },
        {
          image: '/images/service/slide2.png',
          logoImages: [
            {
              url: '/images/service/main/kerastase-logo-png-transparent.png',
              link: '/service/kerastase',
            },
            {
              url: '/images/service/main/Olaplex_Logo.png',
              link: '/service/olaplex',
            },
            {
              url: '/images/service/main/goldwell-logo.png',
              link: '/service/goldwell',
            },
          ],
          imageMini: '/images/service/main/hair-cut.png',
          title: 'Chăm sóc tóc',
        },
        {
          image: '/images/service/slide3.png',
          logoImages: [
            {
              url: '/images/service/main/OPI_logo.png',
              link: '/service/opi',
            },
            {
              url: '/images/service/main/CND-logo.png',
              link: '/service/cnd',
            },
          ],
          imageMini: '/images/service/main/nail-care.png',
          title: 'Chăm sóc móng',
        },
      ],
      currentSlide: 0,
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++
        return
      } else {
        this.currentSlide = 0
      }
    },
    sendPath(title) {
      if (title === 'SPA') {
        return 'dermagolica'
      }
      if (title === 'Chăm sóc tóc') {
        return 'kerastase'
      }
      if (title === 'Chăm sóc móng') {
        return 'cnd'
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.flex-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 550px;
}

#spin-in {
  .fade-enter-active {
    transition: opacity 0.5s;
    transition-delay: 0.5s;
  }

  .slide-up-enter-active, .slide-down-enter-active {
    transition: all 0.5s;
    transition-delay: 0.5s;
  }

  .slide-up-enter, .slide-up-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }

  .slide-down-enter, .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.flex-slide {
  transition: all 0.5s;
  flex: 1;
  position: relative;
  overflow: hidden;

  &.active {
    flex: 8;
  }

  .content-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .logo-service {
      padding: 40px 0 0 40px;
      width: fit-content;
    }

    .logos {
      justify-content: space-evenly;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);

      .logos-item {
        height: fit-content;
      }
    }

    .text-more {
      display: flex;
      margin-top: auto;
      padding: 0 40px 30px 40px;
      cursor: pointer;
      position: relative;

      .slide-title {
        color: #fff;
        text-transform: uppercase;
      }

      .readmore {
        color: #fff;
        margin-left: auto;
        align-items: center;

        .sendPath {
          text-decoration: none;
          color: #ffffff;
          text-transform: uppercase;
        }

        .image-arrow {
          height: 8px;
        }
      }
    }
  }

  .blur-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 576px) {
  .flex-slide {
    .content-bg {
      .logo-service {
        padding: 40px 0 0 40px;
        width: fit-content;
      }

      .logos {
        justify-content: space-evenly;
        position: absolute;
        width: 80%;
        top: 50%;
        transform: translateY(-50%);

        .logos-item {
          height: fit-content;
          width: 50%;
        }
      }
    }
  }
}
</style>
