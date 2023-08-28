<template>
    <el-container class="height-fit">
        <el-header height="60px">
            <Header></Header>
        </el-header>

        <el-container>
            <el-aside width="250px">
                <Sider></Sider>
            </el-aside>

            <el-main>
                <router-view v-slot="{ Component, route }">
                    <keep-alive>
                        <component :is="Component" :key="route.meta.path || route.path" />
                    </keep-alive >
                </router-view>
            </el-main>
        </el-container>

        <el-footer height="30px">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Sider from './Sider.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
:deep(.el-main) {
    --el-main-padding: 10px;
}
</style>