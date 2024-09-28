import * as yup from "yup";

export const carBrandValidation = yup.object().shape({
    name: yup.string().required(),
    license_plate: yup.string().required(),
    car_brand_id: yup.number().required(),
    car_type_id: yup.number().required(),
    price_per_day: yup.number().required(),
    car_status: yup.string().required(),
    description: yup.string().required(),
})