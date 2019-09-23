import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
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
      component: resolve => require(['./components/Login.vue'], resolve)
    },
    {
      path: '/Helloworld',
      name: 'Helloworld',
      component: resolve => require(['./components/HelloWorld.vue'], resolve)
    }
  ]
})

// const router = new Router({
//   routes: [
//     { path: '/', redirect: 'login' },
//     { path: '/login', component: Login }
//   ]
// })
