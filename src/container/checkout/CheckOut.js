import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SubmitOrder } from "../../Redux/Actions/Submit_Order_Action";
import { useHistory } from "react-router-dom";

function CheckOut(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    // schema

    let schema = yup.object().shape({
        fname: yup.string().required("Please enter your firstname..."),
        lname: yup.string().required("Please enter yout lastname..."),
        comname: yup.string().required("Please enter company name..."),
        country: yup.string().required("Please select your country..."),
        address: yup.string().required("Please enter your adress..."),
        city: yup.string().required("Please enter your city..."),
        state: yup.string().required("Please enter your state..."),
        pnumber: yup
            .string()
            .required("Please enter your phone number...")
            .min(10)
            .max(10),
        email: yup
            .string()
            .email("Please enter valid email...")
            .required("Please enter email...."),
    });

    //   formik

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            comname: "",
            country: "",
            address: "",
            city: "",
            state: "",
            pnumber: "",
            email: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleOrderSubmit(values)
        },
    });

    const handleOrderSubmit = (values) => {
        history.push("/");
        dispatch(SubmitOrder(values));
        formik.resetForm()
    }


    let { handleBlur, handleChange, handleSubmit, errors, touched } = formik;

    return (
        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">CheckOut</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Pages</a>
                                            </li>
                                            <li className="active" aria-current="page">
                                                CheckOut
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout-section">
                <div className="container">
                    <div
                        className="checkout_form"
                        data-aos="fade-up"
                        data-aos-delay={400}
                    >
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <Formik value={formik}>
                                    <Form action="#" onSubmit={handleSubmit}>
                                        <h3>Billing Details</h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>
                                                        First Name <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.fname && touched.fname ? (
                                                        <p className="Err">{errors.fname}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>
                                                        Last Name <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.lname && touched.lname ? (
                                                        <p className="Err">{errors.lname}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>Company Name</label>
                                                    <input
                                                        type="text"
                                                        name="comname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.comname && touched.comname ? (
                                                        <p className="Err">{errors.comname}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label htmlFor="country">
                                                        country <span>*</span>
                                                    </label>
                                                    <select
                                                        className="country_option nice-select wide"
                                                        name="country"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="country"
                                                    >
                                                        <option value={2}>Bangladesh</option>
                                                        <option value={3}>Algeria</option>
                                                        <option value={4}>Afghanistan</option>
                                                        <option value={5}>Ghana</option>
                                                        <option value={6}>Albania</option>
                                                        <option value={7}>Bahrain</option>
                                                        <option value={8}>Colombia</option>
                                                        <option value={9}>India </option>
                                                        <option value={10}>USA Republic</option>
                                                        <option value={11}>Canada</option>
                                                    </select>
                                                    {errors.country && touched.country ? (
                                                        <p className="Err">{errors.country}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>
                                                        Street address <span>*</span>
                                                    </label>
                                                    <input
                                                        placeholder="House Address"
                                                        type="text"
                                                        name="address"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.address && touched.address ? (
                                                        <p className="Err">{errors.address}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>
                                                        Town / City <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.city && touched.city ? (
                                                        <p className="Err">{errors.city}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>
                                                        State / County <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.state && touched.state ? (
                                                        <p className="Err">{errors.state}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>
                                                        Phone<span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="pnumber"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.pnumber && touched.pnumber ? (
                                                        <p className="Err">{errors.pnumber}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>
                                                        {" "}
                                                        Email Address <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <p className="Err">{errors.email}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                            <div className="order_button ">
                                                <button
                                                    className="btn btn-md btn-black-default-hover"
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default CheckOut;