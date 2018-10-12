<template>
    <div class="header">
      <div class="header_content">
        <ul>
          <li><router-link to='/' append >首页<i></i></router-link></li>
          <li><router-link to='/user' append >用户<i></i></router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'item'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
  .header{
    width: 100%;
    height: auto;
    position: fixed;
    background: rgba(255, 255, 255, .8);
  }
  .header:after{
    clear: both;
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .header .header_content{
    height: 80px;
    width: 1400px;
    margin: 0 auto;
  }
  .header .header_content ul{
    list-style: none;
    float: right;
    position: relative;
  }
  .header_content ul li{
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
  .header_content ul li a{
    color: #000;
    display: block;
    text-decoration: none;
    position: relative;
  }
  .header_content ul li:hover a{
    color: #ffffff;
    background: #be292d;
    transition: all .5s;
  }
  .header_content ul li:hover i{
    width: 20px;
    background: #fff;
    transition: all .5s;
  }
  .header_content ul li a.router-link-exact-active{
    color: #ffffff;
    background: #be292d;
  }
  .header_content ul li a i{
    position: absolute;
    height: 2px;
    width: 0px;
    z-index: 99;
    left: 25px;
    top: 65px;
    transition: all .5s;
  }
  .header_content ul li a.router-link-exact-active i{
    width: 20px;
    background: #fff;
  }
 </style>
