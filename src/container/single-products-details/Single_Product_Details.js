import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddCart } from '../../Redux/Actions/Cart_Actions';

function Single_Product_Details(props) {

    const dispatch = useDispatch();
    const history = useHistory()

    const productval = [props.location.state];

    // handleCart

    const handleCart = (v) => {
        dispatch(AddCart(v));
        history.push("/cart");
    }

    return (
        <div>

            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Product-Details</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Product-Details</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-details-section">
                <div className="container">
                    {
                        productval.map((v) => {

                            const { name, profile_img, price, quantity } = v;

                            return (
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="product-large-image product-large-image-horaizontal swiper-container">
                                                <div className="swiper-wrapper">
                                                    <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                                        <img src={profile_img} alt height={350} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="product-details-text">
                                                <h4 className="title">{name}</h4>
                                                <div className="d-flex align-items-center">
                                                    <ul className="review-star">
                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                    </ul>
                                                    <a href="#" className="customer-review ml-2">(customer review )</a>
                                                </div>
                                                <div className="price">{"$ " + price}</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                                    tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
                                                    justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                                    nulla.</p>
                                            </div>
                                            <div className="product-details-variable">
                                                <h4 className="title">Available Options</h4>
                                                <div className="variable-single-item">
                                                    <div className="product-stock"> <span className="product-stock-in"><i className="ion-checkmark-circled" /></span> 200 IN STOCK</div>
                                                </div>
                                                <div className="d-flex align-items-center ">
                                                    <div className="product-add-to-cart-btn">
                                                        <a href="#" className="btn btn-block btn-lg btn-black-default-hover" data-bs-toggle="modal" data-bs-target="#modalAddcart"
                                                            onClick={() => handleCart(v)}>+ Add To Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="product-details-catagory mb-2">
                                                <span className="title">CATEGORIES:</span>
                                                <ul>
                                                    <li><a href="#">BAR STOOL</a></li>
                                                    <li><a href="#">KITCHEN UTENSILS</a></li>
                                                    <li><a href="#">TENNIS</a></li>
                                                </ul>
                                            </div>
                                            <div className="product-details-social">
                                                <span className="title">SHARE THIS PRODUCT:</span>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Single_Product_Details;