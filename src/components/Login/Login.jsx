import React from "react"
import { Helmet } from "react-helmet-async"
import { NavLink } from "react-router-dom"

function Login() {
  return (
    <>
      <Helmet>
        <title>Login -Emart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container my-5 w-50 p-5">
        <form className="login-form">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <p>
            <a className="text-danger" href="">
              Forget Password?
            </a>{" "}
          </p>
          <button type="submit" className="btn btn-primary w-100 my-3 ">
            Submit
          </button>
          <p>
            Not Have an Account? <NavLink to="/register">Click Here</NavLink>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
