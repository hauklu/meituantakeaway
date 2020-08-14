<template>
  <div class="body">
    <div class="content">
      <div
        class="item"
        v-for="item of letters"
        :key="item"
        :class="{itemStyles: (isItemStyles == true)}"
        @click="itemClick"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :ref="item"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      isItemStyles: false,
      touchStatus: '',
      aOffsetTop: 0,
      timer: ''
    }
  },
  props: {
    cities: Object
  },
  // 页面渲染完成后, 数据发生变化时更新
  updated () {
    this.aOffsetTop = this.$refs.A[0].offsetTop
  },
  methods: {
    itemClick (e) {
      this.$emit('change', e.target.innerText)
      // this.isItemStyles = true
    },
    touchStart () {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        // 清除存在的定时器
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 定时器节流函数
        this.timer = setTimeout(() => {
          const clientY = e.touches[0].clientY
          const index = Math.floor((clientY - this.aOffsetTop) / this.letters.length)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    touchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters: function () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .body {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content {
    // position: absolute;
    // right: 0;
    // top: 50%;
    // transform: translateY(-50%);
    .item {
      height: .45rem;
      width: .45rem;
      line-height: .45rem;
      text-align: center;
    }
    .itemStyles {
      border-radius: 50%;
      background: $orange;
    }
  }
</style>
