import React, { useEffect, useState } from "react"

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
    return <>Loading .....</>
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <div className="btn btn-outline-dark me-2">All</div>
          <div className="btn btn-outline-dark me-2">Men's Clothing</div>
          <div className="btn btn-outline-dark me-2">Women's Clothing</div>
          <div className="btn btn-outline-dark me-2">Jwelery Clothing</div>
          <div className="btn btn-outline-dark me-2">Electronics Clothing</div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card" key={product.id}>
                  <img src={product.image} className="card-img-top" alt="..." />
                  {product.title}
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
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
