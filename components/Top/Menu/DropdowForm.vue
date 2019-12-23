<template>
  <div class="drop-form">
    <div>
      <button
        v-if="auth === null"
        aria-haspopup="true"
        aria-expanded="false"
        type="button"
        ref="dcmm"
        class="btn btn-info dropdown-toggle"
        @click="dropdown = !dropdown"
      >
        {{ $t('login') }}
      </button>
      <div v-else class="user-infor">
        <div>
          <router-link class="fullname" to="/user">{{
            auth.fullname
          }}</router-link>
          <!-- <a href="#" to="/user" class="fullname">{{ auth.fullname }}</a> -->
        </div>
        <div class="dropdown-custom">
          <div class="user-icon"><i class="far fa-user"></i></div>
          <div class="dropdown-content">
            <div class="link-group">
              <router-link class="dropdown-link" to="/user"
                >Profile</router-link
              >
              <div class="dropdown-link">
                <a href="#" @click="logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="['wrap-modal-pass', { dropdown }]"
        v-closable="{
          exclude: ['dcmm'],
          handler: 'onClose',
        }"
      >
        <b-form v-on:submit.prevent="login" v-on:keyup.enter="login">
          <b-form-group>
            <label class="text-lable">Số điện thoại</label>
            <b-form-input type="text" v-model="phone" />
          </b-form-group>
          <b-form-group>
            <div class="group-pass">
              <label class="text-lable">Mật khẩu</label>
              <p class="login-fail">{{ messageFail }}</p>
            </div>
            <b-form-input :type="passwordFieldType" v-model="password" />
            <span @click="switchVisibility">
              <i class="far fa-eye-slash field-icon"></i>
            </span>
          </b-form-group>
        </b-form>
        <div class="text-center">
          <b-spinner
            small
            v-if="loading"
            variant="primary"
            label="Spinning"
          ></b-spinner>
          <b-button
            v-else
            class="btn mt-3 mb-2 wrap-button"
            block
            @click="login"
          >
            Đăng nhập
          </b-button>
        </div>
        <div class="forget_password">
          <p>Quên mật khẩu?<a href="#" @click="showModal"> Lấy lại</a></p>
        </div>
      </div>
    </div>
    <b-modal centered hide-header hide-backdrop hide-footer v-model="show">
      <div class="wrap-modal-change">
        <div class="wrap-change-pass">
          <p class="title mt-4 text-center">LẤY LẠI MẬT KHẨU</p>
          <p class="error">{{ messageFailForgotPassword }}</p>
          <b-row>
            <b-col sm="3">
              <label class="text-pass">Số điện thoại</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                class="my-input-pass"
                type="text"
                v-model="phoneForgotPassword"
              />
            </b-col>
            <div class="wrap-loading" v-show="loading">
              <b-spinner label="Loading..."></b-spinner>
            </div>
          </b-row>
        </div>
        <div class="text-center">
          <b-button class="mt-4 mb-4 forgot-button" block @click="newPass()">
            Lấy lại mật khẩu
          </b-button>
        </div>
        <div class="close-form">
          <b-btn class="button-close" @click="show = !show">
            <i class="fas fa-times icon"></i>
          </b-btn>
        </div>
        <div class="next-login">
          <p>Đã có tài khoản,<a href="#" @click="clicked"> Đăng nhập</a></p>
        </div>
      </div>
    </b-modal>
    <b-modal
      centered
      hide-header
      hide-backdrop
      hide-footer
      v-model="newPassword"
    >
      <div class="new-password text-center">
        <p class="title-newPass">
          Mật khẩu mới<br />Đã được gửi tới<br />Số điện thoại của bạn
        </p>
        <p class="time-send-password">
          Mật khẩu mới có hiệu lực trong vòng 48 giờ!
        </p>
        <div class="feedback-request">
          <p>Không thấy tin nhắn,<a href="#"> Recent message</a></p>
          <p>Đã có tài khoản,<a href="#" @click="nextLogin()"> Đăng nhập</a></p>
        </div>
        <div class="close-form">
          <b-btn class="button-close" @click="newPassword = !newPassword">
            <i class="fas fa-times icon"></i>
          </b-btn>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
let handleOutsideClick

export default {
  data() {
    return {
      loading: false,
      show: false,
      phone: '',
      password: '',
      passwordFieldType: 'password',
      messageFail: '',
      dropdown: false,
      newPassword: false,
      showDropdown: false,
      dropmenu: false,
      phoneForgotPassword: '',
      messageFailForgotPassword: '',
    }
  },
  computed: {
    ...mapGetters(['auth']),
  },
  mounted() {
    // console.log(this.auth)
  },
  methods: {
    async login() {
      this.loading = true
      const result = await axios.post(
        'https://myspa.eforealifestyle.com/api/app/user/login',
        {
          phone: this.phone,
          password: this.password,
        },
      )
      this.loading = false
      if (result.data.data.status === 'fail') {
        this.messageFail = result.data.data.message
        this.password = ''
      } else {
        const { id, telephone, fullname } = result.data.data.user
        const { api_link } = result.data.data
        this.$store.commit('setAuth', {
          id,
          telephone,
          fullname,
          api_link,
        })
        Cookie.set('auth', {
          id,
          telephone,
          fullname,
          api_link,
        })
        this.$router.push('/user')
      }
    },
    showModal() {
      this.show = !this.show
      this.dropdown = false
    },
    clicked() {
      this.show = false
      this.dropdown = true
    },
    newPass() {
      this.loading = true
      this.messageFailForgotPassword = ''
      axios
        .post(
          'https://myspa.eforealifestyle.com/api/app/user/forgot_password',
          {
            phone: this.phoneForgotPassword,
          },
        )
        .then(result => {
          this.loading = false
          console.log(result)
          if (result.data.data.status === 'fail') {
            this.messageFailForgotPassword = result.data.data.message
          } else {
            this.show = false
            this.newPassword = true
          }
        })
    },
    nextLogin() {
      this.newPassword = false
      this.dropdown = true
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    onClose() {
      this.dropdown = false
    },

    onClose1() {
      this.dropmenu = false
    },
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/')
    },
  },
  directives: {
    closable: {
      bind: function(el, binding, vnode) {
        handleOutsideClick = e => {
          e.stopPropagation()
          const { handler, exclude } = binding.value
          let clickedOnExcludedEl = false
          exclude.forEach(refName => {
            if (!clickedOnExcludedEl) {
              const excludedEl = vnode.context.$refs[refName]
              clickedOnExcludedEl = excludedEl.contains(e.target)
            }
          })
          if (!el.contains(e.target) && !clickedOnExcludedEl) {
            vnode.context[handler]()
          }
        }
        document.addEventListener('click', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)
      },
      unbind() {
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
      },
    },
  },
}
</script>
<style lang="stylus" scoped>
.dropdown-toggle {
  font-size: 13px;
  margin: 0 30px;
}

&__btn {
  &--icon {
    color: #fff;
    font-size: 24px;
  }
}

.wrap-modal-pass-menu {
  display: none;
  position: absolute;
  min-width: 130px;
  background: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;
  top: 7px;
  right: 245px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &.dropmenu {
    display: block;
    z-index: 9999;
  }

  .user-profile {
    padding: 10px;
    background-color: #fafafa;

    a {
      text-decoration: none;
    }

    &:hover {
      color: green;
      background-color: #ccc;
    }
  }

  .user-logout {
    padding: 10px;
    background-color: #fafafa;

    a {
      text-decoration: none;
    }

    &:hover {
      color: green;
      background-color: #ccc;
    }
  }
}

.wrap-modal-pass {
  display: none;
  position: absolute;
  width: 170px;
  background: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem;
  top: 7px;
  right: 245px;

  &.dropdown {
    display: block;
    z-index: 9999;
  }

  .text-lable {
    font-size: 10px;
    margin-bottom: -30px;
    font-weight: 500;
  }

  .group-pass {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -22px;
    margin-top: -7px;

    .text-lable {
      font-size: 10px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .login-fail {
      font-size: 10px;
      color: #ff6262;
      letter-spacing: -1px;
    }
  }

  .field-icon {
    float: right;
    margin-left: -25px;
    margin-top: -25px;
    position: relative;
    z-index: 2;
    color: #b7b7b7;
    font-size: 13px;
  }
}

.wrap-button {
  background-color: #76ccdd;
  border-radius: 3px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  border: none;
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;
}

.forget_password {
  font-size: 8px;
  text-align: center;

  p {
    font-weight: bold;
    margin-bottom: 7px;
    font-style: italic;

    a {
      color: #4978bc;
      font-weight: bolder;
      font-style: italic;
      text-decoration: none;
    }
  }
}

.wrap-modal-change {
  .wrap-change-pass {
    .title {
      font-size: 20px;
      line-height: 36px;
      color: #76ccdd;
      font-weight: 700;
    }

    .wrap-loading {
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }

    .error {
      width: 100%;
      color: red;
      text-align: center;
    }
  }

  .forgot-button {
    background-color: #76ccdd;
    border-radius: 3px;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
  }

  .close-form {
    position: relative;
    bottom: 185px;
    left: 435px;

    .button-close {
      border-radius: 50%;
      background-color: #d7d7d7;
      border: #d7d7d7;
    }
  }
}

.next-login {
  font-size: 12px;
  text-align: center;

  p {
    font-weight: bold;
    margin-bottom: 20px;
    font-style: italic;
    margin-top: -53px;

    a {
      color: #4978bc;
      font-weight: bolder;
      font-style: italic;
      text-decoration: underline;
    }
  }
}

.new-password {
  padding-top: 30px;
  padding-bottom: 20px;

  .title-newPass {
    font-size: 20px;
    color: #76ccdd;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 23px;
    margin-bottom: -2px;
  }

  .time-send-password {
    font-size: 12px;
    font-weight: 700;
  }

  .feedback-request {
    font-size: 12px;
    margin-top: 25px;

    p {
      font-weight: bold;
      font-style: italic;
      line-height: 0px;

      a {
        color: #4978bc;
        font-weight: bolder;
        font-style: italic;
        text-decoration: underline;
      }
    }
  }

  .close-form {
    margin-top: 30px;

    .button-close {
      border-radius: 50%;
    }
  }
}

.user-infor {
  display: flex;
  flex-direction: row;
  align-items: baseline;

  .fullname {
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    margin: 0 1rem;
    text-decoration: none;
  }

  .dropdown-custom {
    position: relative;
    display: inline;

    .user-icon {
      border: 2px solid #76ccdd;
      border-radius: 30px;
      color: #76ccdd;
      padding: 0.37rem 0.75rem;
      background-color: #ffffff;
      font-size: 15px;
      cursor: pointer;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      padding-top: 5px;
      min-width: 140px;
      z-index: 15;

      .link-group {
        background-color: #fff;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;

        .dropdown-link {
          display: block;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 25px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.7);
          font-weight: 400;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: #fff;
            background-color: #79cdde;
          }

          a {
            text-decoration: none;
          }
        }

        .dropdown-have-sub {
          position: relative;

          i {
            position: absolute;
            right: 25px;
            bottom: 19px;
            font-size: 12px;
          }
        }

        .dropdown-parent {
          text-transform: uppercase;
        }
      }

      .dropdown-sub-content {
        display: none;
        position: absolute;
        min-width: 208px;
        z-index: 15;
        top: 20px;
        left: 208px;
      }
    }
  }
}

.dropdown-custom:hover, .dropdown-custom:focus-within {
  .dropdown-content, .dropdown-content:focus {
    display: block;
  }
}

.sub-dropdown-custom:hover {
  .dropdown-sub-content, .dropdown-sub-content:focus {
    display: block;
  }
}
</style>
