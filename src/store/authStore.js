import {ref,reactive, computed} from 'vue'

const authStore = reactive({

    authenticated(username, password){        
        auth.isAuthenticated  = true
        localStorage.setItem('auth',1)
    },
    logout() {
        localStorage.removeItem('auth')
        auth.isAuthenticated = false
        localStorage.removeItem('auth')
    }
})

export {authStore}