import React from "react"
import { Helmet } from "react-helmet-async"
import Products from "../products/Products"
import css from "./home.css"
// import bg from "../../assets/hand-holding-shopping-bags-plain-background_23-2148286215"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home -Emart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src="https://img.freepik.com/premium-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000"
            className="card-img img-fluid "
            alt=""
            height="750px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW ARRIVALS
              </h5>

              <p className="card-text lead fs-2">Check Out All The Trends</p>
              <p className="card-text lead fs-2">
                Get up to 25% discount in any products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Products></Products>
    </>
  )
}

export default Home
