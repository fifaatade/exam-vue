import { ref } from "vue";
import { useLocalStorage } from '@vueuse/core'

export const darkMode={
    mode:'sun',
}

const modeInfo = useLocalStorage('mode', mode)
export {modeInfo}