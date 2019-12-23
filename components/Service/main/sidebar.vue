<template>
  <div class="sidebar pb-1 mb-3">
    <div
      class="service"
      v-for="(item, index) in sidebarList"
      :key="`sidebar_item_${index}`"
    >
      <div class="title-service">
        {{ item.title }}
      </div>
      <div class="link-service-group">
        <ul>
          <li
            v-for="(i, ind) in item.subService"
            @click="onSelectItem(i)"
            :key="`sidebar_sub_item_${ind}`"
          >
            <a
              :class="[
                path === i.path ? SideBarItemActive : '',
                TitleSubService,
              ]"
            >
              {{ i.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
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
      // Add class attribute
      SideBarItemActive: 'sidebar-item-active',
      TitleSubService: 'title-subService',
      indexSelected: false,
      sidebarList: [
        {
          title: 'Chăm sóc tóc',
          subService: [
            {
              selected: true,
              name: 'Kevin Murphy',
              path: '/service/kerastase',
            },
            {
              selected: false,
              name: 'Davines, Goldwell',
              path: '/service/goldwell',
            },
            {
              selected: false,
              name: 'Olaplex',
              path: '/service/olaplex',
            },
            {
              selected: false,
              name: 'No.3',
              path: '/service/error-404',
            },
          ],
        },
        {
          title: 'Chăm sóc móng',
          subService: [
            {
              name: 'CND',
              path: '/service/cnd',
            },
            {
              name: 'OPI',
              path: '/service/opi',
            },
            {
              name: 'Thử màu sơn',
              path: '/service/choose-color',
            },
          ],
        },
        {
          title: 'SPA',
          subService: [
            {
              name: 'Dermalogica',
              path: '/service/dermagolica',
            },
            {
              name: 'doTERRA',
              path: '/service/doTerra',
            },
          ],
        },
        {
          selected: false,
          title: ' Dịch vụ đặc biệt',
        },
      ],
    }
  },
  methods: {
    onSelectItem(item) {
      this.$router.push(item.path)
    },
  },
}
</script>
<style lang="stylus" scoped>
.sidebar {
  border-left: 1px solid #ddd;
  margin-top: 48px;
}

.service {
  margin-left: 15px;

  a {
    text-decoration: none;
    color: #2a2b30;
    background: transparent;
  }

  a:hover {
    color: red;
  }

  .title-service {
    text-align: left;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
  }

  .link-service-group>ul>li {
    list-style-type: none;
    text-align: left;
    cursor: pointer;
  }

  .title-subService:hover {
    color: #76ccdd;
  }

  .sidebar-item-active {
    background: #f7feff;
    color: #76ccdd;
    font-weight: 700;
  }
}
</style>
