import React from "react";

function Register() {
  return (
    <>
      <div className="container-lg d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100 py-10 py-md-12 mt-n1">
          <div className="col-12 col-md-7 col-lg-5 text-center">
            <h1 className="display-3 mb-4">Register</h1>

            <p className="text-muted">
              We will send you registration link through your email
            </p>

            <form className="mb-6">
              <div className="form-group">
                <label className="visually-hidden" for="authEmail">
                  Your email
                </label>
                <input
                  className="form-control mb-3"
                  id="authEmail"
                  type="email"
                  placeholder="Your email"
                />
              </div>

              <button className="btn w-100 btn-primary">Register</button>
            </form>

            <a className="fs-sm" href="password-reset.html">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
