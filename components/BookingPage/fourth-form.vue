<template>
  <div class="fourth-form">
    <b-row>
      <b-col md="6">
        <div class="booking-col-1 py-4 px-3 mb-4 mx-2">
          <p class="place-text">Địa điểm: <strong>EFOREA TÂN CẢNG</strong></p>
          <div class="service">
            <P class="take-care-hair mb-1"
              >Bạn đã chọn <strong>{{ numberOfService }} DỊCH VỤ</strong></P
            >
            <div
              v-for="(service, index) in selectedService"
              :key="`service_${index}`"
            >
              <span>- {{ service.title }}</span>
            </div>
          </div>
          <div class="date-container d-flex mt-5">
            <span class="date-text"><strong>NGÀY THÁNG</strong></span>
            <datepicker
              v-model="dateSelect"
              wrapper-class="date-dropdown"
              format="D, MMMM dd, yyyy"
              :disabledDates="disabledDate"
              @selected="onSelectDate"
              input-class="date-input"
            >
              <span slot="afterDateInput" class="di-arrow-down">
                <img src="/images/arrow-down.png" />
              </span>
            </datepicker>
          </div>
          <div class="time-container d-flex mt-3">
            <span class="time-text"><strong>THỜI GIAN</strong></span>
            <div @click="showTime = !showTime" class="time-dropdown d-flex">
              <span>{{ timeSelect }}</span> <img src="/images/arrow-down.png" />
            </div>
          </div>
          <div v-if="showTime" class="dropdown-list">
            <div
              v-for="(item, id) in timeList"
              :key="id"
              class="dropdown-item-container d-flex"
            >
              <p
                :class="{ disabled: timeDisable(item) }"
                @click="timeDisable(item) ? null : onSelectTime(item)"
              >
                {{ item }}
              </p>
            </div>
          </div>
          <div class="checkbox-container d-flex mt-4 justify-content-between">
            <div class="d-flex card-footer">
              <div class="d-flex wrap-back" @click="$emit('backStep')">
                <img src="/images/booking/icon-back.png" class="image-back" />
                <span class="text-back">Quay lại</span>
              </div>
            </div>
            <div class="d-flex wrap-check">
              <div @click="checkBox" class="checkbox mr-2 d-flex">
                <img
                  v-if="check"
                  class="fa-check"
                  src="/images/check-tick.png"
                />
              </div>
              <span class="confirm-booking-text">Xác nhận lịch hẹn</span>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6">
        <div class="booking-col-2">
          <div class="description">
            Xin quý khách vui lòng để lại tên và số điện thoại để nhân viên của
            chúng tôi gọi điện xác nhận lịch hẹn với quý khách.
          </div>
          <div class="d-flex one-row">
            <div class="name-title mb-0 lable-left">
              Họ & Tên <strong class="note-star">*</strong>
            </div>
            <b-form-input
              v-model="name"
              class="booking-input"
              @input="onChangeText('name')"
              type="text"
              placeholder="Enter your name"
            ></b-form-input>
          </div>
          <div class="d-flex one-row">
            <div class="email-title lable-left">
              Email <strong class="note-star">*</strong>
            </div>
            <b-form-input
              v-model="email"
              @input="onChangeText('email')"
              class="booking-input"
              type="text"
              placeholder="Enter your email"
            ></b-form-input>
          </div>
          <div class="d-flex one-row">
            <div class="phone-title lable-left">
              Sdt <strong class="note-star">*</strong>
            </div>
            <b-form-input
              v-model="phone"
              @input="onChangeText('phone')"
              class="booking-input"
              type="text"
              placeholder="Enter your phone"
            ></b-form-input>
          </div>
          <div class="d-flex one-row">
            <div class="phone-title lable-left">Ghi chú</div>
            <div class="d-flex flex-column wrap-note">
              <b-form-textarea
                v-model="note1"
                class="booking-input"
                type="text"
                :rows="2"
                placeholder="Enter note"
              ></b-form-textarea>
            </div>
          </div>
          <div class="d-flex one-row">
            <p class="phone-title mt-3 mb-0 lable-left"></p>
            <div class="d-flex flex-column wrap-note">
              <b-button @click="$emit('submit')" class="btn-booking mt-5">
                ĐẶT LỊCH HẸN
              </b-button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      note1: '',
      note2: '',
      dateSelect: null,
      timeSelect: '16:30 PM',
      check: true,
      showTime: false,
    }
  },
  mounted() {
    const now = new Date()
    const timeNow = `${now.getHours()}:${now.getMinutes()}`
    let defaultTime = this.timeList.find(time => time > timeNow)
    if (timeNow > '19:30') {
      now.setDate(now.getDate() + 1)
      defaultTime = '09:00 AM'
    }
    this.dateSelect = now
    this.timeSelect = defaultTime
    this.$emit('setAtt', 'booking_date', this.dateSelect)
    this.$emit('setAtt', 'booking_time', defaultTime)
  },
  methods: {
    checkBox() {
      this.check = !this.check
    },
    onSelectDate() {
      this.$emit('setAtt', 'booking_date', this.dateSelect)
    },
    onSelectTime(item) {
      this.timeSelect = item
      this.$emit('setAtt', 'booking_time', item)
      this.showTime = false
    },
    onChangeText(type) {
      this.$emit('setAtt', type, this[type])
    },
    dateFormat(now) {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      return `${days[now.getDay()]}, ${
        months[now.getMonth()]
      } ${now.getDate()}, ${now.getFullYear()}`
    },
    timeDisable(time) {
      const now = new Date()
      const timeNow = `${now.getHours()}:${now.getMinutes()}`
      return this.isToday(this.dateSelect) && time < timeNow
    },
    isToday(date) {
      const now = new Date()
      return (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      )
    },
  },
  computed: {
    numberOfService() {
      return this.services.filter(service => service.selected).length
    },
    selectedService() {
      return this.services.filter(service => service.selected)
    },
    disabledDate() {
      const day = new Date()
      const timeNow = `${day.getHours()}:${day.getMinutes()}`
      if (timeNow < '19:30') {
        day.setDate(day.getDate() - 1)
      }
      return {
        to: day,
      }
    },
    timeList() {
      return [
        '09:00 AM',
        '09:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '13:00 PM',
        '13:30 PM',
        '14:00 PM',
        '14:30 PM',
        '15:00 PM',
        '15:30 PM',
        '16:00 PM',
        '16:30 PM',
        '17:00 PM',
        '17:30 PM',
        '18:00 PM',
        '18:30 PM',
        '19:00 PM',
        '19:30 PM',
      ]
    },
  },
}
</script>
<style lang="stylus">
.one-row {
  margin-bottom: 16px;

  .lable-left {
    width: 120px;
    line-height: 38px;
    margin-right: 10px !important;
  }
}

.wrap-note {
  width: 100%;
}

.btn-booking {
  width: 210px;
}

.booking-col-1 {
  box-shadow: 0px 0px 2px 2px #eee;
  height: 100%;

  .place-text, .take-care-hair, .checkbox {
    font-size: 18px;
    font-family: Montserrat;
  }

  .service {
    .type-color {
      color: #464646;
      font-weight: bold;
      display: flex;
      flex-wrap: wrap;

      div {
        width: 50%;

        span {
          font-size: 16px;
          font-family: Montserrat;
          color: #464646;
        }
      }
    }
  }

  .date-container, .time-container {
    font-size: 18px;
    justify-content: space-between;
    align-items: center;

    .date-text, .time-text {
      width: 30%;
    }

    .time-dropdown {
      width: 70%;
      justify-content: space-between;
      align-items: center;
      background-color: #76ccdd;
      padding: 15px 12px;
      color: #fff;
      font-family: Montserrat;
      cursor: pointer;
      border-radius: 3px;
    }

    .date-dropdown {
      width: 70%;
      align-items: center;
      background-color: #76ccdd;
      padding: 15px 12px;
      cursor: pointer;
      font-family: Montserrat;
      border-radius: 3px;
    }

    .date-input {
      background-color: #76ccdd !important;
      border: 0;
      color: #fff;
      cursor: pointer;
      width: 90%;
    }

    .di-arrow-down {
      position: absolute;
      right: 12px;
    }
  }

  .dropdown-list {
    margin-left: 30%;
    box-shadow: 0px 0px 2px 2px #eee;
    overflow-y: scroll;
    height: 200px;

    .dropdown-item-container {
      align-items: center;
      padding: 8px 12px;
      border-bottom: 1px solid #999;
      cursor: pointer;

      p {
        margin-bottom: 0;
        width: 100%;
      }

      .disabled {
        opacity: 0.4;
      }
    }
  }

  .checkbox-container {
    width: 100%;
    float: right;
    margin-right: 0;
    font-size: 17px;
    align-items: center;
    padding-bottom: 40px;

    .wrap-check {
      align-items: center;

      .checkbox {
        border-radius: 100%;
        justify-content: center;
        align-items: flex-end;
        width: 15px;
        height: 15px;
        border: 1px solid #76ccdd;

        .fa-check {
          color: #76ccdd;
          height: 18px;
        }
      }

      .confirm-booking-text {
        color: #76ccdd;
        text-decoration: underline;
        font-family: Montserrat;
      }
    }

    .card-footer {
      background: none;
      border: none;

      .image-back {
        height: 5px;
      }

      .wrap-back {
        align-items: center;
        cursor: pointer;

        .text-back {
          text-decoration: underline;
          font-family: Montserrat;
          margin-left: 16px;
          color: #959699;
        }
      }
    }
  }
}

.booking-col-2 {
  .description, .name-title, .email-title, .phone-title {
    font-size: 18px;

    .note-star {
      color: #ed1c24;
    }
  }

  .description {
    margin-bottom: 16px;
  }

  .btn-booking {
    background-color: #76ccdd;
    border: 0;
    padding: 5px 50px;
  }

  .booking-input {
    background: transparent;
    font-weight: bold;
    border-bottom: 1px solid #b7b7b7;
    font-size: 18px;
  }
}
</style>
