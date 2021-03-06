import React from "react";

function Footer() {
  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="row g-4"></div>

          <hr className="mt-4 mb-0" />

          <div className="py-3">
            <div className="container px-0">
              <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
                <div className="text-primary-hover">
                  Copyrights{" "}
                  <a href="/" className="text-body">
                    ©2022 CaliW.
                  </a>
                  . All rights reserved.
                </div>
                <div className="mt-3 mt-md-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <div className="dropup mt-0 text-center text-sm-end">
                        <a
                          className="dropdown-toggle nav-link"
                          href="/"
                          role="button"
                          id="languageSwitcher"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-globe me-2"></i>Language
                        </a>
                        <ul
                          className="dropdown-menu min-w-auto"
                          aria-labelledby="languageSwitcher"
                        >
                          <li>
                            <a className="dropdown-item me-4" href="/">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/uk.svg"
                                alt=""
                              />
                              English
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="/">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/gr.svg"
                                alt=""
                              />
                              German
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="/">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/sp.svg"
                                alt=""
                              />
                              French
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link" href="/">
                        Terms of use
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link pe-0" href="/">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
