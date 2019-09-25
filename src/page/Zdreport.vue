<!--<template>-->
  <!--<div class="ScreeningGuidelines" style="position: absolute;top:160px;left:220px">-->
    <!--<div class="diagnosticReport" style="position: absolute;left: 10%;text-align: center">-->
      <!--<span style="position: absolute;color: white;font-size: 20px;left:3%;top: 27px;font-weight: 900">|</span>-->
      <!--<span style="position: absolute;color: white;font-size: 20px;left:4%;top:30px;font-weight: 600">诊断报告</span>-->
      <!--<span style="position: absolute;color: red;font-weight: 600;left:130px;top:33px;font-size: 17px">5107(塔底正常停机按钮)</span>-->
      <!--<el-button style="background-color: #008CCF;top:20px;color: white;border: none;position: absolute;left:90%" @click="handleBack">返回诊断报告列表</el-button>-->
      <!--<div style="width: 1000px">-->
        <!--<div style="background-color: #306297;width: 1100px;top:80px;position:absolute;height: 1000px">-->
            <!--<span style="color: white;font-size: 25px;position: absolute;top:40px;left:43%">故障诊断分析报告</span>-->
            <!--<span style="color: white;font-size: 17px;position: absolute;top:64px;left:5%">一：基本信息</span>-->
            <!--<div style="background-color: #295481;width: 1040px;height: 250px;top:100px;left:30px;position: absolute;">-->
              <!--<span style="color: white;left:30px;top:25px;position: absolute">风电场名称</span>-->
              <!--<span style="color: white;left:250px;top:25px;position: absolute">庆元双苗尖</span>-->
              <!--<span style="color: white;left:600px;top:25px;position: absolute">机组型号</span>-->
              <!--<span style="color: white;left:820px;top:30px;position: absolute">WD115-2000</span>-->
              <!--<span style="color: white;left:30px;top:95px;position: absolute">机组编号</span>-->
              <!--<span style="color: white;left:250px;top:95px;position: absolute">8#</span>-->
              <!--<span style="color: white;left:600px;top:95px;position: absolute">停机时间</span>-->
              <!--<span style="color: white;left:820px;top:95px;position: absolute">2019-08-19 23:17:15</span>-->
              <!--<span style="color: white;left:30px;top:180px;position: absolute">停机代码	</span>-->
              <!--<span style="color: white;left:250px;top:180px;position: absolute">5461 [故障]</span>-->
              <!--<span style="color: white;left:600px;top:180px;position: absolute">累计频次	</span>-->
              <!--<span style="color: white;left:820px;top:180px;position: absolute">25</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'ScreeningGuidelines',-->
  <!--data () {-->
    <!--return {-->
      <!--value1: [],-->
      <!--value2: '',-->
      <!--optionsone: [{-->
        <!--valueone: '选项1',-->
        <!--label: '舟山'-->
      <!--}, {-->
        <!--valueone: '选项2',-->
        <!--label: '东台'-->
      <!--}],-->
      <!--valueone: '',-->
      <!--tableData: [{-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}, {-->
        <!--pcdx: '雷电',-->
        <!--tjyy: '雷电干扰引起的',-->
        <!--cxpl: '16.42%',-->
        <!--pcff: '确认现场是否有雷击情况，对机组供电回路进行检查。'-->
      <!--}]-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--getRowClass ({ row, column, rowIndex, columnIndex }) {-->
      <!--return 'background:#3f5c6d2c;color:white;'-->
    <!--},-->
    <!--handleBack () {-->
      <!--this.$router.replace('/report')-->
    <!--}-->
  <!--}-->

<!--}-->
<!--</script>-->

<!--<style>-->
  <!--.el-table__body tr.current-row>td{-->
    <!--background-color: white !important;-->
    <!--color: black;-->
  <!--}-->
  <!--.el-table&#45;&#45;enable-row-hover .el-table__body tr:hover>td {-->
    <!--background-color: white;-->
    <!--color: black;-->
  <!--}-->
  <!--.el-table, .el-table__expanded-cell {    background-color: transparent;-->
  <!--}el-table th, .el-table tr {    background-color: transparent;-->
   <!--}-->
<!--</style>-->
<template>
  <div class="FanDiagnosisReport" style="position: absolute;top: 170px;left:70px">
    <div class="main">
      <div class="text">
        <h3>故障诊断分析报告</h3>
        <span @click="handleBack" class="back">返回上一页</span>
      </div>

      <hr />
      <h5 class="p00">一、基本信息</h5>
      <table width="100%" height="80px"  style="text-align: center;">
        <tr class="one">
          <td width="15%">风电场名称</td>
          <td  width="35%" >金塘风电场 </td>
          <td width="15%">机组型号</td>
          <td  width="35%" >WD82-1500T</td>
        </tr>
        <tr>
          <td>机组编号</td>
          <td >1# </td>
          <td >故障时间</td>
          <td >2019-7-11 11:11:11</td>

        </tr>
        <tr class="mmm">
          <td>首发状态代码</td>
          <td >5922 </td>
          <td >累计次数</td>
          <td >693</td>
        </tr>

      </table>

      <h5 class="p00">二、排查指导</h5>
      <p>通过查看HMI界面，对风速状态进行查看，确认是否小风。</p>
      <h5  class="p00">三、诊断结果</h5>

      <table width="100%" height="80px"  style="text-align: center;">
        <tr class="one">
          <td width="15%">故障点</td>
          <td  width="85%" >风况 </td>

        </tr>
        <tr>
          <td>故障原因</td>
          <td >风速过小导致机组转速过低 </td>

        </tr>
        <tr class="mmm">
          <td>诊断数据</td>
          <td >e1:3:264151158416 </td>

        </tr>

      </table>
      <h5  class="p00" >四、处理结果</h5>

      <table width="100%"  style="text-align: center;">
        <tr>
          <td>停机原因</td>
          <td >1.2人为手动触发 6.08% </td>
        </tr>
        <tr class="mmm">
          <td>处理方案</td>
          <td >询问停机人，是否可以复位机组运行。 </td>
        </tr>
        <tr class="mmm">
          <td>特殊工具</td>
          <td >万用表，小一字，试电笔</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FanDiagnosisReport',
    methods:{
      handleBack () {
        this.$router.replace('/homePage/realTimeDiagnosis')
      }
    }
  }
</script>

<style scoped>
  .FanDiagnosisReport{
    position: relative;
    margin-left: 6%;
    margin-top: 0%;
    text-align: center;
    width: 80%;
    height: 80%;
    color: white;
  }
  a{

    text-decoration:none;
    position: absolute;
    right: 3%;
    top: 30%;
  }
  .text{
    position: relative;
    width: 94%;
    height: 37px;
    left: 3%;
    background-color: #306297;
    /*border-radius: 10px 10px 10px 10px;*/
  }
  .back{
    position: absolute;
    top: 20%;
    left: 90%;
  }
  .text img{
    position: absolute;
    left: 2%;
    height: 37px;
    width: 37px;
  }
  .text h3{

    position: absolute;
    top: -40%;
    left: 40%;
  }
  .text h5{

    position: absolute;
    top: -30%;
    left: 7%;
  }
  .main{
    position: relative;
    height: 550px;
    width: 94%;

    margin-left: 3%;
    background-color: #306297;
  }
  .p00{
    background-color: #0e7abf;
  }
  tr{border:1px solid white;}

  td{

    border:1px solid white;}
  table{

    border-collapse:collapse;

    border:1px solid white;}

</style>
