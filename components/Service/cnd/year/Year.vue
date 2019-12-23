<template>
  <div>
    <b-container>
      <b-row>
        <b-col
          md="3"
          class="text-center"
          v-for="(item, id) in CNDData.Years"
          :key="id"
        >
          <div>
            <div class="wrap-imagine">
              <img
                class="img-fluid error-img"
                :src="item.img.url"
                alt="backgroup_image_404"
              />
            </div>
            <p class="wrap-year">{{ item.year }}</p>
            <p class="wrap-content">{{ item.content }}</p>
          </div>
        </b-col>
      </b-row>
      <div class="try-color"><try-color /></div>
    </b-container>
  </div>
</template>
<script>
import TryColor from './TryColor'
import { mapGetters } from 'vuex'

export default {
  components: {
    TryColor,
  },
  computed: {
    ...mapGetters(['CNDData']),
  },
}
</script>

<style lang="stylus" scoped>
.wrap-imagine
  margin-bottom 15px
.wrap-year
  font-size 18px
  color #76ccdd
  margin-bottom 0px
.wrap-content
  font-size 14px
.try-color
  margin-top 15px
</style>
