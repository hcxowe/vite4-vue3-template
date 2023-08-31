<template>
    <div :data-index="dataIndex" @click.native="onMsgClick">{{ showMsg }}</div>
    <br>
    <div @click="reactiveObj.data.name = 'yx'">reactive深层次响应：{{ reactiveObj.data.name }}</div>
    <br>
    <div @click="shallowReactiveObj.data.name = 'yx'">shallowReactive浅层次响应：{{ shallowReactiveObj.data.name }}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, shallowReactive, nextTick } from 'vue'

const dataIndex = ref(0)
const showMsg = ref('this is template string')

const reactiveObj = reactive({
    count: 0,
    data: {
        name: 'cx',
        age: '30'
    }
})

const shallowReactiveObj = shallowReactive({
    count: 0,
    data: {
        name: 'shallowName',
        age: '30'
    }
})

const onMsgClick = () => {
    showMsg.value = 'msg is clicked, count: ' + ++dataIndex.value
}

nextTick(() => {
    console.log('base component is updated!')
})
</script>