<template>
  <div class="wrapper" v-if="isShowSwiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) of slideshowList" :key="index" class="swiper-slide">
        <router-link tag="div" :to="'/menu/' + item.id" class="slide-wrapper">
          <div class="slide">
            <img class="slide-img" :src="item.url">
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSlideshow',
  props: {
    slideshowList: Array
  },
  data () {
    return {
      swiperOptions: {}
    }
  },
  methods: {
    // swiper初始化方法
    swiperInit () {
      this.swiperOptions = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true
      }
    }
  },
  mounted () {
    this.swiperInit()
  },
  computed: {
    isShowSwiper: function () {
      return this.slideshowList.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .wrapper ::v-deep .swiper-pagination-bullet-active{
    background: #fff;
    width: .3rem;
    height: .15rem;
    border-radius: 0 0px 50px 50px;
  }
  .slide-wrapper {
    padding: .2rem;
  }
  .slide {
    border: 1px solid $bgColor;
    border-radius: .3rem;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 33.14%;
    background-color: #ccc;
  }
  .slide-img {
    width: 100%;
  }
</style>
