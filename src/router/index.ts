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
                    component: () => import('../views/home/Home.vue'),
                    meta: {
                        permission: 'home',
                        title: '首页',
                        hidden: false,
                        path: '/home',
                        noCache: false,
                        affix: true
                    }
                }
            ]
        },
        /* {
            path: '/about',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'About',
                    component: () => import('../views/about/About.vue'),
                    meta: {
                        permission: 'about',
                        title: '关于',
                        hidden: false,
                        path: '/about',
                        noCache: false,
                        affix: false
                    }
                }
            ]
        },
        {
            path: '/system',
            name: 'System',
            component: MainLayout,
            meta: {
                permission: 'system',
                title: '系统管理',
                hidden: false,
                path: '/system'
            },
            children: [
                {
                    path: 'user',
                    name: 'User',
                    component: () => import('../views/system/userManage/User.vue'),
                    meta: {
                        permission: 'user',
                        title: '用户管理',
                        hidden: false,
                        path: '/system/user',
                        noCache: false,
                        affix: false
                    }
                },
                {
                    path: 'permission',
                    name: 'Permission',
                    component: () => import('../views/system/Permission.vue'),
                    meta: {
                        permission: 'permission',
                        title: '权限管理',
                        hidden: false,
                        path: '/system/permission',
                        noCache: true,
                        affix: false
                    }
                }
            ]
        }, */
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