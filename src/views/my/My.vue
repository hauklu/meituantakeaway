<template>
  <div class="my">
    <header class="header">
      <div class="header-block">
        <div class="header-portrait" />
        <p class="header-name">逃逃六</p>
      </div>
    </header>
    <div class="member">
      <p class="member-p">{{myList.memberP1}}</p>
      <p class="member-p">{{myList.memberP2}}</p>
    </div>
    <div class="property block">
      <header class="block-header">{{myList.propertyName}}</header>
      <div class="block-content">
        <a
          href="#"
          class="block-a"
          v-for="(item, name, index) in myList.propertyList"
          :key="index"
        >
          {{item}}
        </a>
      </div>
    </div>
    <div class="wallet block">
      <header class="block-header">{{myList.walletName}}</header>
      <div class="block-content">
        <a
          href="#"
          class="block-a"
          v-for="(item, index) of myList.walletList"
          :key="index"
        >
          {{item}}
        </a>
      </div>
    </div>
    <div class="menu block">
      <header class="block-header">{{myList.menuName}}</header>
      <div class="block-content">
        <a
          href="#"
          class="block-a"
          v-for="(item, index) of myList.menuList"
          :key="index"
        >
          {{item}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'My',
  data() {
    return {
      myList: ''
    }
  },
  methods: {
    getInfo() {
      axios.get('https://hauklu.github.io/storage/meituantakeaway/takeAwayJson/my.json').then(this.getInfoSucc)
    },
    getInfoSucc(res) {
      res = res.data
      if (res.ret && res.myList) {
        this.myList = res.myList
      }
    }
  },
  mounted() {
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
body {
  background: rgba($color: #faf5f5fa, $alpha: 1);
}

.my {
  padding-bottom: $footerHomeHeight;
}

.header {
  height: 2rem;
  position: relative;
}

.header-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header-portrait {
  height: 0.8rem;
  width: 0.8rem;
  background: url(/imgs/my/portrait.png) no-repeat center;
  background-size: 0.8rem 0.8rem;
  margin: 0 auto;
  border-radius: 50px;
}

.header-name {
  height: 0.5rem;
  line-height: 0.5rem;
}

.member {
  height: 1rem;
  border-radius: 8px;
  background: rgb(112, 72, 72);
  margin: 0.2rem;
  text-align: center;
  padding: 0.1rem;
  box-sizing: border-box;
}

.member-p:nth-child(1) {
  height: 0.4rem;
  line-height: 0.4rem;
  color: #fff;
  font-size: 0.23rem;
  font-weight: 300;
}

.member-p:nth-child(2) {
  height: 0.4rem;
  line-height: 0.4rem;
  color: #fff;
  font-size: 0.28rem;
}

.block {
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba($color: #ccc, $alpha: 1),
    -3px -3px 3px rgba($color: #ccc, $alpha: 1);
  margin: 0.2rem 0.2rem;
  padding: 0.2rem;
  background: #fff;
}

.block-header {
  font-size: 0.25rem;
  font-weight: 600;
  color: $darkTextColor;
  height: 0.5rem;
  line-height: 0.5rem;
}

.block-content {
  display: flex;
  flex-wrap: wrap;
}

.property .block-a {
  width: 30%;
}

.wallet .block-a {
  // width: 25%;
  flex: 0 0 25%;
}

.menu .block-a {
  width: 25%;
}

.block-a {
  font-size: 0.3rem;
  font-weight: 400;
  color: $darkTextColor;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
</style>
