<template>
    <div>当前时间：{{ timeStr }}</div>
    <div>当前是本年的第{{ curDate.month() + 1 }}月，本年的第{{ curDate.week() }}周，本年的第{{ curDate.dayOfYear() }}天，本月的第{{ curDate.date() }}天，本周的第{{ curDate.day() }}天</div>

    <div>停留时间{{ fromNowStr }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const timeStr = ref('')
const fromNowStr = ref('')

// 赋值
const curDate = dayjs()
const lastDate = dayjs('2022-02-02 19:19:19', 'YYYY-MM-DD HH:mm:ss')
const timeDate = dayjs(1318781876406)

setInterval(() => {
    timeStr.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
    fromNowStr.value = curDate.fromNow()
}, 1000)
</script>