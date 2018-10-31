<template>
    <div class="banner">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_600x330_487dd289.jpg" alt="" srcset="">
        <div class="banner-info">
            <div class="banner-title">世界之窗(AAAAA景区)</div>
        </div>
         <div class="banner-number"><span class="iconfont">&#xe616;</span>39</div>
    </div>
</template>

<script>
export default {
    name:'DetailBanner'
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom  55%
        &:after
            height 0
            padding-bottom  10%
            content " ";
            display block;
            position absolute;
            bottom 0;
            left 0;
            right 0
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom .36rem
            line-height .6rem
            color #fff
            z-index 1
            .banner-title
                flex 1
                font-size .36rem
                padding 0 .2rem
                line-height .4rem
        .banner-number
            position absolute
            left .2rem
            bottom .86rem
            width 1.2rem;
            height .4rem;
            background rgba(0,0,0,.5);
            border-radius .2rem;
            font-size .24rem;
            color #fff;
            line-height .4rem;
            text-align center;
            .iconfont
                font-size: .24rem;
                color: #fff;
                margin-right .1rem
</style>
