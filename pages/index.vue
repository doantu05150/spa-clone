<template>
  <div class="app" style="overflow-x: hidden">
    <top-menu />
    <navbar /> <banner /> <services id="services" />
    <blog-home :blogs="blogs" /> <feedback />
    <phone />
    <copyright id="footer" />
    <chat />
    <popup />
  </div>
</template>

<script>
import axios from 'axios'
import {
  TopMenu,
  Navbar,
  Banner,
  Feedback,
  Copyright,
  BlogHome,
  Chat,
  Popup,
  Phone,
} from '~/components'

import Services from '../components/Service/Services/index'

export default {
  async asyncData({ app }) {
    const res = await app.$axios.$get('/posts?_embed&per_page=3')
    return {
      blogs: res,
    }
  },
  async fetch({ store }) {
    const homeData = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=trang-chu',
    )
    store.commit('setHomeData', homeData.data[0].acf)
    const blogData = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=blog',
    )
    store.commit('setBlogData', blogData.data[0].acf)
    const popupData = await axios.get(
      'https://cms.eforealifestyle.com/wp-json/wp/v2/pages?slug=popup',
    )
    store.commit('setPopupData', popupData.data[0].acf)
  },
  data() {
    return {
      currentPage: '',
    }
  },
  components: {
    TopMenu,
    Navbar,
    Banner,
    Services,
    Feedback,
    Copyright,
    BlogHome,
    Chat,
    Popup,
    Phone,
  },
}
</script>
<style lang="stylus">
.btn-outline-danger {
  box-shadow: inset 0 -0.5em 0.5em rgba(0, 0, 0, 0.01), 0 0 0 2px rgb(240, 248, 255), 0.1em 0.1em 1em rgba(0, 0, 0, 0.01);
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translate(-50%);
  width: 270px;
  height: 40px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.2rem;
  border-radius: 30px;
  text-transform: uppercase;
  border: none;
  align-items: center;

  .title {
    font-size: 18px;
    margin-left: 20px;
    align-items: center;
  }

  .fa-chevron-right {
    width: 30px;
    height: 25px;
    float: right;
    align-items: center;
    margin-left: 25px;
  }
}

.close-form {
  position: absolute;
  top: 5%;
  right: 3%;

  .button-close {
    border-radius: 50%;
    background-color: #64C5C1;
    border-color: #fff;
  }
}

.btn-outline-danger:hover {
  background: linear-gradient(90deg, rgba(97, 216, 255, 1) 0%, rgba(131, 237, 255, 1) 29%, rgba(173, 241, 255, 1) 95%);
}

.modal-header {
  display: hidden !important;
}

.modal-body {
  padding: 0px;
}

@media screen and (max-width: 576px) {
  .modal-dialog {
    max-width: 600px !important;

    .btn-outline-danger {
      box-shadow: inset 0 -0.5em 0.5em rgba(0, 0, 0, 0.01), 0 0 0 2px rgb(240, 248, 255), 0.1em 0.1em 1em rgba(0, 0, 0, 0.01);
      position: absolute;
      bottom: 35px;
      left: 50%;
      transform: translate(-50%);
      width: 230px;
      height: 30px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 0.2rem;
      border-radius: 30px;
      text-transform: uppercase;
      border: none;

      .title {
        width: 100%;
        font-size: 10px;
        margin-left: 0;
        margin-bottom: 10px;
      }

      .fa-chevron-right {
        width: 30px;
        height: 20px;
        float: right;
        margin-left: 0;
        margin-bottom: 10px;
      }
    }

    .close-form {
      top: 5%;
      right: 6%;

      .button-close {
        height: 20px;
        width: 20px;
        padding: 0px;
        border: none;

        .fa-times .icon {
          height: 10px;
          width: 10px;
        }
      }
    }

    .img-popup {
      width: 480px;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 376px) {
  .modal-dialog {
    max-width: 400px !important;

    .btn-outline-danger {
      box-shadow: inset 0 -0.3em 0.3em rgba(0, 0, 0, 0.01), 0 0 0 1px rgb(240, 248, 255), 0.1em 0.1em 1em rgba(0, 0, 0, 0.01);
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translate(-50%);
      width: 140px;
      height: 20px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 0.2rem;
      border-radius: 30px;
      text-transform: uppercase;
      border: none;
      padding: 0 12px;

      .title {
        font-size: 6px;
        margin-left: 0;
        margin-bottom: 0;
      }

      .fa-chevron-right {
        width: 25px;
        float: right;
        margin-right: 0;
        margin-bottom: 0;
        padding-left: 20px;
      }
    }

    .close-form {
      top: 5%;
      right: 6%;

      .button-close {
        height: 20px;
        width: 20px;
        padding: 0px;
        border: none;

        .fa-times .icon {
          height: 10px;
          width: 10px;
        }
      }
    }

    .img-popup {
      width: 480px;
      object-fit: cover;
    }
  }
}
</style>
