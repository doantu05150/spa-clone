<template>
  <div class="info ml-auto d-flex align-items-center">
    <div class="info__number">
      <span class="info__number__detail">
        {{ $t('booking') }}: <span class="strong">1800-9467</span>
      </span>
      <span class="info__number__detail">
        {{ $t('open') }}: <span class="strong">9:00 {{ $t('to') }} 20:00</span>
      </span>
    </div>
    <b-button class="info__btn--icon" @click="onFaceBoolClick" variant="link">
      <i class="fab fa-facebook-square"></i>
    </b-button>
    <b-button class="info__btn--icon" @click="onInstagramClick" variant="link">
      <i class="fab fa-instagram"></i>
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      password: '',
      passwordFieldType: 'password',
    }
  },
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(locale => locale.code)
    },
  },
  methods: {
    onFaceBoolClick() {
      window.open('https://www.facebook.com/eforea.salonspa/', '_blank')
    },
    onInstagramClick() {
      window.open('https://www.instagram.com/eforea_salonspa/', '_blank')
    },
    showChange() {
      this.show = true
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}
</script>

<style lang="stylus" scoped>
.info {
  font-size: 13px;

  &__number {
    color: #fff;

    &__detail {
      display: inline;
      padding-left: 10px;
      padding-right: 10px;

      .strong {
        font-weight: 500;
        font-size: 15px;
      }

      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
    }
  }

  .btn-icon-menu {
    font-size: 13px;
    margin: 0 30px;
  }

  &__btn {
    &--icon {
      color: #fff;
      font-size: 24px;
    }
  }
}

@media (max-width: 768px) {
  .info {
    display: none !important;
  }
}
</style>
