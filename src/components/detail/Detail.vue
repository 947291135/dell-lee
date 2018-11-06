<template>
    <div class="body">
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailInfor></DetailInfor>
        <DetailPrice></DetailPrice>
        <div class="conter"></div>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from  './components/DetailList.vue'
import DetailInfor from  './components/DetailInfor.vue'
import DetailPrice from  './components/DetailPrice.vue'
export default {
    name:'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
        DetailInfor,
        DetailPrice
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .body
        background #f5f5f5;
    .conter
     height 50rem
</style>
