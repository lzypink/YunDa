<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row class="bdbotton">
        <el-col>
          <el-button type="primary" @click="showAddCateDialog">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 表格 -->
      <tree-table :data='catalist' :columns='columns' :selection-type="false" :expand-type="false" show-index index-text="#" border :show-row-hover="false">
        <template slot="isok" slot-scope="scope">
          <i class='el-icon-success' v-if="scope.row.cat_deleted == false" style="color: lightgreen"></i>
          <i class='el-icon-error' v-else style="color: red"></i>
        </template>

        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level == 0">一级</el-tag>
          <el-tag size="mini" type="success" v-else-if="scope.row.cat_level == 1">二级</el-tag>
          <el-tag size="mini" type="warning" v-else-if="scope.row.cat_level == 2">三级</el-tag>
        </template>

         <template slot="opt" slot-scope="scope">
           <el-button type="primary" icon="el-icon-edit" size="mini" @click="showAddDialog(scope.row.cat_id)">编辑</el-button>
           <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.cat_id)">删除</el-button>
        </template>
      </tree-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>

    <!-- 添加分类的对话框 -->
    <el-dialog title="添加分类" :visible.sync="addCategoryVisible" width="50%" @close="resetAddForm">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
          <!-- 级联选择框 -->
          <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="selectedProps"
            @change="parentChange"
            clearable>
          </el-cascader>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addCategoryVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCategory">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑分类对话框 -->
    <el-dialog title="修改分类" :visible.sync="aditDialogVisible" width="50%">
      <el-form :model="aditForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="aditForm.cat_name"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="aditDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="amendAdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { type } from 'os'
export default {
  created () {
    this.getCateList()
  },
  data () {
    return {
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      catalist: [],
      total: 0,
      // 配置每一列的表格
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
          minWidth: '150px'
        },
        {
          label: '是否有效',
          type: 'template',
          template: 'isok'
        },
        {
          label: '排序',
          type: 'template',
          template: 'order'
        },
        {
          label: '操作',
          type: 'template',
          template: 'opt',
          minWidth: '200px'
        }
      ],
      // 默认隐藏添加分类对话框
      addCategoryVisible: false,
      addForm: {
        cat_pid: 0,
        cat_name: '',
        cat_level: 0
      },
      // 分类名称的验证规则
      addFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      // 父级分类的数据
      parentCateList: [],
      // 选中的值的 Id 数组
      selectedKeys: [],
      // 配置级联选择器
      selectedProps: {
        expandTrigger: 'hover',
        label: 'cat_name',
        value: 'cat_id',
        children: 'children',
        checkStrictly: true
      },
      // 通过 ID 查询到的信息
      aditForm: {},
      aditDialogVisible: false
    }
  },
  methods: {
    // 获取分类列表数据
    async getCateList () {
      const { data: res } = await this.$http.get('categories', { params: this.queryInfo })
      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.catalist = res.data.result
      this.total = res.data.total
    },
    // 监听每页显示几条事件
    handleSizeChange (pagesize) {
      this.queryInfo.pagesize = pagesize
      this.getCateList()
    },
    // 监听页码值改变事件
    handleCurrentChange (pagenum) {
      this.queryInfo.pagenum = pagenum
      this.getCateList()
    },
    // 展开添加用户对话框并调用函数获取父级分类数据
    showAddCateDialog () {
      this.geParentCateList()
      this.addCategoryVisible = true
    },
    // 获取父级分类数据
    async geParentCateList () {
      const { data: res } = await this.$http.get('categories', { params: { type: 2 } })
      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.parentCateList = res.data
      console.log(this.parentCateList)
    },
    // 选中的值时 触发的函数
    parentChange () {
      if (this.selectedKeys.length == 0) {
        this.addForm.cat_pid = 0
        this.addForm.cat_level = 0
      } else {
        this.addForm.cat_pid = this.selectedKeys[this.selectedKeys.length - 1]
        this.addForm.cat_level = this.selectedKeys.length
      }
    },
    // 添加分类
    addCategory () {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return

        const { data: res } = await this.$http.post('categories', this.addForm)
        if (res.meta.status != 201) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        this.addCategoryVisible = false
        this.getCateList()
      })
    },
    // 监听添加分类对话框的关闭事件
    resetAddForm () {
      this.$refs.addFormRef.resetFields()
      this.selectedKeys = []
      this.addForm.cat_pid = 0
      this.addForm.cat_level = 0
    },
    // 根据id 获取分类
    async showAddDialog (id) {
      const { data: res } = await this.$http.get('categories/' + id)
      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.aditForm = res.data

      this.aditDialogVisible = true
    },
    // 修改用户并提交
    async amendAdit () {
      const { data: res } = await this.$http.put('categories/' + this.aditForm.cat_id, {
        cat_name: this.aditForm.cat_name
      })

      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.$message.success(res.meta.msg)
      this.aditDialogVisible = false
      this.getCateList()
    },
    // 根据id删除分类
    async removeUserById (id) {
      // 弹窗询问是否删除
      const confirmResuIt = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResuIt != 'confirm') return this.$message.info('已取消删除')

      const { data: res } = await this.$http.delete('categories/' + id)
      if (res.meta.status != 200) return this.$message(res.meta.msg)
      this.$message.success(res.meta.msg)
      this.getCateList()
    }
  }
}

</script>

<style lang='less' scoped>
  .bdbotton {
    margin-bottom: 15px
  }

  .el-cascader {
    width: 100%;
  }
</style>
