<template>
  <div class="second-form">
    <div class="form-data">
      <b-row class="service-wrapper justify-content-center">
        <b-col
          cols="4"
          v-for="(service, index) in serviceList"
          :key="`service_${index}`"
        >
          <div
            :class="[
              'service',
              {
                'service-active': service.selected,
                'service-disable': !service.active && store === 3,
              },
            ]"
          >
            <div class="img-wrapper" @click="onServiceSelect(index)">
              <img :src="service.img" />
            </div>
            <div class="name" @click="onServiceSelect(index)">
              {{ service.title }}
            </div>
            <router-link
              :class="[
                'view-menu',
                { 'disabled-link': !service.active && store === 3 },
              ]"
              target="_blank"
              :to="`${storeLink}${service.type ? `?type=${service.type}` : ''}`"
            >
              Xem menu
            </router-link>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="form-addition">
      <div class="next-step" @click="$emit('nextStep')">
        <div>BƯỚC<br />TIẾP<br />THEO</div>
        <img src="/images/arrow.png" class="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      type: Number,
      required: true,
    },
    services: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.serviceList.forEach(service => {
      service.selected = this.services[service.name]
    })
  },
  data() {
    return {
      serviceList: [
        {
          name: 'use_nail',
          title: 'Chăm sóc móng',
          active: true,
          img: '/images/booking/nail_service.png',
          selected: false,
          type: 'nail',
        },
        {
          name: 'use_hair',
          title: 'Chăm sóc tóc',
          active: true,
          img: '/images/booking/hair_service.png',
          selected: false,
          type: 'hair',
        },
        {
          name: 'use_face',
          title: 'Chăm sóc da mặt',
          active: false,
          img: '/images/booking/spa_service.png',
          selected: false,
          type: 'skin',
        },
        {
          name: 'use_body_service',
          title: 'Chăm sóc toàn thân',
          active: false,
          img: '/images/booking/body_service.png',
          selected: false,
          type: 'body',
        },
        {
          name: 'use_special_service',
          title: 'Dịch vụ đặc biệt',
          active: false,
          img: '/images/booking/special_service.png',
          selected: false,
        },
      ],
    }
  },
  methods: {
    onServiceSelect(index) {
      if (this.serviceList[index].active || this.store !== 3) {
        this.serviceList[index].selected = !this.serviceList[index].selected
        const { name, selected } = this.serviceList[index]
        this.$emit('setAtt', name, selected)
      }
    },
  },
  computed: {
    storeLink() {
      switch (this.store) {
        case 1:
          return '/service/ba-son'
        case 2:
          return '/service/tan-cang'
        case 3:
          return '/service/ba-trieu'
        default:
          return '/service/ba-son'
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.second-form {
  display: flex;
  height: 100%;
  font-size: 1.15rem;

  .form-data {
    width: 85%;

    .service-wrapper {
      padding: 0 3rem 0;
      text-align: center;

      .service {
        margin: 1rem;
        border-radius: 10px;

        .img-wrapper {
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .active {
          color: #7ecfdf;
        }

        .name {
          cursor: pointer;
          font-weight: bold;
          line-height: 1;
        }

        .view-menu {
          font-size: 1rem;
          font-weight: bold;
          color: #959699;
          display: block;
          padding-bottom: 0.5rem;
        }
      }

      .service-active {
        background: #fff;
      }

      .service-disable {
        opacity: 0.6;

        .img-wrapper, .name {
          cursor: default;
        }

        .view-menu {
          pointer-events: none;
          cursor: default;
          text-decoration: none;
        }
      }
    }
  }

  .form-addition {
    width: 15%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .next-step {
      text-align: right;
      display: flex;
      align-items: center;
      font-weight: 300;
      line-height: 1.2;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem 0.5rem;
      cursor: pointer;

      .arrow {
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
