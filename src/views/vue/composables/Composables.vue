<template>
<div ref="wrapper" style="position: absolute;">
    <div>组合式函数：</div>
    <br>

    <div>鼠标位置：x: {{ x }}, y: {{ y }}</div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMouse } from './mouse.ts'

const wrapper = ref(null)
const { x, y } = useMouse(wrapper)
</script>

<style scoped>

</style>