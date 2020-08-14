// 点菜页面的左边导航列表
<template>
  <nav class="nav" :class="{navFixed: navFixed == 1}">
    <div
      class="nav-item"
      :class="{'nav-itemTouch': navItemTouch == item.id}"
      @click="handleNavItemTouch(item.id)"
      v-for="item of list"
      :key="item.id"
    >
      <img class="nav-img" v-if="item.icon" :src="item.icon">
      <span class="nav-text">{{item.title}}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ListNav',
  props: {
    contentId: String,
    list: Array
  },
  data () {
    return {
      navFixed: 0,
      navItemTouch: 1
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 275) {
        this.navFixed = 1
      } else {
        this.navFixed = 0
      }
    },
    handleNavItemTouch (id) {
      this.navItemTouch = id
      this.$emit('change', id)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    // 监听点击的元素id, 并赋值给navItemTouch
    contentId () {
      this.navItemTouch = this.contentId
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  $topFixedHeight: 1.6rem - 0.03rem;
  $navTextHeight: 1rem;
  @mixin ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nav {
    width: 20%;
    min-height: 100%;
    float: left;
    padding-bottom: $footerHeight;
    .nav-item {
      text-align: center;
      padding: 0.4rem 0.1rem;
      box-sizing: border-box;
      .nav-img {
        width: .3rem;
        height: .3rem;
        margin-right: .05rem;
      }
      .nav-text {
        // line-height: $navTextHeight;
        line-height: .4rem;
        text-align: center;
        font-size: .25rem;
        color: rgb(115, 115, 115);
      }
    }
    .nav-itemTouch {
      background: #fff;
      color: #333;
      font-weight: bold;
    }
  }
  .navFixed {
    position: fixed;
    top: $topFixedHeight;
    left: 0;
    bottom: 0;
    z-index: 99;
  }
</style>
