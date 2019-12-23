<template>
  <section class="navbar-section">
    <b-navbar
      class="navbar-custom"
      toggleable="md"
      type="light"
      v-bind:class="{ 'is-scroll': scrolled }"
    >
      <b-container>
        <b-navbar-brand class="navbar-section__brand" :to="localePath('index')">
          <img class="img-logo" src="/images/LOGO.png" alt="logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav class="nav-collapse-custom" id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <i
              v-b-toggle.nav_collapse
              class="fas fa-times close-nav-collapse"
            ></i>
            <span class="menu">MENU</span>
            <b-nav-item :to="localePath('index')" exact>{{
              $t('home')
            }}</b-nav-item>
            <div class="dropdown-custom">
              <b-nav-item
                >{{ $t('about') }}
                <span class="color-primary">{{
                  $t('euphorea')
                }}</span></b-nav-item
              >
              <div class="dropdown-content">
                <div class="link-group">
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="localePath('intro')"
                    >{{ $t('aboutUs') }}</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="localePath('about')"
                    >{{ $t('mission') }}</router-link
                  >
                  <router-link class="dropdown-link dropdown-parent" to="#">{{
                    $t('partner')
                  }}</router-link>
                </div>
              </div>
            </div>
            <div class="dropdown-custom">
              <b-nav-item>{{ $t('service') }}</b-nav-item>
              <div class="dropdown-content">
                <div class="link-group">
                  <router-link
                    class="dropdown-link dropdown-parent"
                    to="/service/kerastase"
                    >{{ $t('hair') }}</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    to="/service/cnd"
                    >{{ $t('nail') }}</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    to="/service/dermagolica"
                    >Spa</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    to="/service/boutique-salon"
                    >{{ $t('special') }}</router-link
                  >
                </div>
              </div>
            </div>
            <!-- <b-nav-item :to="localePath('booking')">{{
              $t('booking')
            }}</b-nav-item> -->
            <div class="dropdown-custom">
              <b-nav-item>{{ $t('promotion') }}</b-nav-item>
              <div class="dropdown-content">
                <div class="link-group">
                  <div class="sub-dropdown-custom">
                    <span
                      class="dropdown-link dropdown-have-sub dropdown-parent"
                    >
                      <router-link
                        class="euphorea-club"
                        :to="localePath('advertisement')"
                        >Euphorea Club</router-link
                      ><i class="icon-arrow-right"></i>
                    </span>
                    <div class="dropdown-sub-content link-group">
                      <router-link
                        class="dropdown-link"
                        :to="localePath('login')"
                        >{{ $t('login') }}</router-link
                      >
                    </div>
                  </div>
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="`/${path1}/special-offers`"
                    >{{ $t('deal') }}</router-link
                  >
                </div>
              </div>
            </div>
            <b-nav-item :to="localePath('blog')" target="_blank"
              >Blog</b-nav-item
            >
            <b-nav-item :to="localePath('#')">{{ $t('gallery') }}</b-nav-item>
            <div class="dropdown-custom">
              <b-nav-item>{{ $t('contact') }}</b-nav-item>
              <div class="dropdown-content">
                <div class="link-group">
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="localePath('office')"
                    >{{ $t('headOffical') }}</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="localePath('booking')"
                    >{{ $t('booking') }}</router-link
                  >
                  <router-link
                    class="dropdown-link dropdown-parent"
                    :to="`/${path}/tan-cang`"
                    >{{ $t('network') }}</router-link
                  >
                </div>
              </div>
            </div>
            <div class="collapsed-extra py-2 text-white">
              <b-input-group class="mb-4">
                <b-form-input
                  placeholder="Tìm kiếm"
                  class="search-collapse"
                  type="text"
                />
                <i class="fa fa-search icon-search-menu"></i>
              </b-input-group>
              <span>Hotline: <strong>093-333-3925</strong></span>
              <span>Booking: <strong>1800-9467</strong></span>
              <span>Mở cửa: <strong>Từ 9h đến 21h</strong></span>
              <div>
                <b-button size="lg" class="info__btn--icon" variant="link">
                  <i class="fab fa-facebook-square text-white"></i>
                </b-button>
                <b-button size="lg" class="info__btn--icon" variant="link">
                  <i class="fab fa-instagram text-white"></i>
                </b-button>
              </div>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </section>
</template>
<script>
export default {
  data() {
    return {
      scrolled: false,
    }
  },
  computed: {
    path() {
      if (this.$i18n.locale === 'vi') {
        return 'contact'
      }
      return 'en/contact'
    },
    path1() {
      if (this.$i18n.locale === 'vi') {
        return 'program'
      }
      return 'en/program'
    },
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="stylus" scoped>
.is-scroll {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  height: 80px;
  z-index: 999;
}

.navbar-section {
  .navbar-custom {
    height: 80px;
  }

  .btn-login {
    display: none;
  }

  &__brand {
    color: #79cdde;
    font-size: 36px;
    font-weight: 300;
    display: flex;

    &:hover {
      color: #79cdde;
    }
  }

  .nav-item {
    text-transform: uppercase;

    a {
      color: rgba(0, 0, 0, 0.7);

      &.active {
        font-weight: 700;
        color: #79cdde;
        border-bottom: 1.5px solid #79cdde;
        margin-bottom: -1.5px;
      }
    }
  }
}

.navbar-nav {
  .close-nav-collapse, .menu {
    display: none;
  }
}

.collapsed-extra {
  display: none;

  .search-collapse {
    padding: 0.375rem 0.75rem 0.375rem 2.75rem !important;
    border-radius: 4px;
  }

  .icon-search-menu {
    font-size: 20px;
    align-self: center;
    position: absolute;
    color: #cecece;
    left: 9px;
    padding: 1px 8px 1px 0;
    border-right: 1px solid;
    z-index: 5;
  }
}

.navbar-custom {
  height: 80px;
}

.dropdown-custom {
  position: relative;
  display: inline;

  .dropdown-content {
    display: none;
    position: absolute;
    padding-top: 20px;
    min-width: 208px;
    z-index: 15;

    .link-group {
      background-color: #fff;

      .dropdown-link {
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 25px;
        padding-right: 5px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
          color: #fff;
          background-color: #79cdde;
        }
      }

      .dropdown-have-sub {
        position: relative;

        i {
          position: absolute;
          right: 25px;
          bottom: 19px;
          font-size: 12px;
        }
      }

      .dropdown-parent {
        text-transform: uppercase;
      }
    }

    .dropdown-sub-content {
      display: none;
      position: absolute;
      min-width: 208px;
      z-index: 15;
      top: 20px;
      left: 208px;
    }
  }

  .euphorea-club {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);

    &:hover {
      color: #fff;
      background-color: #79cdde;
    }
  }
}

.dropdown-custom:hover, .dropdown-custom:focus-within {
  .dropdown-content, .dropdown-content:focus {
    display: block;
  }
}

.sub-dropdown-custom:hover {
  .dropdown-sub-content, .dropdown-sub-content:focus {
    display: block;
  }
}

.color-branch {
  color: #79cdde;
}

@media (max-width: 768px) {
  .navbar {
    position: unset;
  }

  .color-branch {
    color: #fff !important;
  }

  .collapsed-extra {
    display: flex;
    flex-direction: column;
  }

  .navbar-section {
    position: relative;

    .nav-collapse-custom {
      z-index: 10;
      position: absolute;
      top: 20px;
      left: 0px;
      min-width: 320px;
      background: rgba(121, 205, 222, 0.8);

      .navbar-nav {
        position: relative;
        padding: 70px 10px 25px 10px;

        .close-nav-collapse {
          cursor: pointer;
          display: block;
          position: absolute;
          right: 10px;
          font-size: 27px;
          top: 7px;
          color: #fff;
        }

        .menu {
          display: block;
          position: absolute;
          left: 10px;
          font-size: 27px;
          top: 0px;
          color: #fff;
        }

        .nav-item {
          a {
            color: #fff !important;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .navbar-section {
    .navbar-custom {
      .btn-login {
        display: block;

        .btn-icon-menu {
          font-size: 12px;
        }
      }
    }
  }

  .img-logo {
    height: 18px;
  }
}

@media (max-width: 400px) {
  .navbar-section {
    .navbar-custom {
      .btn-login {
        display: block;

        .btn-icon-menu {
          font-size: 12px;
        }
      }
    }
  }

  .img-logo {
    height: 18px;
  }
}

@media (max-width: 320px) {
  .navbar-section {
    .navbar-custom {
      .btn-login {
        display: block;

        .btn-icon-menu {
          font-size: 10px;
        }
      }
    }
  }

  .img-logo {
    height: 10px;
  }
}
</style>
