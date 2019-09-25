<template>
<div class="realTimeDiagnosis" style="position: absolute;top: 150px;left:85px">

  <div class="diagnosticReport" style="position: absolute;left: 100px;text-align: center">
    <span style="position: absolute;color: white;font-size: 20px;left:0%;top:10%;font-weight: 900">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:1%;top:11%;">实时诊断信息</span>
    <!--<el-button style="position: absolute;left:160px;top:30px;height: 40px" ><i class="el-icon-menu" style="position:absolute;left:15px"></i></el-button>-->
    <!--<el-button style="position: absolute;left:190px;top:30px;height: 40px" ></el-button>-->
    <!--<svg t="1569229911707" style="position: absolute;width: 35px;height: 35px;left:204px;top:33px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534" width="200" height="200"><path d="M841.6 489.6h-214.4c-48 0-86.4-38.4-86.4-86.4V188.8c0-48 38.4-86.4 86.4-86.4h214.4c48 0 86.4 38.4 86.4 86.4v214.4c0 48-38.4 86.4-86.4 86.4z m-211.2-320c-12.8 0-22.4 9.6-22.4 22.4v214.4c0 12.8 9.6 22.4 22.4 22.4h214.4c12.8 0 22.4-9.6 22.4-22.4V188.8c0-12.8-9.6-22.4-22.4-22.4h-214.4zM393.6 489.6H182.4c-48 0-86.4-38.4-86.4-86.4V188.8c0-48 38.4-86.4 86.4-86.4h214.4c48 0 86.4 38.4 86.4 86.4v214.4c-3.2 48-41.6 86.4-89.6 86.4z m-211.2-320c-12.8 0-22.4 9.6-22.4 19.2v214.4c0 12.8 9.6 22.4 22.4 22.4h214.4c12.8 0 22.4-9.6 22.4-22.4V188.8c0-12.8-9.6-22.4-22.4-22.4H182.4zM841.6 937.6h-214.4c-48 0-86.4-38.4-86.4-86.4v-214.4c0-48 38.4-86.4 86.4-86.4h214.4c48 0 86.4 38.4 86.4 86.4v214.4c0 48-38.4 86.4-86.4 86.4z m-211.2-323.2c-12.8 0-22.4 9.6-22.4 22.4v214.4c0 12.8 9.6 22.4 22.4 22.4h214.4c12.8 0 22.4-9.6 22.4-22.4v-214.4c0-12.8-9.6-22.4-22.4-22.4h-214.4zM393.6 937.6H182.4c-48 0-86.4-38.4-86.4-86.4v-214.4c0-48 38.4-86.4 86.4-86.4h214.4c48 0 86.4 38.4 86.4 86.4v214.4c-3.2 48-41.6 86.4-89.6 86.4zM182.4 614.4c-12.8 0-22.4 9.6-22.4 22.4v214.4c0 12.8 9.6 22.4 22.4 22.4h214.4c12.8 0 22.4-9.6 22.4-22.4v-214.4c0-12.8-9.6-22.4-22.4-22.4H182.4z" fill="#333333" p-id="1535"></path></svg>-->
    <!--<svg t="1569229526708" style="position: absolute;width: 35px;height: 35px;left:163px;top:33px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1140" width="200" height="200"><path d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t48.64-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z" p-id="1141" fill="#2c2c2c"></path></svg>-->
    <!--<el-button type="primary" plain style="position: absolute;left: 150px;width: 10px;height: 40px;top:-10px"></el-button>-->
    <el-select v-model="valueone" clearable placeholder="请选择风场"
               style="position: absolute;top: 24%;left: 2%;width: 150px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <el-select v-model="valuetwo" clearable placeholder="机组编号" style="position: absolute;top: 24%;left: 15.5%;width: 100px">
      <el-option
        v-for="item in optionstwo"
        :key="item.valuetwo"
        :label="item.label"
        :value="item.valuetwo">
      </el-option>
    </el-select>
    <el-select v-model="valuethree" clearable placeholder="处理状态" style="position: absolute;top: 24%;left: 24.5%;width: 100px">
      <el-option
        v-for="item in optionsthree"
        :key="item.valuethree"
        :label="item.label"
        :value="item.valuethree">
      </el-option>
    </el-select>
      <el-select v-model="valuefour" clearable placeholder="停机类型" style="position: absolute;top: 24%;left: 33.5%;width: 115px">
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
      style="position: absolute;left: 44%;width: 360px;height: 40px;top: 24%">
    </el-date-picker>
    <el-input v-model="input" prefix-icon="el-icon-search" placeholder="请输入停机代码" style="width: 150px;position: absolute;top: 24%;left: 76%"></el-input>
    <el-button type="primary" style="position: absolute;top: 24%;left: 90%">查询</el-button>
    <!--<div style="background-color: #008CCF;width: 100%;height: 39px;left:2px;top:98px;position: absolute"></div>-->
    <div style="background-color: #2d516d;width: 100%;height: 329px;left:2px;top:144px;position: absolute"></div>
    <el-table
      :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass"
      :data="tableData"
      highlight-current-row
      show-header
      style="width: 100%;top: 145px;">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
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
          <a href ='/guide' @click="222" style="text-decoration: none;color: #1aff47;">排查指导</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="zhenduan"
        label="诊断报告"
        width="120">
        <template slot-scope="scope">
          <a href ='/zdreport' @click="111" style="text-decoration: none;color: #1aff47;">诊断报告</a>
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
    111 () {
      this.$router.replace('/zdreport')
    },
    222 () {
      this.$router.replace('/guide')
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
