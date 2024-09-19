import {defineStore} from "pinia";
import type {Auth} from "~/Types/Auth";

export const useAuthStore = defineStore('useAuthStore', {
    state : () => ({
        isLoggedIn: false,
        loginOutput: {} as Auth,
        isSuccess: false
    }),
    actions : {
        async login (loginData: any) {
            const config = useRuntimeConfig()
            try {
                const response:Auth = await $fetch(config.public.apiUrl + 'login', {
                    method: 'post',
                    body: loginData,
                })
                console.log(response)
                this.loginOutput = response
                this.isLoggedIn = true
                this.isSuccess = false
            } catch (e) {
                console.error(e)
            }
        },
        async register (registerData : any) {
            const config = useRuntimeConfig()
            try {
                const response:Auth = await $fetch(config.public.apiUrl + 'register', {
                    method: 'post',
                    body: registerData
                })
                this.isSuccess = response.success
            } catch (e) {
                console.error(e)
            }
        },
        async logout() {
            this.loginOutput = {}
            this.isLoggedIn = false
            return navigateTo('/')
        }
    },
    persist: {
        // test: console.log('tes'),
        storage: persistedState.cookies,
    },
})