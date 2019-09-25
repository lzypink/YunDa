<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color='#e2e2ef'
      text-color="black"
      active-text-color="#ffd04b"
      >
      <img src="../assets/img/header-logo.png" style="margin-left:-2061px;margin-top: -19px" @click="333">
      <el-submenu index="1" style="margin-left: 500px">
        <template slot="title">实时诊断</template>
        <el-menu-item @click="a1">实时诊断信息</el-menu-item>
        <el-menu-item @click="a2">诊断报告</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">离线诊断</template>
        <el-menu-item @click="b1">手动分析</el-menu-item>
        <el-menu-item @click="b2">故障树分析</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">知识库</template>
        <el-menu-item @click="c1">技术资料</el-menu-item>
        <el-menu-item @click="c2">软件下载</el-menu-item>
        <el-menu-item @click="c3">故障树</el-menu-item>
      </el-submenu>
      <el-menu-item @click="d">排行榜</el-menu-item>
    </el-menu>

    <!-- 页面主题区域 -->


    <el-container>
      <!--路由占位符-->
      <router-view></router-view>
      <!--</el-main>-->
    </el-container>
    <div class="TextScrollBox">
      <i class="icon icon-news"></i>
      <div class="TextScroll" id="TextScroll">
        <ul class="clearfix" style="width: 39398px; left: -324px;">
          ::before
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li> <li class="green">
          <a href="#">金塘风电场机组无故障连续运行24小时</a>
          <span class="data">2019-09-23 22:10</span>
        </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
          <li class="green">
            <a href="#">金塘风电场机组无故障连续运行24小时</a>
            <span class="data">2019-09-23 22:10</span>
          </li>
        </ul>
      </div>
    </div>
    <div style="position:absolute;width: 1200px;height: 50px;left:180px;top:100px;background-color: #a4a4a4;border-radius: 50px">
      <span style="color: white;top: 10px;left:5px;width:1200px;position: absolute">重大播报：金塘风电场机组无故障连续运行24小时 2019-09-24 11:43       寿光一二期风电场机组无故障连续运行24小时 2019-09-24 11:43             关岭机组无故障连续运行2 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'technicalData',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    a1 () {
      this.$router.replace('/realTime')
    },
    a2 () {
      this.$router.replace('/report')
    },
    b1 () {
      this.$router.replace('/manualAnalysis')
    },
    b2 () {
      this.$router.replace('/faultTree')
    },
    c1 () {
      this.$router.replace('/Date')
    },
    c2 () {
      this.$router.replace('/software')
    },
    c3 () {
      this.$router.replace('/faultTree')
    },
    d () {
      this.$router.replace('/faultRanking')
    }
  }
}
</script>

<style scoped>
.li{
  color: #e2e2ef;
}
</style>
