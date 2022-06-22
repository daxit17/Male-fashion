import React from 'react';

function Shop(props) {
    return (
        <div>
            {/* ...:::: Start Breadcrumb Section:::... */}
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Product Details - Default</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                            <li className="active" aria-current="page">Product Details Default</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* Start Product Details Section */}
            <div className="product-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Large Image */}
                                <div className="product-large-image product-large-image-horaizontal swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-1.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-2.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-3.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-4.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-5.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-6.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                {/* End Large Image */}
                                {/* Start Thumbnail Image */}
                                <div className="product-image-thumb product-image-thumb-horizontal swiper-container pos-relative mt-5">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-1.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-2.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-3.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-4.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-5.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-6.jpg" alt />
                                        </div>
                                    </div>
                                    {/* Add Arrows */}
                                    <div className="gallery-thumb-arrow swiper-button-next" />
                                    <div className="gallery-thumb-arrow swiper-button-prev" />
                                </div>
                                {/* End Thumbnail Image */}
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay={200}>
                                {/* Start  Product Details Text Area*/}
                                <div className="product-details-text">
                                    <h4 className="title">Ornare sed consequat</h4>
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
                                    <div className="price">$80.00</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
                                        justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                        nulla.</p>
                                </div> {/* End  Product Details Text Area*/}
                                {/* Start Product Variable Area */}
                                <div className="product-details-variable">
                                    <h4 className="title">Available Options</h4>
                                    {/* Product Variable Single Item */}
                                    <div className="variable-single-item">
                                        <div className="product-stock"> <span className="product-stock-in"><i className="ion-checkmark-circled" /></span> 200 IN STOCK</div>
                                    </div>
                                    {/* Product Variable Single Item */}
                                    <div className="d-flex align-items-center ">
                                        <div className="variable-single-item ">
                                            <span>Quantity</span>
                                            <div className="product-variable-quantity">
                                                <input min={1} max={100} defaultValue={1} type="number" />
                                            </div>
                                        </div>
                                        <div className="product-add-to-cart-btn">
                                            <a href="#" className="btn btn-block btn-lg btn-black-default-hover" data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Add To Cart</a>
                                        </div>
                                    </div>
                                    {/* Start  Product Details Meta Area*/}
                                    <div className="product-details-meta mb-20">
                                        <a href="wishlist.html" className="icon-space-right"><i className="icon-heart" />Add to
                                            wishlist</a>
                                        <a href="compare.html" className="icon-space-right"><i className="icon-refresh" />Compare</a>
                                    </div> {/* End  Product Details Meta Area*/}
                                </div> {/* End Product Variable Area */}
                                {/* Start  Product Details Catagories Area*/}
                                <div className="product-details-catagory mb-2">
                                    <span className="title">CATEGORIES:</span>
                                    <ul>
                                        <li><a href="#">BAR STOOL</a></li>
                                        <li><a href="#">KITCHEN UTENSILS</a></li>
                                        <li><a href="#">TENNIS</a></li>
                                    </ul>
                                </div> {/* End  Product Details Catagories Area*/}
                                {/* Start  Product Details Social Area*/}
                                <div className="product-details-social">
                                    <span className="title">SHARE THIS PRODUCT:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div> {/* End  Product Details Social Area*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End Product Details Section */}
            {/* Start Product Content Tab Section */}
            <div className="product-details-content-tab-section section-top-gap-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Product Details Tab Button */}
                                <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                                    <li><a className="nav-link active" data-bs-toggle="tab" href="#description">
                                        Description
                                    </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#specification">
                                        Specification
                                    </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#review">
                                        Reviews (1)
                                    </a></li>
                                </ul> {/* End Product Details Tab Button */}
                                {/* Start Product Details Tab Content */}
                                <div className="product-details-content-tab">
                                    <div className="tab-content">
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane active show" id="description">
                                            <div className="single-tab-content-item">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
                                                    nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
                                                    ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
                                                    adipiscing cursus eu, suscipit id nulla. </p>
                                                <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                                                    quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies
                                                    massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero
                                                    hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
                                                    nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus,
                                                    consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
                                                    imperdiet ligula euismod eget</p>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane" id="specification">
                                            <div className="single-tab-content-item">
                                                <table className="table table-bordered mb-20">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Compositions</th>
                                                            <td>Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Styles</th>
                                                            <td>Girly</td>
                                                        </tr><tr>
                                                            <th scope="row">Properties</th>
                                                            <td>Short Dress</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>Fashion has been creating well-designed collections since 2010. The brand
                                                    offers feminine designs delivering stylish separates and statement dresses
                                                    which have since evolved into a full ready-to-wear collection in which every
                                                    item is a vital part of a woman's wardrobe. The result? Cool, easy, chic
                                                    looks with youthful elegance and unmistakable signature style. All the
                                                    beautiful pieces are made in Italy and manufactured with the greatest
                                                    attention. Now Fashion extends to a range of accessories including shoes,
                                                    hats, belts and more!</p>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane" id="review">
                                            <div className="single-tab-content-item">
                                                {/* Start - Review Comment */}
                                                <ul className="comment">
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="assets/images/user/image-1.png" alt />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Kaedyn Fraser</h6>
                                                                        <ul className="review-star">
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="empty"><i className="ion-android-star" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                    </div>
                                                                </div>
                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Tempora inventore dolorem a unde modi iste odio amet,
                                                                        fugit fuga aliquam, voluptatem maiores animi dolor nulla
                                                                        magnam ea! Dignissimos aspernatur cumque nam quod sint
                                                                        provident modi alias culpa, inventore deserunt
                                                                        accusantium amet earum soluta consequatur quasi eum eius
                                                                        laboriosam, maiores praesentium explicabo enim dolores
                                                                        quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam
                                                                        officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Start - Review Comment Reply*/}
                                                        <ul className="comment-reply">
                                                            <li className="comment-reply-list">
                                                                <div className="comment-wrapper">
                                                                    <div className="comment-img">
                                                                        <img src="assets/images/user/image-2.png" alt />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="comment-content-top">
                                                                            <div className="comment-content-left">
                                                                                <h6 className="comment-name">Oaklee Odom</h6>
                                                                            </div>
                                                                            <div className="comment-content-right">
                                                                                <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="para-content">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Tempora inventore dolorem a
                                                                                unde modi iste odio amet, fugit fuga aliquam,
                                                                                voluptatem maiores animi dolor nulla magnam ea!
                                                                                Dignissimos aspernatur cumque nam quod sint
                                                                                provident modi alias culpa, inventore deserunt
                                                                                accusantium amet earum soluta consequatur quasi
                                                                                eum eius laboriosam, maiores praesentium
                                                                                explicabo enim dolores quaerat! Voluptas ad
                                                                                ullam quia odio sint sunt. Ipsam officia, saepe
                                                                                repellat. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul> {/* End - Review Comment Reply*/}
                                                    </li> {/* End - Review Comment list*/}
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="assets/images/user/image-3.png" alt />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Jaydin Jones</h6>
                                                                        <ul className="review-star">
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="fill"><i className="ion-android-star" />
                                                                            </li>
                                                                            <li className="empty"><i className="ion-android-star" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                    </div>
                                                                </div>
                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Tempora inventore dolorem a unde modi iste odio amet,
                                                                        fugit fuga aliquam, voluptatem maiores animi dolor nulla
                                                                        magnam ea! Dignissimos aspernatur cumque nam quod sint
                                                                        provident modi alias culpa, inventore deserunt
                                                                        accusantium amet earum soluta consequatur quasi eum eius
                                                                        laboriosam, maiores praesentium explicabo enim dolores
                                                                        quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam
                                                                        officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li> {/* End - Review Comment list*/}
                                                </ul> {/* End - Review Comment */}
                                                <div className="review-form">
                                                    <div className="review-form-text-top">
                                                        <h5>ADD A REVIEW</h5>
                                                        <p>Your email address will not be published. Required fields are marked
                                                            *</p>
                                                    </div>
                                                    <form action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-name">Your name <span>*</span></label>
                                                                    <input id="comment-name" type="text" placeholder="Enter your name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-email">Your Email <span>*</span></label>
                                                                    <input id="comment-email" type="email" placeholder="Enter your email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-review-text">Your review
                                                                        <span>*</span></label>
                                                                    <textarea id="comment-review-text" placeholder="Write a review" required defaultValue={""} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="btn btn-md btn-black-default-hover" type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                    </div>
                                </div> {/* End Product Details Tab Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End Product Content Tab Section */}
            {/* Start Product Default Slider Section */}
            <div className="product-default-slider-section section-top-gap-100 section-fluid">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">RELATED PRODUCTS</h3>
                                        <p>Browse the collection of our related products.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Section Content Text Area */}
                <div className="product-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-slider-default-1row default-slider-nav-arrow">
                                    {/* Slider main container */}
                                    <div className="swiper-container product-default-slider-4grid-1row">
                                        {/* Additional required wrapper */}
                                        <div className="swiper-wrapper">
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-9.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-10.jpg" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Epicuri per
                                                            lobortis</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$68</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-11.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-3.jpg" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Kaoreet
                                                            lobortis sagit</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$95.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-5.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-7.jpg" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Condimentum
                                                            posuere</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$115.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-6.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-9.jpg" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Convallis quam
                                                            sit</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$75.00 - $85.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-1.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-2.jpg" alt />
                                                    </a>
                                                    <div className="tag">
                                                        <span>sale</span>
                                                    </div>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Aliquam
                                                            lobortis</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$75.00 - $85.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-3.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-4.jpg" alt />
                                                    </a>
                                                    <div className="tag">
                                                        <span>sale</span>
                                                    </div>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Condimentum
                                                            posuere</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price"><del>$89.00</del> $80.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-5.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-6.jpg" alt />
                                                    </a>
                                                    <div className="tag">
                                                        <span>sale</span>
                                                    </div>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Cras neque
                                                            metus</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price"><del>$70.00</del> $60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--golden swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="assets/images/product/default/home-1/default-7.jpg" alt />
                                                        <img src="assets/images/product/default/home-1/default-8.jpg" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                        </div>
                                                        <div className="action-link-right">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                            <a href="wishlist.html"><i className="icon-heart" /></a>
                                                            <a href="compare.html"><i className="icon-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="content-left">
                                                        <h6 className="title"><a href="product-details-default.html">Donec eu libero
                                                            ac</a></h6>
                                                        <ul className="review-star">
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$74</span>
                                                    </div>
                                                </div>
                                            </div> {/* End Product Default Single Item */}
                                        </div>
                                    </div>
                                    {/* If we need navigation buttons */}
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Product Default Slider Section */}
        </div>

    );
}

export default Shop;