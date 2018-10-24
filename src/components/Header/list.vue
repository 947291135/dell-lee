<template>
    <div class="List" >
        <div class="list_title">
            <span class="list_logo"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门</span>
            <span class="list_go">全部榜单></span>
        </div>
        <div class="list_bottom">
            <ul class="list_ul">
                <li class="mp-hotsale-item" v-for="data of rmList" :key="data.index" v-if="rmList.length">
                    <a class="mp-fulllink">
                        <div class="mp-hotsale-imgcon">
                            <img :src="data.imgurl" :alt="data.title">
                        </div>
                        <div class="mp-hotsale-sight">{{data.title}}</div>
                        <div class="mp-hotsale-price">
                            <span class="mpg-price">￥<em class="mpg-price-num">{{data.price}}</em></span>
                            起
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        rmList: Array
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3.5,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
        }
    }
}
</script>

<style lang="stylus" scoped>
.mp-hotsale-item:not(:first-child) {
    margin-left: .12rem;
}

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
    .list_bottom
        display block
        .list_ul
            height 3.17rem
            padding 0 .24rem
            width auto
            display block
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            .mp-hotsale-item
                display: inline-block;
                padding: .06rem 0 .2rem;
                width: 2rem;
                position relative
                text-align center
                .mp-fulllink
                    display: block;
                    width: 100%;
                    height: 100%;
                    .mp-hotsale-imgcon
                        overflow: hidden;
                        width: 2rem;
                        height: 0;
                        padding-bottom: 100%;
                        img
                            width: 100%;
                    .mp-hotsale-sight
                        margin-top: .12rem;
                        color: #212121;
                        font-size: .24rem;
                        line-height: .32rem;
                        text-align: center;
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
                    .mp-hotsale-price
                        color: #616161;
                        font-size: .24rem;
                        line-height: .36rem;
                        text-align: center;
                        .mpg-price
                            color #ff8300
                            .mpg-price-num
                                font-size: .28rem;


</style>

