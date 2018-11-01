<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="conter"></div>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
export default {
    name:'Detail',
    components: {
        DetailBanner,
        DetailHeader
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .conter
     height 50rem
</style>
