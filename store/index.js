import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import chanelColors from '../constants/colors/chanel'
import creativePlayGel from '../constants/colors/cnd/creativePlayGel'
import shellac from '../constants/colors/cnd/shellac'
import vinylux from '../constants/colors/cnd/vinylux'
import infiniteShine from '../constants/colors/opi/infiniteShine'
import lacqure from '../constants/colors/opi/lacquer'
const cookieparser = process.server ? require('cookieparser') : undefined

const cnd = [...creativePlayGel, ...shellac, ...vinylux].map(color => ({
  ...color,
  type: 'cnd',
}))
const opi = [...infiniteShine, ...lacqure].map(color => ({
  ...color,
  type: 'opi',
}))
const chanel = chanelColors.map(color => ({
  ...color,
  type: 'chanel',
}))

const colors = [...cnd, ...opi, ...chanel]

Vue.use(Vuex)

export const state = () => ({
  images: [],
  colors,
  topFives: [],
  current: null,
  currentBlog: {},
  homeData: null,
  kerastaseData: null,
  olaplexData: null,
  aboutData: null,
  opiData: null,
  cndData: null,
  doTerraData: null,
  goldwellData: null,
  dermagolicaData: null,
  blogData: null,
  contactData: null,
  popupData: null,
  infoUserData: null,
  giftUser: null,
  availableMoney: 0,
  auth: null,
  orderHistory: [],
  listService: null,
  adverData: null,
})

export const getters = {
  images: state => state.images,
  colors: state => state.colors,
  current: state => state.current || state.colors[0],
  topFives: state => state.topFives,
  currentBlog: state => state.currentBlog,
  aboutUsData: state => ({
    content: state.homeData ? state.homeData.about_us : '',
    image: state.homeData ? state.homeData.about_us_image.url : '',
  }),
  branchData: state => (state.homeData ? state.homeData.branch : []),
  branchImageLeft: state =>
    state.homeData ? state.homeData.img_branch_left : '',
  peopleSay: state => (state.homeData ? state.homeData.people_say : []),
  homeData: state => ({
    quote_1: state.homeData ? state.homeData.quote_1 : '',
    quote_2: state.homeData ? state.homeData.quote_2 : '',
    services: state.homeData ? state.homeData.services : '',
    video: state.homeData ? state.homeData.video : '',
  }),
  banner: state =>
    state.homeData
      ? state.homeData.banner.map(item => ({
          image: item.image.url,
          url: item.link,
        }))
      : '',
  bookingText: state => (state.homeData ? state.homeData.book_your_visit : ''),
  kerastaseData: state => ({
    banner: state.kerastaseData ? state.kerastaseData.banner.url : '',
    title_1: state.kerastaseData ? state.kerastaseData.title_1 : '',
    title_2: state.kerastaseData ? state.kerastaseData.title_2 : '',
    title_3: state.kerastaseData ? state.kerastaseData.title_3 : '',
    title_4: state.kerastaseData ? state.kerastaseData.title_4 : '',
    title_5: state.kerastaseData ? state.kerastaseData.title_5 : '',
    paragraph_1: state.kerastaseData ? state.kerastaseData.paragraph_1[0] : '',
    paragraph_2: state.kerastaseData ? state.kerastaseData.paragraph_2[0] : '',
    paragraph_3: state.kerastaseData ? state.kerastaseData.paragraph_3[0] : '',
    paragraph_4: state.kerastaseData ? state.kerastaseData.paragraph_4[0] : '',
    paragraph_5: state.kerastaseData ? state.kerastaseData.paragraph_5[0] : '',
    quote: state.kerastaseData ? state.kerastaseData.quote : '',
  }),
  olaplexData: state => ({
    banner: state.olaplexData ? state.olaplexData.banner.url : '',
    title_1: state.olaplexData ? state.olaplexData.title_1 : '',
    title_2: state.olaplexData ? state.olaplexData.title_2 : '',
    title_3: state.olaplexData ? state.olaplexData.title_3 : '',
    paragraph_1: state.olaplexData ? state.olaplexData.paragraph_1[0] : '',
    paragraph_2: state.olaplexData ? state.olaplexData.paragraph_2 : '',
    paragraph_3: state.olaplexData ? state.olaplexData.paragraph_3[0] : '',
    quote: state.olaplexData ? state.olaplexData.quote : '',
    image_1: state.olaplexData ? state.olaplexData.image_1 : '',
    description_1: state.olaplexData ? state.olaplexData.description_1 : '',
    video: state.olaplexData ? state.olaplexData.video : '',
    description_video: state.olaplexData
      ? state.olaplexData.description_video
      : '',
    three_steps: state.olaplexData ? state.olaplexData.three_steps : '',
  }),
  aboutData: state => ({
    banner: state.aboutData ? state.aboutData.banner : '',
    paragraph_1: state.aboutData ? state.aboutData.paragraph_1[0] : '',
    paragraph_2: state.aboutData ? state.aboutData.paragraph_2 : '',
    paragraph_3: state.aboutData ? state.aboutData.paragraph_3[0] : '',
    paragraph_4: state.aboutData ? state.aboutData.paragraph_4[0] : '',
    paragraph_5: state.aboutData ? state.aboutData.paragraph_5[0] : '',
    images: state.aboutData ? state.aboutData.images : '',
  }),
  OPIData: state => ({
    banner: state.opiData ? state.opiData.banner.url : '',
    title_1: state.opiData ? state.opiData.title_1 : '',
    title_2: state.opiData ? state.opiData.title_2 : '',
    title_3: state.opiData ? state.opiData.title_3 : '',
    paragraph_1: state.opiData ? state.opiData.paragraph_1[0] : '',
    paragraph_2: state.opiData ? state.opiData.paragraph_2 : '',
    paragraph_3: state.opiData ? state.opiData.paragraph_3 : '',
    paragraph_4: state.opiData ? state.opiData.paragraph_4 : '',
    cardService: state.opiData ? state.opiData.adward : [],
    infiniteShine: state.opiData ? state.opiData.discover : '',
    quote: state.opiData ? state.opiData.quote : '',
  }),
  CNDData: state => ({
    banner: state.cndData ? state.cndData.banner.url : '',
    title: state.cndData ? state.cndData.title : '',
    paragraph_1_first: state.cndData ? state.cndData.paragraph_1[0].first : '',
    image: state.cndData ? state.cndData.paragraph_1[0].image.url : '',
    image_description: state.cndData
      ? state.cndData.paragraph_1[0].image_description
      : '',
    paragraph_1_second: state.cndData
      ? state.cndData.paragraph_1[0].second
      : '',
    Years: state.cndData ? state.cndData.history : '',
    paragraph_2_title: state.cndData ? state.cndData.paragraph_2[0].title : '',
    paragraph_2_content: state.cndData
      ? state.cndData.paragraph_2[0].content
      : '',
    paragraph_2_image: state.cndData
      ? state.cndData.paragraph_2[0].image.url
      : '',
    paragraph_3_title: state.cndData ? state.cndData.paragraph_2[1].title : '',
    paragraph_3_content: state.cndData
      ? state.cndData.paragraph_2[1].content
      : '',
    paragraph_3_image: state.cndData
      ? state.cndData.paragraph_2[1].image.url
      : '',
    paragraph_4_title: state.cndData ? state.cndData.paragraph_2[2].title : '',
    paragraph_4_content: state.cndData
      ? state.cndData.paragraph_2[2].content
      : '',
    paragraph_4_image: state.cndData
      ? state.cndData.paragraph_2[2].image.url
      : '',
    paragraph_5_first: state.cndData ? state.cndData.paragraph_3[0].first : '',
    paragraph_5_second: state.cndData
      ? state.cndData.paragraph_3[0].second
      : '',
    quote: state.cndData ? state.cndData.quote : '',
  }),
  doTerraData: state => ({
    banner: state.doTerraData ? state.doTerraData.banner.url : '',
    title_1: state.doTerraData ? state.doTerraData.title_1 : '',
    title_2: state.doTerraData ? state.doTerraData.title_2 : '',
    paragraph_1: state.doTerraData ? state.doTerraData.paragraph_1[0] : '',
    paragraph_2: state.doTerraData ? state.doTerraData.paragraph_2[0] : '',
    paragraph_3: state.doTerraData ? state.doTerraData.paragraph_3[0] : '',
    paragraph_4: state.doTerraData ? state.doTerraData.paragraph_4[0] : '',
    paragraph_5: state.doTerraData ? state.doTerraData.paragraph_5[0] : '',
    paragraph_6: state.doTerraData ? state.doTerraData.paragraph_6[0] : '',
    paragraph_7: state.doTerraData ? state.doTerraData.paragraph_7 : '',
    cptg: state.doTerraData ? state.doTerraData.cptg : '',
    quote: state.doTerraData ? state.doTerraData.quote : '',
  }),
  goldwellData: state => ({
    banner: state.goldwellData ? state.goldwellData.banner.url : '',
    title_1: state.goldwellData ? state.goldwellData.title_1 : '',
    title_2: state.goldwellData ? state.goldwellData.title_2 : '',
    title_3: state.goldwellData ? state.goldwellData.title_3 : '',
    title_4: state.goldwellData ? state.goldwellData.title_4 : '',
    title_5: state.goldwellData ? state.goldwellData.title_5 : '',
    title_6: state.goldwellData ? state.goldwellData.title_6 : '',
    title_7: state.goldwellData ? state.goldwellData.title_7 : '',
    paragraph_1: state.goldwellData ? state.goldwellData.paragraph_1 : '',
    paragraph_2: state.goldwellData ? state.goldwellData.paragraph_2 : '',
    paragraph_3: state.goldwellData ? state.goldwellData.paragraph_3 : '',
    paragraph_4: state.goldwellData ? state.goldwellData.paragraph_4[0] : '',
    paragraph_5: state.goldwellData ? state.goldwellData.paragraph_5[0] : '',
    paragraph_6: state.goldwellData ? state.goldwellData.paragraph_6 : '',
    paragraph_7: state.goldwellData ? state.goldwellData.paragraph_7[0] : '',
    animation: state.goldwellData ? state.goldwellData.animation : '',
    adward: state.goldwellData ? state.goldwellData.adward : '',
  }),
  dermagolicaData: state => ({
    banner: state.dermagolicaData ? state.dermagolicaData.banner.url : '',
    title_1: state.dermagolicaData ? state.dermagolicaData.title_1 : '',
    title_2: state.dermagolicaData ? state.dermagolicaData.title_2 : '',
    paragraph_1: state.dermagolicaData
      ? state.dermagolicaData.paragraph_1[0]
      : '',
    paragraph_2: state.dermagolicaData
      ? state.dermagolicaData.paragraph_2[0]
      : '',
    paragraph_3: state.dermagolicaData ? state.dermagolicaData.paragraph_3 : '',
    paragraph_4: state.dermagolicaData ? state.dermagolicaData.paragraph_4 : '',
    adward: state.dermagolicaData ? state.dermagolicaData.adward : [],
    quote: state.dermagolicaData ? state.dermagolicaData.quote : '',
  }),
  blogData: state => ({
    banner: state.blogData ? state.blogData.banner.url : '',
  }),
  contactData: state => ({
    map: state.contactData ? state.contactData.map : '',
    contact: state.contactData ? state.contactData.contact[0] : '',
    branch: state.contactData ? state.contactData.branch : '',
    quote: state.contactData ? state.contactData.quote : '',
  }),
  popupData: state => ({
    image: state.popupData ? state.popupData.image : '',
    post_link: state.popupData ? state.popupData.post_link : '',
  }),

  // image: state.adverData ? state.adverData.web_english : '',
  adverData: state => state.adverData,
  infoUserData: state => ({
    avatar: state.infoUserData ? state.infoUserData.image : '',
    username: state.infoUserData ? state.infoUserData.fullname : '',
    birthday: state.infoUserData ? state.infoUserData.birthday : '',
    address: state.infoUserData ? state.infoUserData.address : '',
  }),
  giftUser: state => state.giftUser,
  availableMoney: state => state.availableMoney,
  auth: state => state.auth,
  orderHistory: state => state.orderHistory,
  listService: state => state.listService,
}

export const mutations = {
  setImage: (state, images) => {
    state.images = images
  },
  setCurrent: (state, current) => {
    state.current = current
  },
  setCurrentBlog: (state, payload) => {
    state.currentBlog = payload
  },
  setHomeData: (state, data) => {
    state.homeData = data
  },
  setTopFives: (state, data) => {
    state.topFives = data
  },
  setKerastaseData: (state, data) => {
    state.kerastaseData = data
  },
  setOlaplexData: (state, data) => {
    state.olaplexData = data
  },
  setAboutData: (state, data) => {
    state.aboutData = data
  },
  setOPIData: (state, data) => {
    state.opiData = data
  },
  setCNDData: (state, data) => {
    state.cndData = data
  },
  setdoTerraData: (state, data) => {
    state.doTerraData = data
  },
  setGoldwellData: (state, data) => {
    state.goldwellData = data
  },
  setDermagolicaData: (state, data) => {
    state.dermagolicaData = data
  },
  setBlogData: (state, data) => {
    state.blogData = data
  },
  setContactData: (state, data) => {
    state.contactData = data
  },
  setPopupData: (state, data) => {
    state.popupData = data
  },
  setAdverData: (state, data) => {
    state.adverData = data
  },
  setInfoUserData: (state, data) => {
    state.infoUserData = data
  },
  setGiftUser: (state, data) => {
    state.giftUser = data
  },
  setAvailableMoneyData: (state, data) => {
    state.availableMoney = data
  },
  setAuth(state, auth) {
    state.auth = auth
  },
  setOrderHistory: (state, data) => {
    state.orderHistory = data
  },
  setListService: (state, data) => {
    state.listService = data
  },
}

export const actions = {
  getImages: ({ commit }) =>
    axios.get('https://instagram.eforealifestyle.com/').then(response => {
      commit(
        'setImage',
        response.data.map(res => ({
          src: res.node.thumbnail_resources[4].src,
          href: `https://www.instagram.com/p/${res.node.shortcode}`,
        })),
      )
    }),
  async getBySlug({ commit }, { slug }) {
    const res = await this.$axios.$get(
      `https://cms.eforealifestyle.com/wp-json/wp/v2/posts?_embed&slug=${slug}`,
    )
    commit('setCurrentBlog', res[0])
  },
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
}
