import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../Redux/Actions/Cart_Actions';

function Cart(props) {

    const FilterCart = [];
    const CartData = [];
    let Total;

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);

    cart.cart.map((c => products.products.map((p) => {

        if (c.id === p.id) {
            const data = {
                ...p,
                quantity: c.quantity
            }
            FilterCart.push(data)
        }

    })))

    let TotalAmount = 0;

    FilterCart.map((c) => {
        Total = parseInt(c.price) * c.quantity;
        TotalAmount = TotalAmount + Total;
    })

    const FinalAmount = TotalAmount;

    const handleIncrement = (id) => {
        dispatch(Increment(id));
    }

    const handleDecrement = (id) => {
        dispatch(Decrement(id));
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
                                                    <th className="product_remove">Delete</th>
                                                    <th className="product_thumb">Image</th>
                                                    <th className="product_name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product_quantity">Quantity</th>
                                                    <th className="product_total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    FilterCart.map((v) => {

                                                        let { id, name, profile_img, price, quantity } = v;

                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a>
                                                                    </td>
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
                                                                    <td className="product_total">{"$ "+price * quantity}</td>
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
                                            <p className="cart_amount">{"$ "+FinalAmount}</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount">Free</p>
                                        </div>
                                        <hr/>
                                        <br/>
                                        <div className="cart_subtotal">
                                            <p>Total Amount :</p>
                                            <p className="cart_amount">{"$ "+FinalAmount}</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <a href="#" className="btn btn-md btn-golden">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;