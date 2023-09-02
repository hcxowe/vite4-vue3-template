<template>
    <div>基本组件：</div>
    
    <BaseComponent 
        title="this is simple component~~!" 
        @button-click="onButtonClick"
    >
        <div>父元素中定义的元素，传递给组件</div>
    </BaseComponent>

    <div>BaseCompoent 按钮点击次数：{{ count }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseComponent from './BaseComponent.vue'

const count = ref(0)
const onButtonClick = (value) => {
    count.value = value
}
</script>

<style scoped>

</style>