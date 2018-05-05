import Vue from 'vue'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// global css
import '@/styles/index.scss' 

import App from './App'
import router from './router'
import store from './store'

// icon
import '@/icons'

// permission control
import '@/permission'

// swagger
import swaggerUi from 'swagger-ui'

Vue.component('swaggerUi', swaggerUi)

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
