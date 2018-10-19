<template>
    <div class="GPU_torbo border-bottom">
        <div class="GPU_left GPU_box border-right"><span class="iconfont gpsicon">&#xe631;</span>定位失败</div>
        <div class="GPU_right GPU_box"><span class="iconfont gpsicon">&#xe6e7;</span>玩水季</div>
    </div>
</template>

<script>
export default {
    name:'GPS'
}
</script>

<style lang="stylus" scoped>
    .GPU_torbo
        display flex
        position relative
        overflow hidden
        height .98rem
        background #fff
        .GPU_box
            flex 1
            text-align center
            height .98rem
            line-height .98rem
</style>
