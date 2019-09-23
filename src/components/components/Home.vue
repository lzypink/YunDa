<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header class="el_header">
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px' " class="el_aside">
        <div class="toggle_button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu :collapse-transition="false" :collapse="isCollapse" background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened router :default-active='activePath'>
          <!-- 一级菜单 -->
          <el-submenu :key="item.id" :index="item.id + '' " v-for="item in menulist">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :key="subItem.id" :index=" '/' + subItem.path" v-for="subItem in item.children" @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
            </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main class="el_main">
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
   return {
     // 左侧菜单数据
     menulist: [],
     iconsObj: {
       '125': 'iconfont icon-user',
       '103': 'iconfont icon-tijikongjian',
       '101': 'iconfont icon-shangpin',
       '102': 'iconfont icon-danju',
       '145': 'iconfont icon-baobiao'
     },
     isCollapse: false,
     activePath: '',
    }
  },
  // 打开页面就加载所有菜单数据
  created() {
    this.getMenuList(),
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods:{
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login')
    },
    // 加载所有菜单数据
    async getMenuList() {
      const {data: res} = await this.$http.get('menus')
      if(res.meta.status != 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    },
    // 点击折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
<style lang='less' scoped>
  .home_container {
    height: 100%;
  }

  .el_header {
    display: flex;
    justify-content: space-between;
    background: #373d41;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }

  .el_aside {
    background: #333744;
    .el-menu {
      border-right: none;
    }
  }

  .el_main {
    background: #eaedf1;
  }

  .iconfont {
    margin-right: 8px;
  }

  .toggle_button {
    background: #4a5064;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    letter-spacing: 0.3em;
    cursor: pointer;
  }
</style>