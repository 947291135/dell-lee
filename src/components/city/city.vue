<template>
    <div>
        <CityHeader :index='index'></CityHeader>
        <CitySearch :cities='cities' :index='index'></CitySearch>
        <CityList :cities="cities" :hot="hotCities" :letter='letter' :index='index'></CityList>
        <CityAlphabet :cities="cities" @change="handleLetterChange" ></CityAlphabet>
    </div>
</template>

<script>
// import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {}, // 存储字母对应全部城市数据
      hotCities: [], // 存储热门城市
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // 根据不同层级查询不同的东西
      console.log(this.index)
      switch (this.index) {
        case 0:
          this.cities = {
            a: [
              {name: '广东省'},
              {name: '河北省'},
              {name: '内蒙古自治区'}
            ],
            b: [
              {name: '广东省'},
              {name: '河北省'},
              {name: '内蒙古自治区'}
            ]
          }
          this.hotCities = [
            {
              name: '广东省'
            }
          ]
          break
        case 1:
          this.cities = {
            a: [
              {name: '深圳市'}
            ]
          }
          this.hotCities = [
            {
              name: '深圳市'
            }
          ]
          break
        case 2:
          this.cities = {
            a: [
              {name: '光明区'}
            ]
          }
          this.hotCities = [
            {
              name: '光明区'
            }
          ]
          break
        case 3:
          this.cities = {
            a: [
              {name: '光明街道'}
            ]
          }
          this.hotCities = [
            {
              name: '光明街道'
            }
          ]
          break
        case 4:
          this.cities = {
            a: [
              {name: '250栋'}
            ]
          }
          this.hotCities = [
            {
              name: '250栋'
            }
          ]
          break
        case 5:
          this.cities = {
            a: [
              {name: '55单元'}
            ]
          }
          this.hotCities = [
            {
              name: '55单元'
            }
          ]
          break
        case 6:
          this.cities = {
            a: [
              {name: '1房间'}
            ]
          }
          this.hotCities = [
            {
              name: '1房间'
            }
          ]
          break
        default:
          break
      }
      // let _this = this
      // axios.get('http://api.mgblog.cn/qunaer/city.php').then(function (res) {
      //   res = res.data
      //   if (res.ret && res.data) {
      //     const data = res.data
      //     _this.cities = data.cities
      //     _this.hotCities = data.hotCities
      //   }
      // })
    },
    handleLetterChange: function (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()// 获取城市数据事件：get city
  },
  computed: {
    index () {
      return Number(this.$route.query.index) || 0
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
