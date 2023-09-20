import { RefSetter } from 'element-plus/es/utils/index.js'
import { onMounted, onUnmounted, Ref } from 'vue'

export function useEventListener(target: Ref, event: string, callback: (event: any) => void) {
    onMounted(() => {
        target.value.addEventListener(event, callback)
    })

    onUnmounted(() => {
        target.value.removeEventListener(event, callback)
    })
}