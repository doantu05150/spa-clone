<template>
  <b-container>
    <b-row>
      <b-col>
        <div v-for="(item, index) in contactData.map" :key="`${index}`">
          <no-ssr>
            <iframe
              v-if="selected === index + 1"
              :src="item.index"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </no-ssr>
        </div>
      </b-col>
    </b-row>
    <b-row class="btn-wrapper">
      <b-col class="d-flex justify-content-center">
        <div
          class="btn-address"
          v-for="(item, index) in contactData.map"
          :key="`${index}`"
          @click="selected = index + 1"
        >
          <div class="name">{{ item.name }}</div>
          <no-ssr> <div class="address" v-html="item.address"></div> </no-ssr>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selected: 1,
    }
  },
  computed: {
    ...mapGetters(['contactData']),
  },
}
</script>

<style lang="stylus" scoped>
.btn-wrapper {
  margin-top: -30px;

  .btn-address {
    background: #76ccdd;
    text-align: center;
    color: #fff;
    margin-right: 25px;
    min-width: 250px;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;

    .name {
      font-weight: 600;
    }

    .address {
      font-weight: 300;
    }
  }
}
</style>
