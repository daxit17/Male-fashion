import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from '../../Redux/Actions/Category_Admin_Action';

function Categories(props) {

    const dispatch = useDispatch();

    const [category, setcategory] = useState([]);

    const categories = useSelector(state => state.category);

    useEffect(() => {
        dispatch(GetCategory());
        setcategory(categories.category);
    }, [])

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Categories</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Categories</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='catogories'>
                <div className='container'>
                    <div className='row'>
                        {
                            category.map((v) => {

                                let { categoryname, profile_img } = v;

                                return (
                                    <>
                                        <Card
                                            className='text-center'
                                            style={{
                                                width: '18rem',
                                                marginRight: "4rem",
                                                marginBottom: "6rem"
                                            }}
                                        >
                                            <img
                                                alt="Sample"
                                                height={180}
                                                src={profile_img}
                                            />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {categoryname}
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default Categories;