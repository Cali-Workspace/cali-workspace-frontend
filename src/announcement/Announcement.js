import React from "react";

function Announcement() {
  return (
    <>
      <section className="pt-0 pt-lg-5">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="bg-info p-4 p-sm-5 rounded-3">
                <div className="row position-relative">
                  <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                    <svg width="141px" height="141px">
                      <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                    </svg>
                  </figure>
                  <div className="col-11 mx-auto position-relative">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <h3 className="text-white">Early Bird!</h3>
                        <p className="text-white mb-3 mb-lg-0">
                          Speedily say has suitable disposal add boy. On forth
                          doubt miles of child. Exercise joy man children
                          rejoiced. Yet uncommonly his ten who diminution
                          astonished.
                        </p>
                      </div>
                      <div className="col-lg-5 text-lg-end">
                        <a href="/" className="btn btn-outline-warning mb-0">
                          Start Learning Today.
                        </a>
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

export default Announcement;
