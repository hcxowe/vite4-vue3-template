<template>
    <div style="height: 100%;overflow: auto;">
        <canvas ref="canvas" style="box-sizing: border-box; border: 1px solid #ccc; width: 100%; heigth: 400px;"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
    // 获取 WebGL 的绘图上下文（传入的参数是 WebGL
    const gl = canvas.value.getContext('webgl')

    // 使用完全不透明的黑色清除所有图像
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    // 用上面指定的颜色清除缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT)
})
</script>