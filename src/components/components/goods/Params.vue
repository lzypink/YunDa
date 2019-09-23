<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 警告区域 -->
      <el-alert :closable="false" show-icon title="注意：只允许为第三级分类设置相关参数！" type="warning"></el-alert>
      
      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类：</span>
          <!-- 级联选择框 -->
          <el-cascader
            clearable
            v-model="selectedCateKeys"
            :options="catelist"
            :props="catProps"
            @change="parentChange">
          </el-cascader>
        </el-col>
      </el-row>
      
      <!-- 标签页区域 -->
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <!-- 动态参数区域 -->
        <el-tab-pane label="动态参数" name="many">
          <el-button type="primary" size="mini" :disabled="selectedCateKeys.length == 3 ? false : true" @click="addDialogVisible = true">添加参数</el-button>
          <el-table :data="manyTableData" border stripe>
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag v-for="(item, index) in scope.row.attr_vals" :key="index" closable @close='handleClose(index, scope.row)'>{{item}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)">
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row)">+ New Tag</el-button>

              </template>
            </el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="姓名"></el-table-column>
            <el-table-column  label="操作" >
              <template slot-scope="scope">
                <!-- 修改按钮 -->
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.attr_id)">编辑</el-button>
                <!-- 删除按钮 -->
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams (scope.row.attr_id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 静态属性区域 -->
        <el-tab-pane label="静态属性" name="only">
          <el-button type="primary" size="mini" :disabled="selectedCateKeys.length == 3 ? false : true" @click="addDialogVisible = true">添加属性</el-button>
          <el-table :data="onlyTableData" border stripe>
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag v-for="(item, index) in scope.row.attr_vals" :key="index" closable @close='handleClose(index, scope.row)'>{{item}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)">
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row)">+ New Tag</el-button>

              </template>
            </el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="姓名"></el-table-column>
            <el-table-column  label="操作" >
              <template slot-scope="scope">
                <!-- 修改按钮 -->
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.attr_id)">编辑</el-button>
                <!-- 删除按钮 -->
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams(scope.row.attr_id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

     <!-- 添加参数对话框 -->
    <el-dialog :title=" '添加' + titleText" :visible.sync="addDialogVisible" width="50%" @close="resetAddForm">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
    
    <!-- 修改参数对话框 -->
    <el-dialog :title=" '修改' + titleText" :visible.sync="editDialogVisible" width="50%" @close="resetEditForm">
      <el-form :model="editForm" :rules="addFormRules" ref="editFormRef" label-width="80px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="editForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  created() {
    this.getCateList()
  },
  data () {
    return {
      // 商品分类所有数据
      catelist: [],
      // 配置级联选择框
      catProps: {
        expandTrigger: "hover",
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      },
      // 级联选择框的双向绑定数组
      selectedCateKeys: [],
      // 被激活页签的名称
      activeName: 'many',
      // 动态参数数据
      manyTableData: [],
      // 静态属性数据
      onlyTableData: [],
      // 默认隐藏添加属性对话框
      addDialogVisible: false,
      // 动态绑定添加属性的值
      addForm: {
        attr_name: ''
      },
      // 添加属性的验证规则
      addFormRules: {
        attr_name: [
         { required: true, message: '请输入参数名称', trigger: 'blur' },
        ]
      },
      // 默认隐藏修改属性对话框
      editDialogVisible: false,
      // 动态绑定修改属性的值
      editForm: {
        attr_name: '',
        attr_id: 0,
      },
    };
  },
  methods:{
    // 获取参数列表
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.catelist = res.data
    },
    // 级联选择器变化会触发的事件
    parentChange() {
      this.getParmsData()
    },
    // tab 页签点击事件的处理函数
    handleTabClick() {
      // console.log(this.activeName)
      this.getParmsData()
    },
    // 获取第三级的参数或属性
    async getParmsData() {
       if(this.selectedCateKeys.length != 3) {
        this.selectedCateKeys = []
        this.manyTableData = []
        this.onlyTableData = []
        return
      }
      const { data: res } = await this.$http.get(`categories/${this.catId}/attributes`, { params: { sel: this.activeName}})
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      console.log(res.data)
      // 处理获取到的值
      for(var i = 0; i < res.data.length; i++) {
        res.data[i].attr_vals = res.data[i].attr_vals ? res.data[i].attr_vals.split(' ') : []
        // 控制文本输入框的显示隐藏
        res.data[i].inputVisible = false
        // 双向数据绑定文本框
        res.data[i].inputValue = ''
      }
      // 判断是动态属性还是静态参数 并给其赋值
      if(this.activeName == 'many') {
        this.manyTableData = res.data
      } else {
        this.onlyTableData = res.data
      }
    },
    // 监听添加参数对话框的关闭事件
    resetAddForm() {
      this.$refs.addFormRef.resetFields()
    },
    // 添加属性
    addParams() {
      this.$refs.addFormRef.validate(async valid => {
        if(!valid) return
        const { data: res } = await this.$http.post(`categories/${this.catId}/attributes`,{
          attr_name: this.addForm.attr_name,
          attr_sel: this.activeName
        })
        if(res.meta.status != 201) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        this.getParmsData()
        this.addDialogVisible = false
      })
    },
    // 点击显示修改参数对话框并通过ID获取属性
    async showEditDialog(attr_id) {
      this.editForm.attr_id = attr_id
      const { data: res } = await this.$http.get(`categories/${this.catId}/attributes/${attr_id}`,{ params: { attr_sel: this.activeName}})
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.editForm.attr_name = res.data.attr_name

      this.editDialogVisible = true
    },
    // 监听修改参数对话框的关闭事件
    resetEditForm() {
      this.$refs.editFormRef.resetFields()
    },
    // 修改属性
    editParams() {
      this.$refs.editFormRef.validate(async valid => {
        if(!valid) return
        const { data: res } = await this.$http.put(`categories/${this.catId}/attributes/${this.editForm.attr_id}`,{
          attr_name: this.editForm.attr_name,
          attr_sel: this.activeName
        })
        if(res.meta.status != 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        this.getParmsData()
        this.editDialogVisible = false
      })
    },
    // 通过 Id 删除属性
    async removeParams(attr_id) {
      const confirmResuIt = await this.$confirm('此操作将永久删除该属性, 是否继续?', '提示', 
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if(confirmResuIt != 'confirm') return this.$message.info('已取消删除')
      
      const { data: res } = await this.$http.delete(`categories/${this.catId}/attributes/${attr_id}`)
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.$message.success(res.meta.msg)
      this.getParmsData()
    },
    // 文本框失去焦点的时候触发
    async handleInputConfirm(row) {
      if(row.inputValue.trim().length == 0) {
        row.inputValue = ''
        row.inputVisible = false
      } else {
      // 添加可选项
      row.attr_vals.push(row.inputValue.trim())
      row.inputValue = ''
      row.inputVisible = false

      this.saveAttrVals(row)
      }
    },
    // 将对 attr_vals 的操作 更新都数据库
    async saveAttrVals(row) {
      const { data: res } = await this.$http.put(`categories/${this.catId}/attributes/${row.attr_id}`,{
        attr_name: row.attr_name,
        attr_sel: row.attr_sel,
        attr_vals: row.attr_vals.join(' ')
      })
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.$message.success(res.meta.msg)
    },
    // 删除可选项
    async handleClose(index, row) {
      row.attr_vals.splice(index, 1)
      
      this.saveAttrVals(row)
    },
    // 点击按钮，展示文本输入框
    showInput(row) {
      row.inputVisible = true
      // 让文本框自动获取焦点， $nextTick 就是当页面上的元素重新渲染之后才会触发回调函数中的代码
      this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
    },  
  },
  // 计算属性
  computed: {
    // 获取第三级分类的ID
    catId:function() {
      return this.selectedCateKeys[this.selectedCateKeys.length - 1]
    },
    titleText:function() {
      if(this.activeName == 'many') {
        return '动态参数'
      } else {
        return '静态属性'
      }
    }
  }
}
</script>
<style lang='less' scoped>
  .cat_opt {
    margin: 15px 0;
  }

  .el-tag {
    margin: 5px 10px 5px 0;
  }

  .input-new-tag {
    width: 100px;
  }
</style>