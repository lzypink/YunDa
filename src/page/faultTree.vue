<template>
  <div class="technicalData" style="position: absolute;left:2%;text-align: center;width: 80%;height: 80%">
    <span style="position: absolute;color: white;font-size: 20px">故障树</span>
    <el-select v-model="valueone" clearable placeholder="请选择风场" style="position: absolute;top:10%;left: 52%;width: 150px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <el-select v-model="valuetwo" clearable placeholder="请选择故障代码" style="position: absolute;top: 10%;left: 38%;width: 150px">
      <el-option
        v-for="item in optionstwo"
        :key="item.valuetwo"
        :label="item.label"
        :value="item.valuetwo">
      </el-option>
    </el-select>
    <el-input v-model="input" prefix-icon="el-icon-search" placeholder="请输入关键词搜索" style="width: 170px;position: absolute;top: 10%;left: 66%"></el-input>
    <el-button type="primary" style="position: absolute;top: 10%;left: 82%">查询</el-button>
    <div class="tree" style="position: absolute;top: 20%;left: 10%">
      <go></go>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faultTree',
  components: { go },
  data () {
    return {
      optionsone: [{
        valueone: '选项1',
        label: '舟山'
      }, {
        valueone: '选项2',
        label: '东台'
      }],
      valueone: '',
      optionstwo: [{
        valuetwo: '选项1',
        label: '1#'
      }, {
        valuetwo: '选项2',
        label: '3#'
      }],
      valuetwo: ''
    }
  }
}
</script>

<style scoped>

</style>
