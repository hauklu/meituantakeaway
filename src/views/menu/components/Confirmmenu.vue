// 最后确认订单页面
<template>
  <div>
    <header class="header">提交订单</header>
    <div class="content" v-if="merchantList">
      <header class="content-title">{{merchantList.firstLineName}}</header>
      <div class="content-block" v-for="(item,index) of foodMenu" :key="index">
        <div class="block-left">
          <img :src="item.img" class="left-img">
        </div>
        <div class="block-right">
          <div class="firstLine">
            <span class="firstLine-name">{{item.name}}</span>
            <span class="firstLine-price">￥{{item.price}}</span>
          </div>
          <div class="secondLine">x{{item.num}}</div>
        </div>
      </div>
      <div class="content-price">
        <div>
          <div class="sendPrice">+ 配送费￥{{sendPrice}}</div>
          <div class="price-wrapper">
            <span class="price-text">小计</span>
            <span class="price-price">￥{{count}}</span>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-price-wrapper">
        <div class="footer-price">￥{{count}}</div>
        <div class="footer-text">总计</div>
      </div>
      <div class="footer-submit" @click="clickSubmit">提交订单</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MenuConfirmmenu',
  data () {
    return {
      test: 1
    }
  },
  methods: {
    clickSubmit () {
      this.test++
      this.$router.push({
        name: 'HomeFootNav',
        params: {
          currentId: '002',
          foodMenu: this.foodMenu,
          count: this.count,
          merchantList: this.merchantList,
          test: this.test
        }
      })
    }
  },
  computed: {
    sendPrice: function () {
      return this.$route.params.sendPrice
    },
    count: function () {
      return this.$route.params.count
    },
    foodMenu: function () {
      return this.$route.params.foodMenu
    },
    merchantList: function () {
      return this.$route.params.merchantList
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  $borderBottom: 1px solid #ccc;
  $fontSize: .3rem;
  $fontWeight: 400;
  $height: 1rem;
  $fontSizePrice: .5rem;
  $footerHeight: 1rem;
  .header {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    background: rgb(8, 206, 51);
    color: $darkTextColor;
    font-size: .35rem;
  }
  .content {
    border-radius: 10px;
    box-shadow: $boxshadow;
    margin: $commonSpace;
    padding: $commonSpace;
    background: #fff;
    .content-title {
      height: $height;
      line-height: $height;
      font-weight: $fontWeight;
      font-size: $fontSize;
      border-bottom: $borderBottom;
    }
    .content-block {
      padding: $commonSpace;
      box-sizing: border-box;
      display: flex;
    }
  }
  .block-left {
    flex: 1;
    overflow: hidden;
    margin-right: $commonSpace;
    .left-img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .block-right {
    position: relative;
    flex: 4;
    .firstLine {
      display: flex;
      justify-content: space-between;
      .firstLine-name {
        font-size: $fontSize;
        font-weight: $fontWeight;
        color: $darkTextColor;
      }
      .firstLine-price {
        color: $darkTextColor;
        font-size: $fontSize;
        font-weight: bold;
      }
    }
    .secondLine {
      position: absolute;
      bottom: 0;
    }
  }
  .content-price {
    height: $height;
    border-top: $borderBottom;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: $commonSpace;
    .sendPrice {
      display: flex;
      justify-content: flex-end;
      line-height: .4rem;
      font-size: .25rem;
    }
    .price-wrapper {
      text-align: center;
      .price-text {
        font-size: $fontSize;
        font-weight: $fontWeight;
        margin-right: .2rem;
      }
      .price-price {
        color: $darkTextColor;
        font-weight: 700;
        font-size: $fontSizePrice;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: $commonSpace;
    left: $commonSpace;
    right: $commonSpace;
    height: $footerHeight;
    border-radius: 50px;
    background: #333;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .footer-price-wrapper {
      padding: $commonSpace;
      .footer-price {
        font-size: $fontSizePrice;
        color: #fff;
        text-align: center;
      }
      .footer-text {
        font-size: .22rem;
        font-weight: $fontWeight;
        color: #ccc;
        text-align: center;
        letter-spacing: .1rem;
        margin: .1rem 0 0 .1rem;
      }
    }
    .footer-submit {
      padding: $commonSpace;
      background: $orange;
      height: $footerHeight;
      width: 2rem;
      line-height: $footerHeight;
      text-align: center;
      font-weight: $fontWeight;
      font-size: .35rem;
    }
  }
</style>
