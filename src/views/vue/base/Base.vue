<template>
    <div :data-index="dataIndex" @click.native="onMsgClick">{{ showMsg }}</div>
    <br>
    <div @click="reactiveObj.data.name = 'yx'" style="border-top: 1px solid #ccc;">reactive深层次响应：{{ reactiveObj.data.name }}</div>
    <br>
    <div @click="shallowReactiveObj.data.name = 'yx'">shallowReactive浅层次响应：{{ shallowReactiveObj.data.name }}</div>
    <br>
    <p style="border-top: 1px solid #ccc;">计算属性：</p>
    <el-input v-model="textValue" />
    <p>{{ computeTextValue }}</p>
    <p>{{ computeTextValue1 }}</p>
    <br>
    <p style="border-top: 1px solid #ccc;">模块引用：</p>
    <input ref="input" />
</template>

<script lang="ts" setup>
import { 
    ref, reactive, shallowReactive, 
    computed,
    watch, watchEffect, watchPostEffect, 
    onMounted, onUnmounted, nextTick 
} from 'vue'

import { login } from '../../../api/userApi.ts'

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

const textValue = ref('')

const computeTextValue = computed(() => {
    return textValue.value.toUpperCase()
})

const computeTextValue1 = computed({
    get() {
        return textValue.value.toUpperCase() + ' - ' + textValue.value.toLowerCase()
    },
    set(value) {
        textValue.value = value
    }
})

const input = ref(null)
onMounted(() => {
    input.value.focus()
    console.log('mounted')
})

watch(textValue, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})

// 监听响应式对象的属性值
const obj = reactive({ count: 0 })
watch(() => obj.count, (count) => {
    console.log(count)
}, { 
    deep: true,         // 深层侦听
    immediate: true,    // 建侦听器时，立即执行一遍回调
    flush: 'post'       // vue更新之后触发侦听回调
})

const username = ref('')
// watchEffect自动跟踪回调的响应式依赖，username改变自动发起请求，会立即执行回调进行依赖搜集
const unwatch = watchEffect(async () => {
    const response = await login(username.value, 'password')
}, { 
    immediate: false // 不生效
})

unwatch() // 停止侦听器
</script>