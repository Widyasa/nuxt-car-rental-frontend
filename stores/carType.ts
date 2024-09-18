import type {CarType} from "~/Types/CarType";

export const useCarTypeStore = defineStore('useCarTypeStore', {
    state: () => ({
        carTypeList : [] as CarType[],
        carType : {} as CarType,
        status_code : 0,
        pages : ref(1),
        keyword: ref(''),
        metaData : {},
        totalData : 0,
    }),
    actions : {
        async getAllCarType() {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const data:any = await $fetch(config.public.apiUrl + `car-types`, {
                    method: 'GET',
                    params : {
                        'page' : this.pages,
                        'search' : this.keyword,
                    },
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
                })
                this.carTypeList = data.data[0].data
                // this.metaData = data?.meta
                this.totalData = data.data[0].total
            } catch (e) {
                console.error(e)
            }
        },
        async getCarTypeById(id: string | string[]) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const {data}:any = await $fetch(config.public.apiUrl + `car-types/${id}`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
                })
                this.carType = data
            } catch (e) {
                console.error(e)
            }
        },
        async createCarType(data: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + 'car-types', {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
                })
                this.status_code = response.meta.code
                message.value = response.meta.message
                this.getAllCarType()
            } catch (e) {
                console.error(e)
            }
        },
        async updateCarType(data: any, id: string) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car-types/${id}`, {
                    method: 'patch',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
                })
                this.status_code = response.meta.code
                message.value = response.meta.message
                this.getAllCarType()
            } catch (e) {
                console.error(e)
            }
        },
        async deleteCarType(id: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `car-types/${id}`, {
                    method: 'delete',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
                })
                message.value = response.meta.message
                this.status_code = response.meta.code
                this.getAllCarType()
            } catch (e) {
                console.error(e)
            }
        }
    }

})