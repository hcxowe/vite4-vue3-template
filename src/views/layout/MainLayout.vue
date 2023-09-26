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
                        <Transition name="fade">
                            <component :is="Component" :key="route.meta.path || route.path" />
                        </Transition>
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

    position: relative;
}

:deep(.el-container) {
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>