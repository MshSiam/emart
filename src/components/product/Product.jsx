import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import Skeleton from "react-loading-skeleton"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setIsLoading(false)
    }
    getProduct()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} width={300} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton
            height={50}
            width={100}
            style={{ marginLeft: 6 }}></Skeleton>
        </div>
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 my-5">
          <h4 className="text-uppercase text-black-50">{product.category} </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating : {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-3">$ {product.price}</h3>
          <p className="lead text-dark">{product.description}</p>
          <div className="btn btn-outline-dark mx-2">Add to Cart</div>
          <NavLink to="/cart" className="btn btn-outline-dark">
            Go to Cart
          </NavLink>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row">{isLoading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  )
}

export default Product
