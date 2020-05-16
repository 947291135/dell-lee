<template>
    <div class="header">
        {{headerText}}
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    index: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  computed: {
    headerText () {
      switch (this.index) {
        case 0:
          return '选择省级'
        case 1:
          return '选择市级'
        case 2:
          return '选择区级'
        case 3:
          return '选择街道'
        case 4:
          return '选择楼栋'
        case 5:
          return '选择单元'
        case 6:
          return '选择房间'
        default:
          return '请选择'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl';
    .header
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        position relative
        .header-back
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            top 0
            left 0
            color #fff
</style>
