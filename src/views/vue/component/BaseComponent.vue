<template>
    <div>{{ title }}</div>
    <div>{{ props.title }}</div>
    <el-button type="primary" @click="onButtonClick">触发事件</el-button>

    <div>
        <p>展示插槽：</p>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps(['title'])
const emit = defineEmits(['button-click'])

const count = ref(0)
const onButtonClick = () => {
    emit('button-click', ++count.value)
}
</script>

<style scoped>

</style>