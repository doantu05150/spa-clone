<template>
  <div class="main-service">
    <section class="header-service">
      <b-container class="text-center">
        <h1 class="pb-4 pt-5 color-primary title-service">Giới thiệu chung</h1>
        <b-row class="justify-content-center">
          <b-col md="8" class="text-service">
            <p>
              Eforea là hệ thống salon & spa cao cấp, chuyên nghiệp, với những
              dịch vụ chăm sóc móng, chăm sóc tóc và spa dành cho cả nam giới,
              nữ giới và trẻ em. Ngoài khu vực dịch vụ chính, Eforea còn có
              nhiều tiện ích khác như <i><b>lounge</b></i> và khu vui chơi dành
              cho trẻ nhỏ. Dù bạn là ai, chúng tôi tin rằng bạn cũng sẽ tìm thấy
              khoảng thời gian tuyệt vời ở Eforea.
            </p>
            <p>
              Tất cả nhân viên tại Eforea đều được đào tạo bài bản, chuyên sâu
              bởi các thương hiệu đối tác lớn như Dermalogica, CND, Goldwell,
              Olaplex,... và có nhiều năm kinh nghiệm trong nghề. Với mục tiêu
              trở nên “xuất sắc” trong mắt khách hàng, chúng tôi không ngừng cập
              nhật những kiến thức và kỹ thuật mới, đồng thời sẵn sàng tiếp thu
              mọi phản hồi từ quý khách.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col> <myslider /> </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="rules-service">
      <b-container class="text-center">
        <h1 class="color-primary title-service my-4">5 Nguyên tắc</h1>
        <b-row class="justify-content-md-center">
          <b-col md="10">
            <b-row class="justify-content-md-center">
              <b-col
                v-for="(item, id) in rules"
                :key="id"
                class="col-rule"
                md="4"
              >
                <div class="rule-item">
                  <p class="mb-0">{{ item.text }}</p>
                  <div class="rule-number">
                    <img :src="`/images/service/0${id + 1}.png`" alt="number" />
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <h1 class="color-primary title-service my-5">Hình ảnh</h1>
        <no-ssr>
          <b-row class="justify-content-md-center">
            <b-col md="8">
              <div class="slide-service-footer">
                <carousel
                  ref="carouselCustom"
                  :per-page="1"
                  :navigation-enabled="true"
                  @pageChange="onPageChange"
                >
                  <slide v-for="(item, id) in slideFooter" :key="`item_${id}`">
                    <div>
                      <img
                        class="img-fluid"
                        :src="`/images/service/main/${item.img}`"
                      />
                    </div>
                  </slide>
                </carousel>
              </div>
              <div class="slide-number">
                <div class="slide-service-footer">
                  <span class="first-number">{{
                    index > 9 ? index : '0' + index
                  }}</span>
                  <div class="flat"></div>
                  <span class="second-number">{{
                    slideFooter.length > 9
                      ? slideFooter.length
                      : '0' + slideFooter.length
                  }}</span>
                  <div class="btn-slide">
                    <i
                      @click="SlideCarousel('prev')"
                      class="icon-arrow-left icon-left"
                    ></i>
                    <i
                      @click="SlideCarousel('next')"
                      class="icon-arrow-right icon-right"
                    ></i>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </no-ssr>
      </b-container>
    </section>
  </div>
</template>

<script>
import myslider from './slider'

export default {
  data() {
    return {
      currentSlide2: 0,
      index: 1,
      slideFooter: [
        {
          img: '1.jpg',
        },
        {
          img: '2.jpg',
        },
        {
          img: '3.jpg',
        },
        {
          img: '4.jpg',
        },
        {
          img: '5.jpg',
        },
        {
          img: '6.jpg',
        },
        {
          img: '7.jpg',
        },
        {
          img: '8.jpg',
        },
        {
          img: '10.jpg',
        },
        {
          img: '11.jpg',
        },
        {
          img: '12.jpg',
        },
        {
          img: '13.jpg',
        },
        {
          img: '14.jpg',
        },
        {
          img: '15.jpg',
        },
      ],
      rules: [
        {
          text:
            'Chỉ sử dụng sản phẩm, công cụ và dụng cụ chính hãng, có nguồn gốc, xuất xứ rõ ràng.',
        },
        {
          text:
            'Chú trọng đến hiệu quả về lâu dài cũng như sức khỏe và sự an toàn của khách hàng thay vì lợi ích trước mắt.',
        },
        {
          text:
            'Luôn công khai sản phẩm được sử dụng với khách hàng, trong cả quá trình tư vấn lẫn khi thực hiện dịch vụ.',
        },
        {
          text:
            'Chuyên tâm lắng nghe nhu cầu, mong muốn của khách hàng để đưa ra giải pháp cá nhân hóa tối ưu.',
        },
        {
          text:
            'Đảm bảo khách hàng luôn cảm thấy thoải mái như ở nhà và tận hưởng chất lượng chỉ có ở salon & spa chuyên nghiệp.',
        },
      ],
    }
  },
  components: {
    myslider,
  },
  methods: {
    SlideCarousel(value) {
      const carousel = this.$refs.carouselCustom
      const { pageCount } = carousel
      if (value === 'prev') {
        if (this.currentSlide2 > 0) {
          this.currentSlide2--
        } else {
          this.currentSlide2 = pageCount - 1
        }
      }
      if (value === 'next') {
        if (this.currentSlide2 < pageCount - 1) {
          this.currentSlide2++
        } else {
          this.currentSlide2 = 0
        }
      }
      carousel.goToPage(this.currentSlide2)
    },
    onPageChange() {
      const carousel = this.$refs.carouselCustom
      const { currentPage } = carousel
      this.currentSlide2 = currentPage
      this.index = currentPage + 1
    },
  },
}
</script>

<style lang="stylus" scoped>
.title-service {
  font-size: 48px;
}

.main-service {
  background: #f8f8f8;
}

.text-service {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

.col-rule {
  margin-bottom: 20px;
  margin-top: 30px;

  .rule-item {
    background: #fff;
    padding: 40px 30px 10px 30px;
    font-size: 18px;
    position: relative;
    height: 100%;

    .rule-number {
      position: absolute;
      top: -22px;
      left: 0;
      width: 100%;

      span {
        font-size: 4rem;
      }
    }
  }
}

.slide-number {
  display: flex;
  padding-bottom: 60px;
  margin-right: 130px;
  justify-content: flex-end;

  .slide-service-footer {
    position: relative;
    width: 100px;
    height: 82px;

    .btn-slide {
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 38px;

      i {
        cursor: pointer;
      }

      .icon-left {
        margin-left: -40px;
      }

      .icon-right {
        margin-right: -40px;
      }
    }

    span {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 3rem;
      line-height: 1;
    }

    .flat {
      border-bottom: 1px solid #000;
      width: 80px;
      position: absolute;
      top: 60%;
      right: 6px;
      transform: rotate(130deg);
    }

    .first-number {
      position: absolute;
      top: 0;
      left: 0;
    }

    .second-number {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
