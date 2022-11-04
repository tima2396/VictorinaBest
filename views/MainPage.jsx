const React = require('react')
const Layout = require('./Layout')

const MainPage = ({title,tems}) => {
   return (
      <Layout title={title}>
         <div>
            <h1 className='h1'>Flashcards</h1>
            <a href= '/'>Home</a>
            <a href='/log'>Login</a>
            <a href='/reg'>Register</a>
         </div>
         <ul className='ul'>
            {tems.map((tem)=>(
               <div id={tem.id} key={tem.id}className="list-group-item"><a href={`/${tem.id}`} >{tem.name}</a></div>
            ))
            }
         </ul> 
      </Layout>
   )
}

module.exports = MainPage;