<template>
<div>
    <div :style="$attrs.style">{{ myMsg }}</div>
    <el-button type='primary' @click="onMessageClick">使用我的message</el-button>

    <p>v-model：</p>
    <slot name="vmodel" :count="inputCount"></slot>
    <input :value="modelValue" @input="onTextInput">

    <p>provide与inject：</p>
    <br>
    <p>注入的值: {{ provideMsg }} {{ provideCount }}</p>
</div>
</template>

<script lang="ts" setup>
import { useAttrs, ref, inject } from 'vue'

// 获取穿透Attrs, 但它并不是响应式的
const attrs = useAttrs()

// const props = defineProps(['myMsg'])

// 对象方式
/* const props = defineProps({
    myMsg: String
}) */

/* // props校验
const props = defineProps({
    myMsg: {
        type: String,
        required: true,
        default: 'this is a default message.',
        validator(value) {
            return value.includes('message')
        }
    }
}) */

// ts方式
const props = withDefaults(defineProps<{
    myMsg: string,
    modelValue: string,
    modelModifiers: object // v-model的修饰符
}>(), {
    myMsg: 'this is ts default message.',
    modelModifiers: {}
})

// Attribute穿透选项
defineOptions({
    inheritAttrs: false
})

// const emit = defineEmits(['changeMsg'])
// 校验
/* const emit = defineEmits({
    // 校验 submit 事件
    changeMsg: (msg) => {
        if (msg) {
            return true
        } else {
            console.warn('Invalid submit event payload!')
            return false
        }
    }
}) */

// ts 方式
const emit = defineEmits<{
    // (e: 'changeMsg', msg: string ): void
    changeMsg: [msg: string],
    'update:modelValue': [value: string]
}>()

const onMessageClick = () => {
    emit('changeMsg', 'this is detail component message.')
}

const onTextInput = (evt) => {
    let value = evt.target.value

    if (props.modelModifiers.uppercase) {
        value = value.toUpperCase()
    }

    emit('update:modelValue', value)
    inputCount.value++
}

const inputCount = ref(0)

// 依赖注入
const provideMsg = inject('provideMsg', '这是默认值')
const provideCount = inject('provideCount', 0)
</script>

<style scoped>

</style>