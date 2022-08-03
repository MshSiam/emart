import React from "react"
import { Helmet } from "react-helmet-async"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About -Emart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container my-5 text-center">
        <h1 className="text-center">Page is Coocking</h1>
        <img
          className="my-5"
          src="https://images.unsplash.com/photo-1556908153-1055164fe2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </>
  )
}

export default About
