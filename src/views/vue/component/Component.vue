<template>
    <div>基本组件：</div>
    
    <BaseComponent 
        title="this is simple component~~!" 
        @button-click="onButtonClick"
    >
        <div>父元素中定义的元素，传递给组件</div>
    </BaseComponent>

    <div>BaseCompoent 按钮点击次数：{{ count }}</div>

    <hr>

    <div>详细组件：</div>
    <br>
    <div>props与emits</div>
    <DetailComponent 
        style="color: red;"
        v-model.uppercase="childModelValue" 
        :my-Msg="detailMsg" 
        @change-msg="onChangMsg"
    >
        <template #vmodel="{ count }">
            <div>具名作用域插槽 text inout count: {{ count }}</div>
            <br>
            <div>{{ childModelValue }}</div>
        </template>
    </DetailComponent>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import BaseComponent from './BaseComponent.vue'
import DetailComponent from './DetailComponent.vue'

const count = ref(0)
const onButtonClick = (value) => {
    count.value = value
}

const childModelValue = ref('father value')
const detailMsg = ref('this is father message.')
const onChangMsg = (msg) => {
    detailMsg.value = msg
}

provide('provideMsg', 'this is provide string.')
provide('provideCount', count)
</script>

<style scoped>

</style>