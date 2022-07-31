import React from "react"
import css from "./nav.css"
import { useSelector } from "react-redux/es/exports"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-5  py-3 shadow-sm bg-white">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Emart
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-2"> Login</i>
            </NavLink>
            <NavLink to="/regsiter" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-2"> Register</i>
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-2"> Cart ({state.length})</i>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Emart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"> Login</i>
              </NavLink>
              <NavLink to="/regsiter" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-2"> Register</i>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2">
                  {" "}
                  Cart ({state.length})
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  )
}

export default Navbar
