<template>
  <div class="home">
    <home-header></Home-header>
    <home-search v-if="false"></home-search>
    <home-slideshow :slideshowList="slideshowList"></home-slideshow>
    <home-nav
      :navHeaderList="navHeaderList"
      :navListList="navListList"
      :navListLast="navListLast"
    ></home-nav>
    <home-merchantlist :merchantList="merchantList"></home-merchantlist>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'
import HomeSlideshow from './components/Slideshow.vue'
import HomeNav from './components/Nav.vue'
import HomeMerchantlist from './components/Merchantlist.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch: HomeSearch,
    HomeSlideshow,
    HomeNav,
    HomeMerchantlist
  },
  data () {
    return {
      slideshowList: [],
      navHeaderList: [],
      navListList: [],
      navListLast: {},
      merchantList: []
    }
  },
  methods: {
    // 获取home.json
    getInfo () {
      axios.get('https://hauklu.github.io/storage/meituantakeaway/takeAwayJson/home.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.slideshowList = data.slideshowList
        this.navHeaderList = data.navList.navHeaderList
        this.navListList = data.navList.navListList
        this.navListLast = data.navList.navListLast
        this.merchantList = data.merchantList
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .home {
    padding-bottom: $footerHomeHeight;
  }
</style>
