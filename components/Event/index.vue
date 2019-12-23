<template>
  <div class="mt-5">
    <b-row>
      <b-col
        v-for="(item, index) in giftUser"
        :key="`${index}`"
        class="wrap-box"
      >
        <div class="one-box text-center">
          <p class="event">Ưu đãi</p>
          <p class="title">{{ item.treatment }}</p>
          <p class="date">date</p>
          <b-button class="button" @click="chooseEvent(index)"
            >Chi tiết</b-button
          >
        </div>
        <modal-user
          :id="`user-event-modal-${index}`"
          :treatment="item.treatment"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ModalUser from './modal'
import { mapGetters } from 'vuex'
export default {
  components: {
    ModalUser,
  },
  data() {
    return {
      eventSelected: {
        title: '',
        date: '',
        content: '',
      },
    }
  },
  methods: {
    chooseEvent(index) {
      console.log(this)
      this.$bvModal.show(`user-event-modal-${index}`)
    },
    closeModal() {
      console.log('close')
    },
  },
  computed: {
    ...mapGetters(['giftUser']),
  },
}
</script>

<style lang="stylus" scoped>
.wrap-box {
  border-radius: 10px;
  margin: 0 12px;
  background-image: url('/images/event-bg.png');
  background-size: cover;
  padding: 13px;
  box-sizing: content-box;

  .one-box {
    background: #ffffffe6;
    padding: 15px;

    .button {
      background: #76ccdd;
      border: none;
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.25rem;
      height: 40px;
      width: 204px;
    }

    .event {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 5px;
    }
  }
}

.wrap-button {
  width: 100%;

  .button-close {
    background: #76ccdd;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding-top: 8px;
    padding-bottom: 4px;
    margin: 20px 0 40px 0;

    .icon {
      font-size: 20px;
    }
  }
}

.wrap-box-event {
  width: 770px;

  .event-title {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  .content {
    padding: 25px 100px 25px 100px;
    margin: 0;
    font-weight: 300;
    font-size: 14px;
  }
}

.title {
  color: #76ccdd;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
}

.date {
  font-weight: 300;
  font-size: 14px;
}

.image-top {
  width: 768px;
}
</style>
