<template>
  <div class="goldwell-slide">
    <div
      class="sub-slide slide-1"
      v-for="(item, index) in goldwellData.adward"
      :key="`${index}`"
    >
      <div v-if="position === index + 1">
        <img class="w-100" :src="item.image.url" />
        <div class="content">
          <img
            class="next"
            src="/images/service/goldwell/goldwell-right.png"
            @click="position === 5 ? (position = 1) : (position = position + 1)"
          />
          <div :class="`slide-${index + 1}-content`">
            <no-ssr>
              <div class="float-left" v-html="item.description_1"></div>
            </no-ssr>
            <no-ssr>
              <div class="float-left" v-html="item.description_2"></div>
            </no-ssr>
          </div>
          <div class="slide-number">0{{ index + 1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['goldwellData']),
  },
  data() {
    return {
      position: 1,
    }
  },
}
</script>

<style lang="stylus" scoped>
.goldwell-slide {
  .sub-slide {
    position: relative;

    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.2;

      .next {
        cursor: pointer;
      }

      .slide-1-content {
        flex: 1;
        font-size: 22px;
        padding-left: 3rem;
      }

      .slide-2-content {
        flex: 1;
        height: 100%;
        padding: 1rem 3rem;
        font-size: 20px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        text-align: center;
      }

      .slide-3-content {
        flex: 1;
        font-size: 20px;
        padding-left: 3rem;
      }

      .slide-4-content {
        flex: 1;
        height: 100%;
        padding-bottom: 3rem;
        font-size: 20px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
      }

      .slide-5-content {
        flex: 1;
        height: 100%;
        padding-bottom: 3rem;
        font-size: 22px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
      }
    }
  }
}

.slide-number {
  font-size: 5rem;
  color: #76ccdd;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}
</style>
