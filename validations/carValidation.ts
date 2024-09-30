import * as yup from "yup";

export const carValidation = yup.object().shape({
    name: yup.string().required('name is required'),
    license_plate: yup.string().required('license plate is required'),
    car_brand_id: yup.mixed().required('car brand is required'),
    car_type_id: yup.mixed().required('car type is required'),
    price_per_day: yup.number().required('price per day is required').moreThan(0),
    car_status: yup.mixed().required('car status is required'),
    description: yup.string().required('description is required'),
    image: yup.mixed().required('image is required'),
})

// export const carValidationUpdate