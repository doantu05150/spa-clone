<template>
  <div class="quote text-center">
    <no-ssr
      ><div class="quote-wrap text-header-section">
        <span style="white-space: pre-line;">{{ data }}</span>
      </div></no-ssr
    >
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped>
.quote {
  margin-top: 3rem;
  margin-bottom: 6rem;
  align-items: center;
}

@media (max-width: 400px) {
  .quote {
    margin-bottom: 60px;
  }

  .quote-wrap {
    span {
      font-size: 15px;
    }

    &:before, &:after {
      content: '';
      background-repeat: no-repeat;
      position: absolute;
      background-position: center;
      width: 100%;
      height: 40px;
      left: 120px;
      right: 0;
      width: 150px;
    }
  }
}

@media (max-width: 576px) {
  .quote {
    margin-bottom: 60px;
  }

  .quote-wrap {
    span {
      font-size: 17px;
    }

    &:before, &:after {
      content: '';
      background-repeat: no-repeat;
      position: absolute;
      background-position: center;
      width: 100%;
      height: 40px;
      left: 120px;
      right: 0;
      width: 150px;
    }
  }
}
</style>
