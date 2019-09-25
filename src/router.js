import Vue from 'vue'
import Router from 'vue-router'
import Login from './page/Login.vue'
// import Home from './components/ Home.vue'
// <<<<<<< Updated upstream
// import Helloworld from './components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['./page/Login.vue'], resolve)
    },
    {
      path: '/menu',
      name: 'menu',
      component: resolve => require(['./page/Menu.vue'], resolve),
      children: [
        {
          path: '/tongji',
          name: 'tongji',
          component: resolve => require(['./page/TongJi.vue'], resolve)
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['./page/Software.vue'], resolve)
        }, {
          path: '/Date',
          name: 'Date',
          component: resolve => require(['./page/Data.vue'], resolve)
        }, {
          path: '/realTime',
          name: 'realTime',
          component: resolve => require(['./page/realTimeDiagnosis.vue'], resolve)
        }, {
          path: '/manualAnalysis',
          name: 'manualAnalysis',
          component: resolve => require(['./page/manualAnalysis.vue'], resolve)
        }, {
          path: '/faultRanking',
          name: 'faultRanking',
          component: resolve => require(['./page/faultRanking.vue'], resolve)
        }, {
          path: '/report',
          name: 'report',
          component: resolve => require(['./page/report.vue'], resolve)
        }, {
          path: '/zdreport',
          name: 'zdreport',
          component: resolve => require(['./page/Zdreport.vue'], resolve)
        }, {
          path: '/faultTree',
          name: 'faultTree',
          component: resolve => require(['./page/faultTree.vue'], resolve)
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['./page/Home.vue'], resolve)
        }, {
          path: '/guide',
          name: 'guide',
          component: resolve => require(['./page/Guidelines.vue'], resolve)
        }
      ]
    }
  ]
})
// export default new Router({
//   routes: [
//     { path: '/', redirect; 'login' },
//     { path: '/login', components: Login },
//
//   ]
// })

// export default new Router({
//   routes: [
//     { path: '/', redirect: '/login' },
//     { path: '/login', component: Login },
//     { path: '/home', component: Home }]
// })

// const router = new Router({
//   routes: [
//     { path: '/', redirect: 'login' },
//     { path: '/login', component: Login }
//   ]
// })
