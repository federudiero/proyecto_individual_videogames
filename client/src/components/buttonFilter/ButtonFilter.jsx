import { useSelector, useDispatch } from "react-redux";


import { orderByAz, orderByRating, filterByDB, filterGenres, getVideoGames} from "../../redux/actions";

import style from './ButtonFilter.module.css'



const ButtonFilter=()=>{


    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres);




const handleAZ = (event)=>{
    dispatch(orderByAz(event.target.value))
}




const handleRating = (event)=>{
    dispatch(orderByRating(event.target.value))
}




const handleDB = (event)=>{
    event.preventDefault();
    if (event.target.value === "db") {
         dispatch(filterByDB(event.target.value))
    } 
    if (event.target.value === "api") {
        dispatch(getVideoGames())
    }
   
}



const handleFGenres = (event)=>{
    event.preventDefault();
    if (event.target.value === "All") {
        dispatch(getVideoGames());
    }
    dispatch(filterGenres(event.target.value))
   
}




const  handleReset=()=>{
    dispatch(getVideoGames());
}





return(
    <div className={style.container}>
        <div >
            <select 
            className={style.buttonSelect}
            name="order" 
            defaultValue="A-Z" 
            autoFocus onChange={(e) => handleAZ(e)}
            >

              
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
        
        </div>

        <div>
        <select
                className={style.buttonSelect}
                defaultValue="Lower Rating"
                name="orderRating"
                autoFocus
                onChange={(e) => handleRating(e)}
            >
           
              <option value="Lower Rating">Lower Rating</option>
              <option value="Higher Rating">Higher Rating</option>
            </select>
        </div>

        <div>
            <select 
            className={style.buttonSelect}
             defaultValue="All" 
              name="filter" 
              onChange={(e) => handleFGenres(e)}>
             
            <option  htmlFor="filter" value="All">
                Filter by Genre:
              </option>
              {genres.map((g) => (
                <option value={g.name}>{g.name}</option>
              ))}
            </select>
        </div>


        <div>
            <select 
            className={style.buttonSelect}
            defaultValue="api" 
            name="filterDB" 
            onChange={handleDB}>
             
              <option value="db"> Created </option>
              <option value="api"> Not created </option>
            </select>

        </div>
            <button 
            className={style.buttonResete}
             onClick={handleReset}>
             RESET FILTER
             </button>


           


    </div>
)
}


export default ButtonFilter ;