import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function NavBar() {
  return (
    <>
      <nav>
          <ul className='navbar'>
              <li> <Link to={'/'}> Home</Link></li>
              <li> <Link to={'/list'}>Listas</Link> </li>
              <li>Url</li>
          </ul>
      </nav>
    </>
  )
}

export default NavBar