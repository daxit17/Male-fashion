import React from 'react';

function Blog(props) {
    return (
        <div>
            {/* ...:::: Start Breadcrumb Section:::... */}
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Blog Grid - Full Width</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="blog-grid-sidebar-left.html">Blog</a></li>
                                            <li className="active" aria-current="page">Blog Full Width</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...:::: Start Blog List Section:::... */}
            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-wrapper">
                                <div className="row mb-n6">
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="image-box">
                                                <a href="blog-single-sidebar-left.html" className="image-link">
                                                    <img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-1.jpg" alt />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog image post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="blog-list-slider-arrow">
                                                {/* Slider main container */}
                                                <div className="blog-list-slider swiper-container">
                                                    {/* Additional required wrapper */}
                                                    <div className="swiper-wrapper">
                                                        {/* Slides */}
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-4.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-2.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-3.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-1.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-5.jpg" alt />
                                                        </div>
                                                    </div>
                                                    {/* If we need navigation buttons */}
                                                    <div className="swiper-button-prev" />
                                                    <div className="swiper-button-next" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog Slider post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={400}>
                                            <div className="blog-video-box">
                                                <img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-5.jpg" alt />
                                                <a href="https://youtu.be/MKjhBO2xQzg" className="video-play-btn" data-autoplay="true" data-vbtype="video">
                                                    <i className="fa fa-youtube-play" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog video post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="image-box">
                                                <a href="blog-single-sidebar-left.html" className="image-link">
                                                    <img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-2.jpg" alt />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog image post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="image-box">
                                                <a href="blog-single-sidebar-left.html" className="image-link">
                                                    <img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-5.jpg" alt />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog image post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 mb-6">
                                        {/* Start Product Default Single Item */}
                                        <div className="blog-list blog-grid-single-item blog-color--golden" data-aos="fade-up" data-aos-delay={400}>
                                            <div className="blog-list-slider-arrow">
                                                {/* Slider main container */}
                                                <div className="blog-list-slider swiper-container">
                                                    {/* Additional required wrapper */}
                                                    <div className="swiper-wrapper">
                                                        {/* Slides */}
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-5.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-2.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-3.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-1.jpg" alt />
                                                        </div>
                                                        <div className="blog-list-slider-img swiper-slide"><img className="img-fluid" src="assets/images/blog/blog-grid-home-1-img-4.jpg" alt />
                                                        </div>
                                                    </div>
                                                    {/* If we need navigation buttons */}
                                                    <div className="swiper-button-prev" />
                                                    <div className="swiper-button-next" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <ul className="post-meta">
                                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                                </ul>
                                                <h6 className="title"><a href="blog-single-sidebar-left.html"> Blog Slider post</a>
                                                </h6>
                                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                    Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                                <a href="#" className="read-more-btn icon-space-left">Read More <span className="icon"><i className="ion-ios-arrow-thin-right" /></span></a>
                                            </div>
                                        </div>
                                        {/* End Product Default Single Item */}
                                    </div>
                                </div>
                            </div>
                            {/* Start Pagination */}
                            <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
                                <ul>
                                    <li><a className="active" href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i className="ion-ios-skipforward" /></a></li>
                                </ul>
                            </div> {/* End Pagination */}
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Blog List Section:::... */}
        </div>

    );
}

export default Blog;