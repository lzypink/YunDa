<template>
  <!--<el-container>-->
  <!--<el-header class=""></el-header>-->
  <!--<el-main>Main</el-main>-->
  <!--<div class="middle">-->
    <!--<img src="./assets/img/background.png" style="position: absolute;left: 80px;top: 100%;width:100%"/>-->
    <!--<router-view/>-->
  <!--</div>-->
  <!--<router-link to="/HelloWorld"> 首页</router-link>-->
  <!--<router-link to="/login">登录</router-link>-->
  <!--<el-footer>Footer</el-footer>-->
<!--</el-container>-->
  <div id="app" >
    <div class="middle" :style="backgroundDiv">
      <router-link/>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('./assets/img/background.png') + ')'
      }
    }
  }
}
</script>

<style>

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

body{
   margin: 0;
   overflow: hidden;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

  margin-left: auto;
  margin-right: auto;
  /*width:1536px;*/
  /*height:600px;*/
  width: 100%;
  height: 100%;

}
.middle {

  background: no-repeat center top;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;

}
{
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  -khtml-user-select:none;/*早期浏览器*/
  user-select:none;
}
</style>
