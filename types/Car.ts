export interface Car {
    id: number;
    name: string;
    license_plate: string;
    image:string;
    price_per_day:number
    description: string;
    car_status:string;
    car_brand_id:number;
    car_type_id:number;
    car_type : {
        id: number;
        name: string;
    }
    car_brand : {
        id: number;
        name: string;
    }
}