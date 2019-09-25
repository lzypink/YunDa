<template>
<div class="realTimeDiagnosis" style="position: absolute;top: 150px;left:85px">

  <div class="diagnosticReport" style="position: absolute;left: 100px;text-align: center">
    <span style="position: absolute;color: white;font-size: 20px;left:0%;top:10%;font-weight: 900">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:1%;top:11%;">历史故障</span>
    <el-select v-model="valueone" clearable placeholder="请选择风场"
               style="position: absolute;top: 24%;left: 1%;width: 150px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <el-select v-model="valuetwo" clearable placeholder="机组编号" style="position: absolute;top: 24%;left: 15%;width: 130px">
      <el-option
        v-for="item in optionstwo"
        :key="item.valuetwo"
        :label="item.label"
        :value="item.valuetwo">
      </el-option>
    </el-select>
    <!--<el-select v-model="valuethree" clearable placeholder="处理状态" style="position: absolute;top: 24%;left: 24.5%;width: 100px">-->
      <!--<el-option-->
        <!--v-for="item in optionsthree"-->
        <!--:key="item.valuethree"-->
        <!--:label="item.label"-->
        <!--:value="item.valuethree">-->
      <!--</el-option>-->
    <!--</el-select>-->
      <el-select v-model="valuefour" clearable placeholder="停机类型" style="position: absolute;top: 24%;left: 27%;width: 145px">
        <el-option
          v-for="item in optionsfour"
          :key="item.valuefour"
          :label="item.label"
          :value="item.valuefour">
        </el-option>
    </el-select>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      style="position: absolute;left: 40.3%;width: 360px;height: 40px;top: 24%">
    </el-date-picker>
    <el-input v-model="input" prefix-icon="el-icon-search" placeholder="请输入停机代码" style="width: 150px;position: absolute;top: 24%;left: 72%"></el-input>
    <el-button type="primary" style="position: absolute;top: 24%;left: 86%">查询</el-button>
    <el-button type="primary" style="position: absolute;top: 24%;left: 93%">导出</el-button>
    <!--<div style="background-color: #008CCF;width: 100%;height: 39px;left:2px;top:98px;position: absolute"></div>-->
    <div style="background-color: #2d516d;width: 100%;height: 329px;left:2px;top:144px;position: absolute"></div>
    <div style="background-color: #faffff;width: 99.9%;height: 49px;left:2px;top:144px;position: absolute"></div>
    <el-table
      :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getCellClass"
      :data="tableData"
      highlight-current-row
      show-header
      style="width: 100%;top: 145px;">
      <el-table-column
        prop="id"
        label="ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="feng"
        label="风电场"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bianhao"
        label="机组编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="xinghao"
        label="机组型号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="故障时间"
        width="160">
      </el-table-column>
      <el-table-column
        prop="daima"
        label="故障代码"
        width="160">
      </el-table-column>
      <el-table-column
        prop="stats"
        label="处理状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zhidao"
        label="排查指导"
        width="120">
        <template slot-scope="scope">
          <a href ='/homePage/ScreeningGuidelines' style="text-decoration: none;color: #ffbb01;">排查指导</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="zhenduan"
        label="诊断报告"
        width="120">
        <template slot-scope="scope">
          <a href ='/homePage/FanDiagnosisReport' style="text-decoration: none;color: #1aff47;">诊断报告</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="caozuo"
        label="操作"
        width="60">
        <template slot-scope="scope">
          <a href ='/homePage/FanDiagnosisReport' style="text-decoration: none;color: #1e96ff;">
            <i class="el-icon-download" style="font-size: 15px"></i></a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      style="top: 500px;position: absolute;right: 0px"
      layout="prev, pager, next"
      page-size="10"
      :total="1000">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'realTimeDiagnosis',
  data () {
    return {
      value1: [],
      value2: '',
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
      valuetwo: '',
      optionsthree: [{
        valuethree: '选项1',
        label: '待处理'
      }, {
        valuethree: '选项2',
        label: '已处理'
      }],
      valuefour: '',
      optionsfour: [{
        valuefour: '选项1',
        label: '正常停机'
      }, {
        valuefour: '选项2',
        label: '故障停机'
      }],
      valuethree: '',
      tableData: [{
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[风机故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '未处理'
      }, {
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[风机故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '未处理'
      }, {
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '未处理'
      }, {
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '未处理'
      }, {
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '已处理'
      }, {
        id: '9688',
        feng: '舟山',
        bianhao: '1#',
        xinghao: 'WD77-11800',
        date: '2019-05-03 12:23:00',
        daima: '8878[故障]',
        zhidao: '排查指导',
        zhenduan: '诊断报告',
        stats: '已处理'
      }]
    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background:#3f5c6d2c;color:white;'
    },
    getCellClass ({ row, column, rowIndex, columnIndex  }) {
      return 'background:#3f5c6d2c;color:black;'
    }
  }
}
</script>

<style>
  .el-table__body tr.current-row>td{
    background-color: #a6a6a6 !important;
    color: black;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #a6a6a6;
    color: black;
  }
  .el-table, .el-table__expanded-cell {    background-color: transparent;
  }el-table th, .el-table tr {    background-color: transparent;
   }

</style>
