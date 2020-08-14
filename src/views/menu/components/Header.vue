<template>
  <div class="header" v-if="isShow">
    <div class="top"></div>
    <div class="bottom"></div>
    <router-link tag="div" to="/">
      <div class="arrowHeader-wrap" v-show="arrow">
        <div class="arrowHeader">^</div>
      </div>
    </router-link>
    <router-link tag="div" to="/">
      <div class="arrowFixed-wrap" v-show="!arrow" :style="opacityStyle">
        <div class="arrowFixed">^</div>
      </div>
    </router-link>
    <div class="block">
      <img class="block-img" :src="merchantList.img">
      <div class="firstLine line">
        <span class="firstLine-name">{{merchantList.firstLineName}}</span>
      </div>
      <p class="secondLine line">
        <span class="secondLine-item" v-for="(item,index) of merchantList.thirdLineList" :key="index">{{item}}</span>
      </p>
      <p class="thirdLine line">
        <span class="thirdLine-item" v-for="(item,index) of merchantList.fifthLineList" :key="index">{{item}}</span>
      </p>
      <p class="fourthLine line">
        <span class="fourthLine-notice">公告:</span>
        <span class="fourthLine-text">{{merchantList.notice}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader',
  props: {
    merchantList: null
  },
  data () {
    return {
      arrow: true,
      opacityStyle: {
        opacity: 0
      },
      isShow: true
    }
  },
  methods: {
    handleScroll () {
      const topLength = document.documentElement.scrollTop
      if (topLength > 10 && topLength < 100) {
        this.arrow = false
        const opacity = topLength / 100
        this.opacityStyle = { opacity }
      } else if (topLength >= 100) {
        this.arrow = false
        this.opacityStyle = { opacity: 1 }
      } else if (topLength < 10) {
        this.arrow = true
      }
    },
    reload () {
      this.isShow = false
      this.$nextTick(function () {
        this.isShow = true
      })
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
  .header {
    background: #fff;
    height: 3.5rem;
    position: relative;
  }
  .top {
    background: url(/imgs/menu/menu_background.jpg);
    width: 100%;
    height: 50%;
    padding: 0 .2rem;
    box-sizing: border-box;
  }
  .bottom {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
  }
  .block {
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(42, 42, 42, 0.1), -2px -2px 3px rgba(42, 42, 42, 0.1);
    height: 65%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: .2rem;
    padding: .2rem;
    box-sizing: border-box;
    color: $darkTextColor;
  }
  .block-img {
    width: 1.5rem;
    border-radius: 5px;
    position: absolute;
    right: .2rem;
    top: -.5rem;
  }
  .line {
    margin-bottom: .2rem;
  }
  .firstLine {
    .firstLine-name {
      display: inline-block;
      height: .5rem;
      line-height: .5rem;
      font-size: .37rem;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 75%;
    }
  }
  .secondLine {
    font-size: .23rem;
    .secondLine-item {
      margin-right: .2rem;
    }
  }
  .thirdLine {
    font-size: .2rem;
    .thirdLine-item {
      @include merchantDiscount;
    }
  }
  .fourthLine {
    display: flex;
    align-items: center;
    .fourthLine-notice {
      font-size: .23rem;
    }
    .fourthLine-text {
      font-size: .23rem;
      margin-left: .15rem;
      font-weight: 300;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      width: 85%;
      display: inline-block;
    }
  }
  .arrowHeader {
    transform: rotate(-90deg);
    height: .5rem;
    position: absolute;
    top: 0;
    left: 0;
    margin: .2rem 0 0 .3rem;
    font-size: .8rem;
    color: #fff;
    font-weight: 100;
  }
  .arrowFixed-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: $fixedHeight;
    z-index: 99;
  }
  .arrowFixed {
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: .4rem;
    font-size: .8rem;
    color: #ccc;
    line-height: $fixedHeight;
  }
</style>
