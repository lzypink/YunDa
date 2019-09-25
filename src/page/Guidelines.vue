<template>
  <div class="ScreeningGuidelines" style="position: absolute;top:160px;left:220px">
    <div class="diagnosticReport" style="position: absolute;left: 10%;text-align: center">
      <span style="position: absolute;color: white;font-size: 20px;left:3%;top: 27px;font-weight: 900">|</span>
      <span style="position: absolute;color: white;font-size: 20px;left:4%;top:30px;font-weight: 600">排查指导</span>
      <span style="position: absolute;color: red;font-weight: 600;left:130px;top:33px;font-size: 17px">5107(塔底正常停机按钮)</span>
      <el-button style="background-color: #008CCF;top:20px;color: white;border: none;position: absolute;left:90%" @click="handleBack">返回诊断报告列表</el-button>
      <!--<span style="position: absolute;color: white;font-size: 15px;left: 85%" @click="handleBack">返回诊断报告列表</span>-->
      <div style="width: 238px;height:50px;background-color: #214469;top:90px;left:12px;position: absolute"></div>
      <div style="width: 372px;height:50px;background-color: #214469;top:90px;left:251px;position: absolute"></div>
      <div style="width: 122px;height:50px;background-color: #214469;top:90px;left:624px;position: absolute"></div>
      <div style="width: 367px;height:50px;background-color: #214469;top:90px;left:747px;position: absolute"></div>

      <div style="width: 238px;height:160px;background-color: #2B5887;top:140px;left:12px;position: absolute"></div>
      <div style="width: 372px;height:160px;background-color: #2B5887;top:140px;left:251px;position: absolute"></div>
      <div style="width: 122px;height:160px;background-color: #2B5887;top:140px;left:624px;position: absolute"></div>
      <div style="width: 367px;height:160px;background-color: #2B5887;top:140px;left:747px;position: absolute"></div>

      <div style="width: 238px;height:160px;background-color: #2B5887;top:301px;left:12px;position: absolute"></div>
      <div style="width: 372px;height:160px;background-color: #2B5887;top:301px;left:251px;position: absolute"></div>
      <div style="width: 122px;height:160px;background-color: #2B5887;top:301px;left:624px;position: absolute"></div>
      <div style="width: 367px;height:160px;background-color: #2B5887;top:301px;left:747px;position: absolute"></div>

      <div style="width:1000px">
        <span style="position: absolute;top:100px;left:89px;font-size: 18px;font-weight:600;color: white">排查对象</span>
        <span style="position: absolute;top:100px;left:400px;font-size: 18px;font-weight:600;color: white">停机原因</span>
        <span style="position: absolute;top:100px;left:650px;font-size: 18px;font-weight:600;color: white">出现概率</span>
        <span style="position: absolute;top:100px;left:900px;font-size: 18px;font-weight:600;color: white">排查方法</span>
      </div>

      <div style="width:1000px">
        <span style="position: absolute;top:183px;left:103px;font-size: 15px;color: white">线缆</span>
        <div style="width:150px;height: 20px;background-color: white;left:50px;top:214px;position:absolute;border-radius: 100px;color: black">0%</div>
        <span style="position: absolute;top:205px;left:326px;font-size: 15px;color: white">塔基到511模块通信回路异常</span>
        <span style="position: absolute;top:205px;left:667px;font-size: 15px;color: red">50%</span>
        <span style="position: absolute;top:185px;left:779px;font-size: 15px;color: white;width: 298px">1、检查塔基柜内通信线缆接地是否正常、x11-1与x11-2是否接反或通信线缆有无磨损。

2、可能由电磁干扰问题，结合实际情况重新走线。</span>
      </div>

      <div style="width:1000px">
        <span style="position: absolute;top:347px;left:103px;font-size: 15px;color: white">511模块</span>
        <div style="width:150px;height: 20px;background-color: #008CCF;left:50px;top:388px;position:absolute;border-radius: 100px;color: white">100%</div>
        <span style="position: absolute;top:371px;left:332px;font-size: 15px;color: white">塔基柜内511模块工作异常	</span>
        <span style="position: absolute;top:371px;left:667px;font-size: 15px;color: red">50%</span>
        <span style="position: absolute;top:385px;left:770px;font-size: 15px;color: white;width: 330px">查看塔基柜内511模块工作状态指示灯是否正常。</span>
      </div>
      <!--<el-table-->
        <!--:row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass"-->
        <!--show-header-->
        <!--style="width: 100%;margin-top: 50px;">-->
        <!--<el-table-column-->
          <!--prop="pcdx"-->
          <!--label="排查对象"-->
          <!--width="240">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="tjyy"-->
          <!--label="停机原因"-->
          <!--width="240">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="cxpl"-->
          <!--label="出现频率"-->
          <!--width="240">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="pcff"-->
          <!--label="排查方法"-->
          <!--width="360">-->
        <!--</el-table-column>-->
      <!--</el-table>-->
      <!--<el-pagination-->
        <!--background-->
        <!--style="margin-top: 20px;position: absolute;right: 0px"-->
        <!--layout="prev, pager, next"-->
        <!--page-size="10"-->
        <!--:total="1000">-->
      <!--</el-pagination>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreeningGuidelines',
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
      tableData: [{
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }, {
        pcdx: '雷电',
        tjyy: '雷电干扰引起的',
        cxpl: '16.42%',
        pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'
      }]
    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background:#3f5c6d2c;color:white;'
    },
    handleBack () {
      this.$router.replace('/report')
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
