<template>
  <div class="list">
    <header class="list-header">附近商家</header>
    <div class="list-content">
        <router-link
          tag="div"
          class="merchant"
          v-for="(item,index) of merchantList"
          :key="item.id"
          :to="'/menu/' + index"
        >
          <div class="merchant-left">
            <img class="img" :src="item.img">
          </div>
          <div class="merchant-right">
              <div class="firstLine line">
                <span class="firstLine-left">{{item.firstLineName}}</span>
                <span class="firstLine-right">-</span>
              </div>
              <div class="secondLine line">
                <div class="secondLine-left">
                  <div class="second-star">
                    <i class="second-star-i" :class="item.starLine==1 ? (item.starType==2 ? 'star2' : item.starType==1 ? 'star1' : 'star0') : item.starLine<1 ? (item.starType ? 'star0' : '') : ''"></i>
                    <i class="second-star-i" :class="item.starLine==2 ? (item.starType==2 ? 'star2' : item.starType==1 ? 'star1' : 'star0') : item.starLine<2 ? (item.starType ? 'star0' : '') : ''"></i>
                    <i class="second-star-i" :class="item.starLine==3 ? (item.starType==2 ? 'star2' : item.starType==1 ? 'star1' : 'star0') : item.starLine<3 ? (item.starType ? 'star0' : '') : ''"></i>
                    <i class="second-star-i" :class="item.starLine==4 ? (item.starType==2 ? 'star2' : item.starType==1 ? 'star1' : 'star0') : item.starLine<4 ? (item.starType ? 'star0' : '') : ''"></i>
                    <i class="second-star-i" :class="item.starLine==5 ? (item.starType==2 ? 'star2' : item.starType==1 ? 'star1' : 'star0') : item.starLine<5 ? (item.starType ? 'star0' : '') : ''"></i>
                  </div>
                  <span class="second-grade">{{item.secondLine.grade}}</span>
                  <span>{{item.secondLine.sales}}</span>
                </div>
                <div class="secondLine-right">{{item.secondLine.time}}</div>
              </div>
              <div class="thirdLine line">
                <span class="thirdLine-left">
                  <span class="thirdLine-word" v-for="(itemThird,indexThird) of item.thirdLineList" :key="indexThird">
                    {{itemThird}}
                  </span>
                </span>
                <div class="thirdLine-right">
                  <img :class="{'thirdLine-label': item.thirdLineLabel}">
                </div>
              </div>
              <div class="fourthLine">
                  <span class="fourthLine-word" v-for="(itemFourth, indexFourth) of item.fourthLineList" :key="indexFourth">
                    {{itemFourth}}
                  </span>
              </div>
              <div class="fifthLine">
                  <span class="fifthLine-word" v-for="(itemFifth, indexFifth) of item.fifthLineList" :key="indexFifth">
                    {{itemFifth}}
                  </span>
              </div>
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMerchantlist',
  props: {
    merchantList: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .list {
    width: 100%;
  }
  .list-header {
    height: .6rem;
    line-height: .6rem;
    font-size: .34rem;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-header::after,
  .list-header::before {
    content: '';
    height: 1px;
    width: .6rem;
    background: #666;
  }
  .list-header::before {
    margin-right: .1rem;
  }
  .list-header::after {
    margin-left: .1rem;
  }
  .merchant {
    border-radius: 10px;
    padding: .2rem;
    margin: .2rem;
    // box-shadow: 3px 3px 5px rgba($color: #ccc, $alpha: 0.2), -3px -3px 5px rgba($color: #ccc, $alpha: 0.2);
    box-shadow: $boxshadow;
    background-color: #fff;
    display: flex;
    color: #333;
  }
  .merchant-left {
    width: 22%;
    // height: 2rem;
    overflow: hidden;
  }
  .img {
    width: 100%;
    border-radius: 10px;
  }
  .merchant-right {
    margin-left: .16rem;
    flex: 1;
  }
  .line {
    display: flex;
    height: .4rem;
    line-height: .4rem;
    font-size: .22rem;
  }
  .firstLine {
    justify-content: space-between;
    height: .43rem;
    font-size: .33rem;
    font-weight: 800;
  }
  .firstLine-left {
    width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .secondLine {
    justify-content: space-between;
  }
  .secondLine-left {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
  .second-star {
    display: flex;
    margin-right: .05rem;
  }
  .second-star-i {
    background: url(https://hauklu.github.io/storage/meituantakeaway/imgs/merchantlist/star.png) no-repeat;
    height: .27rem;
    width: .27rem;
    background-size: .27rem .81rem;
    background-position: 0 0;
  }
  .star0 {
    background-position: 0 -.54rem;
  }
  .star1 {
    background-position: 0 -.27rem;
  }
  .star2 {
    background-position: 0 0;
  }
  .second-grade {
    margin-right: .2rem;
  }
  .thirdLine {
    justify-content: space-between;
  }
  .thirdLine-word {
    margin-right: .12rem;
  }
  .thirdLine-right {
    display: flex;
    align-items: center;
  }
  .thirdLine-label {
    background: url(https://hauklu.github.io/storage/meituantakeaway/imgs/merchantlist/meituanSend.png) no-repeat;
    width: 1rem;
    height: 0.3rem;
    background-size: 1rem 0.3rem;
    border-radius: 5px;
  }
  .fifthLine,
  .fourthLine {
    height: .5rem;
    line-height: .5rem;
  }
  .fourthLine {
    color: rgb(255, 128, 64);
    font-size: .20rem;
    font-weight: 300;
  }
  .fourthLine-word {
    background: #fdf2e2;
    border-radius: 5px;
    margin-right: .1rem;
    padding: .05rem;
  }
  .fifthLine {
    .fifthLine-word {
      @include merchantDiscount;
    }
  }
</style>
