const React = require('react');

function Navbar({ user }) {
  return (
    (!user ?
      <div>
        <h1 className='h1'>Flashcards</h1>
        <a href='/'>Home</a>
        <a href='/log'>Login</a>
        <a href='/reg'>Register</a>
      </div> :
      <div>
        <h1 className='h1'>Flashcards</h1>
        <a href='/'>Home</a>
        <a href='/profil'>Profile</a>
        <a href='/logout'>Logout</a>

      </div>)
  )
}

module.exports = Navbar;