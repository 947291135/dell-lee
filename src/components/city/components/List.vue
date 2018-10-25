<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div> 
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="InnerItem of item" :key="InnerItem.id">
                    <div class="item border-bottom">
                        {{InnerItem.name}}
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    mounted () {
        //定义this这样全局用this 可以获取到scroll的实例，来使用实例的API
        this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
        letter:function(){
            if(this.letter){
                // 获取循环遍历出来的DOM，是数组形式，所以要在后面赋值下标
                const element =this.$refs[this.letter][0];
                this.scroll.scrollToElement(element,500)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl';
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            border-color #cccccc
    .border-bottom
        &:before
            border-color #cccccc
    .list
        position absolute
        top 1.58rem
        bottom 0
        left 0
        right 0
        overflow hidden
        .title
            line-height .4rem
            background #eeeeee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left 
                width 33.3%
                .button
                    text-align center
                    margin .1rem
                    padding  .1rem 0
                    border .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height .64rem
                padding-left .2rem



</style>