import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { GetProducts } from '../../Redux/Actions/Products_Admin_Action';
import NavBar from './NavBar';

function Products(props) {

    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);

    const products = useSelector(state => state.products);

    // useEffect

    useEffect(() => {
        dispatch(GetProducts());
        setProduct(products.products);
    }, []);

    // uniqueList

    const uniqueList = [
        "ALL",
        ...new Set(
            products.products.map((m) => {
                return m.categoryname;
            })
        )
    ]

    // FilterItems

    const FilterItems = (categoryname) => {

        if (categoryname === "ALL") {
            setProduct(products);
            return;
        }

        const UpdateList = products.products.filter((m1, i) => {
            return (
                m1.categoryname === categoryname
            )
        })

        setProduct(UpdateList);

    }

    let FinalData = product.length > 0 ? product : products.products;

    return (
        <>

            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Products</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Products</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar FilterItems={FilterItems} uniqueList={uniqueList} />

            <div className='catogories'>
                <div className='container'>
                    <div className='row'>
                        {
                            FinalData && FinalData.map((v) => {

                                let { name, profile_img, price, quantity } = v;

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
                                                    {"Name : " + name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {"Price : " + price}
                                                </CardSubtitle>
                                                <Button>
                                                    Buy Now
                                                </Button>
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

export default Products;