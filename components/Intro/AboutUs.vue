<template>
  <div class="about-us">
    <h1>Về chúng tôi</h1>
    <div v-html="content" />
    <div class="text-right">
      <a href="/about"> Xem thêm <i class="fas fa-long-arrow-alt-right"/></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.about-us {
  padding-top: 60px;

  div {
    a {
      color: #76ccdd;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 16px;
    }
  }

  h1, a {
    color: #76ccdd;
  }

  & p {
    font-weight: 300;
  }
}

@media (max-width: 400px) {
  .about-us {
    padding-top: 60px;

    div {
      a {
        font-size: 15px;
      }
    }

    h1, a {
      color: #76ccdd;
      font-size: 29px;
    }

    p {
      font-weight: 300;
      font-size: 12px;
      text-align: justify;
    }
  }
}

@media (max-width: 576px) {
  .about-us {
    padding-top: 60px;

    div {
      a {
        font-size: 15px;
      }
    }

    h1, a {
      font-size: 29px;
    }

    p {
      font-weight: 300;
      font-size: 12px;
      text-align: justify;
    }
  }
}

@media (max-width: 320px) {
  .about-us {
    padding-top: 60px;

    div {
      a {
        font-size: 15px;
      }
    }

    h1, a {
      font-size: 29px;
    }

    p {
      font-weight: 300;
      font-size: 10px;
      text-align: justify;
    }
  }
}
</style>
