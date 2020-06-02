import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupSchema from './YupSchema';
import './SignUp.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';

function SignUp(props) {
    let lang = props.lang ? uaLang : enLang;
    const { title, firstName, lastName, email, phone, location, button } = lang.signUp;
    return (
        <section id="signUp" className="SignUp">
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">{title}</h2>
                    <div className="registration">

                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                phone: '',
                                email: '',
                                location: ''
                            }}
                            validationSchema={YupSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    resetForm();
                                    console.log(values);
                                }, 400);
                            }}
                        >
                            <Form className="form"
                            >
                                <Field
                                    className="form__firstName"
                                    name="firstName"
                                    placeholder={firstName}
                                />
                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="firstName" />
                                </div>
                                <Field
                                    className="form__lastName"
                                    name="lastName"
                                    placeholder={lastName}
                                />
                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="lastName" />
                                </div>
                                <Field
                                    className="form__email"
                                    name="email"
                                    placeholder={email}
                                />

                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="email" />
                                </div>

                                <Field
                                    className="form__phone"
                                    name="phone"
                                    placeholder={phone}
                                />
                                <div className="error__message">
                                    {/* <div>&nbsp;</div> */}
                                    <ErrorMessage name="phone" />
                                </div>
                                <Field
                                    className="form__location"
                                    name="location"
                                    placeholder={location}
                                />
                                <div className="error__message">
                                    <ErrorMessage name="location" />
                                </div>


                                <input
                                    className="form__button"
                                    type="submit"
                                    value={button}
                                />

                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignUp;
