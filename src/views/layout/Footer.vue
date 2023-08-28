<template>
    <div class="footer">{{ timeStr }} - {{ timefromUsevueStr }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { useNow, useDateFormat } from '@vueuse/core'

const timeStr: string = ref('')
const timefromUsevueStr = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

setInterval(() => {
    timeStr.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)
</script>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    border-top: 1px solid var(--el-border-color)
}
</style>