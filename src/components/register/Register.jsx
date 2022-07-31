import React from "react"
import { NavLink } from "react-router-dom"

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <div className="register container my-5 w-50 p-3">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="userName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="userName" className="form-label">
              Present Address
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="userName" className="form-label">
              Permanent Address
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="phone" className="form-label">
              Contact No.
            </label>
            <input
              type="tel"
              className="form-control mb-3"
              id="phone"
              aria-describedby="phone"
            />

            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
            />
            <label for="exampleConfirmtPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="confirm-password"
              className="form-control"
              id="exampleConfirm    Password1"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Submit
          </button>
          <p>
            Already Have an Account? <NavLink to="/login">Click Here</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
