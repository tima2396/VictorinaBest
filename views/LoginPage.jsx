const React = require('react')
const Layout = require('./Layout')

const LoginPage = ({ title }) => {
    return (
        <Layout title={title}>
            <div className="card m-3">
                <div className="card-body p-5">
                    <form id='formLog' method="post" action='/log'>

                        <div className="form-outline mb-4">
                            <input name='login' type="text" id="form2Example1" className="form-control" />
                            <label className="form-label" htmlFor="form2Example1">Email address</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input name='password' type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>

                        <div className="err-log" />

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="/reg">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <script defer src='js/login.js'></script>
        </Layout>
    )
}

module.exports = LoginPage;