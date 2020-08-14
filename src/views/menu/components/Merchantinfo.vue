// 商家详情的商家页面
<template>
  <div>
    <div class="address">
      <span class="address-before">地址: </span>
      <span class="address-text">{{merchantinfoList.address}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuMerchantinfo',
  props: {
    merchantinfoList: null
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .address {
    margin: $commonSpace;
    padding: $commonSpace;
    box-shadow: $boxshadow;
    background: #fff;
    font-size: .35rem;
    .address-before {
      font-weight: bold;
    }
    .address-text {
      color: rgb(119, 119, 115);
    }
  }
</style>
