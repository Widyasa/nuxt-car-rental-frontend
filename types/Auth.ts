export interface Auth {
    success: boolean
    data : {
        data : {
            token: string;
            user : {
                id: string
                name: string
                email: string
                role: string
            }
        }
    }
    message: string
}