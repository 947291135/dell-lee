<template>
    <div class="Recom">
        <div class="title">
            <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="你喜欢的">
            <span class="title-text">热销推荐</span>
        </div>
        <ul>
            <li class="item border-bottom" v-for="data of list" :key="data.id">
                <img class="item-img" :src="data.imgsrc" alt=""/>
                <div class="item-info">
                    <p class="item-title">{{data.title}}</p>
                    <p class="item-desc">{{data.imginfor}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data () {
        return {
            list:[
                {
                    id:0,
                    title:"世界之窗",
                    imginfor:'深圳世界之窗成人票(夜场)(万圣节特惠10.12-10.26【不限人群】)',
                    imgsrc:'http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_200x200_65b5a07f.jpg'
                },
                {
                    id:1,
                    title:"世界之窗",
                    imginfor:'深圳世界之窗成人票(夜场)(万圣节特惠10.12-10.26【不限人群】)',
                    imgsrc:'http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_200x200_65b5a07f.jpg'
                },
                {
                    id:2,
                    title:"世界之窗",
                    imginfor:'深圳世界之窗成人票(夜场)(万圣节特惠10.12-10.26【不限人群】)',
                    imgsrc:'http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_200x200_65b5a07f.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
    .Recom
        position relative
        margin-top .2rem
        background #ffffff
    .title
        position: relative;
        font-size .28rem
        padding: .24rem 0 .26rem;
        .title-img
            display: inline-block;
            overflow: hidden;
            width: .3rem;
            height: .3rem;
            margin-left: .2rem;
            vertical-align: top;
            text-indent 0
        .title-text
            display: inline-block;
            margin-left: .08rem;
            height: .44rem;
            color: #212121;
            font-size: .32rem;
            line-height: .44rem;
            text-indent 0
    .item
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                display inline-block
                line-height .44rem
                margin-top .2rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff 

</style>
