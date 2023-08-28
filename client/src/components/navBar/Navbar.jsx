import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/form'>Form</Link>
      <Link to='/'>landing</Link>
    </div>
  ) 
}

export default Navbar