const React = require('react')
const Layout = require('./Layout')

const MainPage = ({title}) => {
   return (
      <Layout title={title}>
         <a href= '/'>Home</a>
         <a href='/profil'>Login</a>
         <a href='registr'>Register</a>
      </Layout>
   )
}

module.exports = MainPage;