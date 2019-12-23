<template>
  <b-row>
    <b-col md="6" offset="md-3">
      <div class="authentic-title">
        <h1 class="text-center">
          <div class="authentic-title-font">
            {{ aboutData.paragraph_5.title[0] }}
          </div>
          {{ aboutData.paragraph_5.title }}
        </h1>
        <h2
          class="text-center"
          :class="[$i18n.locale === 'vi' ? 'child-auth-title' : 'child-auth']"
        >
          {{
            $i18n.locale === 'vi'
              ? aboutData.paragraph_5.sub_title
              : aboutData.paragraph_5.sub_title_en
          }}
        </h2>
      </div>
      <p class="text-center weight-300">
        {{
          $i18n.locale === 'vi'
            ? aboutData.paragraph_5.content_1
            : aboutData.paragraph_5.content_1_en
        }}
      </p>
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
.authentic-title {
  h1 {
    font-size: 48px;
    position: relative;
  }

  .child-auth-title {
    margin-top: -15px;

    &:before {
      content: '_ ';
    }
  }

  .child-auth {
    margin-top: -15px;
  }

  h2 {
    font-size: 36px;
    margin-top: -45px;
    font-style: italic;
  }

  .authentic-title-font {
    position: absolute;
    top: -90px;
    right: 170px;
    font-size: 200px;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: #79cdde;
    z-index: -1;
  }
}

p {
  margin-top: 35px;
}

@media (max-width: 576px) {
  .authentic-title {
    h1 {
      font-size: 30px;
    }

    .child-auth-title {
      margin-top: -15px;
    }

    h2 {
      font-size: 23px;
      margin-top: -45px;
      font-style: italic;
    }

    .authentic-title-font {
      top: -70px;
      right: 100px;
      font-size: 140px;
    }
  }

  p {
    font-size: 13px;
    margin-top: 25px;
  }
}
</style>
