import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutAction } from "../../Redux/Actions/Auth_Actions";
import Alert from "../Alert/Alert";

function Header(props) {

  let auth = useSelector(state => state.auth);

  let dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutAction());
  }

  return (
    <header className="header-section d-none d-xl-block">
      <div className="header-wrapper">
        <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-logo">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo_black.png" alt />
                    </a>
                  </div>
                </div>
                <div className="main-menu menu-color--black menu-hover-color--golden">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <NavLink className="active main-menu-link" to="/" exact>
                          Home
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <NavLink to='/Blog' exact>
                          Blog
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Pages <i className="fa fa-angle-down" /></a>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/products_admin">Products-AdminPanel</NavLink>
                          </li>
                          <li>
                            <NavLink to="/Products" exact>Products</NavLink>
                          </li>
                          <li>
                            <NavLink to="/categories_admin">categories-AdminPanel</NavLink>
                          </li>
                          <li>
                            <NavLink to="/categories">categories</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to='/About' exact>About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to='/Contact' exact>Contact Us</NavLink>
                      </li>
                      <li>
                        {
                          auth.user === null ?
                            <NavLink to='/Login' exact>Login</NavLink>
                            :
                            <NavLink to='/Login' exact onClick={() => handleLogOut()}>LogOut</NavLink>

                        }
                      </li>
                    </ul>
                  </nav>
                </div>
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
                    <a href="#offcanvas-about" class="offacnvas offside-about offcanvas-toggle">
                      <i class="icon-menu"></i>
                    </a>
                  </li>
                </ul>
                <Alert />
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
