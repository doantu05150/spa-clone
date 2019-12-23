<template>
  <div class="searchbar">
    <i class="fas fa-search"></i>
    <input
      @keyup.enter="homeSearch"
      class="form-control"
      type="text"
      :placeholder="`${$t('search')}`"
    />
  </div>
</template>

<script>
export default {
  methods: {
    homeSearch() {
      this.$router.push('/error-404')
    },
  },
}
</script>

<style lang="stylus" scoped>
.searchbar {
  color: #fff;
  display: flex;
  align-items: center;

  .form-control {
    color: #fff;
    font-size: 13px;
    background: transparent;
    border-width: 0;

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      color: #fff;
    }
  }
}
</style>
