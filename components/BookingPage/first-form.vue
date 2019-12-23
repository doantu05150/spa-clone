<template>
  <div class="first-form">
    <div class="form-data">
      <div class="wrap-button-show text-center">
        <div class="wrap-noti text-center" v-if="isNoti == true">
          <div class="header">
            <div class="title-noti">Thông báo</div>
            <button class="button-show" @click="showNoti">
              <img src="/images/booking/close-noti.png" alt="" />
            </button>
          </div>
          <div class="content-noti">
            Để được hỗ trợ tốt nhất khi
            <b>đặt lịch hẹn gấp hoặc cho 2 người trở lên,</b> Quý khách vui lòng
            gọi đến số tổng đài miễn phí <b>1800-9467</b> hoặc hotline
            <b>093-333-3925!</b>
          </div>
          <div class="footer-noti">Eforea hân hạnh được phục vụ quý khách</div>
        </div>
        <button class="button-show" @click="showNoti">
          <img src="/images/booking/button-location.png" alt="" />
        </button>
      </div>
      <no-ssr>
        <iframe
          :src="
            `https://maps.google.com/maps?q=${stores[selected - 1].lat},${
              stores[selected - 1].long
            }&hl=es;z=14&output=embed`
          "
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </no-ssr>
      <div class="button-wrapper">
        <button
          class="button mt-3"
          v-for="(store, index) in stores"
          :key="`store_${index}`"
          :class="{ active: store.id === selected }"
          @click="store.active && onSelectStore(store)"
          :disabled="!store.active || store.id === selected"
        >
          <div class="name">{{ store.name }}</div>
          <div class="address">{{ store.address }}</div>
        </button>
      </div>
    </div>
    <div class="form-addition">
      <div class="next-step" @click="$emit('nextStep')">
        <div>BƯỚC<br />TIẾP<br />THEO</div>
        <img src="/images/arrow.png" class="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isNoti: true,
    }
  },
  props: {
    stores: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
      required: true,
    },
  },
  methods: {
    showNoti() {
      this.isNoti = !this.isNoti
    },
    onSelectStore(store) {
      this.$emit('setAtt', 'store', store.id)
      this.$emit('setAtt', 'use_hair', false)
      this.$emit('setAtt', 'use_nail', false)
      this.$emit('setAtt', 'use_face', false)
      this.$emit('setAtt', 'use_body_service', false)
      this.$emit('setAtt', 'use_special_service', false)
    },
  },
}
</script>

<style lang="stylus" scoped>
.first-form {
  font-size: 1rem;
  display: flex;
  height: 100%;
  color: #959699;
  font-size: 18px;

  .wrap-noti {
    position: absolute;
    background-color: #ffffff;
    bottom: 50px;
    left: -230px;
    width: 540px;
    border: solid 1px;
    border-radius: 9px;

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;

      .title-noti {
        font-style: normal;
        color: #7ecfdf;
        text-transform: uppercase;
      }

      .button-show {
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        padding: 0;
        top: 10px;
        right: 10px;

        &:focus {
          outline: none;
        }
      }
    }

    .content-noti {
      color: #000;
      padding: 0 48px 16px;
    }

    .footer-noti {
      color: #000;
      padding-bottom: 24px;
    }
  }

  .wrap-button-show {
    position: absolute;
    top: 50%;
    left: 45%;
    z-index: 10;

    .button-show {
      background: none;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  .form-data {
    width: 92%;
    padding-right: 4rem;
    position: relative;

    .button-wrapper {
      position: absolute;
      bottom: 2rem;
      right: 0;

      .button {
        width: 18rem;
        text-align: center;
        background-color: #ffffff;
        line-height: 1.2;
        padding: 0.8rem 0;
        cursor: pointer;
        border-radius: 4px;
        display: block;
        border: 0;

        .name {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .address {
          font-weight: 400;
        }
      }

      .active {
        background-color: #7ecfdf !important;
        color: #fff;
      }

      .new-address {
        background-color: #959699;
        color: #d9d9d9;
        height: 80px;
        line-height: 80px;
        padding-top: 0;
      }
    }
  }

  .form-addition {
    width: 15%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .next-step {
      text-align: right;
      display: flex;
      align-items: center;
      font-weight: 300;
      line-height: 1.2;
      font-size: 1.2rem;
      cursor: pointer;

      .arrow {
        padding-left: 1rem;
      }
    }
  }
}
</style>
