import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header-section d-none d-xl-block">
      <div className="header-wrapper">
        <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                {/* Start Header Logo */}
                <div className="header-logo">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo_black.png" alt />
                    </a>
                  </div>
                </div>
                {/* End Header Logo */}
                {/* Start Header Main Menu */}
                <div className="main-menu menu-color--black menu-hover-color--golden">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <NavLink className="active main-menu-link" to="/" exact>
                          Home
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <NavLink to='/Products' exact>
                          Products
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <NavLink to='/Blog' exact>
                          Blog
                        </NavLink>
                      </li>
                      <li className="has-dropdown has-megaitem">
                        <NavLink to='/Data' exact>
                          Data 
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/About' exact>About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to='/Contact' exact>Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to='/Login' exact>Login</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* End Header Main Menu Start */}
                {/* Start Header Action Link */}
                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li>
                    <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                      <i className="icon-heart" />
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                      <i className="icon-bag" />
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#search">
                      <i className="icon-magnifier" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#offcanvas-about"
                      className="offacnvas offside-about offcanvas-toggle"
                    >
                      <i className="icon-menu" />
                    </a>
                  </li>
                </ul>
                {/* End Header Action Link */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
