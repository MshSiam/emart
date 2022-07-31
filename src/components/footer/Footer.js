import React from "react"

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/seam.kenway"
              className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
            </a>
            {/* <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a> */}
            <a target="_blank" href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a target="_blank" href="" className="me-4 text-reset">
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/MshSiam"
              className="me-4 text-reset">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bi bi-gem me-3"></i>EMART
                </h6>
                <p>
                  Shopping has almost become an art, and not everyone has the
                  talent to buy the right things. As your shopping buddies grow,
                  it is always better to have some quotes about shopping handy.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house me-3"></i> Brahmanbaria, Ta Road,
                  Bangladesh
                </p>
                <p>
                  <i className="bi bi-envelope me-3"></i>
                  siyamkenway@gmail.com
                </p>
                <p>
                  <i className="bi bi-phone me-3"></i> +880 1765871554
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2022 Copyright :
          <a
            target="_blank"
            className="text-reset fw-bold"
            href="https://www.linkedin.com/in/muhammad-siam-77703520b/">
            {" "}
            Muhammad Siam
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
