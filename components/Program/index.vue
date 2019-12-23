<template>
  <div class="mt-5">
    <b-row>
      <b-col
        v-for="(item, index) in listEvent"
        :key="`${index}`"
        class="wrap-box"
      >
        <div class="one-box text-center">
          <p class="event">Ưu đãi</p>
          <p class="title">{{ item.title }}</p>
          <p class="date">{{ item.date }}</p>
          <b-button class="button" @click="chooseEvent(item)"
            >Chi tiết</b-button
          >
        </div>
      </b-col>
    </b-row>
    <b-modal
      centered
      hide-header
      hide-footer
      v-model="show"
      class="event-modal"
    >
      <img src="/images/user-top.jpg" alt="event top" class="image-top" />
      <div class="text-center wrap-box-event">
        <p class="event-title">Ưu đãi</p>
        <p class="title">{{ eventSelected.title }}</p>
        <p class="date">{{ eventSelected.date }}</p>
        <p class="content">{{ eventSelected.content }}</p>
      </div>
      <div class="wrap-button text-center">
        <b-btn class="button-close" @click="show = !show">
          <i class="fas fa-times icon"></i>
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      eventSelected: {
        title: '',
        date: '',
        content: '',
      },
      listEvent: [
        {
          title: 'Sơn móng tay tại Eforea',
          date: 'Từ 10/01/2019 - 12/02/2019',
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad quia fugiat iusto deserunt accusamus, debitis tempora veritatis, officiis tenetur asperiores, aut consequuntur dolore doloremque cum distinctio iste quam nemo.',
        },
        {
          title: 'Sơn móng tay tại Eforea',
          date: 'Từ 09/01/2019 - 12/02/2019',
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad quia fugiat iusto deserunt accusamus, debitis tempora veritatis, officiis tenetur asperiores, aut consequuntur dolore doloremque cum distinctio iste quam nemo.',
        },
        {
          title: 'Sơn móng tay tại Eforea',
          date: 'Từ 12/01/2019 - 12/02/2019',
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad quia fugiat iusto deserunt accusamus, debitis tempora veritatis, officiis tenetur asperiores, aut consequuntur dolore doloremque cum distinctio iste quam nemo.',
        },
      ],
    }
  },
  methods: {
    chooseEvent(item) {
      this.show = true
      this.eventSelected = item
    },
  },
}
</script>
<style lang="stylus" scoped>
.wrap-box {
  border-radius: 10px;
  margin: 0 12px;
  background-image: url('/images/event-bg.png');
  background-size: cover;
  padding: 13px;
  box-sizing: content-box;
  .one-box {
    background: #ffffffe6;
    padding: 15px;
    .button {
      background: #76ccdd;
      border: none;
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.25rem;
      height: 40px;
      width: 204px;
    }
    .event {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 5px;
    }
  }
}
.wrap-button {
  width: 100%;
  .button-close {
    background: #76ccdd;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding-top: 8px;
    padding-bottom: 4px;
    margin: 20px 0 40px 0;
    .icon {
      font-size: 20px;
    }
  }
}
.wrap-box-event {
  width: 770px;
  .event-title {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .content {
    padding: 25px 100px 25px 100px;
    margin: 0;
    font-weight: 300;
    font-size: 14px;
  }
}
.title {
  color: #76ccdd;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
}
.date {
  font-weight: 300;
  font-size: 14px;
}
.image-top {
  width: 768px;
}
</style>
