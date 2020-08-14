// 点菜页面的右边菜单列表
<template>
  <!-- 右侧菜品列表 -->
  <div class="content">
    <div class="block" v-for="(item,index) of list" :key="item.id" :ref="item.id">
      <div class="block-title" ref="title">{{item.title}}</div>
      <div class="block-item" v-for="(foodItem,foodIndex) of item.foodList" :key="foodIndex">
        <div class="item-left">
          <img class="item-img" :src="foodItem.img">
        </div>
        <div class="item-right">
          <p class="firstLine">{{foodItem.firstLine}}</p>
          <p class="secondLine">{{foodItem.secondLine}}</p>
          <p class="thirdLine">
            <span class="thirdLine-item" v-for="(thirdItem,thirdIndex) of foodItem.thirdLine" :key="thirdIndex">{{thirdItem}}</span>
          </p>
          <div class="fourthLine">
            <span class="fourthLine-price">￥{{foodItem.fourthLinePrice}}</span>
            <div>
              <span class="fourthLine-countShow" v-show="foodItem.fourthLineNum > 0">
                <button
                  class="fourthLine-minus"
                  @click="countMinusClick(index, foodIndex, foodItem.id, foodItem.fourthLinePrice, foodItem.fourthLineNum, foodItem.firstLine, foodItem.img)"
                >-</button>
                <span class="fourthLine-num">{{foodItem.fourthLineNum}}</span>
              </span>
              <button
                class="fourthLine-plus"
                @click="countPlusClick(index, foodIndex, foodItem.id, foodItem.fourthLinePrice, foodItem.fourthLineNum, foodItem.firstLine, foodItem.img)"
              >+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    navId: String,
    list: Array
  },
  data () {
    return {
      difference: 355 - 275,
      plusPriceArr: [],
      minusPriceArr: [],
      foodMenu: [],
      isShow: [],
      countNum: [],
      test: 0
    }
  },
  methods: {
    handleScroll () {
      const elScrollTop = document.documentElement.scrollTop
      var elTitle = document.getElementsByClassName('block-title')
      for (let i = 0; i < elTitle.length; i++) {
        // 这里的 -10, 是因为nav点击后, content滚动会反过来影响nav的元素定位,有时候会定位稍稍不准, 把下一个元素判断的高度范围增大
        // 判断每个.block-title节点的距离顶部的距离, 需要大于当前节点距顶部距离, 并且小于下一个节点距顶部距离, 在这个范围内
        if (elScrollTop >= elTitle[i].offsetTop - this.difference && elScrollTop <= elTitle[i + 1].offsetTop - this.difference - 10) {
          // 当处于判断的范围内, 则传递当前节点的id给nav组件
          this.$emit('change', this.list[i].id)
        }
      }
    },
    // 每次点击+, 触发这个函数
    countPlusClick (index, foodIndex, foodId, price, num, name, img) {
      // 每次点击对应菜品的num加1
      var num1 = ++this.list[index].foodList[foodIndex].fourthLineNum
      // 把每次点击的价格都添加到plusPriceArr数组中
      this.plusPriceArr.push(price)
      // 接收计算属性的count数据, 传递到vuex仓库
      this.$store.dispatch('changeCount', this.count)
      this.foodMenu[foodId - 1] = {
        img,
        name,
        price,
        num: num1
      }
      // 传递foodeMenu数据到vuex仓库
      this.$store.dispatch('changeFoodMenu', this.foodMenu)
    },
    // 每次点击-, 触发这个函数
    countMinusClick (index, foodIndex, foodId, price, num, name, img) {
      var num1 = --this.list[index].foodList[foodIndex].fourthLineNum
      this.minusPriceArr.push(price)
      this.$store.dispatch('changeCount', this.count)
      if (num1 >= 1) {
        this.foodMenu[foodId - 1] = {
          img,
          name,
          price,
          num: num1
        }
      } else {
        delete this.foodMenu[foodId - 1]
      }
      this.$store.dispatch('changeFoodMenu', this.foodMenu)
    }
  },
  computed: {
    plusCount: function () {
      let plusCount = 0
      for (let i = 0; i < this.plusPriceArr.length; i++) {
        plusCount += this.plusPriceArr[i]
      }
      return plusCount
    },
    minusCount: function () {
      let minusCount = 0
      for (let i = 0; i < this.minusPriceArr.length; i++) {
        minusCount += this.minusPriceArr[i]
      }
      return minusCount
    },
    count: function () {
      return this.plusCount - this.minusCount
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    // 监听Nav传来的参数, 并将对应的元素进行滚动
    navId () {
      const elOffsetTop = this.$refs[this.navId][0].offsetTop
      const elHtml = document.documentElement
      elHtml.scrollTop = elOffsetTop - this.difference
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  $navTextHeight: 1rem;
  $itemLeftWidth: 1.5rem;
  .content {
    float: right;
    width: 80%;
    background: #fff;
    padding-bottom: $footerHeight;
  }
  .block {
      box-sizing: border-box;
      padding: 0 $commonSpace;
      .block-title {
        color: $darkTextColor;
        font-size: .27rem;
        height: $navTextHeight;
        line-height: $navTextHeight;
      }
      .block-item {
        width: 100%;
        height: 0;
        padding-bottom: 1.8rem;
        margin-bottom: .5rem;
        position: relative;
      }
  }
  .item-left {
    width: $itemLeftWidth;
    min-height: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    .item-img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .item-right {
    padding-left: $itemLeftWidth + .1rem;
  }
  .firstLine {
    line-height: .5rem;
    font-size: .32rem;
    font-weight: bold;
    @include ellipsis;
  }
  .secondLine {
    @include ellipsis;
    line-height: .34rem;
    font-size: .22rem;
    color: #666666;
  }
  .thirdLine {
    line-height: .34rem;
    font-size: .22rem;
    color: #666;
    .thirdLine-item {
      margin-right: .2rem;
    }
  }
  .fourthLine {
    line-height: .65rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fourthLine-price {
      font-size: .38rem;
    }
  .fourthLine-plus {
    font-size: .35rem;
    text-align: center;
    line-height: .4rem;
    height: .4rem;
    width: .4rem;
    border-radius: 50%;
    background-color: orange;
    color: #333;
    font-weight: 600;
  }
  .fourthLine-countShow {
    .fourthLine-minus {
      @extend .fourthLine-plus
    }
    .fourthLine-num {
      margin: 0 .2rem;
    }
  }
</style>
