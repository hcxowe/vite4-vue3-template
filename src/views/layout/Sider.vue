<template>
    <div class="sider">
        <el-menu
            router
            :default-active="route.path"
            :unique-opened="true"
            class="el-menu-vertical"
        >
            <el-menu-item index="/home">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>

            <el-sub-menu index="/vue">
                <template #title>
                    <el-icon><Burger /></el-icon>
                    <span>VUE3</span>
                </template>
                <el-menu-item index="/vue/base">
                    <template #title>
                        <el-icon><Watermelon /></el-icon>
                        <span>基础</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/vue/component">
                    <template #title>
                        <el-icon><Sugar /></el-icon>
                        <span>组件</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/vue/composables">
                    <template #title>
                        <el-icon><Apple /></el-icon>
                        <span>组合式函数</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/vue/directive">
                    <template #title>
                        <el-icon><ColdDrink /></el-icon>
                        <span>指令</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/tools">
                <template #title>
                    <el-icon><Umbrella /></el-icon>
                    <span>工具链</span>
                </template>
                <el-menu-item index="/tools/dayjs">
                    <template #title>
                        <el-icon><Fries /></el-icon>
                        <span>DayJS</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/tools/lodash">
                    <template #title>
                        <el-icon><Film /></el-icon>
                        <span>Lodash</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/tools/vueuse">
                    <template #title>
                        <el-icon><Notification /></el-icon>
                        <span>Vueuse</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/webgl">
                <template #title>
                    <el-icon><Location /></el-icon>
                    <span>WebGL</span>
                </template>
                <el-menu-item index="/webgl/one">
                    <template #title>
                        <el-icon><Goblet /></el-icon>
                        <span>one</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/css">
                <template #title>
                    <el-icon><KnifeFork /></el-icon>
                    <span>CSS</span>
                </template>
                <el-menu-item index="/css/grid">
                    <template #title>
                        <el-icon><Orange /></el-icon>
                        <span>网格布局</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Watermelon,
    Sugar,
    Apple,
    ColdDrink,
    Fries, Goblet, Umbrella,
    Film, Notification, Orange, KnifeFork, Burger
} from '@element-plus/icons-vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.sider {
    height: 100%;
    overflow: hidden;
    border-right: 1px solid var(--el-border-color)
}

.el-menu-vertical {
    border-right: none;
}
</style>