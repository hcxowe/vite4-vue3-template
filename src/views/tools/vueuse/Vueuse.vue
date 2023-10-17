<template>
    <div style="height: 100%; overflow: auto;">
        <p style="font-weight: bold;">文件拖拽</p>
        <div ref="dropZoneRef" style="display: flex; align-items: center; height: 200px;margin:10px;justify-content: center;
    border: 1px dotted #ccc;">拖拽文件到此处</div>
        <div style="margin-left:10px;">拖拽文件：{{ filesName }}</div>

        <p style="font-weight: bold;">文件选择框</p>
        <button @click="open">选择文件</button>
        <div>选择的文件：{{ selFileName }}</div>

        <p style="font-weight: bold;">文件系统读写 chrome 86+</p>
        <button @click="onOpen" style="margin-right: 10px;">打开文件</button>
         <button @click="onCreate" style="margin-right: 10px;">创建文件</button>
         <button :disabled="!res.file.value" @click="onSave" style="margin-right: 10px;">保存</button>
         <button :disabled="!res.file.value" @click="onSaveAs">另存为</button>
         <p>文件内容：{{ fileContent }}</p>
         <textarea v-model="content" rows="10" cols="40" w-full/>

         <p style="font-weight: bold;">颜色拾取 chrome 95+</p>
        <button @click="findColor">拾取颜色</button>
        <div>选择的颜色：{{ eyeDropper.sRGBHex }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDropZone, useFileDialog, useFileSystemAccess, useEyeDropper } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()
const filesName = ref('')

useDropZone(dropZoneRef, (files: Fill[] | null) => {
    filesName.value = files ? files.map(file => file.name).join(',') : ''
})

const { files, open, reset, onChange } = useFileDialog()
const selFileName = computed(() => {
    let filesName = ''

    if (files.value && files.value.length > 0) {
        for (let i = 0; i < files.value.length; i++) {
            if (i == 0) {
                filesName += files.value[i].name
            } else {
                filesName += ', ' + files.value[i].name
            }
        }
    }
    
    return filesName
})

//文件系统读写
const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const res = useFileSystemAccess({
    dataType,
    types: [{
        description: 'text',
        accept: {
            'text/plain': ['.txt'],
        },
    }],
    excludeAcceptAllOption: true
})

const content = res.data
const fileContent = ref('')
async function onOpen() {
    await res.open()
    fileContent.value  = res.data.value
}

async function onCreate() {
    await res.create()
    fileContent.value  = res.data.value
}

async function onSave() {
    await res.save()
    alert('保存成功')

    fileContent.value  = res.data.value
}

async function onSaveAs() {
    await res.saveAs()
    alert('另存成功')

    fileContent.value  = res.data.value
}

// 颜色拾取
const eyeDropper = useEyeDropper()

function findColor() {
    eyeDropper.open()
}
</script>