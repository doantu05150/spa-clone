<template>
  <div class="switch d-flex align-items-center">
    <span class="lang">
      <nuxt-link
        v-for="(locale, i) in showLocales"
        :key="i"
        :to="switchLocalePath(locale.code)"
      >
        <span :class="['item', $i18n.locale === locale.code ? 'active' : '']">
          <span
            v-if="locale.name === 'EN'"
            class="flag-icon flag-icon-gb"
          ></span>
          <span
            v-if="locale.name === 'VI'"
            class="flag-icon flag-icon-vn"
          ></span>
        </span>
      </nuxt-link>
    </span>
  </div>
</template>
<script>
export default {
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(locale => locale.code)
    },
  },
}
</script>
<style lang="stylus" scoped>
.lang {
  display: flex;
  justify-content: center;
  align-items: center;

  .flag-icon-gb {
    background-image: url('../../../static/images/banner/gb.svg');
  }

  .flag-icon-vn {
    background-image: url('../../../static/images/banner/vn.svg');
  }

  .active {
    opacity: 0.5;
  }

  .flag-icon {
    margin-left: 5px;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.33333333em;
    line-height: 1em;

    &:before {
      content: '\00a0';
    }
  }
}
</style>
