const React = require('react')
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const ThemeTable = require('./ThemeTable');


const Profil = ({ title, user, dbTotal, dbUser, dbTheme, totalFrom1, totalFrom2, totalFrom3, }) => {
   return (
      <Layout title={title}>
         <Navbar user={user} />
         <h2>{`${dbUser.login}`}</h2>

         <div className = 'conteiner m-5'>
         <h3>{`${dbTheme[0].name}`}</h3>
         <table className="table">
            <thead>
               <tr>
                  <th scope='col'>#</th>
                  <th scope="col">{'Date'}</th>
                  <th scope="col">{'Total questions'}</th>
                  <th scope="col">{'Correct answers'}</th>
                  <th scope="col">{'Total Score'}</th>
               </tr>
            </thead>
            {totalFrom1.map((total, index) => (

               <tbody key={index}>
                  <tr>
                     <th scope="row">{`${index + 1}`}</th>
                     <td>{`${total.createdAt}`}</td>
                     <td>{'5'}</td>
                     <td>{`${total.score}`}</td>
                     <td>{`${total.score * 10}`}</td>
                  </tr>
               </tbody>

            ))}
         </table>
         </div>
         
         <div className = 'conteiner m-5'>
         <h3>{`${dbTheme[1].name}`}</h3>
         <table className="table">
            <thead>
               <tr>
                  <th scope='col'>#</th>
                  <th scope="col">{'Date'}</th>
                  <th scope="col">{'Total questions'}</th>
                  <th scope="col">{'Correct answers'}</th>
                  <th scope="col">{'Total Score'}</th>
               </tr>
            </thead>
            {totalFrom2.map((total, index) => (

               <tbody key={index}>
                  <tr>
                     <th scope="row">{`${index + 1}`}</th>
                     <td>{`${total.createdAt}`}</td>
                     <td>{'5'}</td>
                     <td>{`${total.score}`}</td>
                     <td>{`${total.score * 10}`}</td>
                  </tr>
               </tbody>

            ))}
         </table>
         </div>
                  
         <div className = 'conteiner m-5'>
         <h3>{`${dbTheme[2].name}`}</h3>
         <table className="table">
            <thead>
               <tr>
                  <th scope='col'>#</th>
                  <th scope="col">{'Date'}</th>
                  <th scope="col">{'Total questions'}</th>
                  <th scope="col">{'Correct answers'}</th>
                  <th scope="col">{'Total Score'}</th>
               </tr>
            </thead>
            {totalFrom3.map((total, index) => (

               <tbody key={index}>
                  <tr>
                     <th scope="row">{`${index + 1}`}</th>
                     <td>{`${total.createdAt}`}</td>
                     <td>{'5'}</td>
                     <td>{`${total.score}`}</td>
                     <td>{`${total.score * 10}`}</td>
                  </tr>
               </tbody>

            ))}
         </table>
         </div>
      </Layout>
   )
}

module.exports = Profil;