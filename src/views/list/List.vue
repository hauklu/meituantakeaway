<template>
    <div class="list">
      <header class="headerTop">订单</header>
      <header class="headerMy">我的订单</header>
      <div class="content">
        <div class="block" v-if="foodMenu">
          <div class="block-header">
            <img class="block-header-img" :src="merchantList.img">
            <div class="block-header-content">
              <div class="firstLine">
                <span class="firstLine-name">{{merchantList.firstLineName}}</span>
                <span class="firstLine-right">已完成</span>
              </div>
              <div class="secondLine">
                <span class="secondLine-discount" v-for="item of merchantList.fifthLineList" :key="item.id">
                  {{item}}
                </span>
              </div>
            </div>
          </div>
          <div class="thirdLine">
            <div class="thirdLine-left">
              <div class="thirdLine-img-wrapper" v-for="(item,index) of foodMenu" :key="index">
                <img :src="item.img" alt="" class="thirdLine-img">
                <div class="thirdLine-name">{{item.name}}</div>
              </div>
            </div>
            <div class="thirdLine-right">
              <div class="thirdLine-price" v-if="foodMenu !== undefined && foodMenu.length > 0">￥{{count}}</div>
              <div class="thirdLine-num">共{{foodMenu.length}}种</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    foodMenu: Array,
    count: Number
  },
  data () {
    return {}
  },
  computed: {
    merchantList: function () {
      return this.$route.params.merchantList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
$imgHeight: 1rem;
$firstLineHeight: .6rem;
.headerTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: #fff;
  box-shadow: 0 1px 3px rgb(42, 42, 42, 0.1);
  font-size: .3rem;
  font-weight: 400;
}
.headerMy {
  margin: 1rem 0 0 .2rem;
  height: 1rem;
  line-height: 1rem;
  font-size: .4rem;
  font-weight: 600;
}
.content {
  padding: $commonSpace;
}
.block {
  margin: $commonSpace 0;
  background: #fff;
  box-shadow: $boxshadow;
  border-radius: 10px;
  .block-header {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: $commonSpace;
    box-sizing: border-box;
    .block-header-img {
      height: $imgHeight;
    }
    .block-header-content {
      flex: 1;
      margin-left: $commonSpace;
    }
  }
}
.firstLine {
  line-height: $firstLineHeight;
  .firstLine-name {
    float: left;
    @include ellipsis;
    max-width: 3.5rem;
    font-size: .3rem;
    font-weight: bold;
  }
  .firstLine-right {
    float: right;
    font-size: .25rem;
  }
}
.firstLine::after {
  @include clearfix;
}
.secondLine {
  line-height: $imgHeight - $firstLineHeight;
  @include ellipsis;
  max-width: 4.5rem;
  font-size: .25rem;
  .secondLine-discount {
    @include merchantDiscount;
  }
}
.thirdLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $commonSpace;
}
.thirdLine-left {
  width: 83%;
  .thirdLine-img-wrapper {
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
    padding-right: .1rem;
    overflow: hidden;
    .thirdLine-img {
      width: 100%;
      border-radius: 10px;
    }
    .thirdLine-name {
      @include ellipsis;
      line-height: .5rem;
      font-size: .26rem;
    }
  }
}
.thirdLine-right {
  .thirdLine-price {
    float: right;
    font-size: .35rem;
    line-height: .4rem;
    font-weight: 550;
  }
  .thirdLine-num {
    float: right;
    font-weight: 400;
  }
}
</style>
