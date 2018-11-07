<template>
    <div class="body">
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailInfor></DetailInfor>
        <DetailPrice></DetailPrice>
        <DeteilComment></DeteilComment>
        <HomeRecommend :RecomList="rmList"></HomeRecommend>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from  './components/DetailList.vue'
import DetailInfor from  './components/DetailInfor.vue'
import DetailPrice from  './components/DetailPrice.vue'
import DeteilComment from  './components/DeteilComment.vue'
import HomeRecommend from './../content/Recommend.vue'
import axios from 'axios'
import qs from 'qs'
export default {
    name:'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
        DetailInfor,
        DetailPrice,
        DeteilComment,
        HomeRecommend
    },
    data () {
        return {
            rmList:[]
        }
    },
    methods: {
        getHomeinfo:function(){
            var _this =this;
            var datas = qs.stringify({
                city:this.city
            })

            axios({
                method: 'post',
                url: 'http://api.mgblog.cn/qunaer/', //请求转发路径
                data:datas, //传参
            }).then(function(response){
                var listdata = response.data;
                if(response.data && listdata.ret){
                    _this.rmList = listdata.data.rmList;
                }else{
                    alert("服务器链接错误，请查看接口返回："+listdata.ret);
                }
            })
        }
    },
    activated (){
        this.getHomeinfo();
    }
}
</script>

<style lang="stylus" scoped>
    .body
        background #f5f5f5;
    .conter
     height 50rem
</style>
