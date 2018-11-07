<template>
    <div class="deteil">
        <div class="deteil_header border-bottom">
            <i class="deteil_header_icon"></i>用户评论
        </div>
        <div class="deteil_content">
            <div class="deteil_content_item">
                <div class="item_infor">
                    <div class="level">
                        <i class="mpf-starlevel-total iconfont">&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;</i>
                        <i class="mpf-starlevel-gain iconfont">&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;</i>
                    </div>
                    <div class="user">余*流  2018-10-30</div>
                </div>
                <div class="item_content">
                    终于去了万圣节的夜场
                    和每一个路上遇到的鬼都开心的聊了天
                    每一个都友善的给我玩道具
                    npc和遇到的互动的路人氛围很好
                    鬼屋主题也很多挺好玩的
                    就是认真的非常多每个项目排队都要二十分钟到半个小时
                    所以最好六点一开门马上入场可以多玩一些
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DeteilComment'
}
</script>

<style lang="stylus" scoped>
@import '~css/varibles.styl'
    .deteil
        position relative
        margin-top .2rem
        background #fff
        .deteil_header
            padding 0 .2rem
            height .88rem
            font-size .3rem
            line-height .88rem
            text-z-index .2rem
            position relative
            .deteil_header_icon
                display inline-block
                margin-right .2rem
                width .06rem
                height .25rem
                background $bgColor
        .deteil_content
            background #ffffff
            display block
            position relative
            .deteil_content_item
                padding: .1rem .2rem .3rem .2rem;
                position relative
                .item_infor
                    margin-top .1rem
                    line-height .6rem
                    position relative
                    &:after 
                        content: ".";
                        clear: both;
                        display: block;
                        overflow: hidden;
                        font-size: 0;
                        height: 0;
                    .level
                        position relative
                        display inline-block
                        float left
                        width 1.5rem
                        height .28rem
                        line-height .28rem
                        vertical-align middle
                        overflow hidden
                        .mpf-starlevel-total
                            font-size .28rem
                            color: #ddd;
                            z-index 1
                            display inline-block
                            position absolute
                            overflow: hidden
                            top: 0
                            left: 0
                            height: .28rem
                        .mpf-starlevel-gain
                            font-size .28rem
                            color: #ffb436;
                            z-index 2
                            display inline-block
                            position absolute
                            overflow: hidden
                            top: 0
                            left: 0
                            height: .28rem
                    .user
                        position: relative;
                        float: right;
                        margin-left: .2rem;
                        line-height: .28rem;
                        font-size: .24rem;
                        vertical-align: middle;
                        color: #212121;
                .item_content
                    word-break: break-all;
                    word-wrap: break-word;
                    line-height: .42rem;
                    font-size: .26rem;
                    color: #616161;
                    margin-top .2rem

</style>
