import React from 'react'
import style from './Landing.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import video from '../img/pexels_videos_2759477 (2160p).mp4'

function Landing() {
  return (
    <div className={style.containerLanding}>
    <div className={style.containerButton}>

        <Link to="/home">
          <button className={style.btn} >INGRESAR</button>
        </Link>
    
    </div>

  </div>
  )
}

export default Landing