<template>
  <div class="excellent">
    <b-container fluid>
      <b-row class="no-wrap">
        <div class="exellent-left">
          <div>
            <img class="img-fluid" :src="aboutData.paragraph_4.image.url" />
          </div>
        </div>
        <div class="excellent-right">
          <div class="excellent-right-title">
            {{
              $i18n.locale === 'vi'
                ? aboutData.paragraph_4.title[0]
                : aboutData.paragraph_4.title_en[0]
            }}
          </div>
          <h1>{{ aboutData.paragraph_4.title }}</h1>
          <h2
            :class="[
              $i18n.locale === 'vi'
                ? 'excellent-title'
                : 'excellent-title-no-content',
            ]"
          >
            {{
              $i18n.locale === 'vi'
                ? aboutData.paragraph_4.sub_title
                : aboutData.paragraph_4.sub_title_en
            }}
          </h2>
        </div>
      </b-row>
      <b-row>
        <b-col md="7" offset-md="1">
          <div class="content-excellent">
            <p class="weight-300">
              {{
                $i18n.locale === 'vi'
                  ? aboutData.paragraph_4.content
                  : aboutData.paragraph_4.content_en
              }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
.excellent {
  display: flex;
  margin-top: 30px;

  .content-excellent {
    margin-top: 30px;
  }

  .exellent-left {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }

  .excellent-right {
    position: relative;
    z-index: 1;

    .excellent-title {
      margin-top: -15px;

      &:before {
        content: '_ ';
      }
    }

    .excellent-title-no-content {
      margin-top: -15px;
    }

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 36px;
      margin-top: -45px;
      font-style: italic;
    }

    .excellent-right-title {
      top: -60px;
      position: absolute;
      font-size: 200px;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #79cdde;
      z-index: -1;
      left: -89px;
    }
  }

  .no-wrap {
    flex-wrap: nowrap;
  }
}

@media (max-width: 576px) {
  .excellent {
    margin-top: 10px;

    .content-excellent {
      margin-top: 15px;

      p {
        font-size: 12px;
        margin-top: -10px;
      }
    }

    .exellent-left {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
    }

    .excellent-right {
      margin-top: 100px;
      margin-left: 20px;

      .excellent-title {
        margin-top: -15px;
      }

      h1 {
        font-size: 30px;
        margin-top: -53px;
      }

      h2 {
        font-size: 23px;
        margin-top: -45px;
      }

      .excellent-right-title {
        top: -180px;
        font-size: 140px;
        left: -2px;
      }
    }

    .no-wrap {
      flex-wrap: nowrap;
      display: flex;
      flex-direction: column;
    }
  }

  .img-fluid {
    max-width: 67vh;
  }
}

@media (max-width: 400px) {
  .excellent {
    margin-top: 10px;

    .content-excellent {
      margin-top: 15px;

      p {
        font-size: 12px;
        margin-top: -10px;
      }
    }

    .exellent-left {
      display: flex;
      flex-direction: column;
      padding-right: 20px;
    }

    .excellent-right {
      margin-top: 100px;
      margin-left: 20px;

      .excellent-title {
        margin-top: -15px;
      }

      h1 {
        font-size: 30px;
        margin-top: -53px;
      }

      h2 {
        font-size: 23px;
        margin-top: -45px;
      }

      .excellent-right-title {
        top: -180px;
        font-size: 140px;
        left: -2px;
      }
    }

    .no-wrap {
      flex-wrap: nowrap;
      display: flex;
      flex-direction: column;
    }
  }

  .img-fluid {
    max-width: 67vh;
  }
}
</style>
