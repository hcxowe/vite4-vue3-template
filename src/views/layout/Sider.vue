<template>
    <div class="sider">
        <el-menu
            router
            class="el-menu-vertical"
        >
            <el-menu-item index="/home">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>

            <el-sub-menu>
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>VUE3</span>
                </template>
                <el-menu-item index="/vue/base">基础</el-menu-item>
                <el-menu-item index="/vue/component">组件</el-menu-item>
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
} from '@element-plus/icons-vue'
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