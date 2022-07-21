import {
    reactive
} from 'vue'

export const states = reactive({
    authkey: "",
    refreshkey: "",
    expiresAt: "",
    burgerIsActivated: false,
})