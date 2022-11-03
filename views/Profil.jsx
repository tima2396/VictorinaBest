const React = require('react')
const Layout = require('./Layout')
const userName = 'Petya'
const Profil = ({ title, arr }) => {
   return (
      <Layout title={title}>
         <h2>{userName}</h2>
         <h3>{'Theme 1'}</h3>
         <table>
            <tr>
               <th>{'Date'}</th>
               <th>{'Total questions'}</th>
               <th>{'Correct answers'}</th>
               <th>{'Total Score'}</th>
            </tr>
            {arr.map((obj, id) => (
               <tr key={id}>
                  <td>{obj.date}</td>
                  <td>{obj.totalQwestion}</td>
                  <td>{obj.correctAnswer}</td>
                  <td>{obj.totalScore}</td>
               </tr>
            ))}


         </table>
         <h3>{'Theme 2'}</h3>
         <table>
            <tr>
               <th>{'Date'}</th>
               <th>{'Total questions'}</th>
               <th>{'Correct answers'}</th>
               <th>{'Total Score'}</th>
            </tr>
            {arr.map((obj, id) => (
               <tr key={id}>
                  <td>{obj.date}</td>
                  <td>{obj.totalQwestion}</td>
                  <td>{obj.correctAnswer}</td>
                  <td>{obj.totalScore}</td>
               </tr>
            ))}

         </table>
         <h3>{'Theme 3'}</h3>
         <table>
            <tr>
               <th>{'Date'}</th>
               <th>{'Total questions'}</th>
               <th>{'Correct answers'}</th>
               <th>{'Total Score'}</th>
            </tr>
            {arr.map((obj, id) => (
               <tr key={id}>
                  <td>{obj.date}</td>
                  <td>{obj.totalQwestion}</td>
                  <td>{obj.correctAnswer}</td>
                  <td>{obj.totalScore}</td>
               </tr>
            ))}

         </table>
      </Layout>
   )
}

module.exports = Profil;