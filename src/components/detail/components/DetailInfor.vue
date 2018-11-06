<template>
    <div class="information">
        <div class="information_top border-bottom">
            <div class="information_top_item border-right">
                <div class="orange">
                    <span class="mp-commentcard-score">4.9</span>
                    <span class="mp-commentcard-text">分</span>
                    <span class="mp-commentcard-desc">很棒</span>
                </div>
                <div class="gray">
                    <span class="mp-totalcommentnum">0条评论</span>
                    <span class="mp-totalcommentnum">2条攻略</span>
                </div>
                <div class="iconfont header-icon">&#xe64b;</div>
            </div>
            <div class="information_top_item">
                <div class="back">
                    <span class="mp-sightcard-title">景点简介</span>
                </div>
                <div class="gray">
                    <span class="mp-totalcommentnum" style="padding-left: .3rem;">开放时间、贴士</span>
                </div>
                <div class="iconfont header-icon">&#xe64b;</div>
            </div>
        </div>
        <div class="information_bottom">
            <span class="iconfont gpsicon">&#xe631;</span>
            广东省深圳市南山区欢乐海岸内
            <span class="iconfont icon_right">&#xe64b;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailInfor',
}
</script>

<style lang="stylus" scoped>
    .information_top >>> .border-right
        &:before
            transform: scaleX(1);
    .information
        position relative
        left 0
        right 0
        padding .1rem .2rem 0 .2rem
        margin-bottom .1rem
        border-radius .1rem .1rem 0 0
        top -.1rem
        z-index 1
        background-color #ffffff
        .information_top
            padding-top: .1rem;
            padding-bottom: .2rem;
            position relative
            display flex
            width 100%
            .information_top_item
                flex 1
                box-sizing border-box
                position relative
                .orange
                    color #ff8300
                    font-size: .28em;
                    line-height: 1;
                    .mp-commentcard-score
                        font-size: .44rem;
                        color: #ff8300;
                        line-height: .44rem;
                    .mp-commentcard-text
                        font-size: .28rem;
                        color: #ff8300;
                        line-height: .48rem;
                    .mp-commentcard-desc
                        font-size: .28rem;
                        color: #ff8300;
                        line-height: .48rem;
                        margin-left: .2rem;
                .gray
                    color: #212121;
                    font-size: .28em;
                    line-height: 1;
                    .mp-totalcommentnum
                        font-size: .24rem;
                        color: #9e9e9e;
                        line-height: .32rem;
                        margin-right: .2rem;
                .back
                    color: #212121;
                    font-size: .28em;
                    line-height: 1;
                    .mp-sightcard-title
                        font-size: .28rem;
                        color: #212121;
                        line-height: .48rem;
                        padding-left: .3rem;
                .header-icon
                    position: absolute;
                    top: .3rem;
                    right: .2rem;
                    color: #9e9e9e;
                    font-size: .24rem;
        .information_bottom
            flex 1
            display block
            position relative
            padding .2rem .55rem
            line-height .36rem
            color #212121
            overflow hidden
            .gpsicon
                display: block;
                position: absolute;
                left: 0;
                top: .35rem;
                margin-top: -.16rem;
                margin-right: .2rem;
                color: #9e9e9e;
                font-size: .36rem;
            .icon_right
                position: absolute;
                right: .2rem;
                top: 50%;
                margin-top: -.14rem;
                color: #9e9e9e;
                font-size: .24rem;
</style>
