import { ref, Ref } from 'vue'
import { useEventListener } from './event.ts'

export function useMouse(target: Ref) {
    const x = ref(0)
    const y = ref(0)

    useEventListener(target, 'mousemove', (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    })

    return { x, y }
}