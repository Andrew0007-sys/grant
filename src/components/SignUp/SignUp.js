import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupSchema from './YupSchema';
import './SignUp.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';
import plane from '../../assets/images/plane.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';

function SignUp(props) {
    let lang = props.lang ? uaLang : enLang;
    const { title, firstName, lastName, email, phone, location, button } = lang.signUp;
    return (
        <section id="signUp" className="SignUp">
            <div className="container">
                <div className="d-flex">    
                    <div className="left-content col-6">
                        <div className="airplane col-12">
                        
                        </div>
                        <div className="air-icon">
                            <div className="centered-icon">
                                <div><a href=""><img className="icon-edit" src={facebook} /></a></div>
                                <div className="mt-4"><a href=""><img className="icon-edit" src={instagram} /></a></div>
                                <div><a href=""><img className="icon-edit" src={linkedin} /></a></div>
                            </div>
                        </div>    
                    </div>    
                    <div className="wrapper col-6">
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
                                    >
                                    </Field>

                                    <div className="error__message">
                                        <ErrorMessage name="location" />
                                    </div>

                                    <div className="air-icon">    
                                    <input
                                        className="form__button"
                                        type="submit"
                                        value={button}
                                    /> 
                                    
                                        <div className="centered-icon">
                                            <div><a href=""><img className="icon-edit" src={facebook} /></a></div>
                                            <div><a href=""><img className="icon-edit" src={instagram} /></a></div>
                                            <div><a href=""><img className="icon-edit" src={linkedin} /></a></div>
                                        </div>
                                    </div> 

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>    
            </div>

        </section>
    )
}

export default SignUp;
