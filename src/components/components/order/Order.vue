<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
     <!-- 搜索与添加区域 -->
      <el-row>
        <el-col :span="7">
          <el-input  placeholder="请输入内容" clearable> 
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <el-table :data="orderlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="订单编号" prop="order_number" min-width="195px"></el-table-column>
        <el-table-column label="订单价格" prop="order_price"></el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.scope == 1">已付款</el-tag>
            <el-tag type="danger" v-else>未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"></el-table-column>
        <el-table-column label="下单时间" prop="create_time" min-width="150px">
          <template slot-scope="scope">
            {{scope.row.create_time | dataformat}}
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="120px">
          <template>
            <!-- 按钮 -->
            <el-button type="success" icon="el-icon-edit" size="mini" @click="showAddOrder"></el-button>
            <!-- 按钮 -->
            <el-button type="warning" icon="el-icon-s-tools" size="mini" @click="showWuliu"></el-button>
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
 
     <!-- 修改地址对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%">
    
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>


    <el-dialog
      title="提示"
      :visible.sync="wuliuDialogVisible"
      width="50%">
      <!-- 时间线 -->
      <el-timeline reverse="true">
        <el-timeline-item
          v-for="(item, index) in progressInfo"
          :key="index"
          :timestamp="item.time">
          {{item.context}}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>


  </div>
</template>
<script>
import city from './citydata'
export default {
  created() {
    this.getOrderList()
  },
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 0,
      },
      total: 0,
      orderlist: [],
      dialogVisible: false,
      wuliuDialogVisible: false,
      city,
      progressInfo: []
    };
  },
  methods:{
    async getOrderList() {
      const { data: res } = await this.$http.get('orders', {params: this.queryInfo})
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.total = res.data.total
      this.orderlist = res.data.goods
    },
     // 监听每页显示几条事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrderList()
    },
    // 监听页码值改变事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrderList()
    },
    showAddOrder() {
      this.dialogVisible = true
    },
    async showWuliu() {
      const { data: res } = await this.$http.get('/kuaidi/804909574412544580')
      this.progressInfo = res.data

      this.wuliuDialogVisible = true
    },
  }
}
</script>
<style lang='less' scoped>
  
</style>