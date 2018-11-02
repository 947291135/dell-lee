<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :dtaillist='list'></DetailList>
        <div class="conter"></div>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from  './components/DetailList.vue'
export default {
    name:'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
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
    .conter
     height 50rem
</style>
