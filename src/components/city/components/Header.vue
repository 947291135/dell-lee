<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl';
    .header
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        position relative
        .header-back
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            top 0
            left 0
            color #fff
</style>
