<template>
    <div class="header">
        <router-link v-show="showABS" to='/' tag='div' class="header-abs"><div class="iconfont header-icon">&#xe624;</div></router-link>
        <div class="header-flex" v-show="!showABS" :style="optcityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-flex-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data () {
        return {
            showABS:true,
            optcityStyle:{
                'opacity' : 0
            }
        }
    },
    methods: {
        handleScroll () {
            let scrollTop =  document.documentElement.scrollTop;
            if(scrollTop > 50){
                let optcity = scrollTop / 140;
                optcity = optcity>1?1:optcity
                this.optcityStyle ={
                    'opacity' : optcity
                }
                this.showABS = false
            }else{
                this.showABS = true
            }
        }
    },
    activated () {//调用该组件才执行事件绑定
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {//离开该组件才执行事件解除绑定
        window.removeEventListener('scroll',this.handleScroll);
    }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl';
    .header-abs
        position absolute
        top .2rem
        left .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0,0,0,.5) 
        text-align center
        .header-icon
            color #ffff
            line-height .8rem
            font-size .4rem 
    .header-flex
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        position fixed
        top 0
        left 0
        right 0
        z-index 9
        .header-flex-back
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            top 0
            left 0
            color #fff
</style>
