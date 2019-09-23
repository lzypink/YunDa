import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入字体图标
import './assets/fonts/iconfont.css'
// 引入全局样式表
import './assets/css/global.css'

import TreeTable from "vue-table-with-tree-grid";

// 配置富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 挂载富文本编辑器
Vue.use(VueQuillEditor)

Vue.filter('dataformat', function(str) {
  var date = new Date(str * 1000)
  var y = date.getFullYear()
  var mm = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours() < 10 ? 0+date.getHours() : date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
  return `${y}-${mm}-${d} ${h}:${m}:${s}`
})

// 导入 Nprogress 的js和css文件
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截器 为每一个请求头对象 添加token值
axios.interceptors.request.use(config => {
  Nprogress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
//axios响应拦截器
axios.interceptors.response.use(function(config){
  Nprogress.done()
  return config;
},function(error){
  console.log(error)
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
