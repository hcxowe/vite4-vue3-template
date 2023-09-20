import { onMounted, onUnmounted, Ref } from 'vue'

export function useEventListener(target: Ref, event: string, callback: (event: any) => void) {
    let element: HTMLElement | null = null

    onMounted(() => {
        element = target.value

        if (element) {
            element.addEventListener(event, callback)
        }
    })

    onUnmounted(() => {
        if (element) {
            element.removeEventListener(event, callback)
        }
    })
}