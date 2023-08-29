<template>
    <div>{{ `x: ${x}, y: ${y}` }}</div>

    <div>
        <el-button type="primary" @click="onLoginApiClick">登陆接口测试</el-button>
        <el-button type="primary" @click="onNotFoundApiClick">不存在接口测试</el-button>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useMouse } from '@vueuse/core'

import { login, notfound } from '../../api/userApi.ts'

const { x, y} = useMouse()

const onLoginApiClick = async () => {
    const ret = await login('username', 'password')

    if (ret.code != 0) {
        return
    }

    ElMessage({
        message: '登陆接口调用成功',
        type: 'success',
    })
}

const onNotFoundApiClick = async () => {
    const ret = await notfound()

    if (ret.code != 0) {
        return
    }

    ElMessage({
        message: '登陆接口调用成功',
        type: 'success',
    })
}
</script>