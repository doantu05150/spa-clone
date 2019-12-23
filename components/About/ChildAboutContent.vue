<template>
  <b-row>
    <b-col
      xl="6"
      md="12"
      v-for="(item, index) in aboutData.paragraph_2"
      :key="index"
    >
      <div class="child-about">
        <div class="child-about-content">
          <img class="img-show" width="100%" :src="item.image.url" />
        </div>
        <div class="child-left">
          <div class="cl-title">
            <div class="cl-title-font">
              {{ $i18n.locale === 'vi' ? item.title[0] : item.title_en[0] }}
            </div>
            <h1>{{ item.title }}</h1>
            <h2
              :class="[
                $i18n.locale === 'vi'
                  ? 'child-about-title'
                  : 'child-about-title-no-content',
              ]"
            >
              {{ $i18n.locale === 'vi' ? item.sub_title : item.sub_title_en }}
            </h2>
          </div>
        </div>
        <p class="mt-4 weight-300">
          {{ $i18n.locale === 'vi' ? item.content : item.content_en }}
        </p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['aboutData']),
  },
}
</script>

<style lang="stylus" scoped>
.child-about {
  margin-top: 80px;

  .child-about-content {
    z-index: -10;
  }

  .child-left {
    margin-top: 20px;

    .cl-title {
      position: relative;
      z-index: 1;

      .child-about-title {
        margin-top: -15px;

        &:before {
          content: '_ ';
        }
      }

      .child-about-title-no-content {
        margin-top: 25px;
      }

      h1 {
        font-size: 48px;
      }

      h2 {
        font-size: 36px;
        margin-top: -45px;
        font-style: italic;
      }

      .cl-title-font {
        position: absolute;
        top: -168px;
        font-size: 200px;
        font-family: 'Playfair Display', serif;
        font-style: italic;
        color: #79cdde;
        z-index: -1;
      }
    }
  }
}

@media (max-width: 576px) {
  .child-about {
    margin-top: 55px;
    margin-bottom: -60px;

    p {
      text-align: justify;
      font-size: 12px;
      margin-top: 0px !important;
    }

    .child-about-content {
      z-index: -10;
    }

    .child-left {
      margin-top: 54px;

      .cl-title {
        h1 {
          font-size: 30px;
        }

        h2 {
          font-size: 23px;
          margin-top: -45px;
        }

        .cl-title-font {
          top: -130px;
          font-size: 140px;
        }
      }
    }
  }

  .img-show {
    object-fit: cover;
    width: 100%;
    height: 230px;
  }
}

@media (max-width: 400px) {
  .child-about {
    margin-top: 55px;
    margin-bottom: -60px;

    p {
      text-align: justify;
      font-size: 12px;
      margin-top: 0px !important;
    }

    .child-about-content {
      z-index: -10;
    }

    .child-left {
      margin-top: 54px;

      .cl-title {
        h1 {
          font-size: 30px;
        }

        h2 {
          font-size: 23px;
          margin-top: -45px;
        }

        .cl-title-font {
          top: -130px;
          font-size: 140px;
        }
      }
    }
  }

  .img-show {
    object-fit: cover;
    width: 100%;
    height: 230px;
  }
}
</style>
