<template>
  <div class="manualAnalysis" style="position: absolute;top:205px;left: 130px;text-align: center;width: 80%;height: 80%">

    <div style="background-color: #2d516d;height: 450px;width: 1000px;left: 120px;position: absolute;top:-30px">
    </div>
    <div style="background-color: #40739b;height: 400px;width: 900px;left: 170px;position: absolute;top:-7px">
    </div>
    <span style="position: absolute;color: white;font-size: 20px;left:550px;top:10px">离线故障分析</span>
    <span style="position: absolute;color: white;font-size: 40px;left:4px;top:-80px;">|</span>
    <span style="position: absolute;color: white;font-size: 20px;left:25px;top:-70px;">离线故障</span>
    <div id="odin" style="position: absolute;top: 8%;left: 30%">
      <select v-for="(arrItem,key) in selectList" v-model="selectArr[key]" @focus="position=key" @change="selected" :key="key" style="margin:10px;padding:10px">
        <option v-for="item in arrItem" :value="item.value" :key="item.value">{{item.label}}</option>
      </select>
    </div>
    <img src="../assets/img/upload.png" style="position: absolute;left: 240px;top: 9%;width:50px"/>
    <el-input style="width: 130px;position:absolute;top:59px;left:700px"></el-input>
    <el-button type="primary" style="position: absolute;top: 10%;left:70%">立即诊断</el-button>
    <div id="one" style=" background-color: white;
    border: 1px red solid;
    height: 50px;
    width: 60%;
    position: absolute;
    top: 30%;
    left: 20%;
    color: red;">
      <h5 style="position: absolute;
    left: 5%;
    top: -10%;">请上传格式为.csv、.bin的log出发记录日志文件</h5>
      <el-upload style="position: absolute;top:100px; left:100px;width: 150px"
                 class="upload-demo"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :before-remove="beforeRemove"
                 multiple
                 :limit="3"
                 :on-exceed="handleExceed"
                 :file-list="fileList">
        <i class="el-icon-upload" style="color: blue;font-size: 40px;position: absolute;left: 550px;top:-95px"></i>
      </el-upload>
    </div>
    <div id="two" style=" background-color: white;
    border: 1px red solid;
    height: 50px;
    width: 60%;
    position: absolute;
    top: 50%;
    left: 20%;
    color: #000000;">
      <h5 style="position: absolute;
    left: 5%;
    top: -10%;">2016-07-11_dateils.csv</h5>
      <el-button type="text" @click="open"><i class="el-icon-delete" style="position: absolute;font-size: 40px;left: 650px;top: 5px"></i></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manualAnalysis',
  data () {
    return {
      position: null,
      selectArr: ['0'],
      selectList: [[{
        value: '0',
        label: '请选择风电场'
      },
        {
          value: '1',
          label: '运达风电场'
        },
      {
        value: '2',
        label: '华东院风电场'
      },
      // {
      //   value: '第1级-选项3',
      //   label: '第1级-选项3'
      // },
      // {
      //   value: '第1级-选项4',
      //   label: '第1级-选项4'
      // },
      // {
      //   value: '第1级-选项5',
      //   label: '第1级-选项5'
      // }
        ]] }
  },
  methods: {
    gotolinkmore: function () {
      this.$router.replace('/homePage/ImmediateDiagnosis')
    },
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // indexSelect (event) {
    //   this.A = event.target.value
    //   // console.log(this.A);
    // }
    // 模拟获取下一级选项（实际项目可通过接口获取或者根据实际情况自行修改）
    addSelectList (index) {
      return [{
        value: '第' + (index + 2) + '级-选项1',
        label: '第' + (index + 2) + '级-选项1'
      },
      {
        value: '第' + (index + 2) + '级-选项2',
        label: '第' + (index + 2) + '级-选项2'
      },
      {
        value: '第' + (index + 2) + '级-选项3',
        label: '第' + (index + 2) + '级-选项3'
      },
      {
        value: '第' + (index + 2) + '级-选项4',
        label: '第' + (index + 2) + '级-选项4'
      },
      {
        value: '第' + (index + 2) + '级-选项5',
        label: '第' + (index + 2) + '级-选项5'
      }]
    },
    selected (e) {
      // eslint-disable-next-line no-unused-vars
      var current = e.target.value// 获取选中值(实际项目可通过此值调接口获取下一级选项)
      var nextSelect = this.addSelectList(this.position) // 模拟获取下一级选项
      this.selectList.splice(this.position + 1, this.selectList.length, nextSelect)
      this.selectArr.splice(this.position + 1, this.selectArr.length)
    }
  }

}
</script>

<style scoped>

</style>
