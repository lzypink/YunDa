import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect; 'login'},
    { path: '/login', components: Login },
    { path: '/home' ,
      components: Home,
      redirect: '/welcome',

    }
  ]
})
