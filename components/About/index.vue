<template>
  <section class="about">
    <slide-image />
    <information />
    <about-content />
    <rebutable /> <excellent /> <authentic />
  </section>
</template>
<script>
import Information from './Information'
import AboutContent from './AboutContent'
import SlideImage from './SlideImage'
import Rebutable from './Rebutable'
import Excellent from './Excellent'
import Authentic from './Authentic'

export default {
  components: {
    Information,
    AboutContent,
    SlideImage,
    Rebutable,
    Excellent,
    Authentic,
  },
}
</script>
<style lang="stylus" scoped></style>
