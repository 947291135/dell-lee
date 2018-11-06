<template>
    <div class="Weekend">
        <div class="title">
            <span class="title-text">周末去那</span>
        </div>
        <ul>
            <li class="item border-bottom" v-for="data of WeekList" :key="data.product" v-if="WeekList.length">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="data.imgurl" :alt="data.title"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{data.title}}</p>
                    <p class="item-desc">{{data.information}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props: {
        WeekList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/mixins.styl'
    .Weekend
        position relative
        background #ffffff
    .title
        position: relative;
        background #f5f5f5
        .title-text
            height: .8rem;
            padding-left: .26rem;
            line-height: .8rem;
            color: #212121;
    .item
        background #fff
    .item-img-wrapper
        height 0
        overflow hidden
        padding-bottom 37.09%
    .item-img
        width 100%
    .item-info
        padding: .14rem .2rem .2rem .2rem;
        .item-title
            color: #212121;
            line-height: .48rem;
            font-size: .28rem;
            ellipsis()
        .item-desc
            overflow: hidden;
            padding-right: 1.4rem;
            color: #616161;
            font-size: .24rem;
            line-height: .42rem;
            ellipsis()
</style>
