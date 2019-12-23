<template>
  <section class="error-404">
    <img
      class="img-fluid error-img"
      src="/images/backgroundError404.png"
      alt="backgroup_image_404"
    />
    <b-container>
      <b-row>
        <b-col>
          <div class="inner-unconst text-center">
            <h1 class="text-uppercase mb-4">We are so sorry</h1>
            <p class="mb-0">This site is still under construction.</p>
            <p class="mb-5">Thank you for visiting us and see you soon!</p>
            <b-button href="/" variant="info">Về trang chủ</b-button>
          </div>
        </b-col>
        <b-col md="1" />
        <b-col>
          <img
            class="img-fluid pt-5"
            src="/images/VectorSmartObject.png"
            alt="vector"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="stylus" scoped>
.error-404 {
  padding-bottom: 70px;

  .error-img {
    width: 100%;
  }
}

.inner-unconst {
  padding-top: 120px;

  p, h1 {
    font-weight: 300;
    font-style: normal;
    font-family: 'Roboto', sans-serif;
  }
}

@media (max-width: 991px) {
  .inner-unconst {
    padding-top: 60px !important;

    h1 {
      font-size: 2rem !important;
    }
  }
}
</style>
