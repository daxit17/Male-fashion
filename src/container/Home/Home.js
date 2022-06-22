import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Grid } from "swiper";

function Home(props) {
  return (
    <div>

      {/* Start Hero Slider Section*/}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        <div className="hero-slider-section">
          {/* Slider main container */}
          <div className="hero-slider-active swiper-container">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Start Hero Single Slider Item */}
              <div className="hero-single-slider-item swiper-slide">
                {/* Hero Slider Image */}
                <SwiperSlide>
                  <div className="hero-slider-bg">
                    <img
                      src="assets/images/hero-slider/home-1/hero-slider-1.jpg"
                      alt
                    />
                  </div>
                  {/* Hero Slider Content */}
                  <div className="hero-slider-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-auto">
                          <div className="hero-slider-content">
                            <h4 className="subtitle">New collection</h4>
                            <h2 className="title">
                              Best Of NeoCon <br /> Gold Award{" "}
                            </h2>
                            <a
                              href="product-details-default.html"
                              className="btn btn-lg btn-outline-golden"
                            >
                              shop now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>{" "}
              {/* End Hero Single Slider Item */}
              {/* Start Hero Single Slider Item */}
              <div className="hero-single-slider-item swiper-slide">
                {/* Hero Slider Image */}
                <SwiperSlide>

                  <div className="hero-slider-bg">
                    <img
                      src="assets/images/hero-slider/home-1/hero-slider-2.jpg"
                      alt
                    />
                  </div>
                  {/* Hero Slider Content */}
                  <div className="hero-slider-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-auto">
                          <div className="hero-slider-content">
                            <h4 className="subtitle">New collection</h4>
                            <h2 className="title">
                              Luxy Chairs <br /> Design Award{" "}
                            </h2>
                            <a
                              href="product-details-default.html"
                              className="btn btn-lg btn-outline-golden"
                            >
                              shop now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </div>{" "}
              {/* End Hero Single Slider Item */}
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination active-color-golden" />
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev d-none d-lg-block" />
            <div className="swiper-button-next d-none d-lg-block" />
          </div>
        </div>
      </Swiper>


      {/* Start Service Section */}
      <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
          <div className="container">
            <div className="row">
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-1.png" alt />
                  </div>
                  <div className="content">
                    <h6 className="title">FREE SHIPPING</h6>
                    <p>
                      Get 10% cash back, free shipping, free returns, and more
                      at 1000+ top retailers!
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-2.png" alt />
                  </div>
                  <div className="content">
                    <h6 className="title">30 DAYS MONEY BACK</h6>
                    <p>
                      100% satisfaction guaranteed, or get your money back
                      within 30 days!
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-3.png" alt />
                  </div>
                  <div className="content">
                    <h6 className="title">SAFE PAYMENT</h6>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-4.png" alt />
                  </div>
                  <div className="content">
                    <h6 className="title">LOYALTY CUSTOMER</h6>
                    <p>
                      Card for the other 30% of their purchases at a rate of 1%
                      cash back.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
            </div>
          </div>
        </div>
      </div>


      {/* Start Banner Section */}
      <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="row mb-n6">
              <div className="col-lg-6 col-12 mb-6">
                {/* Start Banner Single Item */}
                <div
                  className="banner-single-item banner-style-1 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="image">
                    <img
                      src="assets/images/banner/banner-style-1-img-1.jpg"
                      alt
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Mini rechargeable Table Lamp - E216
                    </h4>
                    <h5 className="sub-title">We design your home</h5>
                    <a
                      href="product-details-default.html"
                      className="btn btn-lg btn-outline-golden icon-space-left"
                    >
                      <span className="d-flex align-items-center">
                        discover now <i className="ion-ios-arrow-thin-right" />
                      </span>
                    </a>
                  </div>
                </div>
                {/* End Banner Single Item */}
              </div>
              <div className="col-lg-6 col-12 mb-6">
                <div className="row mb-n6">
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay={0}
                    >
                      <div className="image">
                        <img
                          src="assets/images/banner/banner-style-2-img-1.jpg"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Kitchen <br />
                          utensils
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="image">
                        <img
                          src="assets/images/banner/banner-style-2-img-2.jpg"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Sofas and <br />
                          Armchairs
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay={0}
                    >
                      <div className="image">
                        <img
                          src="assets/images/banner/banner-style-2-img-3.jpg"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Chair &amp; Bar
                          <br />
                          stools
                        </h4>
                        <a
                          href="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="image">
                        <img
                          src="assets/images/banner/banner-style-2-img-4.jpg"
                          alt
                        />
                      </div>
                      <div className="content">
                        <h4>
                          Interior <br />
                          lighting
                        </h4>
                        <a href="product-details-default.html">
                          <span>Shop now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Start Product Default Slider Section */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid">
        {/* Start Section Content Text Area */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">THE NEW ARRIVALS</h3>
                    <p>Preorder now to receive exclusive deals &amp; gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Section Content Text Area */}
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper container"
        >
          <div
            className="product-wrapper"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="product-slider-default-2rows default-slider-nav-arrow">
                    {/* Slider main container */}
                    <div className="swiper-container product-default-slider-4grid-2row">
                      {/* Additional required wrapper */}
                      <div className="swiper-wrapper">
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-1.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-2.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Aliquam lobortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-3.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-4.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Condimentum posuere
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">
                                  <del>$89.00</del> $80.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-6.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Cras neque metus
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">
                                  <del>$70.00</del> $60.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-7.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-8.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Donec eu libero ac
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$74</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-9.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-10.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Epicuri per lobortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$68</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-11.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-3.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Kaoreet lobortis sagit
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$95.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-7.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Condimentum posuere
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$115.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-6.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-9.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Convallis quam sit
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-3.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Dolorum fuga eget
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$71.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-4.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-7.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Duis pulvinar obortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">
                                  <del>$84.00</del> $75.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-8.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Dolorum fuga eget
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$90</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-10.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-6.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Duis pulvinar obortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$86.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
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
        </Swiper>
      </div>


      {/* Start Banner Section */}
      <div className="banner-section section-top-gap-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              {/* Start Banner Single Item */}
              <div
                className="banner-single-item banner-style-3 banner-animation img-responsive"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="image">
                  <img
                    className="img-fluid"
                    src="assets/images/banner/banner-style-3-img-1.jpg"
                    alt
                  />
                </div>
                <div className="content">
                  <h3 className="title">Modern Furniture Basic Collection</h3>
                  <h5 className="sub-title">
                    We design your home more beautiful
                  </h5>
                  <a
                    href="product-details-default.html"
                    className="btn btn-lg btn-outline-golden icon-space-left"
                  >
                    <span className="d-flex align-items-center">
                      discover now <i className="ion-ios-arrow-thin-right" />
                    </span>
                  </a>
                </div>
              </div>
              {/* End Banner Single Item */}
            </div>
          </div>
        </div>
      </div>


      {/* Start Product Default Slider Section */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid section-inner-bg">
        {/* Start Section Content Text Area */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">BEST SELLERS</h3>
                    <p>Add our best sellers to your weekly lineup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Section Content Text Area */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper container"
        >
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
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-9.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-10.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Epicuri per lobortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$68</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-11.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-3.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Kaoreet lobortis sagit
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$95.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-7.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Condimentum posuere
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$115.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-6.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-9.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Convallis quam sit
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-1.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-2.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Aliquam lobortis
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-3.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-4.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Condimentum posuere
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">
                                  <del>$89.00</del> $80.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-5.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-6.jpg"
                                  alt
                                />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Cras neque metus
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">
                                  <del>$70.00</del> $60.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--golden swiper-slide">
                            <div className="image-box">
                              <a
                                href="product-details-default.html"
                                className="image-link"
                              >
                                <img
                                  src="assets/images/product/default/home-1/default-7.jpg"
                                  alt
                                />
                                <img
                                  src="assets/images/product/default/home-1/default-8.jpg"
                                  alt
                                />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="action-link-right">
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"
                                  >
                                    <i className="icon-magnifier" />
                                  </a>
                                  <a href="wishlist.html">
                                    <i className="icon-heart" />
                                  </a>
                                  <a href="compare.html">
                                    <i className="icon-shuffle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <a href="product-details-default.html">
                                    Donec eu libero ac
                                  </a>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="fill">
                                    <i className="ion-android-star" />
                                  </li>
                                  <li className="empty">
                                    <i className="ion-android-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$74</span>
                              </div>
                            </div>
                          </div>{" "}
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
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
        </Swiper>
      </div>


      {/* Start Banner Section */}
      <div className="banner-section">
        <div className="banner-wrapper clearfix">
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-1.jpg"
                alt
              />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Bar Stool</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </a>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-2.jpg"
                alt
              />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Armchairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </a>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-3.jpg"
                alt
              />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">lighting</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </a>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-4.jpg"
                alt
              />
            </div>
            <a href="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Easy chairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </a>
          </div>
          {/* End Banner Single Item */}
        </div>
      </div>


      {/* Start Blog Slider Section */}
      <div className="blog-default-slider-section section-top-gap-100 section-fluid">
        {/* Start Section Content Text Area */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">THE LATEST BLOGS</h3>
                    <p>
                      Present posts in a best way to highlight interesting
                      moments of your blog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Section Content Text Area */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper container"
        >
          <div className="blog-wrapper" data-aos="fade-up" data-aos-delay={200}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="blog-default-slider default-slider-nav-arrow">
                    {/* Slider main container */}
                    <div className="swiper-container blog-slider">
                      {/* Additional required wrapper */}
                      <div className="swiper-wrapper">
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-1.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post One
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="blog-single-sidebar-left.html"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a href="#" className="date">
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-2.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post Two
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="#"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a
                                  href="blog-single-sidebar-left.html"
                                  className="date"
                                >
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-3.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post Three
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="blog-single-sidebar-left.html"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a href="#" className="date">
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-4.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post Four
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="blog-single-sidebar-left.html"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a href="#" className="date">
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-5.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post Five
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="blog-single-sidebar-left.html"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a href="#" className="date">
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
                        {/* Start Product Default Single Item */}
                        <SwiperSlide>
                        <div className="blog-default-single-item blog-color--golden swiper-slide">
                          <div className="image-box">
                            <a
                              href="blog-single-sidebar-left.html"
                              className="image-link"
                            >
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-grid-home-1-img-6.jpg"
                                alt
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="blog-single-sidebar-left.html">
                                Blog Post Six
                              </a>
                            </h6>
                            <p>
                              Donec vitae hendrerit arcu, sit amet faucibus nisl.
                              Cras pretium arcu ex. Aenean posuere libero eu augue
                              condimentum rhoncus. Praesent
                            </p>
                            <div className="inner">
                              <a
                                href="blog-single-sidebar-left.html"
                                className="read-more-btn icon-space-left"
                              >
                                Read More{" "}
                                <span>
                                  <i className="ion-ios-arrow-thin-right" />
                                </span>
                              </a>
                              <div className="post-meta">
                                <a href="#" className="date">
                                  24 Apr
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        {/* End Product Default Single Item */}
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
        </Swiper>
      </div>


      {/* Start Instagramr Section */}
      <div className="instagram-section section-top-gap-100 section-inner-bg">
        <div
          className="instagram-wrapper"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instagram-box">
                  <div id="instagramFeed" className="instagram-grid clearfix">
                    <a
                      href="https://www.instagram.com/p/CCFOZKDDS6S/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-1.jpg" alt />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOYDNjWF5/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-2.jpg" alt />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOXH6D-zQ/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-3.jpg" alt />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOVcrDDOo/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-4.jpg" alt />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOUajjABP/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-5.jpg" alt />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CCFOS2MDmjj/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src="assets/images/instagram/instagram-6.jpg" alt />
                    </a>
                  </div>
                  <div className="instagram-link">
                    <h5>
                      <a
                        href="https://www.instagram.com/myfurniturecom/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HONOTEMPLATE
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <button class="material-scrolltop" type="button"></button>

    </div>
  );
}

export default Home;


