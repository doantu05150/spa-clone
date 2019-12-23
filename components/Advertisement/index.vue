<template>
  <section>
    <banner />
    <h1 class="text-center title mt-4 mb-4">Đặc quyền</h1>
    <b-container>
      <b-row>
        <b-col md="12">
          <b-card-group columns>
            <nuxt-link
              v-for="adver in advertisement"
              :key="adver.id"
              class="link-blog"
              to="/advertisement/chuong-trinh-quang-cao"
            >
              <adver-card :adver="adver" />
            </nuxt-link>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Banner from './Banner'
import AdverCard from './AdverCard'
export default {
  components: {
    Banner,
    AdverCard,
  },
  data() {
    return {
      advertisement: [
        {
          img: 'popup-image.png',
          title: 'Đặc quyền Euphorea Club',
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
.link-blog {
  color: #000;

  &:hover {
    text-decoration: none;
  }
}
</style>
