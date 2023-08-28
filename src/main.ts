import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // elementplus本地化
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn' // day.js 时间日期本地化

import './style/index.css'
import App from './App.vue'

import router from './router'

createApp(App).use(ElementPlus, {
    size: 'small',
    locale: zhCn
}).use(createPinia()).use(router).mount('#app')