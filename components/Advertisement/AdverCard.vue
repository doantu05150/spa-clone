<template>
  <div class="card mb-3">
    <div class="card__header">
      <div class="divide"></div>
    </div>
    <img src="../../static/images/popup-image.png" class="img-fluid" />
    <div class="card__content">
      <h5 class="title mt-4">{{ adver.title }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  props: ['adver'],
}
</script>
<style lang="stylus" scoped>
.card {
  border: 0;
  background-color: transparent;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    .date {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #959699;
      margin-right: 3px;
      font-size: 18px;
    }

    .divide {
      height: 1px;
      flex: 1;
      background: #959699;
    }
  }

  &__content {
    .title {
      font-family: 'Playfair Display', serif;
      font-style: italic;
    }
  }

  a {
    color: #76ccdd;
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }

  .text-right {
    a {
      color: #76ccdd;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 18px;
    }
  }
}
</style>
