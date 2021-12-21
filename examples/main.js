import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import fox from '../packages'
// 注册组件库
Vue.use(fox)
// import './assets/iconFont/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
