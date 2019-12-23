<template>
  <section>
    <div class="title-eforea"><h4>Liên hệ</h4></div>
    <b-container>
      <b-row>
        <b-col md="6">
          <div>
            <information
              v-for="(item, id) in contactData.branch"
              :key="id"
              :img="item.image.url"
              :title="item.name"
              :address="item.address"
            />
          </div>
        </b-col>
        <b-col md="6">
          <div><contact-form /></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Information from './ContactList/Information'
import ContactForm from './ContactList/ContactForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    Information,
    ContactForm,
  },
  computed: {
    ...mapGetters(['contactData']),
  },
  data() {
    return {
      infor: [
        {
          img: 'contact1.png',
          title: 'Eforea Tân Cảng',
          address: '392/5, Ung Văn Khiêm, P. 25, Q. Bình Thạnh, TP. HCM',
        },
        {
          img: 'contact2.png',
          title: 'Eforea Ba Son',
          address: 'SH09, Aqua 3, Vinhomes Golden River',
          childaddress: '- Số 2, Tôn Đức Thắng, P. Bến Nghé, Q. 1, TP. HCM',
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
.title-eforea {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 45px;

  h4 {
    font-size: 48px;
    color: #76ccdd;
  }
}
</style>
