<template>
  <section>
    <div class="group-adver">
      <div class="wrapper-full">
        <div v-if="vi" class="advertisement-detail-0">
          <img
            class="img-fluid error-img"
            :src="
              $i18n.locale === 'vi'
                ? adverData.web_vietnamese.url
                : adverData.web_english.url
            "
            alt="backgroup_image_404"
          />
        </div>
      </div>
      <div class="wrapper-mobile">
        <div class="advertisement-detail-0">
          <img
            class="img-fluid error-img"
            :src="
              $i18n.locale === 'vi'
                ? adverData.mobile_vietnamese.url
                : adverData.mobile_english.url
            "
            alt="backgroup_image_404"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      vi: true,
      en: false,
    }
  },
  computed: {
    ...mapGetters(['adverData']),
  },
  methods: {
    clickVi() {
      this.en = !this.en
      this.vi = true
    },
    clickEn() {
      this.en = !this.en
      this.vi = false
    },
  },
}
</script>
<style lang="stylus" scoped>
.group-adver {
  position: relative;

  .wrapper-full {
    .advertisement-detail-0 {
      margin-bottom: 40px;
    }

    .advertisement-detail-1 {
      margin-bottom: 40px;
    }
  }

  .wrapper-mobile {
    display: none;
  }

  .language {
    position: absolute;
    display: flex;
    top: -12%;
    left: 90%;

    .icon-vi {
      margin-right: 10px;
      cursor: pointer;
    }

    .icon-en {
      cursor: pointer;
    }
  }
}

@media (max-width: 1920px) {
  .group-adver {
    .language {
      top: -9%;
      left: 80%;
    }
  }
}

@media (max-width: 1440px) {
  .group-adver {
    .language {
      top: -12%;
      left: 91%;
    }
  }
}

@media (max-width: 1200px) {
  .group-adver {
    .language {
      top: -14%;
      left: 91%;
    }
  }
}

@media (max-width: 992px) {
  .group-adver {
    .language {
      top: -17%;
      left: 91%;
    }
  }
}

@media (max-width: 576px) {
  .group-adver {
    .wrapper-full {
      display: none;
    }

    .wrapper-mobile {
      display: block;
      text-align: center;
      margin-bottom: 40px;
      margin-top: 40px;
    }

    .language {
      top: -18%;
      left: 85%;
    }
  }
}
</style>
