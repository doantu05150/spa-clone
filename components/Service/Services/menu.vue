<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-center">
          <h1 class="mt-5 title">Menu {{ title }}</h1>
          <p class="mt-4">
            Download bản mềm<a :href="`${links[branch]}`"> tại đây</a> để xem
            tốt hơn.
          </p>
          <div v-if="branch === 'TanCang'" class="book" ref="book">
            <div v-for="i in 15" :key="i" class="page">
              <img
                :src="
                  `/images/menu/Menu-${branch}_print-${
                    i < 10 ? '0' + i : i
                  }.jpg`
                "
              />
            </div>
          </div>
          <div v-else-if="branch === 'Boutique'" class="book" ref="book">
            <div v-for="i in 13" :key="i" class="page">
              <img
                :src="
                  `/images/menu/Menu-${branch}_print-${
                    i < 10 ? '0' + i : i
                  }.png`
                "
              />
            </div>
          </div>
          <div v-else class="book" ref="book">
            <div v-for="i in 15" :key="i" class="page">
              <img
                :src="
                  `/images/menu/Menu-${branch}_print-${
                    i < 10 ? '0' + i : i
                  }.png`
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        TanCang:
          'https://drive.google.com/file/d/1f7TMOgkcFNw5G4tFPuXkwaN8WujKUrv8/view?usp=sharing',
        Bason2:
          'https://drive.google.com/open?id=1AqXhPoEPFMmmfr2cTuV_CE8tLdvxdZTd',
        Boutique:
          'https://drive.google.com/file/d/1KQwk3iJalN4hd16sL0WHlL55HttA1MRu',
      },
      types: {
        hair: 2,
        nail: 8,
        skin: 12,
        body: 14,
      },
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'hair',
    },
  },
  mounted() {
    this.$myInjectedFunction(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
      document.head,
    ).then(() => {
      var width =
        window.innerWidth > 0
          ? window.innerWidth
          : document.documentElement.clientWidth
      if (width > 1024) {
        this.$myInjectedFunction('/js/turnjs.min.js', document.head).then(
          () => {
            const { book } = this.$refs
            book.style.width = ''
            book.style.height = ''
            if (book) {
              if (this.branch === 'TanCang') {
                window.$(book).turn({
                  page: this.types[this.type],
                  gradients: true,
                  acceleration: true,
                  height: 850,
                  width: 550 * 2,
                })
              } else if (this.branch === 'Boutique') {
                window.$(book).turn({
                  page: this.types[this.type],
                  gradients: true,
                  acceleration: true,
                  height: 584,
                  width: 413 * 2,
                })
              } else {
                window.$(book).turn({
                  page: this.types[this.type],
                  gradients: true,
                  acceleration: true,
                  height: 612,
                  width: 397 * 2,
                })
              }
            }
          },
        )
      }
    })
  },
  computed: {
    branch() {
      if (this.title === 'Tân Cảng') {
        return 'TanCang'
      }
      if (this.title === 'Boutique Salon') {
        return 'Boutique'
      }
      return 'Bason2'
    },
  },
}
</script>

<style lang="stylus" scoped>
h1.title {
  color: #76ccdd;
}

.book {
  margin: 3rem auto;

  img {
    max-width: 100%;
  }
}
</style>
