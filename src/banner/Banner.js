import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <>
      {" "}
      <section className="position-relative overflow-hidden pt-5 pt-lg-3">
        <section className="pt-6 pt-md-11 pb-8 pb-md-9">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-md-12 col-xl-10 text-center">
                <h4 className="display-4">
                  Learn{" "}
                  <Typed
                    strings={[
                      "ML",
                      "Hacking",
                      "C++",
                      "Web3",
                      "Python",
                      "OpenCV",
                      "TensorFlow",
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                  />
                </h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 text-center">
                <p className="lead">
                  Kickstart your career by learning from the expert with various
                  learning path. Your life, Your Rules!
                </p>

                <a className="btn btn-primary lift" href="/">
                  Yeah, I'm In!
                </a>
                <a className="btn btn-white lift ms-3" href="docs/index.html">
                  <span className="d-sm-none">Docs</span>
                  <span className="d-none d-sm-inline-block">Courses</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="py-0 py-xl-5">
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-15 rounded-3">
                <span className="display-6 lh-1 text-warning mb-0">
                  <i className="fas fa-tv"></i>
                </span>
                <div className="ms-4 h6 fw-normal">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-delay="200"
                    >
                      18
                    </h5>
                  </div>
                  <p className="mb-0">Workshops/Events</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
                <span className="display-6 lh-1 text-warning mb-0">
                  <i className="fas fa-tv"></i>
                </span>
                <div className="ms-4 h6 fw-normal">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-delay="200"
                    >
                      6
                    </h5>
                  </div>
                  <p className="mb-0">Online Courses</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
                <span className="display-6 lh-1 text-purple mb-0">
                  <i className="fas fa-user-graduate"></i>
                </span>
                <div className="ms-4 h6 fw-normal">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="60"
                      data-purecounter-delay="200"
                    >
                      1
                    </h5>
                    <span className="mb-0 h5">K+</span>
                  </div>
                  <p className="mb-0">Online Students</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                <span className="display-6 lh-1 text-info mb-0">
                  <i className="bi bi-patch-check-fill"></i>
                </span>
                <div className="ms-4 h6 fw-normal">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="6"
                      data-purecounter-delay="300"
                    >
                      1
                    </h5>
                  </div>
                  <p className="mb-0">Certified Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Banner;
