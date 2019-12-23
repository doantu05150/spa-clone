<template>
  <div class="contact-information">
    <no-ssr>
      <div class="list-img"><img class="img-fluid" :src="img" /></div>
      <p class="contact-title">{{ title }}</p>
      <p class="contact-address" v-html="address"></p>
      <p class="contact-phone">Liên hệ: <span>1800-9467</span></p>
    </no-ssr>
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    title: String,
    address: String,
  },
}
</script>
<style lang="stylus" scoped>
.contact-information {
  margin-bottom: 50px;

  .contact-title {
    font-size: 18px;
    color: #76ccdd;
    font-weight: 600;
    margin-top: 10px;
  }

  .contact-address {
    font-size: 16px;
    margin-top: -20px;
  }

  .contact-phone {
    font-size: 18px;
    color: #76ccdd;
    font-weight: 600;

    span {
      color: #212529;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: -18px;
    }
  }

  .contact-childaddress {
    font-size: 16px;
    margin-top: -20px;
  }
}
</style>
