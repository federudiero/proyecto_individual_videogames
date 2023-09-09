import React, { useEffect, useState } from 'react'
import CardContainer from '../components/cardContainer/CardContainer'
import { useDispatch, useSelector} from 'react-redux'
import {getVideoGames ,getGenres} from '../redux/actions'
import ButtonFilter from '../components/buttonFilter/ButtonFilter'
import style from './Home.module.css'
import SearchBar from '../components/searchBar/SearchBar'
import Pagination from '../components/pagination/Pagination'

function Home() {
  
  const dispatch= useDispatch()

  const games = useSelector((state) => state.games)
  

  const [currentPage, setCurrentPage] = useState(1); 
  const [perPage, setPerPage] = useState(15)
  const totalVideogames = games.length;
  const totalPages = Math.ceil(totalVideogames / perPage);  
  const numberStart = (currentPage - 1) * perPage;
  const numberEnd = (currentPage - 1) * perPage + perPage;
  const slicePage = games.slice(numberStart, numberEnd)
  

  useEffect(()=>{

    dispatch(getVideoGames())
    dispatch(getGenres());
   

   

  },[dispatch])
    
  
  
  


  return (
    <div className={style.container}>

      <div>
         <SearchBar/>

      </div>


    <div className={style.buttonCaontainer }>

      <ButtonFilter/>

    </div>
    
   {games.length ? 
      <div className={style.containerCardContainer}>
        <CardContainer  games={games} slicePage={slicePage}/> 
      </div>
      :
      (<div className={style.loading}>Loading...</div>)

  } 
    
  


    <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
 

  
   

   
 
    </div>
  )
}

export default Home











