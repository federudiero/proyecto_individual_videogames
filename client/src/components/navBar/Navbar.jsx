import React from 'react'
import { Link } from 'react-router-dom'

import style from './NavBar.module.css'

function Navbar() {
  return (
    <div className={style.containerNavbar}>
     
     
     
     
        <Link  to='/home' className={style.linkNav}>HOME</Link>
        <Link to='/form' className={style.linkNav}>FORM</Link>
        <Link to='/' className={style.linkNav}>LANDING</Link>
      
     
    </div>
  ) 
}

export default Navbar