const React = require('react')
const Layout = require('./Layout')

const LoginPage = ({title}) => {
   return (
      <Layout title={title}>
        <div className="card">
            <div className="card-body p-5">
                <form>

                    <div className="form-outline mb-4">
                        <input type="text" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>


                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>


                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="/reg">Register</a></p>
                    </div>
                </form>
            </div>
        </div>

    </Layout>
   )
}

module.exports = LoginPage;