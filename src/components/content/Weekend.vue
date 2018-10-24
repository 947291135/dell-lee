<template>
    <div class="Weekend">
        <div class="title">
            <span class="title-text">周末去那</span>
        </div>
        <ul>
            <li class="item border-bottom" v-for="data of WeekList" :key="data.id" v-if="WeekList.length">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="data.imgsrc" :alt="data.title"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{data.title}}</p>
                    <p class="item-desc">{{data.imginfor}}</p>
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
            display: inline-block;
            color: #212121;
            font-size: .32rem;
            line-height: .8rem
            padding-left: .26rem;
    .item
        background #fff
    .item-img-wrapper
        height 0
        overflow hidden
        padding-bottom 37.09%
    .item-img
        width 100%
    .item-info
        padding .1rem
        .item-title
            color: #212121;
            line-height: .48rem;
            font-size: .28rem;
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
