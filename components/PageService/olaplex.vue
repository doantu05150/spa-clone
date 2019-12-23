<template>
  <div class="service-olaplex">
    <b-container class="text-center">
      <h1 class="title mt-5 mb-4">Chăm sóc tóc</h1>
      <h2 class="sub-title mb-3">Olaplex<br />{{ olaplexData.title_1 }}</h2>
      <no-ssr>
        <div
          class="w-75 mx-auto mb-4"
          v-html="olaplexData.paragraph_1.content_1"
        ></div
      ></no-ssr>
      <div class="width-85 mx-auto">
        <img class="w-100" :src="olaplexData.image_1.url" />
        <div class="img-text mt-1">{{ olaplexData.description_1 }}</div>
      </div>
      <div class="w-75 mx-auto mt-4">
        {{ olaplexData.paragraph_1.content_2 }}
      </div>
      <div class="w-75 mx-auto mt-4">
        {{ olaplexData.paragraph_1.content_3 }}
      </div>
      <div class="width-85 mx-auto mt-4 mb-4">
        <iframe :src="olaplexData.video" frameborder="0" allowfullscreen />
        <div class="img-text mt-1">{{ olaplexData.description_video }}</div>
      </div>
      <div class="w-75 mx-auto">
        <div>{{ olaplexData.paragraph_1.content_4 }}</div>
        <no-ssr
          ><div class="conclution my-5" v-html="olaplexData.title_2"></div
        ></no-ssr>
        <div>{{ olaplexData.paragraph_2 }}</div>
        <div class="sub-title my-5">
          <b>Olaplex<br />{{ olaplexData.title_3 }}</b>
        </div>
        <div>
          <p style="white-space: pre-line;">
            {{ olaplexData.paragraph_3.content_1 }}
          </p>
        </div>
      </div>
      <div
        v-for="(item, index) in olaplexData.three_steps"
        :key="index"
        :class="`d-flex product product-${index + 1}`"
      >
        <div class="content" v-if="index % 2 == 0">
          <div>
            <b style="white-space: pre-line;">{{ item.title }}</b>
          </div>
          <div class="content-text mt-3">{{ item.description }}</div>
        </div>
        <div class="img-wrapper" v-else>
          <img class="product-img" :src="item.image.url" />
        </div>
        <div class="img-wrapper" v-if="index % 2 == 0">
          <img class="product-img" :src="item.image.url" />
        </div>
        <div class="content" v-else>
          <div>
            <b style="white-space: pre-line;">{{ item.title }}</b>
          </div>
          <div class="content-text mt-3">{{ item.description }}</div>
        </div>
      </div>
      <div class="w-75 mx-auto mt-5">
        <div>{{ olaplexData.paragraph_3.content_2 }}</div>
      </div>
      <div class="quote py-5">
        <img src="/images/service/doTerra/quote_image2.png" />
        <div class="quote-text">
          <span style="white-space: pre-line;">{{ olaplexData.quote }}</span>
        </div>
        <img src="/images/service/doTerra/quote_image1.png" />
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['olaplexData']),
  },
}
</script>
<style lang="stylus" scoped>
.service-olaplex
  font-size 18px
  background #f8f8f8
  line-height 1.3

  .title
    color #76ccdd

  .width-85
    width 85%

  .img-text
    font-family 'Playfair Display', serif
    font-style italic
    color #959699

  .sub-title
    font-size 36px
    font-family 'Playfair Display', serif
    font-style italic

  .conclution
    font-size 40px

  .product
    height 555px

    .img-wrapper
      width 50%
      display flex
      align-items center
      justify-content center
      background-color #ffffff

    .content
      width 50%
      display flex
      flex-direction column
      align-items center
      justify-content center
      padding 2.5rem

      .content-text
        font-size 22px

  .product-1
    background-color #ffe9c5
    margin-top 3rem

  .product-2
    background-color #fffbf0

  .product-3
    background-color #f5f4f2

  iframe
    width 100%
    height 531px

  .quote
    margin auto

    .quote-text
      font-family 'Playfair Display', serif
      font-style italic
      opacity 0.5
      font-size 2em
      padding 20px 0
</style>
