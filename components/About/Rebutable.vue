<template>
  <div class="rebutable">
    <div class="child-rebutable">
      <div class="child-rebutable-img">
        <img
          class="img-fluid"
          width="100%"
          :src="aboutData.paragraph_3.image.url"
        />
      </div>
    </div>
    <div class="child-rebutable-content">
      <b-row align-h="center">
        <b-col md="3">
          <div class="child-rebutable-content-title">
            <div class="child-rebutable-font">
              {{ aboutData.paragraph_3.title[0] }}
            </div>
            <h1>{{ aboutData.paragraph_3.title }}</h1>
            <h2
              :class="[
                $i18n.locale === 'vi'
                  ? 'child-rebutable-size'
                  : 'child-rebutable-size-no-content',
              ]"
            >
              {{
                $i18n.locale === 'vi'
                  ? aboutData.paragraph_3.sub_title
                  : aboutData.paragraph_3.sub_title_en
              }}
            </h2>
          </div>
        </b-col>
        <b-col md="4" class="example">
          <p class="rebetable-p weight-300">
            {{
              $i18n.locale === 'vi'
                ? aboutData.paragraph_3.content
                : aboutData.paragraph_3.content_en
            }}
          </p>
        </b-col>
      </b-row>
    </div>
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
.rebutable {
  margin-top: 20px;

  > .child-rebutable {
    display: flex;
    justify-content: center;
  }

  .child-rebutable-content-title {
    margin-left: 35px;
    position: relative;
    margin-top: 35px;
    z-index: 1;

    .child-rebutable-size {
      margin-top: -15px;

      &:before {
        content: '_ ';
      }
    }

    .child-rebutable-size-no-content {
      margin-top: -15px;
    }
  }

  .child-rebutable-font {
    font-size: 200px;
    position: absolute;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: #79cdde;
    top: -162px;
    left: 106px;
    z-index: -1;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
    margin-top: -40px;
    font-style: italic;
  }
}

.example {
  p {
    margin-right: 37px;
    margin-top: 35px;
  }
}

@media (max-width: 576px) {
  .rebetable-p {
    margin-left: 10px;
    font-size: 12px;
  }

  .rebutable {
    margin-top: 20px;
    display: flex;

    > .child-rebutable {
      display: flex;
      margin-top: 60px;
    }

    .child-rebutable-content {
      margin-top: 50px;

      .child-rebutable-content-title {
        margin-left: 35px;
        margin-top: 50px;

        .child-rebutable-size {
          margin-top: -15px;
        }
      }

      .child-rebutable-font {
        font-size: 120px;
        top: -98px;
        left: 56px;
      }

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 23px;
        margin-top: -40px;
      }
    }

    .example {
      p {
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }

  .img-fluid {
    height: 250px;
    width: 1425px;
  }
}
</style>
