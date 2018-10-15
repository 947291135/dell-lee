<!-- 导航组件，需要引入rem.js组件 -->
<template>
  <div class="header">
    <div class="header_content">
      <p class="header_title">
        <router-link to='/' append>banner</router-link>
        <a class="header_but" @click='header_but' :class="{active:header_item}">
          <i></i>
          <i></i>
          <i></i>
        </a>
      </p>
      <ul v-show="header_item">
        <li>
          <router-link to='/' append>首页<i></i></router-link>
        </li>
        <li>
          <router-link to='/user' append>用户<i></i></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data: function () {
    return {
      header_item: true
    }
  },
  methods: {
    header_but: function () {
      this.header_item = !this.header_item
    }
  },
  mounted: function () {
    // 测试：当为手机端路由到手机端页面，如果为PC端则正常跳转
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      this.header_item = false
    } else {
      this.header_item = true
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  @media screen and (max-width:900px) {
    .header {
      width: 100%;
      box-sizing: border-box;
      height: 1rem;
      position: absolute;
      background: rgba(248,248,248);
      border-bottom: 1px solid;
      border-color: #e5e5e5 #eee #eee;
    }
    .header:after {
      clear: both;
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .header .header_content {
      height: 1rem;
      margin: 0 auto;
    }
    .header_title{
      display: block;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      padding: 0 0.4rem;
    }
    .header_title a{
      float: left;
      font-size: 0.40rem;
      color: #777;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    }
    a.header_but{
      display: block;
      border: 1px solid;
      border-color: #ddd;
      padding: 0.18rem 0.2rem;
      float: right;
      box-sizing: border-box;
      margin-top: 0.14rem;
      border-radius: 0.1rem;
      transition: all .5s
    }
    a.header_but i{
      display: block;
      width: 0.44rem;
      height: 0.04rem;

      background-color: #888;
      margin-top: 0.08rem;
    }
    a.header_but i:first-child{
      margin-top: 0;
    }
    a.header_but.active{
      background-color: #ddd;
      transition: all .5s
    }
    .header_content ul{
      padding: 0.18rem 0;
      text-align: left;
      background: rgba(248,248,248);
      color: #777;
    }
    .header_content ul li{
      display: block;
      transition: all .5s
    }
    .header_content ul li a{
      color: #777;
      padding: 0.2rem 0.2rem;
      display: block;
      transition: all .5s
    }
    .header_content ul li:hover {
      background-color: #e7e7e7;
      transition: all .5s
    }
    .header_content ul li:hover a{
      color: #555;
      transition: all .5s
    }
  }

  @media screen and (min-width:900px) {
    .header {
      width: 100%;
      height: auto;
      position: absolute;
      background: rgba(255, 255, 255, .8);
    }

    .header:after {
      clear: both;
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .header .header_content {
      height: 80px;
      width: 900px;
      margin: 0 auto;
    }
    .header_title{
      display: none;
    }
    .header .header_content ul {
      list-style: none;
      float: right;
      position: relative;
    }

    .header_content ul li {
      text-align: center;
      font-size: 13px;
      float: left;
      line-height: 75px;
      color: #000;
      width: 70px;
      height: 75px;
      margin: 0 0 0 50px;
      transition: all .5s;
      cursor: pointer;
      position: relative;
    }

    .header_content ul li a {
      color: #000;
      display: block;
      text-decoration: none;
      position: relative;
    }

    .header_content ul li:hover a {
      color: #ffffff;
      background: #be292d;
      transition: all .5s;
    }

    .header_content ul li:hover i {
      width: 20px;
      background: #fff;
      transition: all .5s;
    }

    .header_content ul li a.router-link-exact-active {
      color: #ffffff;
      background: #be292d;
    }

    .header_content ul li a i {
      position: absolute;
      height: 2px;
      width: 0px;
      z-index: 99;
      left: 25px;
      top: 65px;
      transition: all .5s;
    }

    .header_content ul li a.router-link-exact-active i {
      width: 20px;
      background: #fff;
    }
  }
</style>
