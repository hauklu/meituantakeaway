<template>
  <div class="body">
    <div class="title">热门城市</div>
    <div class="content">
      <div
        class="item-wrap"
        v-for="item of hotCities"
        :key="item.id"
      >
        <div class="item" @click="itemClick(item.name)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHot',
  props: {
    hotCities: Array
  },
  methods: {
    itemClick (city) {
      this.$emit('change', city)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .body{
    margin-top: 1.8rem;
    box-sizing: border-box;
    padding: $commonSpace;
  }
  .title {
    color: rgb(133, 133, 133);
    font-size: .28rem;
  }
  .content {
    margin-top: $commonSpace;
    display: flex;
    flex-wrap: wrap;
    margin-right: .2rem;
    .item-wrap{
      width: 25%;
      height: .5rem;
      overflow: hidden;
      margin-bottom: .2rem;
      .item {
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
</style>
