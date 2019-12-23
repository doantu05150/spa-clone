<template>
  <div>
    <b-modal ref="my-modal" hide-footer hide-header centered>
      <div class="d-block text-center">
        <img
          class="img-popup img-fluid"
          src="../../static/images/popup-image.png"
        />
      </div>
      <div class="close-form">
        <b-btn class="button-close" @click="hideModal">
          <i class="fas fa-times icon"></i>
        </b-btn>
      </div>
      <b-button
        @click="onClickRedirect()"
        class="mt-3 d-flex justify-content-between align-self-center"
        variant="outline-danger"
        block
      >
        <span class="title">Xem chi tiết</span>
        <font-awesome-icon
          class="flex-container flex-end"
          icon="chevron-right"
        />
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight)
export default {
  components: {
    FontAwesomeIcon,
  },
  methods: {
    showModal() {
      if (!sessionStorage.getItem('isShowModal')) {
        this.$refs['my-modal'].show()
      }
    },
    hideModal() {
      this.$refs['my-modal'].hide()
      sessionStorage.setItem('isShowModal', true)
    },
    onClickRedirect() {
      this.$router.push('/advertisement/chuong-trinh-quang-cao')
      sessionStorage.setItem('isShowModal', true)
    },
  },
  mounted() {
    this.showModal()
  },
}
</script>
