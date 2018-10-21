<template>
    <div class="List" >
        <div class="list_title">
            <span class="list_logo"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门</span>
            <span class="list_go">全部榜单></span>
        </div>
        <div class="list_bottom">
            <ul class="list_ul">
                <li class="mp-hotsale-item" v-for="data of list" :key="data.index">
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
            list:[
                {
                    index:0,
                    title:"世界之窗",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_150x150_79b84422.jpg",
                    price:49.9
                },
                {
                    index:1,
                    title:"深圳野生动物园",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_150x150_e7dd0cb5.jpg",
                    price:29
                },
                {
                    index:2,
                    title:"深圳欢乐谷",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1810/22/226c137568f18ac0a3.water.jpg_150x150_122bd852.jpg",
                    price:79
                },
                {
                    index:3,
                    title:"锦绣中华民俗村",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1810/ea/eafded52d4c963e5a3.water.png_150x150_fc1ad39e.png",
                    price:45
                },
                {
                    index:4,
                    title:"海洋奇梦馆",
                    imgurl:"http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_150x150_d614b85b.jpg",
                    price:49.5
                },
                {
                    index:5,
                    title:"东部华侨城大侠谷",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_150x150_ddeebb30.jpg",
                    price:179.01
                },
                {
                    index:6,
                    title:"东部华侨城茶溪谷",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1507/e4/a3f526c57e0115798af52929d294ddd6.water.jpg_150x150_ec7ea273.jpg",
                    price:164.01
                },
                {
                    index:7,
                    title:"华侨城",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1608/6d/6d3c093626e8ceaca3.water.jpg_150x150_c5cc53c2.jpg",
                    price:45
                },
                {
                    index:9,
                    title:"深圳深蓝秘境欢乐水秀",
                    imgurl:"http://img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_150x150_82c499a0.jpg",
                    price:59.2
                },
                {
                    index:10,
                    title:"东部华侨城茵特拉根温泉",
                    imgurl:"http://img1.qunarzz.com/sight/p0/1510/d0/d0610302e0ae770890.water.jpg_150x150_4eb901c5.jpg",
                    price:66.5
                }
            ]
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
            height 3.47rem
            padding 0 .24rem
            width auto
            display block
            overflow-x: scroll;
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

