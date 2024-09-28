import type {Car} from "~/Types/Car";

export const useCarStore = defineStore('useCarStore', {
    state: () => ({
        carList : [] as Car[],
        car : {} as Car,
        status_code : 0,
        pages : ref(1),
        keyword: ref(''),
        // metaData : {},
        totalData : 0,
        isSuccess: ref(false),
        response : {}
    }),
    actions : {
        async getAllCar() {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const data:any = await $fetch(config.public.apiUrl + `car`, {
                    method: 'GET',
                    params : {
                        'page' : this.pages,
                        'search' : this.keyword,
                    },
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.carList = data.data[0].data
                this.totalData = data.data[0].total
            } catch (e) {
                console.error(e)
            }
        },
        async getCarById(id:number) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const {data}:any = await $fetch(config.public.apiUrl + `car/${id}`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.car = data[0]
            } catch (e) {
                console.error(e)
            }
        },
        async createCar(data: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + 'car', {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.response = response.data[0]
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCar()
            } catch (e) {
                console.error(e)
            }
        },
        async updateCar(data: any, id: number) {
            console.log(data)
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car/${id}`, {
                    method: 'patch',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.response = response.data[0]
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCar()
            } catch (e) {
                console.error(e)
            }
        },
        async uploadImage(data: any, id:number) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car/upload/${id}`, {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                    console.log(response)
            } catch (e) {
                console.error(e)
            }
        },
        async deleteCar(id: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car/${id}`, {
                    method: 'delete',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCar()
            } catch (e) {
                console.error(e)
            }
        }
    }

})