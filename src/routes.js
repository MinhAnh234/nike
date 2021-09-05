import Vue from 'vue'
import VueRouter from 'vue-router'
import LeftMain from './components/LeftMain'
import Products from './components/Products'
import Title from './components/Title'
import TitleActive from './components/TitleActive'
import DetailOfProduct from './components/DetailOfProduct'
import ViewCart from './components/ViewCart'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/',components: {
            default: Products,
            title: Title,
            left_main: LeftMain,
            title_active: TitleActive,
        },name:'home'},
        { path: '/DetailOfProduct/:id', component: DetailOfProduct },
        { path: '/viewCart', component: ViewCart },
        { path: '/DetailOfProduct/:id/:idDetail', component: DetailOfProduct },
    ]
})