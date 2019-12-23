<template>
  <section class="booking-section">
    <h1 class="booking-title pt-5 pb-4">Đặt lịch hẹn</h1>
    <b-container class="booking-form">
      <div class="status-nav">
        <div class="status-progress">
          <div
            class="progress-bar"
            :class="{ 'pb-active': currentStep >= 2 }"
          />
          <div
            class="progress-bar"
            :class="{ 'pb-active': currentStep >= 3 }"
          />
        </div>
        <div class="tab" :class="{ 'active-tab': currentStep >= 1 }">
          <div class="tab-pill" @click="currentStep = 1">1</div>
          <div class="tab-label" :style="currentStep === 1 && { opacity: 1 }">
            CHỌN<br />ĐỊA ĐIỂM
          </div>
        </div>
        <div class="tab" :class="{ 'active-tab': currentStep >= 2 }">
          <div class="tab-pill" @click="currentStep = 2">2</div>
          <div class="tab-label" :style="currentStep === 2 && { opacity: 1 }">
            CHỌN<br />DỊCH VỤ
          </div>
        </div>
        <div class="tab" :class="{ 'active-tab': currentStep >= 3 }">
          <div class="tab-pill" @click="currentStep = 3">3</div>
          <div class="tab-label" :style="currentStep === 3 && { opacity: 1 }">
            ĐẶT<br />LỊCH HẸN
          </div>
        </div>
      </div>
      <div class="tab-content">
        <first-form
          v-if="currentStep === 1"
          @setAtt="setAtt"
          :stores="stores"
          :selected="store"
          @nextStep="nextStep"
        />
        <second-form
          v-if="currentStep === 2"
          :store="store"
          :services="servicesObj"
          @setAtt="setAtt"
          @nextStep="nextStep"
        />
        <fourth-form
          v-if="currentStep === 3"
          :services="listService"
          @setAtt="setAtt"
          @submit="onSubmit"
          @backStep="backStep"
        />
      </div>
    </b-container>
    <b-modal
      id="modal-success"
      v-model="successModal"
      header-class="modal-header"
      footer-class="modal-footer"
      ok-only
      @ok="onModalOk"
      title="Booking successfully"
    >
      <p class="my-4">Your booking is success</p>
    </b-modal>
    <b-modal
      id="modal-failure"
      v-model="failModal"
      header-bg-variant="danger"
      ok-only
      ok-variant="danger"
      title="Booking failure"
    >
      <p class="my-4">Something went wrong! Try againt!</p>
    </b-modal>
  </section>
</template>
<script>
import axios from 'axios'
import FirstForm from './first-form'
import SecondForm from './second-form'
import FourthForm from './fourth-form'

export default {
  props: {
    stores: {
      type: Array,
      required: true,
    },
  },
  components: {
    FirstForm,
    SecondForm,
    FourthForm,
  },
  data() {
    /* eslint-disable camelcase */
    return {
      successModal: false,
      failModal: false,
      currentStep: 1,
      name: '',
      phone: '',
      email: '',
      booking_date: '',
      booking_time: '',
      store: 1,
      use_hair: false,
      use_nail: false,
      use_face: false,
      use_body_service: false,
      use_special_service: false,
      number_of_people: true,
    }
  },
  methods: {
    backStep() {
      this.currentStep = this.currentStep - 1
    },
    nextStep() {
      this.currentStep = this.currentStep + 1
    },
    setStep(value) {
      this.currentStep = value
    },
    setAtt(type, value) {
      this[type] = value
    },
    onSubmit() {
      const {
        name,
        phone,
        email,
        booking_date,
        booking_time,
        store,
        use_hair,
        use_nail,
        use_face,
        use_body_service,
        use_special_service,
        number_of_people,
      } = this
      const dd =
        booking_date.getDate() < 10
          ? '0' + booking_date.getDate()
          : booking_date.getDate()
      const mm =
        booking_date.getMonth() < 9
          ? '0' + (booking_date.getMonth() + 1)
          : booking_date.getMonth() + 1
      const date = dd + '/' + mm + '/' + booking_date.getFullYear()
      const time = booking_time.slice(0, 5)
      const useHairStr = this.capitalize(use_hair)
      const useNailStr = this.capitalize(use_nail)
      const useFaceStr = this.capitalize(use_face)
      const useBodyStr = this.capitalize(use_body_service)
      const useSpecialStr = this.capitalize(use_special_service)
      const numberPeople = this.capitalize(number_of_people)
      axios
        .get('http://178.128.28.158:8069/api/pos.booking/create_booking', {
          params: {
            name,
            phone,
            email,
            booking_date: date,
            booking_time: time,
            store,
            use_hair: useHairStr,
            use_nail: useNailStr,
            use_face: useFaceStr,
            use_body_service: useBodyStr,
            use_special_service: useSpecialStr,
            number_of_people: numberPeople,
          },
          /* eslint-enable camelcase */
        })
        .then(res => {
          if (res.data.message === 'Booking is successful.') {
            this.successModal = true
          } else {
            this.failModal = true
          }
        })
    },
    onModalOk() {
      this.$router.push('/')
    },
    capitalize(boole) {
      const string = boole + ''
      const res = string.charAt(0).toUpperCase() + string.slice(1)
      return res
    },
  },
  computed: {
    listService() {
      return [
        {
          title: 'Chăm sóc móng',
          selected: this.use_nail,
        },
        {
          title: 'Chăm sóc tóc',
          selected: this.use_hair,
        },
        {
          title: 'Chăm sóc da mặt',
          selected: this.use_face,
        },
        {
          title: 'Chăm sóc toàn thân',
          selected: this.use_body_service,
        },
        {
          title: 'Dịch vụ đặc biệt',
          selected: this.use_special_service,
        },
      ]
    },
    servicesObj() {
      const {
        use_nail,
        use_hair,
        use_face,
        use_body_service,
        use_special_service,
      } = this
      return {
        use_nail,
        use_hair,
        use_face,
        use_body_service,
        use_special_service,
      }
    },
  },
}
</script>

<style lang="stylus">
.booking-section {
  background-color: #f8f8f8;
  padding-bottom: 2rem;

  .booking-title {
    text-align: center;
    color: #7ecfdf;
  }

  .booking-form {
    display: flex;

    .status-nav {
      position: relative;

      .status-progress {
        position: absolute;
        top: 5rem;
        left: 1rem;
        height: 28rem;
        width: 0.1rem;
        display: flex;
        flex-direction: column;
        background-color: #959699;

        .progress-bar {
          flex: 1;
          background-color: #7ecfdf;
          opacity: 0;
        }

        .pb-active {
          opacity: 1;
        }
      }

      .tab {
        padding: 5rem 0;
        position: relative;

        .tab-pill {
          width: 2rem;
          height: 2rem;
          border: 0.1rem solid #959699;
          border-radius: 50%;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.4rem;
          text-align: center;
          line-height: 1;
          background-color: #fff;
          color: #959699;
          cursor: pointer;
        }

        .tab-label {
          margin-top: -1.2rem;
          margin-left: 1.5rem;
          font-size: 0.9rem;
          color: #7ecfdf;
          transform: rotate(90deg);
          font-weight: bold;
          opacity: 0;
        }
      }

      .active-tab {
        .tab-pill {
          border: 0.1rem solid #7ecfdf;
          color: #7ecfdf;
        }
      }
    }

    .tab-content {
      flex: 1;
      padding: 5rem 0 5rem 0;
    }
  }
}

.modal-header {
  background-color: #76ccdd;

  .modal-title {
    color: #fff;
  }
}

.modal-footer {
  .btn {
    background-color: #76ccdd;
  }
}
</style>
