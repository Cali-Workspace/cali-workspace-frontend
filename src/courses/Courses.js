import React from "react";

function Courses() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fs-1">We Give You The Most Popular Courses ✌️</h2>
              <p className="mb-0">
                We pick the best technology and help you step-by-step
              </p>
            </div>
          </div>

          <ul
            className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3"
            id="course-pills-tab"
            role="tablist"
          >
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0 active"
                id="course-pills-tab-1"
                data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-1"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-1"
                aria-selected="false"
              >
                Machine Learning
              </button>
            </li>
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-2"
                data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-2"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-2"
                aria-selected="false"
              >
                Web3
              </button>
            </li>
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-3"
                data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-3"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-3"
                aria-selected="false"
              >
                Python
              </button>
            </li>
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-4"
                data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-4"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-4"
                aria-selected="false"
              >
                Computer Vision
              </button>
            </li>
            <li className="nav-item me-2 me-sm-5">
              <button
                className="nav-link mb-2 mb-md-0"
                id="course-pills-tab-5"
                data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-5"
                type="button"
                role="tab"
                aria-controls="course-pills-tabs-5"
                aria-selected="false"
              >
                TensorFlow
              </button>
            </li>
          </ul>

          <div className="tab-content" id="course-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="course-pills-tabs-1"
              role="tabpanel"
              aria-labelledby="course-pills-tab-1"
            >
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card shadow h-100">
                    <img
                      src="assets/images/courses/4by3/03.jpg"
                      className="card-img-top"
                      alt="card-img-top"
                    />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a
                          href="/"
                          className="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="/" className="h6 fw-light mb-0">
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <h5 className="card-title fw-normal">
                        <a href="/">Create a Design System in Figma</a>
                      </h5>
                      <p className="mb-2 text-truncate-2">
                        Rooms oh fully taken by worse do. Points afraid but may
                        end afraid but may end.
                      </p>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">
                          <i className="far fa-clock text-danger me-2"></i>5h
                          56m
                        </span>
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-table text-orange me-2"></i>32
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card shadow h-100">
                    <img
                      src="assets/images/courses/4by3/07.jpg"
                      className="card-img-top"
                      alt="card-img-top"
                    />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a
                          href="/"
                          className="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="/" className="text-danger">
                          <i className="fas fa-heart"></i>
                        </a>
                      </div>
                      <h5 className="card-title fw-normal">
                        <a href="/">Deep Learning with React-Native </a>
                      </h5>
                      <p className="mb-2 text-truncate-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther
                      </p>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="far fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">
                          <i className="far fa-clock text-danger me-2"></i>18h
                          56m
                        </span>
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-table text-orange me-2"></i>99
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card shadow h-100">
                    <img
                      src="assets/images/courses/4by3/11.jpg"
                      className="card-img-top"
                      alt="card-img-top"
                    />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a
                          href="/"
                          className="badge bg-purple bg-opacity-10 text-purple"
                        >
                          All level
                        </a>
                        <a href="/" className="text-danger">
                          <i className="fas fa-heart"></i>
                        </a>
                      </div>
                      <h5 className="card-title fw-normal">
                        <a href="/">Build Responsive Websites with HTML</a>
                      </h5>
                      <p className="mb-2 text-truncate-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther
                      </p>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="far fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">
                          <i className="far fa-clock text-danger me-2"></i>15h
                          30m
                        </span>
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-table text-orange me-2"></i>68
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card shadow h-100">
                    <img
                      src="assets/images/courses/4by3/12.jpg"
                      className="card-img-top"
                      alt="card-img-top"
                    />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a
                          href="/"
                          className="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="/" className="h6 fw-light mb-0">
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <h5 className="card-title fw-normal">
                        <a href="/">Build Websites with CSS</a>
                      </h5>
                      <p className="text-truncate-2 mb-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther
                      </p>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star text-warning"></i>
                        </li>
                        <li className="list-inline-item me-0 small">
                          <i className="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                        <span className="h6 fw-light mb-0">
                          <i className="far fa-clock text-danger me-2"></i>36h
                          30m
                        </span>
                        <span className="h6 fw-light mb-0">
                          <i className="fas fa-table text-orange me-2"></i>72
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
