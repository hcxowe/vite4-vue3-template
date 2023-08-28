<template>
    <div class="header">{{ userInfo.username }} - {{ role }} - {{ currentUserId }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../store/user.ts'

const userStore = useUserStore()
const { userInfo, role, currentUserId } = storeToRefs(userStore)

userStore.login('hcx', '123456')
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    border-bottom: 1px solid var(--el-border-color)
}
</style>