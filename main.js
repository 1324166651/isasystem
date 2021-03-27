import Vue from 'vue'
import App from './App'
import {getrequest} from './utils/request.js'
Vue.config.productionTip = false
Vue.prototype.$getrequest=getrequest
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
