<template>
  <div class="main">
    <Homeheader></Homeheader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeGPS></HomeGPS>
    <HomeADV></HomeADV>
    <HomeList></HomeList>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
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
export default {
  name: 'Home',
  components: {
    Homeheader,
    HomeSwiper,
    HomeIcons,
    HomeGPS,
    HomeADV,
    HomeList,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .main
    background #f5f5f5
</style>

