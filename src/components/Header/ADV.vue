<template>
    <div class="Adv_extension">
        <div class="Adv_left Adv_box border-right"></div>
        <div class="Adv_right Adv_box"></div>
    </div>
</template>

<script>
export default {
    name:'ADV'
}
</script>

<style lang="stylus" scoped>
    .Adv_extension
        margin-top .2rem
        background #ffffff
        overflow hidden
        display flex
        height 1.4rem
        .Adv_box
            float left
            flex 1
            box-sizing border-box   
        .Adv_left
            background: url(http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png) center center no-repeat;
            background-size: auto 100%
        .Adv_right
            background: url(http://img1.qunarzz.com/piao/fusion/1809/b7/00000ce26b312902.png) center center no-repeat;
            background-size: auto 100%;
</style>

