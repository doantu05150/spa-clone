<template>
  <section>
    <div class="title-dermagolica"><h4>Spa</h4></div>
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <div class="wrapper-information">
            <h3>
              Dermalogica<br />
              {{ dermagolicaData.title_1 }}
            </h3>
            <no-ssr>
              <p v-html="dermagolicaData.paragraph_1.content"></p>
            </no-ssr>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="10" offset-md="1" class="text-center">
          <div>
            <img
              class="img-fluid"
              :src="dermagolicaData.paragraph_1.image.url"
            />
          </div>
          <h3 class="imt-title">
            {{ dermagolicaData.paragraph_1.image_description }}
          </h3>
          <div class="flex-content">
            <div
              v-for="(item, index) in dermagolicaData.adward"
              :key="`${index}`"
              class="flex-information"
            >
              <h4>{{ item.number }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset-md="2" class="text-center">
          <div class="wrapper-information">
            <p>{{ dermagolicaData.paragraph_2.content }}</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="10" offset-md="1" class="text-center">
          <div>
            <img
              class="img-fluid"
              :src="dermagolicaData.paragraph_2.image.url"
            />
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
    ...mapGetters(['dermagolicaData']),
  },
}
</script>

<style lang="stylus" scoped>
.title-dermagolica {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 45px;

  h4 {
    font-size: 48px;
    color: #76ccdd;
  }
}

.wrapper-information {
  h3 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 17px;
  }
}

.imt-title {
  font-size: 17px;
  color: #959699;
}

.flex-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;

  .flex-information {
    h4 {
      font-family: '' Franklin Gothic Medium ', ' Arial Narrow ', Arial, sans-serif';
      font-weight: bold;
      font-size: 55px;
    }

    p {
      font-size: 13px;
      font-weight: bold;
    }
  }
}

.name-dermalogica {
  font-size: 17px;
  text-align: center;
}

@media (max-width: 576px) {
  .flex-information {
    h4 {
      font-size: 30px !important;
    }

    p {
      font-size: 10px !important;
    }
  }
}
</style>
