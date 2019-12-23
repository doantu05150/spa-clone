<template>
  <div class="kerastate-service-container text-center">
    <h3 class="title mt-5 mb-4">Chăm sóc tóc</h3>
    <b-container>
      <b-row>
        <b-col lg="8" class="description-container mx-auto">
          <h3 class="kerastase-paris-title">
            Kérastase Paris <br />
            {{ kerastaseData.title_1 }}
          </h3>
          <no-ssr
            ><p
              class="description my-3"
              v-html="kerastaseData.paragraph_1.content"
            ></p
          ></no-ssr>
        </b-col>
        <b-col lg="10" class="description-container mx-auto">
          <img
            class="service-adv-1"
            :src="kerastaseData.paragraph_1.image.url"
          />
          <p class="sub-title-image">
            {{ kerastaseData.paragraph_1.image_description }}
          </p>
        </b-col>
        <b-col lg="8" class="description-container mx-auto">
          <h3 class="description-title mt-4 mb-3">
            {{ kerastaseData.title_2 }}
          </h3>
          <p class="description">{{ kerastaseData.paragraph_2.content }}</p>
        </b-col>
        <b-col lg="12" class="description-container mx-auto">
          <img
            class="service-adv-2"
            :src="kerastaseData.paragraph_2.image.url"
          />
          <p class="sub-title-image">
            {{ kerastaseData.paragraph_2.image_description }}
          </p>
        </b-col>
        <b-col lg="8" class="description-container mx-auto">
          <h3
            class="description-title mt-4 mb-3"
            style="white-space: pre-line;"
          >
            {{ kerastaseData.title_3 }}
          </h3>
          <no-ssr
            ><p
              class="description"
              v-html="kerastaseData.paragraph_3.content"
            ></p
          ></no-ssr>
        </b-col>
        <b-col lg="10" class="description-container mx-auto mb-5">
          <img
            class="service-adv-3"
            :src="kerastaseData.paragraph_3.image.url"
          />
          <div class="arrow-container">
            <img class="arrow-back" src="/images/service/arrow-back.png" />
            <img class="arrow-next" src="/images/service/arrow-next.png" />
          </div>
          <div class="shampoo-container mx-auto">
            <div class="shampoo-number">01</div>
            <div class="shampoo-text-container">
              <span class="shampoo-text">
                {{ kerastaseData.paragraph_3.image_description }}</span
              >
            </div>
          </div>
        </b-col>
        <b-col lg="8" class="description-container mx-auto">
          <h3 class="description-title mt-5 mb-3">
            {{ kerastaseData.title_4 }}
          </h3>
          <p class="description">{{ kerastaseData.paragraph_4.content_1 }}</p>
          <img
            class="service-adv-4"
            :src="kerastaseData.paragraph_4.image.url"
          />
          <p class="sub-title-image">
            {{ kerastaseData.paragraph_4.image_description }}
          </p>
          <no-ssr
            ><p
              class="description"
              v-html="kerastaseData.paragraph_4.content_2"
            ></p
          ></no-ssr>
        </b-col>
        <b-col lg="8" class="description-container mx-auto">
          <h3
            class="description-title mt-4 mb-3"
            style="white-space: pre-line;"
          >
            {{ kerastaseData.title_5 }}
          </h3>
          <p class="description">{{ kerastaseData.paragraph_5.content_1 }}</p>
          <p class="description">{{ kerastaseData.paragraph_5.content_2 }}</p>
          <p class="description">{{ kerastaseData.paragraph_5.content_3 }}</p>
        </b-col>
        <b-col md="6" lg="5" class="mx-auto">
          <div class="box-container">
            <div class="box-title-container">
              <span class="title text-uppercase"
                >Bạn đã sẵn sàng để <br />
                trải nghiệm tại Eforea?</span
              >
            </div>
            <img class="my-5" src="/images/service/line-service-box-1.png" />
            <div class="content">
              <span style="white-space: pre-line;">{{
                kerastaseData.quote
              }}</span>
            </div>
            <img class="my-5" src="/images/service/line-service-box-2.png" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: 'aaa',
    }
  },
  computed: {
    ...mapGetters(['kerastaseData']),
  },
}
</script>

<style lang="stylus" scoped>
.kerastate-service-container
  background-color #f8f8f8
  .banner
    width 100%
  .title
    text-align center
    font-size 48px
    color rgb(118, 204, 221)
    font-style italic
  .sub-title-image
    font-size 16px
    color #959699
    font-family Myriad Pro
    font-style italic
  .description-container
    .service-adv-1,
    .service-adv-2,
    .service-adv-3,
    .service-adv-4
      width 100%
    .description
      font-size 18px
    .description-title
      margin 20px 0
      font-size 36px
      color #000
      font-weight bold
    .sub-title-image
      font-size 16px
      color #959699
      font-family Myriad Pro
      font-style italic
    .arrow-container
      display flex
      justify-content space-between
      width 90%
      left 5%
      top 45%
      position absolute
    .shampoo-container
      display flex
      justify-content center
      width 90%
      left 5%
      position absolute
      bottom -87px
      .shampoo-number
        font-size 170px
        color #76ccdd
        font-family 'Playfair Display', serif
        font-style italic
      .shampoo-text-container
        background-color #000
        padding 15px
        margin-top 90px
        margin-left 20px
        text-align left
        height 35%
        .shampoo-text
          color #fff
          font-size 18px
    @media(max-width 992px)
      .shampoo-container
        text-align left
        align-items flex-end
        .shampoo-text-container
          margin 0
  .box-container
    .box-title-container
      background-color #76ccdd
      padding 10px
      .title
        color #fff
        font-size 18px
    img
      width 100%
    .content
      text-align center
      color #959699
      font-size 36px
      font-family 'Playfair Display', serif
      font-style italic
</style>
