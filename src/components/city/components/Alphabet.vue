<template>
    <ul class="list">
       <li class="item" v-for="(item,key) of cities" :key="key" @click="handleLetterClick">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props: {
        cities: Object
    },
    methods: {
        handleLetterClick:function(e){
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl'
    .list
        position absolute
        top 1.58rem
        bottom 0
        right 0
        width .4rem
        display flex
        flex-direction column
        justify-content center
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>
