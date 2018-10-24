<template>
    <div class="search">
        <input class="search-input" type="text" name="" id="" placeholder="请输入城市名">
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl';
    .search
        overflow hidden
        height .72rem
        padding 0 .1rem
        background $bgColor
        position relative
        .search-input
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius .06rem
            color #666
            padding 0 .1rem
            box-sizing border-box
</style>