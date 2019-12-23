<template>
  <div>
    <no-ssr>
      <p class="title-form" v-html="contactData.contact.content"></p>
    </no-ssr>
    <div>
      <b-form>
        Họ & tên <span style="color : #ef5350">*</span>
        <b-form-input type="text" v-model="form.name" placeholder="Enter name">
        </b-form-input>
        Email <span style="color : #ef5350">*</span>
        <b-form-input
          type="email"
          v-model="form.email"
          placeholder="Enter email"
        >
        </b-form-input>
        Số điện thọai
        <b-form-input
          type="text"
          v-model="form.phone"
          placeholder="Enter Phone"
        >
        </b-form-input>
        Lời nhắn <span style="color : #ef5350">*</span>
        <b-form-textarea
          v-model="form.text"
          placeholder="Enter something"
          :rows="3"
          :max-rows="6"
        >
        </b-form-textarea>
      </b-form>
    </div>
    <div class="form-send">
      <div>
        <b-button class="weight-600" variant="info"> Gửi lời nhắn </b-button>
      </div>
      <div>Hoặc qua email: {{ contactData.contact.email }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        text: '',
      },
    }
  },
  computed: {
    ...mapGetters(['contactData']),
  },
}
</script>
<style lang="stylus" scoped>
.title-form {
  font-size: 16px;
  font-weight: 300;
}

.notification-form {
  font-size: 16px;
  font-weight: 300;
}

.form-control {
  border: unset;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  border-radius: 0;
}

.form-send {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  .weight-600 {
    padding-left: 60px;
    padding-right: 60px;
    margin-right: 30px;
  }
}
</style>
