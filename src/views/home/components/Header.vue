<template>
  <div class="header">
    <router-link tag="div" to="/city" class="address">
      <div class="iconfont address-icon">&#xe652;</div>
      <div class="address-text">{{nowcity}}</div>
    </router-link>
    <!-- <div class="iconfont search">&#xe660;</div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  computed: {
    nowcity: function () {
      return this.$store.state.nowcity
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .header {
    display: flex;
    height: 1rem;
    background-color: rgba(218, 215, 38, 0.9);
    justify-content: space-between;
    padding: 0 0.3rem;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
  }
  .address {
    color: $darkTextColor;
    display: flex;
    align-items: center;
    font-size: 0.32rem;
  }
  .address-icon {
    font-size: 0.4rem;
    margin-right: 0.1rem;
  }
  .address-text {
    color: $darkTextColor;
    margin-right: 0.1rem;
  }
  .search {
    font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
  }
</style>
