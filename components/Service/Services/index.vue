<template>
  <section class="services">
    <b-container>
      <h1 class="text-center">Dịch vụ</h1>
      <b-row>
        <b-col
          cols="6"
          md="3"
          class="text-center"
          v-for="(item, id) in homeData.services"
          :key="id"
        >
          <div>
            <figure class="file-img">
              <router-link :to="`/service/${sendPath(item.title)}`">
                <img class="services-img img-fluid" :src="item.image.url" />
              </router-link>
            </figure>
            <router-link
              :to="`/service/${sendPath(item.title)}`"
              class="sendPath"
            >
              <p class="text-center services-title">{{ item.title }}</p>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['homeData']),
  },
  methods: {
    sendPath(title) {
      if (title === 'CHĂM SÓC TÓC') {
        return 'kerastase'
      }
      if (title === 'CHĂM SÓC MÓNG') {
        return 'cnd'
      }
      if (title === 'SPA') {
        return 'dermagolica'
      }
      return 'boutique-salon'
    },
  },
}
</script>

<style lang="stylus" scoped>
.services {
  background: #f8f8f8;
  padding: 50px;
  margin-bottom: -40px;

  h1 {
    color: #76ccdd;
    margin-bottom: 40px;
  }

  .file-img {
    height: 30vh;
  }

  .sendPath {
    color: #212529;
    text-decoration: none;
  }

  .services-title {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .services-img {
    height: 60px;
  }

  .services {
    background: #f8f8f8;
    padding: 50px;

    h1 {
      font-size: 25px;
      margin-top: -30px;
      margin-bottom: 20px;
    }

    .file-img {
      height: 15vh;
    }

    .services-title {
      font-size: 14px;
    }
  }
}

@media (max-width: 576px) {
  .services-img {
    height: 60px;
  }

  .services {
    background: #f8f8f8;
    padding: 50px;

    h1 {
      font-size: 25px;
      margin-top: -30px;
      margin-bottom: 20px;
    }

    .file-img {
      height: 10vh;
    }

    .services-title {
      font-size: 14px;
    }
  }
}
</style>
