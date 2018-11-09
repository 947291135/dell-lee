<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities='cities'></CitySearch>
        <CityList :cities="cities" :hot="hotCities" :letter='letter'></CityList>
        <CityAlphabet :cities="cities" @change="handleLetterChange" ></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
    name:'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities:{},//存储字母对应全部城市数据
            hotCities:[],//存储热门城市
            letter:''
        }
    },
    methods: {
        getCityInfo:function(){
            let _this = this;
            axios.get('/api/city.json').then(function(res){
                res = res.data;
                if(res.ret && res.data){
                    const data =res.data;
                    _this.cities =data.cities;
                    _this.hotCities=data.hotCities;
                    
                }
            })
        },
        handleLetterChange:function(letter){
            this.letter=letter;
        }
    },
    mounted () {
        this.getCityInfo()//获取城市数据事件：get city
    }

}
</script>

<style lang="stylus" scoped>
    
</style>
