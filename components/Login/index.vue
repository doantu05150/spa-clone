<template>
  <div class="login-form">
    <form class="form-child">
      <div class="form-group">
        <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Số điện thoại"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Mật khẩu"
        />
      </div>
      <b-button class="btn mt-3 mb-2 wrap-button" block>
        Đăng nhập
      </b-button>
      <div class="forget_password">
        <p>Quên mật khẩu?<a href="#"> Lấy lại</a></p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
}
</script>
<style lang="stylus" scoped>
.login-form {
  width: 35%;
  margin: 0 auto;
  padding: 100px 0px 50px;

  .form-child {
    padding: 15px;
    border: 1px solid #76ccdd;
    border-radius: 0.25rem;

    .wrap-button {
      background-color: #76ccdd;
      border-radius: 3px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      border: none;
      text-transform: uppercase;
      padding-top: 9px;
      padding-bottom: 9px;
    }

    .forget_password {
      font-size: 14px;
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
  }
}
</style>
