<template>
    <div class="price">
        <div class="price_title">
            <span class="icon_logo"></span><div class="price_header border-bottom">门票</div>
        </div>
        <div class="price_content">
            <div class="price_item border-bottom">
                <span class="mp-ellipsis">成人单人票</span>
                <div class="mp-price">
                    ¥
                    <em class="mp-price-num">{{ticket}}</em>
                    <span class="iconfont" style=" color: #9e9e9e;">&#xe64b;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailPrice',
    props: {
        ticket:String
    }
}
</script>

<style lang="stylus" scoped>
    .price
        margin-top .1rem
        background: #fff;
        position relative
        .price_title
            padding: 0 .2rem;
            .price_header
                overflow: hidden;
                position: relative;
                z-index: 4;
                margin-bottom: -.02rem;
                height: .88rem;
                background: #fff;
                color: #333;
                font-size: .32rem;
                line-height: .88rem;
                text-indent: .4rem;
            .icon_logo
                display: inline-block;
                position: absolute;
                width: .36rem;
                height: .36rem;
                top: .26rem;
                left: .2rem;
                background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                z-index 5
                margin-right: .1rem;
                background-size: .4rem 3rem;
        .price_content
            position relative
            .price_item
                position: relative;
                z-index: 2;
                margin-bottom: -.02rem;
                padding: .24rem .2rem;
                background: #fff;
                .mp-ellipsis
                    margin-right: 1.8rem;
                    color: #333;
                    font-size: .3rem;
                    line-height: .48rem;
                .mp-price
                    display inline-block
                    color: #ff9800;
                    float  right 
                    font-size: .4rem;
                    line-height .4rem



</style>

