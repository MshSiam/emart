import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import css from "./product.css"
import { NavLink } from "react-router-dom"

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(true)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat)
    setFilter(updateList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => {
              setFilter()
            }}>
            All
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => {
              filterProduct("men's clothing")
            }}>
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => {
              filterProduct("women's clothing")
            }}>
            Women's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => {
              filterProduct("jewelery")
            }}>
            Jwelery
          </div>
          <div
            className="btn btn-outline-dark me-2 mb-2"
            onClick={() => {
              filterProduct("electronics")
            }}>
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3  my-5">
                <div className="card h-100 text-center  p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="product image"
                    height="260px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 sss">
                      {product.title.slice(0, 10)}...
                    </h5>
                    <p className="card-text ppp lead fw-bold">
                      $ {product.price}
                    </p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-primary">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  )
}

export default Products
