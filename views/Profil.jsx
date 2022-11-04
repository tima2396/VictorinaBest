const React = require('react')
const Layout = require('./Layout');
const Navbar = require('./Navbar');


const Profil = ({ title, user, dbTotal, dbUser }) => {
   return (
      <Layout title={title}>
         <Navbar user={user} />
         <h2>{`${dbUser}`}</h2>
         {/* <div className = 'conteiner m-5'>
         <h3>{'Theme 1'}</h3>
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
            {arr.map((obj, id) => (
               <tbody key={id}>
                  <tr>
                     <th scope="row">{id + 1}</th>
                     <td>{obj.date}</td>
                     <td>{obj.totalQwestion}</td>
                     <td>{obj.correctAnswer}</td>
                     <td>{obj.totalScore}</td>
                  </tr>
               </tbody>
            ))}
         </table>
         </div>
         
         <div className = 'conteiner m-5'>
         <h3>{'Theme 2'}</h3>
         <table className='table'>
            <thead>
               <tr>
                  <th scope='col'>#</th>
                  <th>{'Date'}</th>
                  <th>{'Total questions'}</th>
                  <th>{'Correct answers'}</th>
                  <th>{'Total Score'}</th>
               </tr>
            </thead>
            {arr.map((obj, id) => (
               <tbody key={id}>
                  <tr>
                     <th scope="row">{id + 1}</th>
                     <td>{obj.date}</td>
                     <td>{obj.totalQwestion}</td>
                     <td>{obj.correctAnswer}</td>
                     <td>{obj.totalScore}</td>
                  </tr>
               </tbody>
            ))}
         </table>
         </div>
         
         <div className = 'conteiner m-5'>
         <h3>{'Theme 3'}</h3>
         <table className='table'>
            <thead>
               <tr>
                  <th scope='col'>#</th>
                  <th>{'Date'}</th>
                  <th>{'Total questions'}</th>
                  <th>{'Correct answers'}</th>
                  <th>{'Total Score'}</th>
               </tr>
            </thead>
            {arr.map((obj, id) => (
               <tbody key={id}>
                  <tr>
                     <th scope="row">{id + 1}</th>
                     <td>{obj.date}</td>
                     <td>{obj.totalQwestion}</td>
                     <td>{obj.correctAnswer}</td>
                     <td>{obj.totalScore}</td>
                  </tr>
               </tbody>
            ))}

         </table>
         </div> */}
      </Layout>
   )
}

module.exports = Profil;