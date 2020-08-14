// 商家内容页面最下方购物结算栏
<template>
  <div class="footer">
    <div class="block">
      <!-- <div class="block-icons">
        <div class="iconfont block-icon">&#xe634;</div>
      </div> -->
      <div class="block-content">
        <div class="block-content-left">
          <div class="price-wrapper">
            <span class="rmb">¥</span>
            <span class="price">{{count}}</span>
          </div>
          <span class="sendPrice">另需配送费¥{{merchantList.sendPrice}}</span>
        </div>
        <div
          class="block-content-right"
          :class="{isSubmitStyle: (count >= merchantList.startPrice)}"
        >
          <span
            class="submit"
            @click="clickSubmit(merchantList.sendPrice, merchantList.startPrice)"
            ref="submit"
          >差¥{{merchantList.startPrice - count}}起送</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 从vuex中接收mapState (state的集合)
// import { mapState } from 'vuex'
export default {
  name: 'MenuFooter',
  props: {
    merchantList: null
  },
  data () {
    return {
      count: 0,
      foodMenu: []
    }
  },
  methods: {
    clickSubmit (sendPrice, startPrice) {
      if (this.count >= startPrice) {
        var foodList
        foodList = JSON.parse(this.foodMenu).filter(function (e) { return e })
        this.$router.push({
          name: 'MenuConfirmmenu',
          params: {
            sendPrice: sendPrice,
            count: this.count + sendPrice,
            foodMenu: foodList,
            merchantList: this.merchantList
          }
        })
      }
    }
  },
  // computed: {
  //   // 将数据从mapState中提取映射出来, 当前组件就可以直接用了
  //   ...mapState([
  //     // 'count',
  //     'foodMenu'
  //   ])
  // },
  watch: {
    '$store.state.count': function () {
      this.count = this.$store.state.count
      const submit = this.$refs.submit
      if (this.count - this.merchantList.startPrice >= 0) {
        submit.innerText = '去结算'
      } else {
        submit.innerText = `差¥${this.merchantList.startPrice - this.count}起送`
      }
    },
    '$store.state.foodMenu': function () {
      this.foodMenu = this.$store.state.foodMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: $footerHeight;
  background: rgba(164, 219, 169, 0.5);
  z-index: 99;
}
  .block {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
    .block-content {
      flex: 5;
      height: .9rem;
      background: rgba(42, 42, 42, 1);
      border-radius: 50px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
      .block-content-left {
        padding-left: .4rem;
        letter-spacing: .05rem;
      }
        .price-wrapper {
          font-size: .45rem;
        }
        .sendPrice {
          font-size: .22rem;
          font-weight: 200;
        }
      .block-content-right {
        width: 2rem;
        height: 100%;
        border-radius: 0 50px 50px 0;
        background: #ccc;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .isSubmitStyle {
        background: $orange;
      }
</style>
