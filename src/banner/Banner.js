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
                <h4 className="display-3">
                  Learn{" "}
                  <Typed
                    strings={[
                      "Machine Learning",
                      "Data Science",
                      "Ethical Hacking",
                      "Programming",
                      "Web3",
                      "Python",
                      "Computer Vision",
                      "TensorFlow",
                    ]}
                    typeSpeed={70}
                    backSpeed={50}
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
    </>
  );
}

export default Banner;
