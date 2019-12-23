<template>
  <div class="mobile-gal">
    <h4 class="text-center title mt-4">@eforea_salonspa</h4>
    <div class="container" v-if="images.length > 0">
      <div class="img-1 image-wrapper">
        <img :src="images[0].src" />
        <a class="text" :href="images[0].href" target="_blank"> Instagram </a>
      </div>
      <div class="img-2 image-wrapper">
        <img :src="images[1].src" />
        <a class="text" :href="images[1].href" target="_blank"> Instagram </a>
      </div>
      <div class="img-3 image-wrapper">
        <img :src="images[2].src" />
        <a class="text" :href="images[2].href" target="_blank"> Instagram </a>
      </div>
      <div class="img-4 image-wrapper">
        <img :src="images[3].src" />
        <a class="text" :href="images[3].href" target="_blank"> Instagram </a>
      </div>
      <div class="img-5 image-wrapper">
        <img :src="images[4].src" />
        <a class="text" :href="images[4].href" target="_blank"> Instagram </a>
      </div>
      <div class="img-6 image-wrapper">
        <img :src="images[5].src" />
        <a class="text" :href="images[5].href" target="_blank"> Instagram </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="stylus" scoped>
.mobile-gal {
  display: none;
  background-color: #fff;

  .title {
    color: #76ccdd;
    padding-top: 30px;
  }

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 20px;

    .image-wrapper {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(118, 204, 221, 0.7);
        opacity: 0;
        transition: all 0.15s ease-in;
      }

      &:hover {
        &:before {
          opacity: 1;
        }

        .text {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 8px;
        font-weight: bold;
        transform: translateY(30px) scale(0.5);
        transition: all 0.15s ease-in-out;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        opacity: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 5;
    }

    .img-2 {
      grid-column: 2 / 3;
      grid-row: 1 / 4;
    }

    .img-3 {
      grid-column: 3 / -1;
      grid-row: 1 / 5;
    }

    .img-4 {
      grid-column: 1 / 2;
      grid-row: 5 / 7;
    }

    .img-5 {
      grid-column: 2 / 3;
      grid-row: 4 / 7;
    }

    .img-6 {
      grid-column: 3 / -1;
      grid-row: 5 / 7;
    }
  }
}

@media (max-width: 576px) {
  .mobile-gal {
    display: block;
    background-color: #fff;
  }
}
</style>
