import * as yup from "yup";

export const carTypeValidation = yup.object().shape({
    name: yup.string().required()
})