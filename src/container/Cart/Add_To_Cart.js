import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Decrement, DeleteCart, Increment } from '../../Redux/Actions/Cart_Actions';
import { GetProducts } from '../../Redux/Actions/Products_Admin_Action';

function Add_To_Cart(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [cartData, setCartData] = useState([])

    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const submitOrder = useSelector(state => state.submitOrder);

    const productData = products.products;
    const cartProData = cart.cart;

    const cartDataFun = () => {
        const ProCart = [];

        productData.map((j) => {
            cartProData.map((s) => {
                if (j.id === s.id) {
                    const quacount = {
                        ...j,
                        quantity: s.quantity
                    }
                    ProCart.push(quacount)
                }
            })
        })

        setCartData(ProCart)
    }

    let total;
    let totalamount = 0;

    cartData.map((g) => {
        total = g.price * g.quantity;
        totalamount = totalamount + total;
    })

    const finalamount = totalamount;

    useEffect(() => {
        dispatch(GetProducts());

        cartDataFun();
    }, [cartProData])

    const handleDecrement = (id) => {
        dispatch(Decrement(id))
    }

    const handleIncrement = (id) => {
        dispatch(Increment(id))
    }

    const handleDelete = (id) => {
        dispatch(DeleteCart(id));
    }

    const handleProceed = () => {
        history.push("/checkout")
    }

    return (
        <div>

            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Cart</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li className="active" aria-current="page">Cart</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                submitOrder.order ?
                    history.push("/empty-cart")
                    :
                    <div className="cart-section">
                        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table_desc">
                                            <div className="table_page table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="product_thumb">Image</th>
                                                            <th className="product_name">Product</th>
                                                            <th className="product-price">Price</th>
                                                            <th className="product_quantity">Quantity</th>
                                                            <th className="product_total">Total</th>
                                                            <th className="product_remove">Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cartData.map((v) => {

                                                                let { id, name, profile_img, price, quantity } = v;

                                                                return (
                                                                    <>
                                                                        <tr>

                                                                            <td className="product_thumb">
                                                                                <a href="product-details-default.html">
                                                                                    <img src={profile_img} alt />
                                                                                </a>
                                                                            </td>
                                                                            <td className="product_name">
                                                                                <a href="product-details-default.html">{name}
                                                                                </a>
                                                                            </td>
                                                                            <td className="product-price">${price}</td>
                                                                            <td className="product_quantity">
                                                                                <button onClick={() => handleDecrement(id)}>-</button>
                                                                                {quantity}
                                                                                <button onClick={() => handleIncrement(id)}>+</button>
                                                                            </td>
                                                                            <td className="product_total">{"$ " + price * quantity}</td>
                                                                            <td className="product_remove" onClick={() => handleDelete(id)}>
                                                                                <a href="#">
                                                                                    <i className="fa fa-trash-o" />
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="coupon_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code left" data-aos="fade-up" data-aos-delay={200}>
                                            <h3>Coupon</h3>
                                            <div className="coupon_inner">
                                                <p>Enter your coupon code if you have one.</p>
                                                <input className="mb-2" placeholder="Coupon code" type="text" />
                                                <button type="submit" className="btn btn-md btn-golden">Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                                            <h3>Cart Totals</h3>
                                            <div className="coupon_inner">
                                                <div className="cart_subtotal">
                                                    <p>Subtotal</p>
                                                    <p className="cart_amount">{"$ " + finalamount}</p>
                                                </div>
                                                <div className="cart_subtotal ">
                                                    <p>Shipping</p>
                                                    <p className="cart_amount">Free</p>
                                                </div>
                                                <hr />
                                                <br />
                                                <div className="cart_subtotal">
                                                    <p>Total Amount :</p>
                                                    <p className="cart_amount">{"$ " + finalamount}</p>
                                                </div>
                                                <div className="checkout_btn" onClick={() => handleProceed()}>
                                                    <a href="#" className="btn btn-md btn-golden">Proceed to Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }



        </div>
    );
}

export default Add_To_Cart;