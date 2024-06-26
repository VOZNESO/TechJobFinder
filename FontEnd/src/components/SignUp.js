import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
    return (
        <div>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <Link to="/" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt />
                                            <span className="d-none d-lg-block">TechJobFinders</span>
                                        </Link>
                                    </div>{/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-6">
                                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                                    <input type="text" name="firstName" className="form-control" id="firstName" required />
                                                    <div className="invalid-feedback">Please, enter your first name!</div>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                                    <input type="text" name="lastName" className="form-control" id="lastName" required />
                                                    <div className="invalid-feedback">Please, enter your last name!</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Email</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="email" name="email" className="form-control" id="yourEmail" required />
                                                        <div className="invalid-feedback">Please enter a valid Email address!</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="terms" type="checkbox" id="acceptTerms" required />
                                                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Already have an account? <Link to="/signin">Log in</Link></p>
                                                </div>
                                                <div className="col-12 d-flex align-items-center my-2">
                                                    <hr className="flex-grow-1" />
                                                    <span className="px-2">or</span>
                                                    <hr className="flex-grow-1" />
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid gap-2">
                                                        <button className="btn btn-outline-danger w-100" type="button">
                                                            <i className="bi bi-google"></i> Login with Google
                                                        </button>
                                                        <button className="btn btn-outline-primary w-100" type="button">
                                                            <i className="bi bi-facebook"></i> Login with Facebook
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        Designed by <a href="https://github.com/duongnx03">DuongNX</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>{/* End #main */}
        </div>
    );
}

export default SignUp;
