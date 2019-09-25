<template>
  <div class="technicalData" style="position: absolute;left: 6%;top: 130px;text-align: center;width: 80%;height: 80%">
    <span style="position: absolute;color: white;font-size: 20px;left:16%;top:33px">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:18%;top:33px">软件下载</span>
    <el-select v-model="valueone" clearable placeholder="请选择分类" style="position: absolute;top:10%;left: 42%;width: 180px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <el-input v-model="input" prefix-icon="el-icon-search" placeholder="请输入停机代码" style="width: 180px;position: absolute;top: 10%;left: 60%"></el-input>
    <el-button type="primary" style="position: absolute;top: 10%;left: 80%">查询</el-button>
    <div style="height: 400px;width: 85%;position: absolute;top: 23%;left: 10%;background-color: #2B5887;">
      <div style="width: 30%;height: 350px;position: absolute;left: 2%;top: 5%;background-color: #356ca5;">
        <img src="../assets/software.png" style="position: absolute;top: 5%;left: 30%">
        <span style="position: absolute;top: 40%;left: 20%;color: white;">HopewindMonitor_V534</span>
        <span style="position: absolute;top: 50%;left: 30%;color: white;">禾望变流器后台</span>
        <span style="position: absolute;top: 62%;left: 9%;color: white;font-size:12px;width: 250px">软件的简单介绍软件的简单介绍软件的简单介绍软件的简单介绍</span>
        <el-button type="primary" style="position: absolute;top: 80%;left: 30%;">立即下载</el-button>
      </div>
      <div style="width: 30%;height: 350px;position: absolute;left: 35%;top: 5%;background-color: #356ca5;">
        <img src="../assets/software.png" style="position: absolute;top: 5%;left: 30%;">
        <span style="position: absolute;top: 40%;left: 35%;color: white;">Drivesoft277</span>
        <span style="position: absolute;top: 50%;left: 36%;color: white;">SSB变桨系统后台软件</span>
        <el-button type="primary" style="position: absolute;top: 80%;left: 30%;">立即下载</el-button>
      </div>
      <div style="width: 30%;height: 350px;position: absolute;left: 68%;top: 5%;background-color: #356ca5;">
        <img src="../assets/software.png" style="position: absolute;top: 5%;left: 30%">
        <span style="position: absolute;top: 40%;left: 35%;color: white;">CHT1024</span>
        <span style="position: absolute;top: 50%;left: 36%;color: white;">PCH后台</span>
        <el-button type="primary" style="position: absolute;top: 80%;left: 30%;">立即下载</el-button>
      </div>
    </div>
    <el-pagination
      background
      style="top: 94%;position: absolute;right: 60px"
      layout="prev, pager, next"
      page-size="10"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'technicalData',
  data () {
    return {
      optionsone: [{
        valueone: '选项1',
        label: '舟山'
      }, {
        valueone: '选项2',
        label: '东台'
      }],
      valueone: ''
    }
  }
}
</script>

<style scoped>

</style>
