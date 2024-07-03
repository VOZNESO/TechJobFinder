import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';


function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await UserService.login(email, password)
            console.log(userData);
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                if (userData.role === 'ADMIN') {
                    navigate('/admin');
                } else {
                    navigate('/profile');
                }
            } else {
                setError(userData.error)
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }
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
                                            <img src="assets/img/logo.png" alt="" />
                                            <span className="d-none d-lg-block">TechJobFinders</span>
                                        </Link>
                                    </div>{/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p className="text-center small">Enter your email &amp; password to login</p>
                                            </div>
                                            {error && <p className="error-message" type="color: red">{error}</p>}
                                            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="email" name="email" className="form-control" id="yourEmail"  required value={email}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                        <div className="invalid-feedback">Please enter your email.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword" required placeholder="********"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Login</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <Link to="/signup">Create an account</Link></p>
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
                                        Designed by <a href="https://github.com/duongnx03">Duongk</a>
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

export default SignIn;