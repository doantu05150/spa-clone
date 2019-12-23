<template>
  <b-modal centered :id="id" hide-header hide-footer class="event-modal">
    <img src="/images/user-top.jpg" alt="event top" class="image-top" />
    <div class="text-center wrap-box-event">
      <p class="event-title">Ưu đãi</p>
      <p class="title">{{ treatment }}</p>
      <p class="date">xx</p>
      <p class="content">xx</p>
    </div>
    <div class="wrap-button text-center">
      <b-btn class="button-close" @click="$bvModal.hide(id)">
        <i class="fas fa-times icon"></i>
      </b-btn>
    </div>
  </b-modal>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      endowData: null,
    }
  },
  props: {
    modalId: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
    },
  },
  mounted() {
    axios
      .get(
        `https://myspa.eforealifestyle.com/api/v1/services/list/${
          this.modalId
        }`,
      )
      .then(response => {
        console.log({ response })
        this.endowData = response.data
      })
  },
}
</script>
<style lang="stylus" scoped>
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
