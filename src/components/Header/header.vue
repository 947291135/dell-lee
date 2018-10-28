<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>123</div>
    <router-link to='/city'><div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div></router-link>
  </div>
</template>

<script>

export default {
  name: 'Homeheader',
}
</script>
<!-- 样式使用stylus，必须增加lang="stylus" -->
<!-- scoped:关键字，此样式只针对改组件，其他外部无效 -->
<!--
  预设的css中设置了html的font-size为50px。

       也就是说：1rem=50px

       然而设计图为iPhone设计图375px的两倍 也就是750px

       所以量出来的东西要除于2，

       假如一个东西宽76px 高42px

       则页面除于2为宽38px 高为21px

       然而要转化成rem，则宽为38/50=0.76  高为21/50=0.42

       也就是说设计图出来的宽度 直接除于100就是rem了
-->

<style lang="stylus"  scoped>
@import '~css/varibles.styl'
.header
  height: 0.86rem
  display: flex
  line-height:0.86rem
  background:$bgColor
  color:#fff
  .header-left 
    width: 0.64rem
    float:left
    .back-icon
      text-align center
      font-size  .4rem
  .header-input
    flex:1
    height .64rem
    line-height:.64rem
    margin-top:.12rem
    margin-left:.2rem
    padding-left .2rem
    background #ffffff
    border-radius .1rem
    color #cccccc
  .header-right
    width 1.24rem
    float right 
    color #fff
    text-align center 
    .arrow-icon
      font-size .24rem
      margin-left .05rem
    
</style>
