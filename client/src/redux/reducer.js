import { FILTER_BY_DB,FILTER_GENRES,ORDER_BY_RATING,ORDER_BY_AZ,POST_VIDEOGAME,GET_GENRES,GET_VIDEOGAMES ,GET_BY_NAME, GET_BY_ID ,CLEAR_DETAIL, DELETE} from "./actions";

const initialState = {
  games: [],
  databasse: [],
  detail: [],
  genres:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { ...state, games: action.payload };

      case GET_BY_NAME:
      return { ...state, games: action.payload };

      case GET_BY_ID:
      return { ...state, detail: action.payload };

      case CLEAR_DETAIL:
        return {...state,detail: [],};
        
        case GET_GENRES:
      return {
        ...state,
        genres: action.payload, //el action payload va a ser todos los videogames
      };
      case POST_VIDEOGAME:
      return {
        ...state,
        games: action.payload, //el action payload va a ser todos los videogames
       
      }; 
      
      case ORDER_BY_AZ:
      const order = [...state.games].sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name < b.name ? 1 : -1;
        }
      });
      return {
        ...state,
        games: order,
      };

      case ORDER_BY_RATING:
        const orderRating = [...state.games].sort((a, b) => {
          if (action.payload === "Lower Rating") {
            return a.rating > b.rating ? 1 : -1;
          } else {
            return a.rating < b.rating ? 1 : -1;
          }
        });
        return {
          ...state,
          games: orderRating,
        };

        case FILTER_GENRES:
          
          const genresFilter =
            action.payload === "All"
              ? state.games
              : state.games.filter((v) => v.genres.includes(action.payload));
          
          return {
            ...state,
    
            games: genresFilter,
          };
      
          case FILTER_BY_DB:
           
            const filterVideogames =
              action.payload === "db"
                ? state.games.filter((g) => g.id.toString().includes("-"))
               
                : action.payload=== "api" ?
                  state.games.filter((g) => !g.id.toString().includes("-"))
                  : [...state.games]
        
            
            return {
              ...state,
      
              games: filterVideogames,
            };
            case DELETE:
              return {
                ...state,
               
                games: state.games.filter((v) => v.id !== action.payload)
              };
      

      

    default:
      return { ...state };
  }
};

export default rootReducer;