import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Customers from './components/Customers.vue';
import About from './components/About.vue';
import AddCustomer from './components/AddCustomer.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.use(VueRouter);
Vue.use(vueResource);

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Customers
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/add-customer',
            component: AddCustomer
        }
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
