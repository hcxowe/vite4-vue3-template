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
                },
                {
                    path: 'composables',
                    name: 'VueComposables',
                    component: () => import('../views/vue/composables/Composables.vue')
                },
                {
                    path: 'directive',
                    name: 'VueDirective',
                    component: () => import('../views/vue/directive/Directive.vue')
                }
            ]
        },
        {
            path: '/tools',
            name: 'Tools',
            component: MainLayout,
            children: [
                {
                    path: 'dayjs',
                    name: 'Day',
                    component: () => import('../views/tools/dayjs/Day.vue')
                },
                {
                    path: 'lodash',
                    name: 'Lodash',
                    component: () => import('../views/tools/lodash/Lodash.vue')
                },
                {
                    path: 'vueuse',
                    name: 'Vueuse',
                    component: () => import('../views/tools/vueuse/Vueuse.vue')
                }
            ]
        },
        {
            path: '/webgl',
            name: 'WebGL',
            component: MainLayout,
            children: [
                {
                    path: 'one',
                    name: 'One',
                    component: () => import('../views/webGL/One.vue')
                },
            ]
        },
        {
            path: '/css',
            name: 'CSS',
            component: MainLayout,
            children: [
                {
                    path: 'grid',
                    name: 'Grid',
                    component: () => import('../views/css/grid/Grid.vue')
                },
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