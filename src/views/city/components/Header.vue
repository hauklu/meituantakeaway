<template>
  <div class="body">
    <header class="header">
      <div class="search">
        <div class="search-back-wrap">
          <div class="search-back" @click="backHome">^</div>
        </div>
        <input v-model="keyword" type="text" class="input" placeholder="请输入城市名进行搜索, 中文或者拼音">
      </div>
      <div class="nowCity">
        <span class="iconfont nowCity-icon">&#xe652; 当前定位城市</span>
        <span class="nowCity-text">{{nowcity}}</span>
      </div>
    </header>
    <div class="searchResult" v-show="keyword">
      <div
        class="searchResult-item"
        v-for="item of list"
        :key="item.id"
        @click="changeNowCity(item.name)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    nowcity: String,
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: ''
    }
  },
  methods: {
    changeNowCity (city) {
      this.keyword = ''
      this.$emit('change', city)
    },
    backHome () {
      this.$store.commit('changeNowCity', this.nowcity)
      this.$router.push({ name: 'HomeFootNav' })
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  $headerHeight: 1.8rem;
  $searchHeight: .9rem;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    box-sizing: border-box;
    background: $orange;
    z-index: 99;
  }
  .search {
    position: relative;
    height: $searchHeight;
    border-bottom: 1px solid rgb(167, 165, 165);
    .search-back-wrap {
      .search-back {
        position: absolute;
        top: .1rem;
        left: .3rem;
        transform: rotate(-90deg);
        font-size: .7rem;
      }
    }
    .input {
      position: absolute;
      right: .2rem;
      top: .1rem;
      bottom: .1rem;
      width: 6.3rem;
      border-radius: 20px;
      box-sizing: border-box;
      padding: .15rem;
      margin-top: .2rem;
      color: #ccc;
      font-size: .25rem;
      margin: 0;
    }
  }
  .nowCity {
    height: $headerHeight - $searchHeight;
    line-height: $headerHeight - $searchHeight;
    .nowCity-icon {
      margin-left: $commonSpace;
      font-size: .25rem;
    }
    .nowCity-text {
      margin-left: $commonSpace;
      color: #000;
      font-size: .3rem;
    }
  }
  .searchResult {
    position: absolute;
    top: $headerHeight;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background: #eee;
    .searchResult-item {
      padding-left: .2rem;
      line-height: .6rem;
      border-bottom: 1px solid #ccc;
      color: #000;
      background: #fff;
    }
  }
</style>
