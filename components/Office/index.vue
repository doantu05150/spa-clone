<template>
  <section>
    <div class="title-eforea">
      <h4>Trụ sở chính</h4>
    </div>
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
