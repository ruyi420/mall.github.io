//引入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出
import Index from '@/views/static/index.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
//白名单
const whiteList = [
    "/",
    "/login"
]
import { useUserStore } from '../store/user'

import home from "@/views/admin/sms-home/home.vue"
import advertise from "@/views/admin/sms-home/advertise.vue"
import brand from "@/views/admin/sms-home/brand.vue"
import newProduct from "@/views/admin/sms-home/newProduct.vue"
import recommendProduct from "@/views/admin/sms-home/recommedProduct.vue"
import recommendSubject from "@/views/admin/sms-home/recommendSubject.vue"
import first from "@/views/admin/sms-home/first.vue"

import hello from "@/views/static/hello.vue"
//路由表
const routes = [
    {
        path: '/',//访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf 
        name: 'home', //命名路由
        component: Index,   //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
    },
    {
        path: '/first',
        name: 'first',
        component: first
    },
    {
        path: '/hello',
        name: 'hello',
        component: hello,
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        children: [
            { path: 'advertise', name: 'advertise', component: advertise },
            { path: 'brand', name: 'brand', component: brand },
            { path: 'newProduct', name: 'newProduct', component: newProduct },
            { path: 'recommendProduct', name: 'recommendProduct', component: recommendProduct },
            { path: 'recommendSubject', name: 'recommendSubject', component: recommendSubject },
            // { path: 'first', name: 'first', component: first },
        ]

    },
    {
        path: '/login',
        name:'login',
        component: () => import('../views/static/login.vue')// 懒加载  

    },


]
const router = createRouter({
    //模式
    history: createWebHashHistory(),
    routes
})
//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (whiteList.includes(to.path)) {
        next();
    }
    else {
        next()
        // if (userStore.token && userStore.token.length > 0) {
        //     next()
        // }
        // else {
        //     next({ name: "login" })
        // }

    }


})
export default router;