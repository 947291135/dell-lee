<template>
    <div class="container" @click="handleBannerClickClose">
        <div class="wrapper">
             <swiper :options="swiperOption">
                <!--加if的原因是初始传来的是空数组，会导致轮播图顺序变乱，让完整的数组等传过来后才创建swiper这才不会乱 -->
                <swiper-slide v-for="(item,index) of imgs" :key="index" v-if="imgs.length">
                    <div class="Gallary-img" v-bind:style="{'background-image' : 'url('+item+')'}"></div>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    data () {
        return {
            swiperOption:{
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observeParents :true,
                observer : true
            }
        }
    },
    props: {
        'imgs' : {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleBannerClickClose () {
            this.$emit('close');
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-container
        overflow inherit
        
    .container
        position fixed
        z-index 99
        left 0
        bottom 0
        top 0
        right 0
        background #000
        display flex
        justify-content center
        flex-direction column
        .wrapper
            height 0
            padding-bottom 63.2%
            position relative
            .Gallary-img
                width  100%
                height 5.26rem
                background-size 100%
                background-repeat no-repeat	
                background-position:center;
            .swiper-pagination
                color #fff
                position absolute
                bottom -1rem
</style>
