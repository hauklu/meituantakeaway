<template>
  <div class="body" ref="wrap">
    <div>
      <div class="hotCity">
        <div class="hotCity-title">热门城市</div>
        <div class="hotCity-content">
          <div
            class="hotCity-item-wrap"
            v-for="hotcityItem of hotcities"
            :key="hotcityItem.id"
          >
            <div class="hotCity-item" @click="handleClickCity(hotcityItem.name)">{{hotcityItem.name}}</div>
          </div>
        </div>
      </div>
      <div class="listCity">
        <div class="listCity-block" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="listCity-title">{{key}}</div>
          <div class="listCity-content" v-for="itemCity of item" :key="itemCity.id">
            <div class="listCity-item" @click="handleClickCity(itemCity.name)">{{itemCity.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotcities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleClickCity (city) {
      this.$emit('change', city)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrap)
  },
  watch: {
    letter: function () {
      const elBlock = this.$refs[this.letter][0]
      this.scroll.scrollToElement(elBlock)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .body {
    position: absolute;
    top: 1.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .hotCity{
    margin-top: 1.8rem;
    box-sizing: border-box;
    padding: $commonSpace;
  }
  .hotCity-title {
    color: rgb(133, 133, 133);
    font-size: .28rem;
  }
  .hotCity-content {
    margin-top: $commonSpace;
    display: flex;
    flex-wrap: wrap;
    margin-right: .2rem;
    .hotCity-item-wrap{
      width: 25%;
      height: .5rem;
      overflow: hidden;
      margin-bottom: .2rem;
      .hotCity-item {
        border-radius: 5px;
        height: 100%;
        margin-right: .2rem;
        background: #ccc;
        line-height: .5rem;
        text-align: center;
        font-size: .27rem;
      }
    }
  }
  .listCity {
    padding: $commonSpace;
  }
  .listCity-block {
    .listCity-title {
      color: palevioletred;
      font-size: .3rem;
      line-height: .7rem;
    }
    .listCity-content {
      .listCity-item {
        border-top: 1px solid #ccc;
        padding: $commonSpace 0;
        font-size: .28rem;
      }
    }
  }
</style>
