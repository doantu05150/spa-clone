<template>
  <div class="app">
    <div class="blog-page">
      <top-menu />
      <navbar />
      <booking-page />
      <copyright />
    </div>
  </div>
</template>
<script>
import { BookingPage, TopMenu, Navbar, Copyright } from '~/components'

export default {
  components: {
    TopMenu,
    Navbar,
    Copyright,
    BookingPage,
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
