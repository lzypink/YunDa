<template>
<div class="faultRanking">
  <div class="FaultTimeScaleTable" style="position: absolute;left: 250px;top:190px;text-align: center">
    <span style="position: absolute;color: white;font-size: 20px;left:3%;top:10px">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:5%;top:10px">故障排行</span>
    <el-select v-model="valueone" clearable placeholder="全部" style="position: absolute;top: 5%;left:50%;width: 150px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <div style="background-color: #2d516d;width: 110%;height: 345px;left:2px;top:98px;position: absolute"></div>
    <el-select v-model="valueone" clearable placeholder="请选择条件" style="position: absolute;top: 5%;left: 70%;width: 150px">
      <el-option
        v-for="item in optionsone"
        :key="item.valueone"
        :label="item.label"
        :value="item.valueone">
      </el-option>
    </el-select>
    <el-button type="primary" style="position: absolute;top: 5%;left: 92%">查询</el-button>
    <el-table
      :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass"
      highlight-current-row
      :data="tableData"
      cell-style="padding:0"
      show-header
      style="width: 100%;margin-top: 10%;top: 17px;left:40px">
      <el-table-column
        prop="paiming"
        label="排名"
        width="220px"
        height="20px">
        <template slot-scope="scope" prop="testType">
          <span v-if="scope.row.testType==1" ><img src="../assets/top1.png" style="width: 60px"></span>
          <span v-if="scope.row.testType==2" ><img src="../assets/top2.png" style="width: 60px"></span>
          <span v-if="scope.row.testType==3" ><img src="../assets/top3.png" style="width: 60px"></span>
          <span v-if="scope.row.testType==4" ><img src="../assets/top4.png" style="width: 60px"></span>
          <span v-if="scope.row.testType==5" ><img src="../assets/top5.png" style="width: 60px"></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="bianhao"
        label="风机编号"
        width="280px"
        height="20px">
      </el-table-column><el-table-column
      prop="date"
      label="故障时长(h)"
      width="320px"
      height="40px">
    </el-table-column>
      <!--<el-table-column-->
        <!--prop="stats"-->
        <!--label="状态"-->
        <!--width="160px"-->
        <!--height="40px">-->
        <!--<template slot-scope="scope" prop="testtable">-->
          <!--&lt;!&ndash;<span v-if="scope.row.testtable==1" ><img src="../../assets/51.png" style="height: 25px"></span>&ndash;&gt;-->
          <!--&lt;!&ndash;<span v-if="scope.row.testtable==2" ><img src="../../assets/2611.png" style="height: 20px"></span>&ndash;&gt;-->
          <!--&lt;!&ndash;<span v-if="scope.row.testtable==3" ><img src="../../assets/2629.png" style="height: 25px"></span>&ndash;&gt;-->
        <!--</template>-->
      <!--</el-table-column>-->
    </el-table>
    <el-pagination
      background
      style="margin-top: 30px;position: absolute;right: -80px"
      layout="prev, pager, next"
      page-size="10"
      :total="1000">
    </el-pagination>

  </div>
</div>
</template>

<script>
export default {
  name: 'faultRanking',
  data () {
    return {
      optionsone: [{
        valueone: '选项1',
        label: '故障时长排行'
      }, {
        valueone: '选项2',
        label: '故障次数排行'
      }],
      valueone: '',
      tableData: [{
        testType: '1',
        bianhao: '#53',
        date: '132',
        testtable: '1'
      }, {
        testType: '2',
        bianhao: '#51',
        date: '122',
        testtable: '1'
      }, {
        testType: '3',
        bianhao: '#23',
        date: '111',
        testtable: '2'
      }, {
        testType: '4',
        bianhao: '#11',
        date: '98',
        testtable: '1'
      }, {
        testType: '5',
        bianhao: '#15',
        date: '97',
        testtable: '3'
      }, {
        testType: '1',
        bianhao: '#53',
        date: '132',
        testtable: '1'
      }, {
        testType: '2',
        bianhao: '#51',
        date: '122',
        testtable: '1'
      }, {
        testType: '3',
        bianhao: '#23',
        date: '111',
        testtable: '2'
      }, {
        testType: '4',
        bianhao: '#11',
        date: '98',
        testtable: '1'
      }, {
        testType: '5',
        bianhao: '#15',
        date: '97',
        testtable: '3'
      }]
    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background:#40739B;color:white;'
    }
  }
}
</script>

<style>
  .el-table__body tr.current-row>td{
    background-color: white !important;
    color: black;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: white;
    color: black;
  }
  .el-table, .el-table__expanded-cell {    background-color: transparent;
  }el-table th, .el-table tr {    background-color: transparent;
   }
</style>
