<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!--加if的原因是初始传来的是空数组，会导致轮播图顺序变乱，等传过来后才显示这才不会乱 -->
            <swiper-slide  v-for='item of SwiperList' :key="item.id" v-if="SwiperList.length">
                <img class="swiper-img" :src="item.url">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        "SwiperList": Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay:3000,
                autoplayDisableOnInteraction : false,
            }
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

