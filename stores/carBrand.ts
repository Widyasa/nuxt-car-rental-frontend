import type {CarBrand} from "~/Types/CarBrand";

export const useCarBrandStore = defineStore('useCarBrandStore', {
    state: () => ({
        carBrandList : [] as CarBrand[],
        carBrand : {} as CarBrand,
        status_code : 0,
        pages : ref(1),
        keyword: ref(''),
        // metaData : {},
        totalData : 0,
        isSuccess: ref(false)
    }),
    actions : {
        async getAllCarBrand() {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const data:any = await $fetch(config.public.apiUrl + `car-brands`, {
                    method: 'GET',
                    params : {
                        'page' : this.pages,
                        'search' : this.keyword,
                    },
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.carBrandList = data.data[0].data
                this.totalData = data.data[0].total
            } catch (e) {
                console.error(e)
            }
        },
        async getCarBrandById(id: number) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const {data}:any = await $fetch(config.public.apiUrl + `car-brands/${id}`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.carBrand = data[0]
            } catch (e) {
                console.error(e)
            }
        },
        async createCarBrand(data: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + 'car-brands', {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCarBrand()
            } catch (e) {
                console.error(e)
            }
        },
        async updateCarBrand(data: any, id: number) {
            console.log(data)
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car-brands/${id}`, {
                    method: 'patch',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCarBrand()
            } catch (e) {
                console.error(e)
            }
        },
        async deleteCarBrand(id: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car-brands/${id}`, {
                    method: 'delete',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllCarBrand()
            } catch (e) {
                console.error(e)
            }
        }
    }

})