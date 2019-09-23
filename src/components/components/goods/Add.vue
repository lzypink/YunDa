<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goods' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 提示文本 -->
      <el-alert title="消息提示的文案" type="info" center show-icon :closable='false'></el-alert>
      <!-- 步骤条 -->
      <el-steps :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- 标签页 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef">
        <el-tabs v-model="activeIndex" tab-position="left" :before-leave="beforeLeave" @tab-click='tabClicked'>
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model="addForm.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_number">
              <el-input v-model="addForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_weight">
              <el-input v-model="addForm.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
              <!-- 级联选择器 -->
              <el-cascader
                clearable
                v-model="addForm.goods_cat"
                :options="cateList"
                :props="cateProps"
                @change="handleChange">
              </el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <el-form-item v-for="item in manyTableData" :key="item.attr_id" :label="item.attr_name">
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox :label="item" v-for="(item, index) in item.attr_vals" :key="index" border></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">
            <el-form-item :label="item.attr_name" v-for="item in onlyTableData" :key="item.attr_id">
              <el-input v-model="item.attr_vals"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              action="http://127.0.0.1:8888/api/private/v1/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success='handleSuccess'
              list-type="picture"
              :headers="headersObj">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <quill-editor style="margin-bottom: 15px" v-model="addForm.goods_introduce"></quill-editor>
            <el-button type="primary" @click="add">添加表单</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    
    <!-- 图片预览对话框 -->
    <el-dialog
      title="图片预览"
      :visible.sync="perviewDialogVisible"
      width="50%">
      <img :src="perviewSrc">
    </el-dialog>
  </div>
</template>
<script>
import _ from 'lodash'
import { async } from 'q';

export default {
  created() {
    this.getCateList()
  },
  data () {
    return {
      // 步骤条的索引
      activeIndex: '0',
      // 商品的信息
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_number: 0,
        goods_weight: 0,
        // 商品所属的分类数组
        goods_cat: [],
        // 商品的图片数组
        pics: [],
        // 绑定富文本编辑器里的内容
        goods_introduce: '',
        // 商品的参数（数组），包含 动态参数 和 静态属性
        attrs: []
      },
      addFormRules: {
        goods_name: [
           { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        goods_price: [
           { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        goods_number: [
           { required: true, message: '请输入商品重量', trigger: 'blur' },
        ],
        goods_weight: [
           { required: true, message: '请输入商品数量', trigger: 'blur' },
        ]
      },
      // 分类数据列表
      cateList: [],
      // 配置级联选择器
      cateProps: {
        expandTrigger: 'hover',
        value:  'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态属性列表数据
      onlyTableData: [],
      // 设置图片上传组件的headers请求头的 token 值
      headersObj: {
        Authorization: window.sessionStorage.getItem('token')
      },
      perviewDialogVisible: false ,
      perviewSrc: ''
    };
  },
  methods:{
     // 获取的分类数据列表
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.cateList = res.data
    },
    // 级联选择器中的值变化，调用的函数
    handleChange() {
      console.log(this.addForm.goods_cat);
      if(this.addForm.goods_cat.length != 3) {
        this.addForm.goods_cat = []
        return
      }
    },
    // 判断用户是否选择了商品分类，如果没有选择，禁止跳转
    beforeLeave() {
      if(this.activeIndex == '0' && this.addForm.goods_cat.length != 3) {
        this.$message.error('请选择商品分类')
        return false
      }
    },
    // 根据id查询数据
    async tabClicked() {
      // 根据id查询三级分类动态参数列表数据
      if(this.activeIndex == '1') {
        const { data: res } = await this.$http.get(`categories/${this.catId}/attributes`, { params: { sel: 'many' }})
        if(res.meta.status != 200) return this.$message.error(res.meta.msg)
        // 将 attr_vale 字符串装换成数组
       res.data.forEach(item => {
          if(item.attr_vals == '') {
            item.attr_vals = []
          } else {
            item.attr_vals = item.attr_vals.split(' ')
          }
        })
        this.manyTableData = res.data
      // 根据id查询三级分类静态属性列表数据
      } else if(this.activeIndex == '2') {
        const { data: res } = await this.$http.get(`categories/${this.catId}/attributes`, { params: { sel: 'only' }})
        if(res.meta.status != 200) return this.$message.error(res.meta.msg)
        this.onlyTableData = res.data
      }
    },
    // 处理图片预览效果
    handlePreview(file) {
      this.perviewSrc = file.response.data.url
      this.perviewDialogVisible = true
    },
    // 处理图片删除功能
    handleRemove(file) {
       var tmp_path = file.response.data.tmp_path
       for(var i = 0; i < this.addForm.pics.length; i++) {    
         if(this.addForm.pics[i].pic == tmp_path){
           this.addForm.pics.splice(i, 1)
           break
         }
        
         
       }
    },
     // 处理图片成功的钩子函数
    handleSuccess(response) {
      var picObj = { pic: response.data.tmp_path}
      this.addForm.pics.push(picObj)
    },
    // 添加商品
    add() {
      this.$refs.addFormRef.validate(async valid => {
        if(!valid) return this.$message.error('请填写完整的数据')
        // 处理 goods_cat
        this.addForm.goods_cat = _.cloneDeep(this.addForm.goods_cat)
        this.addForm.goods_cat = this.addForm.goods_cat.join(',')
        // 处理动态参数
        this.manyTableData.forEach(item => {
          var newObj = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(',')
          }
          this.addForm.attrs.push(newObj)
        })
        // 处理静态属性
        this.onlyTableData.forEach(item => {
          var newObj = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals
          }
          this.addForm.attrs.push(newObj)
        })
        // 发送请求添加商品
        const { data: res } = await this.$http.post('goods', this.addForm)
        if(res.meta.status != 201) { 
          return this.$message.reeor(res.meta.msg)
        } else {
          this.$message.success(res.meta.msg)
          this.$router.push('/goods')
        }
      })
    }

  },
  computed: {
    // 获取三级分类的Id
    catId() {
      if(this.addForm.goods_cat.length == 3) {
        return this.addForm.goods_cat[2]
      }
    }
  }
}
</script>
<style lang='less' scoped>
  .el-steps {
    margin: 15px 0;
  }

</style>