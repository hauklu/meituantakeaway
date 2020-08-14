<template>
  <div class="background-wrapper">
    <div class="search">
      <span class="iconfont search-icon">&#xe627;</span>
      <input class="search-input" type="text" placeholder="炸鸡星球 满21减20">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .background-wrapper {
    background-color: rgba(218, 215, 38, 0.9);
  }
  .search {
    box-sizing: border-box;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    height: 1rem;
    background-color: $bgColor;
    display: flex;
    padding: .2rem;
  }
  .search-input {
    flex: 1;
    border-radius: 1rem;
    background-color: rgb(245, 239, 239);
    padding-left: .6rem;
    line-height: .6rem;
  }
  .search-icon {
    line-height: .6rem;
    position: absolute;
    left: .4rem;
  }
</style>
