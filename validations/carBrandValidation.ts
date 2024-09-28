import * as yup from "yup";

export const carBrandValidation = yup.object().shape({
    name: yup.string().required()
})