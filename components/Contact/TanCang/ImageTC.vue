<template>
  <div>
    <b-row class="wrapper">
      <b-col
        md="4"
        v-for="(item, index) in image"
        :key="index"
        class="wrapper-col"
      >
        <div class="img-address">
          <img
            :src="require(`../../../static/images/${item}`)"
            class="img-fluid img-location"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: ['yySquO6.png', 'event-bg.png', 'Clr85YP.png'],
    }
  },
}
</script>
<style lang="stylus" scoped>
.wrapper {
  margin-left: 0 !important;
  margin-right: 0 !important;

  .wrapper-col {
    padding-right: 0px;
    padding-left: 2px;

    .img-location {
      height: 155px;
      width: 100%;
    }
  }
}
</style>
