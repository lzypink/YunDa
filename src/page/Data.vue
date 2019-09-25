<template>
  <div class="technicalData" style="position: absolute;left: 6%;top: 130px;text-align: center;width: 80%;height: 80%">
    <span style="position: absolute;color: white;font-size: 20px;left:16%;top:33px">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:18%;top:33px">技术资料</span>
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
      <div style="width: 47%;height: 50px;position: absolute;left: 3%;top: 5%;background-color: #356ca5;">
      <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">WD2500风电机组参数表P201_Pv1</span>
       <a ><i class="el-icon-warning" style="
       position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i></a>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 52%;top: 5%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">程序与参数升级方案A0</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 3%;top: 25%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">兆瓦级风力发电机组机舱视频监控系统防雷整改方案</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 52%;top: 25%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">WD2000风电机组桨叶除冰系统改造项目安装工艺</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 3%;top: 45%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">WD2500风电机组状态码表(Beckhoff控制器)-庆元双苗尖风电场</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 52%;top: 45%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">湘电1.5MW发电机轴承外端盖整改方案</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 3%;top: 65%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">中广核象山涂茨风电场叶片雷电记录卡检测报告</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 52%;top: 65%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">单晶河一期SSB直流变桨系统EFC功能升级方案</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 3%;top: 85%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">新干五老峰项目自动消防系统供电改造方案</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
      </div>
      <div style="width: 47%;height: 50px;position: absolute;left: 52%;top: 85%;background-color: #356ca5;">
        <img src="../assets/pdf.png" style="position: absolute;width: 30px;left: 20px;top: 10px">
        <span style="position: absolute;left: 80px;top: 10px;color: white">单晶河三期6台风机齿轮油检测报告说明</span>
        <i class="el-icon-warning" style="position: absolute;left: 460px;top: 10px;color: white; font-size: 25px;" ></i>
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
