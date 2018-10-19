<template>
    <div class="List" >
        <div class="list_title">
            <span class="list_logo"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门</span>
            <span class="list_go">全部榜单></span>
        </div>
        <div class="list_bottom"></div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
 .List
    position relative
    overflow hidden
    margin-top .2rem
    height 4.02rem
    background #fff
    .list_title
        padding .24rem 0 .24rem
        line-height .44rem
        height .44rem
        .list_logo
            display: inline-block;
            height: .44rem;
            color: #212121;
            font-size: .32rem;
            line-height: .44rem;
            float left
            img
                display: inline-block;
                overflow: hidden;
                width: .3rem;
                height: .3rem;
                margin-left: .2rem;
                margin-right .1rem
                vertical-align: top;
        .list_go
            float right 
            margin-right .32rem
            color: #616161;
            font-size: .24rem;
            line-height: .28rem;
</style>

