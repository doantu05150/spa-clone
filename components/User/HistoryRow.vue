<template>
  <tbody>
    <tr class="content" v-for="item in historyData" :key="item.id">
      <td>{{ item.order_info.order.created_date | dateFormat }}</td>
      <td>
        <p v-for="data in item.order_info.order_detail" :key="data.id">
          {{ data.item_name }}
        </p>
      </td>
      <td>
        <p v-for="data in item.order_info.order_detail" :key="data.id">
          {{ data.price | moneyFormat }} VNĐ
        </p>
      </td>
      <td>
        <p v-for="data in item.order_info.order_detail" :key="data.id">
          {{ data.discount + ' ' + data.discount_unit }}
        </p>
      </td>
      <td>{{ item.order_info.order.discount_percent }} %</td>
      <td>{{ item.order_info.order.total_money | moneyFormat }} VNĐ</td>
      <td>{{ item.order_info.order.create_by_name }}</td>
    </tr>
  </tbody>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import numeral from 'numeral'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    historyData: [],
  }),
  computed: {
    ...mapGetters(['auth']),
  },
  props: {
    historyId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/orders/detail/${
        this.historyId
      }`,
      headers: {
        'X-API-LINK': `${this.auth.api_link}`,
      },
    }).then(response => {
      this.historyData = Object.freeze(response.data)
    })
  },
  filters: {
    dateFormat: function(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    },
    moneyFormat: function(value) {
      if (value) {
        return numeral(value).format('0,0')
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
tr.content {
  font-size: 14px;
  color: #000000;

  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;

    p {
      margin-bottom: 0rem;
    }
  }
}

tbody:nth-child(even) {
  background-color: #f8f8f8;
}
</style>
