import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <Link to='/madeline'><button>madeline</button></Link>
      <Link to='/projects'><button>projects</button></Link>
      <Link to='/music'><button>music</button></Link>
    </div>
  )
}

export default Navbar
