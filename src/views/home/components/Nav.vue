<template>
  <div class="nav">
    <header class="nav-header">
      <div
        class="header"
        v-for="item of navHeaderList"
        :key="item.id"
      >
          <img class="header-img" :src="item.url">
        <div class="header-text nav-text">{{item.text}}</div>
      </div>
    </header>
    <div class="nav-list">
      <div
        class="list"
        v-for="item of navListList"
        :key="item.id"
        v-show="item.id <= showControl"
      >
        <div class="iconfont list-icon">{{item.icon}}</div>
        <div class="list-text nav-text">{{item.text}}</div>
      </div>
      <div class="list listLast" @click="handleListLast">
        <div class="iconfont list-icon">{{navListLast.icon}}</div>
        <div class="list-text nav-text">{{navListLast.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    navHeaderList: Array,
    navListList: Array,
    navListLast: null
  },
  data () {
    return {
      showControl: 9
    }
  },
  methods: {
    handleListLast: function () {
      if (this.showControl === 9) {
        this.showControl = 14
        this.navListLast.text = '收缩'
      } else if (this.showControl === 14) {
        this.showControl = 9
        this.navListLast.text = '点我更多'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.nav{
  border-radius: 15px;
  padding: .2rem;
  margin: .2rem;
  background: white;
  // box-shadow: 1px 1px 5px rgba($color: #ccc, $alpha: 0.2), -1px -1px 5px rgba($color: #ccc, $alpha: 0.2);
  box-shadow: $boxshadow;
}
.nav-header {
  overflow: hidden;
  width:100%;
  display: flex;
  justify-content: space-between;
}
.header {
  overflow: hidden;
  padding: .2rem;
}
.header-img {
  width: 100%;
}
.header-text {
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  font-size: .23rem;
  font-weight: 600;
}
.nav-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
}
.list {
  width: 20%;
  text-align: center;
  padding: .2rem;
  box-sizing: border-box;
}
.list-icon {
  font-size: .5rem;
}
.list-text {
  font-size: .23rem;
  height: .5rem;
  line-height: .5rem;
  font-weight: 300;
}
.listLast {
  position: absolute;
  right: 0;
  bottom: 0;
  color: orange;
}
</style>
