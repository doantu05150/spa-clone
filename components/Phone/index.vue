<template>
  <div class="phone-eforea" :href="`tel:+${mobile}`">
    <a :href="`tel:+${mobile}`" class="number"
      ><i class="icon-phone fas fa-phone-volume"></i
    ></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: '18009467',
    }
  },
}
</script>
<style lang="stylus" scoped>
.is-scroll {
  position: fixed;
  top: 70%;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  z-index: 999;
  left: 2%;
}

.phone-eforea {
  display: none;
  position: fixed;
  top: 89%;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  z-index: 999;
  left: 2%;
  cursor: pointer;

  .number {
    border: 2px solid #76ccdd;
    padding: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;

    .icon-phone {
      font-size: 20px;
      color: #76ccdd;
      font-weight: bold;
    }
  }
}

@media (max-width: 576px) {
  .phone-eforea {
    display: block;
  }
}
</style>
