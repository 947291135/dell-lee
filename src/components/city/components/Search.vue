<template>
    <div>
        <div class="search"> 
            <input class="search-input" type="text" v-model="keyword"  placeholder="请输入城市名">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
    name:'CitySearch',
    props:{
        cities: Object
    },
    data(){
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    watch:{
        keyword() {
             if(this.timer){
                clearTimeout(this.timer);
             }
             if(!this.keyword){
                 this.list=[];
                 return;
             }
             this.timer=setTimeout(()=>{
                 const result = [];
                 for (const key in this.cities) {
                     this.cities[key].forEach((value) => {
                         if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                             result.push(value);
                         }
                     });
                 }
                 this.list = result;
             },100)
        }
    },
    mounted () {
        this.scroll =new Bscroll(this.$refs.search,{
            click: true
        })
    },
    methods: {
        handleCityClick:function(city){
            this.handleClick(city);
            this.$router.push("/")
        },
        ...mapMutations(['handleClick'])
    }
    
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
    .search-content
        position absolute
        overflow hidden
        z-index 1
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #e6e6e6
        .search-item
            line-height .62rem
            padding-left .6rem
            color #666
            background #fff
</style>