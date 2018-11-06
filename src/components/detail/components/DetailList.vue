<template>
    <div>
        <!-- 递归组件的使用 -->
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
    },
    data () {
        return {
            list:[{
                title:'成人票',
                children:[{
                    title:'成人三馆联票'
                },{
                    title:'成人五馆联票'
                },
                ]
            },{
                title:'学生票',
                children:[{
                    title:'学生三馆联票'
                }]
            },{
                title:'儿童票',
                children:[{
                    title:'儿童三馆联票'
                }]
            },{
                title:'特惠票'
            }]
        }
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

