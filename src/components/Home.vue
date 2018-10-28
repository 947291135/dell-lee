<template>
  <div class="main">
    <Homeheader></Homeheader>
    <HomeSwiper :SwiperList="SwiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeGPS></HomeGPS>
    <HomeADV></HomeADV>
    <HomeList :rmList="rmList"></HomeList>
    <HomeRecommend :RecomList="RecomList"></HomeRecommend>
    <HomeWeekend :WeekList="WeekList"></HomeWeekend>
  </div>
</template>

<script>
import Homeheader from './Header/header.vue'
import HomeSwiper from './Header/Swiper.vue'
import HomeIcons from './Header/icons.vue'
import HomeGPS from './Header/GPS.vue'
import HomeADV from './Header/ADV.vue'
import HomeList from './Header/list.vue'
import HomeRecommend from './content/Recommend.vue'
import HomeWeekend from './content/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      SwiperList:[],
      iconList:[],
      rmList:[],
      RecomList:[],
      WeekList:[]
    }
  },
  components: {
    Homeheader,
    HomeSwiper,
    HomeIcons,
    HomeGPS,
    HomeADV,
    HomeList,
    HomeRecommend,
    HomeWeekend
  },
  // mounted:vue生命周期
  mounted () {
    // 等页面挂在好才去执行getHomeinfo事件
    this.getHomeinfo()
  },
  methods: {
    getHomeinfo () {
      var _this=this;
      //只有static目录才能进行访问静态资源，其他目录访问会直接跳转回主页
      // axios.get('/static/json/index.json').then(function(response){
      //   console.log(response.data);
      // })
      // 如果按照上面请求路径这样写，是模拟本地接口地址，假如代码上线，则需要修改成线上的接口地址，
      // 这样大批量的修改会有风险，可以利用webpack的转发配置将请求转发到配置路径下。
      // 在config目录下的index.js文件下，有个proxyTable的属性进行配置
      axios.get('/api/index.json').then(function(response){
        var listdata = response.data;
        if(response.data && listdata.ret){
          _this.SwiperList = listdata.data.SwiperList;
          _this.iconList = listdata.data.iconList;
          _this.rmList = listdata.data.rmList;
          _this.RecomList = listdata.data.RecomList;
          _this.WeekList = listdata.data.WeekList;
        }else{
          console.log(listdata.ret);
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .main
    background #f5f5f5
</style>

