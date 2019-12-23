<template>
  <b-row>
    <b-col cols="12" class="wrap-history">
      <div class="title-history">Lịch sử giao dịch</div>
    </b-col>
    <b-col>
      <no-ssr>
        <table class="table-history">
          <tr class="title">
            <th>Ngày</th>
            <th>Dịch vụ</th>
            <th>Giá tiền</th>
            <th class="wrap-btn-detail">
              Thanh toán
            </th>
            <th>
              <b-button class="sm b-details" href="/user/history">
                Xem chi tiết
              </b-button>
            </th>
          </tr>
          <HistoryRow
            v-for="history in orderHistorys"
            :key="history.id"
            :history-id="history.id"
          />
        </table>
      </no-ssr>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import HistoryRow from './HistoryRow'
import moment from 'moment'
import numeral from 'numeral'
import axios from 'axios'

export default {
  computed: {
    ...mapGetters(['orderHistory', 'listService', 'auth']),
  },
  components: {
    HistoryRow,
  },
  data: () => ({
    orderHistorys: [],
  }),
  mounted() {
    let phone = this.auth.telephone
    axios({
      method: 'GET',
      url: `https://myspa.eforealifestyle.com/api/v1/orders/list/phone/${phone}`,
      headers: {
        'X-API-LINK': `${this.auth.api_link}`,
      },
    }).then(response => {
      if (response.data.data[0] !== undefined)
        this.orderHistorys.push(response.data.data[0])
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
.wrap-history {
  margin-top: 2em;
  margin-bottom: 1em;

  .title-history {
    font-size: 40px;
    line-height: 36px;
    color: #000000;
    font-weight: 700;
  }
}

.table-history {
  border-collapse: collapse;
  border: 0px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 2px 4px #e0deda;

  tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  tr.title {
    border-bottom: 1px solid #f7f7f7;
    font-size: 20px;
    color: #000000;
    font-weight: 700;

    th {
      text-align: left;
      padding: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  tr.content {
    font-size: 14px;
    color: #000000;
    font-weight: 400;

    td {
      text-align: left;
      padding: 1rem;
      padding-left: 3em;
      padding-right: 3em;
    }
  }

  .b-details {
    font-size: 20px;
    background-color: #76ccdd;
    border-width: 0;
    color: #ffffff;
    font-weight: 700;
    margin-left: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
