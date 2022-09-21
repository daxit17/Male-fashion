import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { forgotPassword, googleSignIn, signInAction, signUpAction } from '../../Redux/Actions/Auth_Actions';

const Login = () => {
    const [userType, setUserType] = useState('login')
    const [reset, setReset] = useState(false);

    let schemaObj, intObj;

    if (reset) {

        schemaObj = {
            email: yup.string().email("Please Enter Valid Email").required("Please Enter Email")
        }

        intObj = {
            email: '',
        }

    } else {
        if (userType === 'login') {

            schemaObj = {
                email: yup.string().required("Please enter email id").email("Please enter valid email id"),
                password: yup.string().min(6, "your password to short").required("Please enter password.")
            }

            intObj = {
                email: '',
                password: '',
            }

        } else {

            schemaObj = {
                name: yup.string().required("Please enter name"),
                email: yup.string().required("Please enter email id").email("Please enter valid email id"),
                password: yup.string().min(6, "your password to short").required("Please enter password.")
            }

            intObj = {
                name: '',
                email: '',
                password: '',
            }

        }
    }


    let schema = yup.object().shape(schemaObj);

    let dispatch = useDispatch();

    // handleData

    const handleData = (values) => {

        dispatch(signUpAction(values));

        // let localData = JSON.parse(localStorage.getItem("user"))

        // if (localData === null) {
        //     localStorage.setItem("user", JSON.stringify([values]))
        // } else {
        //     localData.push(values);
        //     localStorage.setItem("user", JSON.stringify(localData));
        // }
    }

    // handleValue

    const handleValue = (values) => {
        // localStorage.setItem("User", "123");
        dispatch(signInAction(values));
    }

    const formik = useFormik({
        initialValues: intObj,
        validationSchema: schema,
        enableReinitialize: true,
        onSubmit: values => {

            if (userType === 'login' && reset === false) {
                handleValue(values);
            } else if (userType != 'login' && reset === false) {
                handleData(values);
            } else if (reset === true) {
                dispatch(forgotPassword(values));
            }

        },
    });

    const handleGoogleSignIn = () => {
        dispatch(googleSignIn());
    }

    let { handleChange, errors, handleSubmit, handleBlur, touched } = formik;

    return (
        <>
            <div class="breadcrumb-section breadcrumb-bg-color--golden">
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="breadcrumb-title">Login</h3>
                                <div class="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li class="active" aria-current="page">Login</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="Login-form">
                <Container>
                    <div className="section-title text-center mb-5">
                        {
                            !reset ?
                                userType === 'login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Signup</h2>
                                :
                                <h2>Reset Password</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <Row className="d-flex justify-content-center">
                                {
                                    userType === 'login' ?
                                        null
                                        :
                                        <Col md={8}>
                                            <FormGroup className="mt-3 mt-md-0">
                                                <label>Enter Your Name<span>*</span></label>
                                                <Input type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                            </FormGroup>
                                        </Col>
                                }
                                <Col md={8}>
                                    <FormGroup className="mt-3 mt-md-0">
                                        <label>Enter Your Email<span>*</span></label>
                                        <Input type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <p>{errors.email && touched.email ? errors.email : ''}</p>
                                    </FormGroup>
                                </Col>
                                {
                                    !reset ?
                                        <Col md={8}>
                                            <FormGroup className="mt-3 mt-md-0">
                                                <label>Enter Your Password<span>*</span></label>
                                                <Input type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <p>{errors.password && touched.password ? errors.password : ''}</p>
                                            </FormGroup>
                                        </Col>
                                        :
                                        null
                                }
                            </Row>
                            <div className="text-center">
                                {
                                    !reset ?
                                        userType === 'login' ?
                                            <Button type="submit" className='btn btn-md btn-black-default-hover'>Login</Button>
                                            : <Button type="submit" className='btn btn-md btn-black-default-hover'>Signup</Button>
                                        : <Button type="submit" className='btn btn-md btn-black-default-hover'>Submit</Button>
                                }
                            </div>
                            <div className="text-center">
                                {
                                    !reset ?
                                        userType === 'login' ?
                                            <div>
                                                <p className="d-inline mt-2">Create a new account: </p>
                                                <Button onClick={() => { setUserType('signup'); setReset(false) }} className='btn text-primary text-decoration-none bg-white shadow-none border-0'>Signup</Button>
                                            </div>
                                            :
                                            <div>
                                                <p className="d-inline mt-2">Already have an account? </p>
                                                <Button onClick={() => { setUserType('login'); setReset(false) }} className='btn text-primary text-decoration-none bg-white shadow-none border-0'>Login</Button>
                                            </div> : <div>
                                            <p className="d-inline mt-2">Already have an account? </p>
                                            <Button onClick={() => { setUserType('login'); setReset(false) }} className='btn text-primary text-decoration-none bg-white shadow-none border-0'>Login</Button>
                                        </div>
                                }
                            </div>
                            {
                                userType === 'login' ?
                                    <div className="text-center">
                                        {
                                            !reset ?
                                                <Button onClick={() => { setReset(true) }} type='button' className='btn text-primary text-decoration-none bg-white shadow-none border-0'>Forgot Password?</Button>
                                                :
                                                null
                                        }
                                    </div>
                                    :
                                    null
                            }
                            <button type="submit" className='btn btn-md btn-black-default-hover d-block mx-auto' onClick={() => handleGoogleSignIn()}>Login With Google</button>
                        </Form>
                    </Formik>
                </Container>
            </section>
        </>
    )
}

export default Login;