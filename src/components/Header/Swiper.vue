<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img class="swiper-img" :src="item.url">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay:3000
            },
            swiperList: [{
                id:0,
                url:"http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg"
            },{
                id:1,
                url:"http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg"
            },{
                id:2,
                url:"http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg"
            },{
                id:3,
                url:"http://img1.qunarzz.com/piao/fusion/1809/d4/e298dff35d3af802.jpg_750x200_9b0d56c1.jpg"
            },{
                id:4,
                url:"http://img1.qunarzz.com/piao/fusion/1809/8a/ef38d29f2791f02.jpg_750x200_c2defee1.jpg"
            },{
                id:5,
                url:"http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg"
            },{
                id:6,
                url:"http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"
            },{
                id:7,
                url:"http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg"
            },{
                id:8,
                url:"http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 26.6666%
        background #ccc
        .swiper-img
            width 100%
</style>

