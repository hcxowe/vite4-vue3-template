import { createRouter, createWebHashHistory } from 'vue-router'

import MainLayout from '../views/layout/MainLayout.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('../views/home/Home.vue')
                }
            ]
        },
        {
            path: '/vue',
            name: 'Vue',
            component: MainLayout,
            children: [
                {
                    path: 'base',
                    name: 'VueBase',
                    component: () => import('../views/vue/base/Base.vue')
                },
                {
                    path: 'component',
                    name: 'VueComponent',
                    component: () => import('../views/vue/component/Component.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)',
            name: 'notFound',
            component: () => import('../views/404/404.vue'),
            meta: {
                hidden: true
            }
        }
    ]
})

export default router