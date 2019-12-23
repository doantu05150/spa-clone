<template>
  <section class="copyright">
    <b-container>
      <b-row>
        <b-col class="mt-5 mb-4 img-footer">
          <img class="img-logos" src="/images/LOGO.png" alt="logo-footer" />
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col md="3" sm="3" class="footer-content">
          <!-- <span>Hotline: <strong>093-333-3925</strong></span> -->
          <span>Booking: <strong>1800-9467</strong></span>
          <div class="btn-group">
            <b-button class="color-primary btn--icon mr-3" variant="link">
              <i class="fab fa-facebook-square"></i>
            </b-button>
            <b-button class="color-primary btn--icon" variant="link">
              <i class="fab fa-instagram"></i>
            </b-button>
          </div>
        </b-col>
        <b-col md="6" sm="6" class="footer-content">
          <span><strong>Euphorea Tân Cảng</strong></span>
          <span class="mb-2"
            >392/5, Ung Văn Khiêm, P. 25, Q. Bình Thạnh, TP. HCM</span
          >
          <span><strong>Euphorea Ba Son </strong></span>
          <span>SH09, Aqua 3, Vinhomes Golden River </span>
          <span class="mb-2"
            >- Số 2, Tôn Đức Thắng, P. Bến Nghé, Q. 1, TP. HCM</span
          >
          <span><strong>Euphorea Boutique Salon</strong></span>
          <span class="mb-2"
            >9A, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm, Hà Nội</span
          >
        </b-col>
        <b-col md="3" sm="3" class="text-right footer-content">
          <span class="fc-top">Mở cửa: <strong>9:00 đến 20:00</strong></span>
          <span class="mb-2">tất cả các ngày trong tuần.</span>
          <span
            >Quý khách có nhu cầu sử dụng dịch vụ
            <strong>trước 9:00 sáng</strong> vui lòng liên hệ số hotline hoặc
            booking.</span
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center copy">
          <p>Copyright © 2018 by Euphorea</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="stylus" scoped>
.copyright {
  background: #fff;
  color: #000;
  border-top: 1px solid #76ccdd;

  .footer-content {
    display: flex;
    flex-direction: column;

    .btn-group {
      display: block;

      .btn {
        padding: 0;
      }
    }

    .fc-top {
      margin-top: 10px;
    }

    span {
      font-size: 17px;
      font-weight: 300;
      line-height: 1.3;
    }

    strong {
      font-size: 18px;
    }

    .btn--icon {
      font-size: 24px;
    }
  }

  span {
    strong {
      font-weight: 600;
    }
  }
}

@media (max-width: 400px) {
  .copyright {
    .img-footer {
      text-align: center;
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .btn-group {
        .btn {
          padding: 0;
        }
      }

      span {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.3;
        text-align: center;
      }

      strong {
        font-size: 17px;
      }

      .btn--icon {
        font-size: 24px;
      }
    }

    span {
      strong {
        font-weight: 600;
      }
    }
  }

  .copy {
    margin-top: -20px;
  }
}

@media (max-width: 576px) {
  .copyright {
    .img-footer {
      text-align: center;
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .btn-group {
        .btn {
          padding: 0;
        }
      }

      span {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.3;
        text-align: center;
      }

      strong {
        font-size: 17px;
      }

      .btn--icon {
        font-size: 24px;
      }
    }

    span {
      strong {
        font-weight: 600;
      }
    }
  }

  .copy {
    margin-top: -20px;
  }
}
</style>
