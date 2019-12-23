<template>
  <div class="sidebar">
    <div class="profile">
      <img :src="infoUserData.avatar" class="user-avatar" alt="" />
      <div class="user-name">Welcome, {{ infoUserData.username }}</div>
      <div class="user-text">{{ infoUserData.birthday | dateFormat }}</div>
      <div class="user-text">{{ infoUserData.address }}</div>
      <div class="change-pass" @click="showChange()">
        <img src="/images/user/key.png" />
        <span class="text-change">Đổi mật khẩu</span>
      </div>
    </div>
    <div
      class="sidebar-item"
      v-for="(item, index) in sidebarList"
      :class="{ 'sidebar-item-active': path === item.path }"
      @click="onSelectItem(item)"
      :key="`sidebar_item_${index}`"
    >
      <img
        :src="path === item.path ? item.activeImg : item.img"
        class="item-img"
        alt=""
      />
      <span class="item-name">{{ item.name }}</span>
    </div>
    <div class="share-using">
      <div class="su-text">Chia sẻ quyền sử dụng ví</div>
      <div v-if="this.listShared.length !== 0">
        <div
          class="share-btn"
          v-for="(item, index) in this.listShared"
          :key="index"
        >
          <div
            v-if="index === listShared.length - 1 && afterAdd"
            class="switch-btn"
            :class="{ 'switch-active': enableShare }"
            @click="switchConfirm"
          >
            <div class="switch-btn-pill" />
          </div>
          <div v-else class="switch-btn switch-active">
            <div class="switch-btn-pill" />
          </div>
          <div class="ml-3 share-info">
            <div class="flex-share">
              <div class="share-name">
                {{ item.uid_shared_detail.fullname }}
              </div>
              <div class="share-status pending" v-if="item.status === '1'">
                PENDING
              </div>
              <div class="share-status confirmed" v-if="item.status === '0'">
                CONFIRMED
              </div>
            </div>
            <div class="sf-font">{{ item.uid_shared_detail.telephone }}</div>
          </div>
        </div>
      </div>
      <div class="share-btn" v-else>
        <div
          class="switch-btn"
          :class="{ 'switch-active': enableShare }"
          @click="addMemberSiderBar()"
        >
          <div class="switch-btn-pill" />
        </div>
      </div>
      <button
        v-show="afterAdd"
        :disabled="!enableShare"
        @click="showFormShare()"
        :class="enableShare ? 'accept-btn' : 'no-accept-btn'"
      >
        Xác nhận
      </button>
      <div
        class="flex-add-member"
        v-show="this.listShared.length !== 0"
        @click="modalAdd()"
      >
        <div class="wrap-plus">
          <i class="fas fa-plus icon-plus"></i>
        </div>
        <div class="add-member">Thêm thành viên khác</div>
      </div>
    </div>
    <b-modal centered hide-header hide-backdrop hide-footer v-model="show">
      <div class="wrap-modal-pass">
        <div class="wrap-change-pass">
          <p class="title mt-4 text-center">THAY ĐỔI MẬT KHẨU</p>
          <p
            class="text-pass text-center my-0"
            :class="[status ? 'text-success' : 'text-danger']"
          >
            {{ message }}
          </p>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Mật khẩu cũ</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="password"
                v-model="old_password"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Mật khẩu mới</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="password"
                v-model="new_password"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Nhập lại</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="password"
                v-model="renew_password"
              />
            </b-col>
          </b-row>
        </div>
        <div class="text-center">
          <b-button class="mt-5 mb-4 wrap-button" block @click="changePassword">
            Thay đổi mật khẩu
          </b-button>
        </div>
        <div class="close-form">
          <b-btn class="button-close" @click="show = !show">
            <i class="fas fa-times icon"></i>
          </b-btn>
        </div>
      </div>
    </b-modal>
    <b-modal
      centered
      hide-header
      hide-backdrop
      hide-footer
      v-model="shareWaller"
    >
      <div class="modal-enter-pass">
        <div class="wrap-change-pass">
          <p class="title mt-4 text-center">NHẬP MẬT KHẨU</p>
          <p class="message text-center">
            {{ message }}
          </p>
          <b-form
            v-show="
              message !==
                'Đăng kí chia sẻ ví thành công, vui lòng chờ duyệt. Cám ơn!'
            "
          >
            <b-form-group>
              <b-form-input :type="passwordFieldType" v-model="password" />
              <span @click="switchVisibility">
                <i class="far fa-eye-slash field-icon"></i>
              </span>
            </b-form-group>
          </b-form>
        </div>
        <div class="text-center">
          <b-spinner
            v-if="loading"
            variant="primary"
            label="Spinning"
          ></b-spinner>
          <b-button
            v-else
            class="mt-5 mb-4 wrap-button"
            block
            @click="confirmShare()"
          >
            Đồng ý chia sẻ
          </b-button>
        </div>
        <div class="close-form" @click="shareWaller = !shareWaller">
          <b-btn class="button-close">
            <i class="fas fa-times icon"></i>
          </b-btn>
        </div>
      </div>
    </b-modal>
    <b-modal
      centered
      hide-header
      hide-backdrop
      hide-footer
      v-model="modalAddMember"
    >
      <div class="wrap-modal-addMember">
        <div class="wrap-change-pass">
          <p class="title mt-4 text-center">THÊM THÀNH VIÊN</p>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Họ Và Tên</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="text"
                v-model="nameShare"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Số điện thoại</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="text"
                v-model="phoneShare"
              />
            </b-col>
          </b-row>
        </div>
        <div class="text-center">
          <b-button
            class="mt-5 mb-4 wrap-button"
            block
            v-model="terms"
            @click="showConfirm()"
          >
            Thêm thành viên mới
          </b-button>
        </div>
        <div class="close-form">
          <b-btn
            class="button-close"
            @click="
              modalAddMember = !modalAddMember
              messageAddMember = ''
            "
          >
            <i class="fas fa-times icon"></i>
          </b-btn>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import axios from 'axios'
import { setInterval, clearInterval } from 'timers'
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      phone: '',
      old_password: '',
      new_password: '',
      renew_password: '',
      status: false,
      loading: false,
      listShared: [],
      nameShare: '',
      phoneShare: '',
      message: '',
      afterAdd: false,
      addMember: false,
      show: false,
      shareWaller: false,
      confirm: true,
      modalAddMember: false,
      passwordFieldType: 'password',
      password: '',
      sidebarList: [
        {
          selected: true,
          path: '/user/wallet',
          img: '/images/user/wallet.png',
          activeImg: '/images/user/wallet_active.png',
          name: 'Ví EFOREA',
        },
        {
          selected: false,
          path: '/user/history',
          img: '/images/user/clock.png',
          activeImg: '/images/user/clock_active.png',
          name: 'Lịch sử giao dịch',
        },
        {
          selected: false,
          path: '/user/rule',
          img: '/images/user/list.png',
          activeImg: '/images/user/list_active.png',
          name: 'Điều khoản & điều kiện',
        },
        {
          selected: false,
          path: '/user/deal',
          img: '/images/user/percent.png',
          activeImg: '/images/user/percent_active.png',
          name: 'Ưu đãi đặc biệt',
        },
      ],
      enableShare: false,
      terms: false,
    }
  },
  filters: {
    dateFormat: function(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    },
  },
  beforeMount() {
    this.showListShared()
  },
  methods: {
    onSelectItem(item) {
      this.$router.push(item.path)
    },
    showChange() {
      this.show = true
    },
    async changePassword() {
      if (this.new_password === this.renew_password) {
        const result = await axios({
          method: 'POST',
          url: 'https://myspa.eforealifestyle.com/api/app/user/password',
          headers: {
            'X-API-LINK': `${this.auth.api_link}`,
          },
          data: {
            phone: this.$store.getters.auth.telephone,
            password: this.old_password,
            new_password: this.new_password,
          },
        })
        this.new_password = ''
        this.renew_password = ''
        if (result.data.data.status === 'fail') {
          this.message = result.data.data.message
        } else {
          this.old_password = ''
          this.message = result.data.data.message
          this.status = true
          setInterval(() => {
            this.show = false
          }, 1000)
        }
      } else {
        this.message = 'Mật khẩu mới và nhập lại không khớp nhau'
      }
    },
    showFormShare() {
      this.shareWaller = true
    },
    modalAdd() {
      this.modalAddMember = true
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    async confirmShare() {
      this.loading = true
      const result = await axios.post(
        'https://myspa.eforealifestyle.com/api/app/user/login',
        {
          phone: this.auth.telephone,
          password: this.password,
        },
      )
      this.loading = false
      if (result.data.data.status === 'fail') {
        this.message = result.data.data.message
        this.password = ''
      } else {
        this.checkShare()
      }
    },
    addMemberSiderBar() {
      this.modalAddMember = true
      this.enableShare = !this.enableShare
    },
    switchConfirm() {
      this.enableShare = !this.enableShare
    },
    showConfirm() {
      this.listShared.push({
        status: -1,
        uid_shared_detail: {
          fullname: this.nameShare,
          telephone: this.phoneShare,
        },
      })
      this.afterAdd = true
      this.modalAddMember = !this.modalAddMember
      this.terms = !this.terms
      this.message = ''
    },
    async showListShared() {
      const result = await axios({
        method: 'GET',
        url: `https://myspa.eforealifestyle.com/api/v1/wallet/wallet_share/${
          this.auth.id
        }`,
        headers: {
          'X-API-LINK': `${this.auth.api_link}`,
        },
      })
      this.listShared = result.data.data
      this.afterAdd = false
    },
    async checkShare() {
      const result = await axios({
        method: 'POST',
        url: 'https://myspa.eforealifestyle.com/api/v1/wallet/register',
        headers: {
          'X-API-LINK': `${this.auth.api_link}`,
        },
        data: {
          uid: this.auth.id,
          fullname: this.nameShare,
          phone: this.phoneShare,
        },
      })
      this.message = result.data.data.message
      if (result.data.data.status === 'ok') {
        const autoHidden = setInterval(() => {
          this.shareWaller = false
          this.addMember = true
          this.confirm = false
          this.message = ''
          this.nameShare = ''
          this.phoneShare = ''
          this.showListShared()
          clearInterval(autoHidden)
        }, 2000)
      }
    },
  },
  computed: {
    isDisabled() {
      return !this.terms
    },
    ...mapGetters(['infoUserData']),
    ...mapGetters(['auth']),
  },
}
</script>
<style lang="stylus" scoped>
.sidebar {
  background-color: #fff;
  box-shadow: 2px 2px 4px 3px #ebebeb;
  border-radius: 7px;
  height: 100%;

  .profile {
    padding: 40px 0 40px 50px;
    border-bottom: 1px solid #ebebeb;

    .user-avatar {
      width: 80px;
      margin-bottom: 16px;
      border-radius: 50%;
    }

    .user-name {
      font-size: 20px;
      line-height: 1;
      font-weight: 300;
    }

    .user-text {
      font-size: 14px;
      color: #959699;
      line-height: 1;
    }

    .change-pass {
      cursor: pointer;
      margin-top: 10px;

      .text-change {
        font-size: 12px;
        color: #000000;
        font-weight: 400;
      }
    }
  }

  .sidebar-item {
    padding: 22px 0 22px 50px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

    &:hover {
      background: #f7feff;
    }

    .item-img {
      width: 20px;
    }

    .item-name {
      margin-left: 16px;
      font-size: 14px;
    }
  }

  .sidebar-item-active {
    background: #f7feff;
    color: #76ccdd;
    background: #f7feff;
    color: #76ccdd;
  }

  .share-using {
    padding: 32px 0 32px 50px;

    .su-text {
      font-size: 20px;
      color: #76ccdd;
      margin-bottom: 16px;
      font-weight: bold;
    }

    .share-btn {
      display: flex;
      flex-direction: row;
      margin-top: 1rem;

      .share-info {
        font-size: 20px;
        line-height: 1.1;

        .flex-share {
          display: flex;
          flex-direction: row;

          .share-name {
            font-size: 19px;
          }

          .share-status {
            color: #ff3838;
            font-size: 10px;
            padding-top: 5px;
            font-weight: bold;
            margin-left: 25px;
            max-width: 100px;
          }

          .share-status {
            font-size: 10px;
            padding-top: 5px;
            font-weight: bold;
            margin-left: 10px;
          }

          .pending {
            color: #ff3838;
          }

          .confirmed {
            color: #76ccdd;
          }
        }

        .sf-font {
          color: #959699;
          font-size: 17px;
        }
      }
    }

    .accept-btn {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      background: #76ccdd;
      border-radius: 3px;
      padding: 5px 24px;
      cursor: pointer;
      margin-top: 32px;
    }

    .no-accept-btn {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      background: #f8f8f8;
      border-radius: 3px;
      padding: 5px 24px;
      cursor: pointer;
      margin-top: 32px;
      cursor: not-allowed;
      pointer-events: none;
    }

    .flex-add-member {
      display: flex;
      flex-direction: row;
      cursor: pointer;

      .wrap-plus {
        margin-top: 10px;

        .icon-plus {
          color: #d7d7d7;
          padding: 4px;
          font-size: 30px;
        }
      }

      .add-member {
        padding-top: 20px;
        font-size: 14px;
        color: #959699;
        font-style: italic;
        margin-left: 15px;
      }
    }
  }

  .switch-btn {
    height: 24px;
    width: 48px;
    border: 2px solid #ebebeb;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    .switch-btn-pill {
      height: 16px;
      width: 16px;
      margin: 2px;
      background: #76ccdd;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
    }
  }

  .switch-active {
    background: #76ccdd;

    .switch-btn-pill {
      background: #ffffff;
      transform: translateX(24px);
    }
  }

  .wrap-modal-pass {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: -30px;

    .wrap-change-pass {
      .title {
        font-size: 20px;
        line-height: 36px;
        color: #76ccdd;
        font-weight: 700;
      }
    }
  }

  .text-pass {
    font-size: 14px;
    color: #000000;
    font-weight: 300;
    margin-top: 10px;
  }

  input[type='text'] {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #b7b7b7;
    border-radius: 0;
  }

  input[type='password'] {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #b7b7b7;
    border-radius: 0;
  }

  .wrap-button {
    background-color: #76ccdd;
    border-radius: 3px;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 400;
    border: none;
  }

  .close-form {
    position: relative;
    bottom: 300px;
    left: 427px;

    .button-close {
      border-radius: 50%;
      background-color: #d7d7d7;
      border: #d7d7d7;
    }
  }

  .modal-enter-pass {
    margin-bottom: -25px;

    .title {
      font-size: 20px;
      line-height: 36px;
      color: #76ccdd;
      font-weight: 700;
    }

    .field-icon {
      float: right;
      margin-left: -25px;
      margin-top: -25px;
      position: relative;
      z-index: 2;
      color: #b7b7b7;
      font-size: 20px;
    }

    .wrap-button {
      background-color: #76ccdd;
      border-radius: 3px;
      color: #ffffff;
      font-size: 14px;
      font-family: 'Montserrat';
      font-weight: 400;
      border: none;
    }

    .close-form {
      position: relative;
      bottom: 210px;
      left: 430px;

      .button-close {
        border-radius: 50%;
        background-color: #d7d7d7;
        border: #d7d7d7;
      }
    }
  }

  .wrap-modal-addMember {
    margin-bottom: -25px;

    .title {
      font-size: 20px;
      line-height: 36px;
      color: #76ccdd;
      font-weight: 700;
    }

    .close-form {
      position: relative;
      bottom: 255px;
      left: 430px;

      .button-close {
        border-radius: 50%;
        background-color: #d7d7d7;
        border: #d7d7d7;
      }
    }
  }
}

.message {
  font-size: 12px;
  color: #000;
  font-weight: 300;
}
</style>
