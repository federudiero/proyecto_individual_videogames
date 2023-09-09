import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { getById ,clearDetail} from "../redux/actions";
import style from './Detail.module.css'




const Detail = () => {

  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id))

   return () => {
    dispatch(clearDetail());
  }; 
     
  }, [dispatch,id])
  



  
  return (
    <div className={style.conatinerDetail}>
      <br />
      <div className={style.conatinerDetailHijo} >
        {detail.name ? (
      <>
         
          <img className={style.imgDetail} src={detail.background_image} alt="" />
          <h1>{detail.name}</h1>
          <p className={style.pDetailCard}>Platforms:
                <br/> 
                {detail.platforms.join("-")}</p>
          
          <p className={style.pDetailCard}>Date create at: {detail.released}</p>
          <p className={style.pDetailCard}>Rating: {detail.rating} </p>
          <p className={style.pDetailCard}> Genres: <br/>{detail.genres?.map((g) => (g.name ? g.name : g)).join("-")}</p>
          <p className={style.pDetailCard} >Description:
                <br/>
                {detail.description.split("<p>").join("").split("<br />").join("").split("</p>").join("")}
          </p>
      </>
        ) :(<div><h3>Loading...</h3></div>)}
      </div>
    </div>
  );
};

export default Detail;