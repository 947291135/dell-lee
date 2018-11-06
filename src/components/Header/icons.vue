<template>
    <div class="icons border-bottom">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,i) of pages" :key="i">
                <div class="icon" v-for="item of page" :key="item.index">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgurl" alt="item.title">
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "icons",
  props: {
      iconList: Array
  },
  data() {
      return {
          swiperOption:{
              autoplay:0,
              pagination: '.swiper-pagination',
          }
      }
  },
  computed: {
    // 计算图标个数，分配页数
      pages:function(){
          var pages =[];
          this.iconList.forEach((item,index) => {
              var page=Math.floor(index / 8);
              if (!pages[page]) {
                  pages[page]=[];
              }
              pages[page].push(item);
          });
        return pages;
      }
  }
};
</script>

<!--
padding 的值为百分比是父级元素宽的百分比。
-->
<style lang="stylus" scoped>
@import '~css/varibles.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 55%
.icons >>> .swiper-pagination-bullet-active
    background $bgColor
.icons >>> .swiper-pagination-bullet
    width 6px
    height 6px
.icons
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background #fff
    padding-top .1rem
    .icon
        position relative
        overflow hidden
        float left 
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                height 100%
                display block
                margin 0 auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color #333
            text-align center
            overflow hidden
            white-space nowrap
            text-overflow ellipsis

</style>
