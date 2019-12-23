<template>
  <div class="popup-location">
    <div class="columns">
      <div class="column">
        <p class="popup-location-name">{{ contactData.map[0].name }}</p>
        <address class="popup-location-address">
          <p>
            <span
              class="popup-location-address1"
              v-html="contactData.map[0].address"
            ></span>
          </p>
        </address>
        <!-- <div class="popup-location-row">
          <span class="row-title" v-html="contactData.contact.content"></span>
          <span class="popup-location-phone">{{
            contactData.contact.email
          }}</span>
        </div> -->
      </div>
      <div class="column">
        <p class="time-column">Giờ Hoạt Động</p>
        <div class="popup-location-schedule">
          <table>
            <tbody>
              <tr
                v-for="(item, index) in contactDate"
                :key="index"
                :class="{
                  'item-active': cutString() === item.shortDay,
                }"
              >
                <td class="day">
                  {{ item.day }}
                </td>
                <td class="a-right">{{ item.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['contactData']),
    checkDate() {
      return new Date()
    },
  },
  data() {
    return {
      newDate: new Date(),
      contactDate: [
        {
          day: 'Chủ nhật',
          time: '9:00 - 20:00',
          shortDay: 'Sun',
        },
        {
          day: 'Thứ hai',
          time: '9:00 - 20:00',
          shortDay: 'Mon',
        },
        {
          day: 'Thứ ba',
          time: '9:00 - 20:00',
          shortDay: 'Tue',
        },
        {
          day: 'Thứ tư',
          time: '9:00 - 20:00',
          shortDay: 'Wed',
        },
        {
          day: 'Thứ năm',
          time: '9:00 - 20:00',
          shortDay: 'Thu',
        },
        {
          day: 'Thứ sáu',
          time: '9:00 - 20:00',
          shortDay: 'Fri',
        },
        {
          day: 'Thứ bảy',
          time: '9:00 - 20:00',
          shortDay: 'Sat',
        },
      ],
    }
  },
  methods: {
    cutString() {
      const date = this.newDate.toDateString()

      var str = date.substring(0, 3)
      return str
    },
  },
}
</script>
<style lang="stylus" scoped>
.item-active {
  color: #76ccdd;
  font-weight: bold;
}

.popup-location {
  padding-top: 42px;
  padding-bottom: 17px;
  max-width: 767px;
  margin: 0 auto;

  .columns-x {
    text-align: center;

    .btn-str-common {
      text-align: center;
      display: inline-block;
      padding: 15px 80px;
      border: 2px solid #41424A;
      font-size: 18px;
      line-height: 1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #41424A;
      background: #fff;
      transition: background-color 0.3s, color 0.3s;
      text-decoration: none;
      margin-top: 30px;
    }

    .btn-str-common:hover {
      color: #fff;
      background-color: #41424A;
    }
  }

  .columns {
    overflow: hidden;
    padding: 0 34px;

    .column {
      float: left;
      width: 50%;
      padding: 0 16px 0 15px;

      .time-column {
        text-transform: uppercase;
        margin: 0;
        letter-spacing: 0.03em;
        font-size: 25px;
        color: #76ccdd;
      }

      .popup-location-name {
        text-transform: uppercase;
        margin: 0;
        letter-spacing: 0.03em;
        font-size: 25px;
        color: #76ccdd;
      }

      .popup-location-schedule {
        font-size: 16px;
        margin-top: 8px;

        .a-right {
          padding-left: 60px;
        }
      }
    }
  }
}
</style>
