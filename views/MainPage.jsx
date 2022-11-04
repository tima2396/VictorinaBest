const React = require('react')
const Layout = require('./Layout');
const Navbar = require('./Navbar');

const MainPage = ({title,tems, user}) => {
   return (
      <Layout title={title}>         
         <Navbar user={user} />
         <ul className='ul'>
            {tems.map((tem)=>(
               <div id={tem.id} key={tem.id}className="list-group-item"><a href={`/quest/${tem.id}/0`} >{tem.name}</a></div>
            ))
            }
         </ul> 
      </Layout>
   )
}



module.exports = MainPage;