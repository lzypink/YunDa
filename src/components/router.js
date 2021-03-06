import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from '../page/Home.vue'
import Users from './components/user/Users.vue'
import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'
import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'
import Goods from './components/goods/Goods.vue'
import Add from './components/goods/Add.vue'
import Order from './components/order/Order.vue'
import Report from './components/report/Report.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        // { path: '/welcome', component: resolve => require(['../page/Welcome.vue'], resolve) },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: Goods },
        { path: '/goods/add', component: resolve => require(['./components/goods/Add.vue'], resolve), name: 'Add' },
        { path: '/orders', component: Order },
        { path: '/reports', component: Report }
      ]
    }
  ]
})

// 挂载路由导航守卫 to表示要访问的路径 from表示从哪个路径来 next是一个函数 可以放行或者强制跳转到某一个页面
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
