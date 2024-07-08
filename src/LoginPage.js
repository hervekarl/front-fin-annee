import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from './images/logo.png'

const Login = () => {
    return (
        <center>
            <div classNameName="container">
                <main>
                    <div>

                        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                        <div className="d-flex justify-content-center py-4">
                                            <Link to="/" className="logo d-flex align-items-center w-auto" style={{ textDecoration: 'none', border: 'none' }}>
                                                <img src={logo} alt="" width='60' height='60' />
                                                <span className="d-none d-lg-block w-4 text-success"><h1>ERP SANTÉ</h1></span>
                                            </Link>
                                        </div>


                                        <div className="card mb-3">

                                            <div className="card-body bg-dark">

                                                <div className="pt-4 pb-2">
                                                    <h5 className="card-title text-center pb-0 fs-4 text-light">Login to Your Account <br /> or create an account</h5>
                                                    <p className="text-center small">Enter your username & password to login</p>
                                                </div>

                                                <form className="row g-3 needs-validation" novalidate action='/Welcome'>

                                                    <div className="col-12">
                                                        <label for="yourUsername" className="form-label text-light">Username</label>
                                                        <div className="input-group has-validation">
                                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                            <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                            <div className="invalid-feedback text-light">Please enter your username.</div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <label for="yourPassword" className="form-label text-light">Password</label>
                                                        <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                        <div className="invalid-feedback text-light">Please enter your password!</div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                            <label className="form-check-label text-light" for="rememberMe">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100" type="submit">Login</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="small mb-0 text-light">Don't have account? <a href="pages-register.html">Create an account</a></p>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>

                                        <div className="credits">

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>
                </main>
            </div>

        </center>


    );
}

export default Login;