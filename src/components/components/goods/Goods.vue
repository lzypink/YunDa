<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/1241241241' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>

      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input v-model="queryInfo.query" placeholder="请输入内容" clearable @clear='getGoodsList()' @keyup.enter.native='getGoodsList()'>
            <el-button slot="append" icon="el-icon-search" @click="getGoodsList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="goGoodsAdd">添加用户</el-button>
        </el-col>
      </el-row>

      <el-table :data="goods">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" min-width="400px"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格" min-width="95px"></el-table-column>
        <el-table-column prop="goods_weight" label="商品重量" min-width="70px"></el-table-column>
        <el-table-column prop="add_time" label="创建时间" min-width="160px">
          <template slot-scope="scope">
            {{scope.row.add_time | dataformat}}
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="120px">
          <template slot-scope="scope">
             <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeGoods(scope.row.goods_id)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  created () {
    this.getGoodsList()
  },
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      goods: []
    }
  },
  methods: {
    // 获取商品列表数据
    async getGoodsList () {
      const { data: res } = await this.$http.get('goods', { params: this.queryInfo })
      if (res.meta.status != 200) return this.$message.error(res.meta.msg)
      // console.log(res.data);
      this.goods = res.data.goods
      this.total = res.data.total
    },
    // 监听每页显示几条事件
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodsList()
    },
    // 监听页码值改变事件
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getGoodsList()
    },
    // 删除商品
    removeGoods (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.delete(`goods/${id}`)
        if (res.meta.status != 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        this.getGoodsList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    goGoodsAdd () {
      this.$router.push('/faultRanking')
    }
  }
}
</script>
<style lang='less' scoped>

</style>
