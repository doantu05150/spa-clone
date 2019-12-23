<template>
  <section class="try-color">
    <div class="banner">
      <img
        src="/images/banner/BannerChooseColor.png"
        class="img-fluid choose-color"
        alt="try-color-banner"
      />
      <div class="text-banner text-white">
        <h1>Đừng nghĩ, hãy thử ngay!</h1>
        <h1>Với hơn 100 màu sơn từ O.P.I và CND</h1>
        <b-button to="/choose-color" variant="link" class="text-white start-try"
          >Bắt đầu trải nghiệm</b-button
        >
        <img src="/images/line.png" class="img-fluid" alt="try-color-banner" />
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.banner
  position relative
  .choose-color
    width 100%
  .text-banner
    position absolute
    width 100%
    height 100%
    top 0
    right 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    h1
      font-size 4rem
    .start-try
      font-size 18px
      text-decoration none
@media (max-width 1090px)
  h1
    font-size 3rem!important
@media (max-width 810px)
  h1
    font-size 2rem!important
@media (max-width 550px)
  h1
    font-size 1.2rem!important
</style>
