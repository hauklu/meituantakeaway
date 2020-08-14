<template>
  <div>
    <div class="footNav">
      <div class="icons">
        <div class="icon-place" v-for="item of iconList" :key="item.id">
          <div
            class="iconfont home-icon footNav-icon"
            :class="{iconchange: (item.id == current)}"
            @click="handleTabClick(item.id)"
          >{{item.text}}</div>
        </div>
      </div>
      <div class="texts">
        <div
          class="footNav-text"
          v-for="item of textList"
          :key="item.id"
          @click="handleTabClick(item.id)"
        >{{item.text}}</div>
      </div>
    </div>
    <home v-show="current == textList[0].id"></home>
    <list
      v-show="current == textList[1].id"
      :foodMenu="this.$route.params.foodMenu"
      :count="this.$route.params.count"
    ></list>
    <my v-show="current == textList[2].id"></my>
  </div>
</template>

<script>
import Home from './home/Home.vue'
import List from './list/List.vue'
import My from './my/My.vue'
export default {
  name: 'HomeFootNav',
  components: {
    Home,
    List,
    My
  },
  data () {
    return {
      textList: [{
        id: '001',
        text: '首页'
      }, {
        id: '002',
        text: '订单'
      }, {
        id: '003',
        text: '我的'
      }],
      iconList: [{
        id: '001',
        text: '\ue635'
      }, {
        id: '002',
        text: '\ue630'
      }, {
        id: '003',
        text: '\ue639'
      }],
      current: '001',
      visible: true
    }
  },
  methods: {
    handleTabClick (id) {
      this.current = id
    }
  },
  created () {
    // html页面渲染之前, 先尝试匹配current的值, 决定切换到哪个页面
    this.current = this.$route.params.currentId || '001'
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .footNav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: $footerHomeHeight;
    background: #fff;
    box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.1);
  }
  .texts,
  .icons {
    display: flex;
    justify-content: space-around;
  }
  .icons {
    margin-top: .3rem;
    width: 100%;
  }
  .texts {
    font-size: .21rem;
    color: $darkTextColor;
    position: absolute;
    left: 0;
    right: 0;
    top: .7rem;
  }
  .icon-place {
    // background-color: yellow;
    height: .6rem;
    width: .6rem;
    position: relative;
  }
  .footNav-icon {
    font-size: .35rem;
    text-align: center;
  }
  .iconchange {
    color: orange;
    font-size: .6rem;
    transform: translateY(-.2rem);
  }
  .rl {
    height: 1rem;
    width: 100%;
    background: blue;
  }
</style>
