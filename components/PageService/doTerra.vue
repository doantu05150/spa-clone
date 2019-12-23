<template>
  <section class="service-doterra">
    <div class="content">
      <h1 class="title mt-5 mb-4">Spa</h1>
      <h2 class="sub-title mb-3">
        <div>doTERRA</div>
        <div>{{ doTerraData.title_1 }}</div>
      </h2>
      <no-ssr>
        <div class="text text-left" v-html="doTerraData.paragraph_1.content" />
      </no-ssr>
      <img
        :src="doTerraData.paragraph_1.image.url"
        alt="doTerra - Tinh dầu trị liệu"
        class="w-100 mt-4"
      />
      <div class="text-note">
        {{ doTerraData.paragraph_1.image_description }}
      </div>
      <div class="text">
        <div class="mb-2 mt-2">
          <strong>{{ doTerraData.paragraph_2.title }}</strong>
        </div>
        <no-ssr>
          <p
            style="white-space: pre-line"
            v-html="doTerraData.paragraph_2.content"
          ></p>
        </no-ssr>
      </div>
      <div class="mt-5">
        <div class="row justify-content-center mx-2">
          <div
            v-for="(item, index) in doTerraData.cptg"
            :key="`${index}`"
            class="col-4 my-3 standard-img"
          >
            <img :src="item.image.url" class="w-100 rounded" />
            <div style="white-space: pre-line" class="standard-text">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="text mt-4">
        <div class="mb-2 mt-2">
          <strong>{{ doTerraData.paragraph_3.title }}</strong>
        </div>
        <p style="white-space: pre-line">
          {{ doTerraData.paragraph_3.content }}
        </p>
      </div>
      <img
        :src="doTerraData.paragraph_3.image.url"
        alt="Khai thác nguyên liệu từ thiên nhiên"
        class="w-100 mt-4"
      />
      <div class="text mt-4">
        <div class="mb-2 mt-2">
          <strong>{{ doTerraData.paragraph_4.title }}</strong>
        </div>
        <p style="white-space: pre-line">
          {{ doTerraData.paragraph_4.content }}
        </p>
      </div>
      <div class="text">
        <div class="text-headline mt-5">{{ doTerraData.title_2 }}</div>
        <div class="mb-2 mt-4">
          <strong>{{ doTerraData.paragraph_5.title }}</strong>
        </div>
        <p>{{ doTerraData.paragraph_5.content }}</p>
        <div class="mb-2 mt-4">
          <strong>{{ doTerraData.paragraph_6.title }}</strong>
        </div>
        <p>{{ doTerraData.paragraph_6.content }}</p>
      </div>
      <img
        :src="doTerraData.paragraph_6.image.url"
        alt="Khai thác nguyên liệu từ thiên nhiên"
        class="w-100 mt-4"
      />
      <div class="text-summary mt-5">
        <p style="white-space: pre-line">{{ doTerraData.paragraph_7 }}</p>
      </div>
      <b-btn size="lg" variant="info" class="booking-btn mt-4">
        Đặt lịch hẹn với eforea
      </b-btn>
      <div class="quote py-5">
        <img :src="`/images/service/doTerra/quote_image2.png`" class="w-100" />
        <div style="white-space: pre-line" class="quote-text">
          {{ doTerraData.quote }}
        </div>
        <img :src="`/images/service/doTerra/quote_image1.png`" class="w-100" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['doTerraData']),
  },
}
</script>

<style lang="stylus" scoped>
.service-doterra
  text-align center
  font-size 18px
  background #f8f8f8

  .banner
    width 100%

  .content
    padding 0 18%

    .title
      color #76ccdd

    .text
      padding 0 11.5%

      .text-headline
        font-family 'Playfair Display', serif
        font-size 2.1em
        font-weight 700

    .text-summary
      font-weight 300
      font-size 22px
      padding 0 11.5%

    .text-note
      font-family 'Playfair Display', serif
      opacity 0.6
      padding 10px 0

    .booking-btn
      text-transform uppercase
      padding 15px 50px

    .quote
      width 330px
      margin auto

      .quote-text
        font-family 'Playfair Display', serif
        font-style italic
        opacity 0.5
        font-size 2em
        padding 20px 0

.standard-img
  position relative
  min-width 280px

  .standard-text
    position absolute
    bottom 10px
    left 15px
    right 15px
    color #ffffff
</style>
