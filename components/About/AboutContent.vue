<template>
  <div class="about-content">
    <b-container> <child-about-content /> </b-container>
  </div>
</template>
<script>
import ChildAboutContent from './ChildAboutContent'

export default {
  components: {
    ChildAboutContent,
  },
}
</script>
<style lang="stylus" scoped></style>
