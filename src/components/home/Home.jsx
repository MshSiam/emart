import React from "react"
import css from "./home.css"
// import bg from "../../assets/hand-holding-shopping-bags-plain-background_23-2148286215"

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="card-img "
          alt=""
          height="750px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW ARRIVALS
            </h5>

            <p className="card-text lead fs-2">Check Out All The Trends</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
