import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
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
      component: resolve => require(['./components/Login.vue'], resolve)
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: resolve => require(['./components/components/Welcome.vue'], resolve)
    },
    {
      path: '/Home',
      name: 'Home',
      component: resolve => require(['./components/components/Home.vue'], resolve)
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
