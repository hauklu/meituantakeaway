<template>
  <div>
    <div class="tab">
      <div class="tab-item" @click="handleTabClick(item.id)" v-for="item of tabList" :key="item.id">
        <div class="tab-text" :class="{tabShowStyle: tabShow == item.id}">
          {{item.name}}
        </div>
        <div class="tab-label" v-show="tabShow == item.id"></div>
      </div>
    </div>
    <div class="tab tabFixed" v-show="!tabScroll">
      <div class="tab-item" @click="handleTabClick(item.id)" v-for="item of tabList" :key="item.id">
        <div class="tab-text" :class="{tabShowStyle: tabShow == item.id}">
          {{item.name}}
        </div>
        <div class="tab-label" v-show="tabShow == item.id"></div>
      </div>
    </div>
    <menu-list v-if="tabShow == tabList[0].id" :listList="listList"></menu-list>
    <menu-merchantinfo v-if="tabShow == tabList[1].id" :merchantinfoList="merchantinfoList"></menu-merchantinfo>
  </div>
</template>

<script>
import MenuList from './List.vue'
import MenuMerchantinfo from './Merchantinfo.vue'
export default {
  name: 'Headernav.vue',
  components: {
    MenuList,
    MenuMerchantinfo
  },
  props: {
    listList: null,
    merchantinfoList: null
  },
  data () {
    return {
      tabList: [{
        id: '001',
        name: '点菜'
      }, {
        id: '002',
        name: '商家'
      }],
      tabShow: '001',
      tabScroll: true
    }
  },
  methods: {
    handleScroll () {
      const topLength = document.documentElement.scrollTop
      if (topLength > 135) {
        this.tabScroll = false
      } else {
        this.tabScroll = true
      }
    },
    handleTabClick (id) {
      this.tabShow = id
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  $fixedHeight: .8rem;
  .tab {
    height: $fixedHeight;
    width: 100%;
    box-shadow: 0 1px 1px rgba(42, 42, 42, 0.1);
    display: flex;
    .tab-item {
      text-align: center;
      width: 25%;
      position: relative;
      .tab-text {
      line-height: $fixedHeight;
      font-size: .35rem;
      color: rgb(163, 162, 162);
      font-weight: 300;
      }
      .tab-label {
        position: absolute;
        bottom: 0;
        margin-left: 50%;
        left: -.25rem;
        align-self: flex-end;
        content: '';
        background: orange;
        width: .5rem;
        height: .05rem;
      }
    }
  }
  .tabShowStyle {
    color: #333;
    font-weight: 800;
  }
  .tabFixed {
    position: fixed;
    top: $fixedHeight - 0.01rem;
    background: #fff;
    z-index: 99;
  }
</style>
