import * as Yup from "yup";
const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const YupSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),

    firstName: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .required("First name required"),

    lastName: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .required("Last name required"),
    location: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .required("Location required"),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Phone number required")

});
export default YupSchema;