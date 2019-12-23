<template>
  <div class="user-info">
    <div class="name">
      Khách hàng: <b>{{ infoUserData.username }}</b>
    </div>
    <div class="level">Cấp: <span class="level-spec">DIAMOND</span></div>
    <div class="wallet">
      <img src="/images/user/wallet_active.png" class="wallet-icon" alt="" />
      <div class="wallet-text">
        <div class="wallet-label">Hạn mức ví</div>
        <div class="wallet-amount">
          {{ moneyFormat }}
          VNĐ
        </div>
      </div>
    </div>
    <button class="add-to-wallet" :class="{ 'hide-button': page === 'deal' }">
      Thêm tiền vào Ví
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    page: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['availableMoney', 'infoUserData']),
    moneyFormat() {
      let moneyFormatVND = this.availableMoney.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      })
      // remove character "đ"
      moneyFormatVND = moneyFormatVND.substring(0, moneyFormatVND.length - 2)
      return moneyFormatVND
    },
  },
}
</script>

<style lang="stylus" scoped>
.user-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 4px 3px #ebebeb;
  border-radius: 7px;
  padding: 32px 50px;

  .name {
    font-size: 20px;
  }

  .level {
    font-size: 20px;
    color: #959699;

    .level-spec {
      font-weight: bold;
      color: #ffc600;
    }
  }

  .wallet {
    display: flex;
    flex-direction: row;

    .wallet-icon {
      width: 56px;
      height: 56px;
    }

    .wallet-text {
      margin-left: 16px;
      line-height: 1;
      text-align: right;

      .wallet-label {
        font-size: 14px;
      }

      .wallet-amount {
        font-size: 36px;
        color: #76ccdd;
        font-weight: bold;
      }
    }
  }

  .add-to-wallet {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    border: 0;
    background: #76ccdd;
    border-radius: 3px;
    padding: 5px 24px;
    cursor: pointer;
  }

  .hide-button {
    opacity: 0;
    cursor: default;
  }
}
</style>
