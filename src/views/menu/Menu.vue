<template>
  <div class="menu">
    <menu-header :merchantList="merchantList"></menu-header>
    <menu-headernav :listList="listList" :merchantinfoList="merchantinfoList"></menu-headernav>
    <menu-footer :merchantList="merchantList"></menu-footer>
  </div>
</template>

<script>
import MenuHeader from './components/Header.vue'
import MenuHeadernav from './components/Headernav.vue'
import MenuFooter from './components/Footer.vue'
import axios from 'axios'
export default {
  name: 'Menu',
  components: {
    MenuHeader,
    MenuFooter,
    MenuHeadernav
  },
  data () {
    return {
      merchantId: 0,
      merchantList: '',
      listList: '',
      merchantinfoList: '',
      axiosURL: 'https://hauklu.github.io/storage/meituantakeaway/takeAwayJson'
    }
  },
  methods: {
    getHomeInfo () {
      axios.get(this.axiosURL + '/home.json', {
        params: {
          index: this.$route.params.id
        }
      })
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.merchantList = data.merchantList[this.merchantId]
      }
    },
    getMenuInfo () {
      axios.get(this.axiosURL + '/menu.json')
        .then(this.getMenuInfoSucc)
    },
    getMenuInfoSucc (res) {
      res = res.data
      if (res.ret && res.headernavList) {
        this.listList = res.headernavList[this.merchantId].listList
        this.merchantinfoList = res.headernavList[this.merchantId].merchantinfoList
      }
    }
  },
  mounted () {
    this.merchantId = this.$route.params.id
    this.getHomeInfo()
    this.getMenuInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
