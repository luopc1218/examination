import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//  Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//  some globe styles....
import './style/index.scss'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
