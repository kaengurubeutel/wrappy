import {
    reactive
} from 'vue'

export const states = reactive({
    authkey: false,
    burgerIsActivated: false,
    username: "" // for bugfixing, could be more elegant? 
})