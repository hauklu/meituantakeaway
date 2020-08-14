// 商家详情的点菜页面
<template>
  <div>
    <header class="header">
      <img class="header-img" :src="listList.img" alt="">
    </header>
    <list-nav
      @change="handleNavChange"
      :contentId="contentId"
      :list="listList.list"
    ></list-nav>
    <list-content
      @change="handleContentChange"
      :navId="navId"
      :list="listList.list"
    ></list-content>
  </div>
</template>

<script>
import ListNav from './list/Nav.vue'
import ListContent from './list/Content.vue'
export default {
  name: 'MenuList',
  components: {
    ListNav,
    ListContent
  },
  props: {
    listList: null
  },
  data () {
    return {
      navId: '',
      contentId: '001'
    }
  },
  methods: {
    handleContentChange (contentId) {
      this.contentId = contentId
    },
    handleNavChange (navId) {
      this.navId = navId
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .header {
    overflow: hidden;
    height: 2.8rem;
    box-sizing: border-box;
    padding: $commonSpace;
    .header-img {
      border-radius: 10px;
      width: 100%;
    }
  }
</style>
