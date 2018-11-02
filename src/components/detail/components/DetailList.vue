<template>
    <div>
        <div class="item" v-for="(item,index) of dtaillist" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <!-- 此处使用递归组件 -->
                <detail-list :dtaillist='item.children'></detail-list>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props: {
        dtaillist: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        position relative
        .item-title-icon
            position relative
            top: .09rem;
            left: .06rem;
            display: inline-block;
            width: .36rem;
            height: .36rem;
            background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
    .item-children
        padding 0 .2rem
</style>

