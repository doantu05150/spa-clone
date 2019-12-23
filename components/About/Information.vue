<template>
  <section>
    <div class="title-eforea">
      <h4>{{ $t('about') }} Euphorea</h4>
    </div>
    <b-container>
      <b-row>
        <b-col class="order-xs-2">
          <div class="about-us-top">
            <div class="aut-left">
              <div class="autl-title">
                <div class="autl-title-font">
                  {{
                    $i18n.locale === 'vi'
                      ? aboutData.paragraph_1.title[0]
                      : aboutData.paragraph_1.title_en[0]
                  }}
                </div>
                <h1>
                  {{
                    $i18n.locale === 'vi'
                      ? aboutData.paragraph_1.title
                      : aboutData.paragraph_1.title_en
                  }}
                </h1>
                <h2
                  :class="[
                    $i18n.locale === 'vi'
                      ? 'child-title'
                      : 'child-title-no-content',
                  ]"
                >
                  {{
                    $i18n.locale === 'vi'
                      ? aboutData.paragraph_1.sub_title
                      : aboutData.paragraph_1.sub_title_en
                  }}
                </h2>
              </div>
            </div>
            <p class="weight-300">
              {{
                $i18n.locale === 'vi'
                  ? aboutData.paragraph_1.content
                  : aboutData.paragraph_1.content_en
              }}
            </p>
          </div>
          <div class="btn-phone">
            <b-button class="buttom-phone" size="lg" variant="info">
              <i class="fa fa-phone icon-phone"></i>1800-9467
            </b-button>
          </div>
        </b-col>
        <b-col xl="8" class="order-xs-1">
          <div class="infor-img">
            <img
              class="img-show"
              :src="aboutData.paragraph_1.image.url"
              width="100%"
            />
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
    ...mapGetters(['aboutData']),
  },
}
</script>

<style lang="stylus" scoped>
.btn-phone {
  display: none;
}

.title-eforea {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 45px;

  h4 {
    font-size: 48px;
    color: #76ccdd;
  }
}

.about-us-top {
  p {
    margin-top: 50px;
  }

  .aut-left {
    .autl-title {
      z-index: 1;
      position: relative;
      width: fit-content;

      .child-title {
        margin-top: -15px;

        &:before {
          content: '_ ';
        }
      }

      .child-title-no-content {
        margin-top: 80px;
      }

      h1 {
        font-size: 48px;
      }

      h2 {
        font-size: 36px;
        margin-top: -45px;
      }

      .autl-title-font {
        position: absolute;
        top: -110px;
        right: -55px;
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
  .title-eforea {
    margin-bottom: 20px;
    margin-top: 10px;

    h4 {
      font-size: 35px;
    }
  }

  .about-us-top {
    p {
      margin-top: 10px;
      text-align: justify;
      font-size: 12px;
    }

    .aut-left {
      margin-top: 20px;

      .autl-title {
        .child-title {
          margin-top: -15px;
        }

        h1 {
          font-size: 30px;
        }

        h2 {
          font-size: 23px;
          margin-top: -45px;
        }

        .autl-title-font {
          top: -105px;
          right: -15px;
          font-size: 140px;
        }
      }
    }
  }

  .order-xs-1 {
    order: 1;
  }

  .order-xs-2 {
    order: 2;
  }

  .btn-phone {
    display: block;
    text-align: center;
    margin-top: 20px;
    margin-bottom: -40px;

    .buttom-phone {
      padding-left: 70px;
      padding-right: 70px;
      font-size: 12px;
      margin-top: -10px;
    }

    .icon-phone {
      transform: rotate(4deg);
    }
  }

  .img-show {
    object-fit: cover;
    width: 100%;
    height: 180px;
  }
}
</style>
