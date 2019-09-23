<template>
  <div>
   <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>

       <!-- 角色列表区域 -->
      <el-table :data="roleList" border stripe>
        <!-- 展开列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row class="flex_center" :class="['bdbottom', index1 == 0 ? 'bdtop' : '']" v-for="(item1, index1) in scope.row.children" :key="item1.id">
              <el-col :span="6">
                <el-tag closable @close='removeRightById(scope.row, item1.id)'>{{item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="18">
                <el-row  class="flex_center" :class="[index2 == 0 ? '' : 'bdtop' ]" v-for="(item2, index2) in item1.children" :key="item2.id">
                  <el-col :span="8">
                    <el-tag type="success" closable @close='removeRightById(scope.row, item2.id)'>{{item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="16">
                    <el-tag type="warning" v-for="item3 in item2.children" :key="item3.id"  closable @close='removeRightById(scope.row, item3.id)'>{{item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>

        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="290px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <!-- 分配角色按钮 -->
            <el-button type="warning" icon="el-icon-setting" size="mini" @click="showSetRightDiakog(scope.row)">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 权限分配对话框 -->
    <el-dialog title="提示" :visible.sync="setRightDialogVisible" width="50%" @close="aetRightDialogClosed"> 
      <!-- 树形控件 -->
      <el-tree ref="treeRef" :data="rightsList" :props="treeProps" show-checkbox node-key="id" default-expand-all :default-checked-keys="defKeys"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 所有角色列表数据
      roleList: [],
      // 控制分配权限对话框的显示和隐藏
      setRightDialogVisible: false,
      // 所有权限的数据
      rightsList: [],
      // 配置树形控件
      treeProps: {
        children: 'children',
        label: 'authName'
      },
      // 默认节点的ID
      defKeys: [],
      // 即将分配权限的ID
      roleId: ''
    };
  },
  created() {
    this.getRolesList()
  },
  methods:{
    // 获取所有角色列表数据
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      if(res.meta.status !=200 ) return this.$message.error(res.meta.msg)
      this.roleList = res.data
      // console.log(this.roleList);
    },
    // 根据id弹框确认删除权限数据
    async removeRightById(role, rightid) {
      const confirmResult = await this.$confirm('此操作将永久删除该权限, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(confirmResult != 'confirm') return this.$message.info('已取消删除')
      const { data: res } = await this.$http.delete(`roles/${role.id}/rights/${rightid}`)
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.$message.success(res.meta.msg)
      role.children = res.data
    },
    //  展示分配权限对话框
    async showSetRightDiakog(role) {
      this.roleId = role.id
      // 获取所有权限数据
      const { data: res } = await this.$http.get('rights/tree')
      if(res.meta.status !=200) return this.$message.error(res.meta.msg)
      this.rightsList = res.data
      // 递归获取三级节点的 ID
      this.getLeafKeys(role, this.defKeys)
    
      this.setRightDialogVisible = true
    },
    // 通过递归的形式获取角色下所有的三级权限的id 保存到 defKeys 数组中
    getLeafKeys(node, arr) {
      // 如果当前node节点不包括children属性 则是三级节点
      if(!node.children) {
        return arr.push(node.id)
      }
      // 如果包括children属性就遍历children下的子属性并重新调用递归
      node.children.forEach(item => 
        this.getLeafKeys(item, arr)
      )
    },
    // 监听分配权限对话框的关闭事件
    aetRightDialogClosed() {
      this.defKeys = []
    },
    async allotRights() {
      var keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ]
      keys = keys.join(',')
      const { data: res } = await this.$http.post(`roles/${this.roleId}/rights`,{ rids: keys })
      if(res.meta.status !=200) return this.$message.error(res.meta.msg)
      this.$message.success(res.meta.msg)
      this.getRolesList()
      this.setRightDialogVisible = false

    }
  }
  
}
</script>
<style lang='less' scoped>
  .el-tag {
    margin: 7px 7px 7px 0;
  }

  .bdtop {
    border-top: 1px solid #f00
  }

  .bdbottom {
    border-bottom: 1px solid #f00
  }
  
  .flex_center {
    display: flex;
    align-items: center;
  }
</style>