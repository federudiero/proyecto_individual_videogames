import React from 'react'
import style from './Landing.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import img from '../img/jostick2.jpg'
import img1 from '../img/playstation.jpg'
import img2 from '../img/xbox1.jpg'
import img3 from '../img/pc.jpg'
import img4 from '../img/nintendiwii.jpg'
import img5 from '../img/nintendoswich.png'




function Landing() {
  return (
    <div className={style.containerLanding}>
     <div className={style.containerButton}>
        
        <Link to="/home">
         <img className={style.imgStart} src={img}/>
        </Link>
    
    </div>
    <div className={style.divimg}>
      <img className={style.img} src={img1}/>
      <img className={style.img} src={img2}/>
      <img className={style.img} src={img3}/>
      <img className={style.img} src={img4}/>
      <img className={style.img} src={img5}/>
   </div>
   
   
   

  </div>
  )
}

export default Landing