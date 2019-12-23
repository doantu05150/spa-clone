<template>
  <section>
    <div class="menu">
      <div
        class="name-menu"
        v-for="(item, index) in branchList"
        :key="`index+${index}`"
        @click="position = index"
      >
        <p :class="[position === index ? 'active' : 'not-active']">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="branch">
      <div
        class="branch-item"
        v-for="(item, ind) in filterBranch"
        :key="ind"
        @click="onSelectItem(item)"
        :class="{ 'sidebar-branch-active': path === item.path }"
      >
        <div class="infor">
          <div
            class="branch-name"
            :class="{ 'sidebar-item-active': path === item.path }"
          >
            {{ item.name }}
          </div>
          <div class="more-infor">
            <div class="branch-address">
              {{ item.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      branchList: [
        {
          name: 'Miền nam',
          addr: [
            {
              name: 'Euphorea Tân Cảng',
              address: '392/5, Ung Văn Khiêm, P. 25, Q. Bình Thạnh, TP. HCM',
              position: 'S',
              path: '/contact/tan-cang',
            },
            {
              name: 'Euphorea Ba Son',
              address:
                'SH09, Aqua 3, Vinhomes Golden River - Số 2, Tôn Đức Thắng, P. Bến Nghé, Q. 1, TP. HCM',
              position: 'S',
              path: '/contact/ba-son',
            },
          ],
        },
        {
          name: 'Miền bắc',
          addr: [
            {
              name: 'Euphorea Boutique Salon',
              address: '9A, Bà Triệu, P. Tràng Tiền, Q. Hoàn Kiếm, Hà Nội',
              position: 'N',
              path: '/contact/error-404',
            },
          ],
        },
        {
          name: 'Miền trung',
          addr: [{}],
        },
      ],
      position: 0,
    }
  },
  computed: {
    filterBranch() {
      return this.position !== -1 ? this.branchList[this.position].addr : []
    },
  },
  methods: {
    onSelectItem(item) {
      this.$router.push(item.path)
    },
  },
}
</script>

<style lang="stylus" scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #76ccdd;
  border-color: #17a2b8;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.01em;

  .name-menu {
    margin-top: 5px;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;

    .active {
      color: #ffffff;
    }

    .not-active {
      color: #000000;
    }

    p {
      margin-bottom: 0;
      font-size: 16px;
    }
  }

  .all-item {
    margin-top: 13px;
  }
}

.branch {
  display: flex;
  text-align: left;
  flex-direction: column;

  .branch-item {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    padding: 0 10px;
    box-sizing: border-box;

    .branch-icon {
      margin-top: 20px;
      margin-right: 30px;
    }

    .infor {
      .branch-name {
        margin: 5px 0;
        font-weight: 700;
        font-size: 30px;
        cursor: pointer;
      }

      .sidebar-item-active {
        color: #76ccdd;
        font-weight: 700;
      }

      .more-infor {
        .branch-address {
          margin-bottom: 15px;
        }

        .branch-hour {
          margin-bottom: 15px;

          .bold-title {
            font-weight: 700;
          }
        }
      }
    }
  }

  .sidebar-branch-active {
    // background #DDFFCF;
  }

  .branch-item:hover {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // background #DDFFCF;
    cursor: pointer;

    .branch-name {
      color: #76ccdd;
    }
  }
}
</style>
