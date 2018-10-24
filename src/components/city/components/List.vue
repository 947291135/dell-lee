<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
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
    mounted () {
        let scroll = new BScroll(this.$refs.wrapper)
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