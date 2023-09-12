
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../redux/actions';
import style from './SearchBar.module.css'
const SearchBar = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  }
  const searchHandler = () => {
    dispatch(getByName(input));
   
  };

    return (
      <div  className={style.containerSarchBar}>

      <div >

         <input className={style.inputSarchBar} type="text" name={input} onChange={handleInput} placeholder='Search by name' />
        <button className={style.buttonSarchBar} onClick={searchHandler}>Search</button>
      </div>
       
        <div >
          <Link   to={'/form'}>
            <button className={style.buttonFormSarchBar}  >
              <span>Create Video Game</span>
            </button>
          </Link>
        </div>
      </div>
    );
}

export default SearchBar