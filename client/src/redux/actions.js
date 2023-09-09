import axios from 'axios'

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_BY_DB = "FILTER_BY_DB";
export const ORDER_BY_AZ = "ORDER_BY_AZ";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_GENRES = "GET_GENRES";







 export const getVideoGames = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/videogames");
      
      const data= apiData.data
      
      dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      alert(error.message) 
    }
  };
};


export const getGenres = () => {
  return async (dispatch) => {
    const response = await axios("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRES,
      payload: response.data
    });
  };
};


export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/videogames/name?search=${name}`);
      
      const data= apiData.data
      
      
      dispatch({ type: GET_BY_NAME, payload: data });
    } catch (error) {
      alert(error.message) 
    }
  };
};


export const getById = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
      
      const data= apiData.data
      
      
      dispatch({ type: GET_BY_ID, payload: data });
    } catch (error) {
      alert(error.message) 
    }
  };
};






export const clearDetail = () => {
  return (
    {
      type: CLEAR_DETAIL,
    }
  );
};



export function postVideogame(data) {
  try {
    return async (dispatch) => {
    const newVideogame = await axios.post("http://localhost:3001/videogame", data);
     console.log(data);
    return dispatch({
      type: POST_VIDEOGAME,
      payload: newVideogame.data,
      
    });
  };
  } catch (error)  {
   
    alert({error:error.message})
   
  }
}















export const filterGenres = (payload) => dispatch =>{
  return dispatch ({
    type: FILTER_GENRES,
    payload: payload,  //objeto literal no es necesario
  });
};

export const filterByDB = (payload) => {
  console.log(payload);
  return {
    type: FILTER_BY_DB,
    payload: payload,
  };
};

export const orderByAz = (order) => {
  console.log(order);
return {
  type: ORDER_BY_AZ,
  payload: order,
};

};

export const orderByRating = (order) => {
console.log(order);
  return {
  type: ORDER_BY_RATING,
  payload: order,
  };
};
