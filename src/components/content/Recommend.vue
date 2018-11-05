<template>
    <div class="Recom">
        <div class="title">
            <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="你喜欢的">
            <span class="title-text">热销推荐</span>
        </div>
        <ul>
            <router-link tag='li' class="item border-bottom" v-for="data of RecomList" :key="data.id" v-if="RecomList.length"  :to="'/detail/'+data.product">
                <img class="item-img" :src="data.imgurl" :alt="data.imgtitle"/>
                <div class="item-info">
                    <p class="item-title">{{data.imgtitle}}</p>
                    <p class="item-desc">{{data.information}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props: {
        RecomList: Array
    },
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
