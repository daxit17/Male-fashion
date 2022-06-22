import React from "react";

function Footer(props) {
  return (
    <footer className="footer-section footer-bg">
      <div className="footer-wrapper">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row mb-n6">
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div
                  className="footer-widget-single-item footer-widget-color--golden"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <h5 className="title">INFORMATION</h5>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div
                  className="footer-widget-single-item footer-widget-color--golden"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h5 className="title">MY ACCOUNT</h5>
                  <ul className="footer-nav">
                    <li>
                      <a href="my-account.html">My account</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="faq.html">Frequently Questions</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div
                  className="footer-widget-single-item footer-widget-color--golden"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <h5 className="title">CATEGORIES</h5>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Decorative</a>
                    </li>
                    <li>
                      <a href="#">Kitchen utensils</a>
                    </li>
                    <li>
                      <a href="#">Chair &amp; Bar stools</a>
                    </li>
                    <li>
                      <a href="#">Sofas and Armchairs</a>
                    </li>
                    <li>
                      <a href="#">Interior lighting</a>
                    </li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div
                  className="footer-widget-single-item footer-widget-color--golden"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <h5 className="title">ABOUT US</h5>
                  <div className="footer-about">
                    <p>
                      We are a team of designers and developers that create high
                      quality Magento, Prestashop, Opencart.
                    </p>
                    <address className="address">
                      <span>Address: Your address goes here.</span>
                      <span>Email: demo@example.com</span>
                    </address>
                  </div>
                </div>
                {/* End Footer Single Item */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Top */}
        {/* Start Footer Center */}
        <div className="footer-center">
          <div className="container">
            <div className="row mb-n6">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-6">
                <div
                  className="footer-social"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <h4 className="title">FOLLOW US</h4>
                  <ul className="footer-social-link">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6 mb-6">
                <div
                  className="footer-newsletter"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h4 className="title">DON'T MISS OUT ON THE LATEST</h4>
                  <div className="form-newsletter">
                    <form action="#" method="post">
                      <div className="form-fild-newsletter-single-item input-color--golden">
                        <input
                          type="email"
                          placeholder="Your email address..."
                          required
                        />
                        <button type="submit">SUBSCRIBE!</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Center */}
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
              <div className="col-auto mb-6">
                <div className="footer-copyright">
                  <p className="copyright-text">
                    © 2021 <a href="index.html">therankme</a>. Made with{" "}
                    <i className="fa fa-heart text-danger" /> by{" "}
                    <a href="https://therankme.com/" target="_blank">
                      therankme
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-auto mb-6">
                <div className="footer-payment">
                  <div className="image">
                    <img src="assets/images/company-logo/payment.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
      </div>
    </footer>
  );
}

export default Footer;
