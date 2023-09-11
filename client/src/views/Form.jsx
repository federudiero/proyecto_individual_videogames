import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Form.module.css";
import { validate } from "../utils/validador";

function Form() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: [],
    currentPlatform: "",
    apiGenres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: "",
    background_image: "",
    released: "",
    rating: "",
    genres: "",
  });

  useEffect(() => {
    async function apiReq() {
      try {
        const { data } = await axios.get("http://localhost:3001/genres");
        setForm({ ...form, apiGenres: data });
      } catch (error) {
        alert(error);
      }
    }
    apiReq();
  }, []);

  

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validate({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const genreHandler = (event) => {
    const selectedGenreid = Number(event.target.id);

    const exists = form.genres.find((genre) => genre === selectedGenreid);

    if (exists) {
      setErrors(
        validate({
          ...form,
          genres: [...form.genres.filter((genre) => genre !== selectedGenreid)],
        })
      );
      setForm({
        ...form,
        genres: [...form.genres.filter((genre) => genre !== selectedGenreid)],
      });
    } else {
      setErrors(
        validate({ ...form, genres: [...form.genres, selectedGenreid] })
      );
      setForm({ ...form, genres: [...form.genres, selectedGenreid] });
    }
  };

  const platformHandler = (event) => {
    event.preventDefault();

    if (event.target.name) {
      const removePlatform = event.target.name;
      setErrors(
        validate({
          ...form,
          platforms: form.platforms.filter(
            (platform) => platform !== removePlatform
          ),
        })
      );
      setForm({
        ...form,
        platforms: form.platforms.filter(
          (platform) => platform !== removePlatform
        ),
      });
    } else if (form.currentPlatform) {
      const platform = form.currentPlatform;
      setErrors(
        validate({
          ...form,
          platforms: [...form.platforms, platform],
          currentPlatform: "",
        })
      );
      setForm({
        ...form,
        platforms: [...form.platforms, platform],
        currentPlatform: "",
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length) {
      alert("Incorrect information");
    } else {
      const {
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        genres,
      } = form;
     axios.post("http://localhost:3001/videogames", {
          name,
          description,
          platforms,
          background_image,
          released,
          rating,
          genres,
        })
        .then((data) => {
          setForm({
            name: "",
            description: "",
            platforms: [],
            background_image: "",
            released: "",
            rating: "",
            genres: [],
            currentPlatform: "",
            apiGenres: [],
          });
          alert("Game Created");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div className={style.containerForm}>
   
    <form className={style.form} onSubmit={submitHandler}>

      
      
      <div className={style.inputContainer}>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        <span className={style.error}>{errors.name}</span>
      </div>




      <div className={style.inputContainer}>
        <label className={style.label}> Description</label>
        <input
          className={style.input}
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <span className={style.error}>{errors.description}</span>
      </div>



      <div className={style.inputContainer}>
        <label className={style.label}>Platforms:</label>
        <input
          className={style.input}
          type="text"
          value={form.currentPlatform}
          onChange={changeHandler}
          name="currentPlatform"
        />
        <button onClick={platformHandler}>Add</button>
        <span className={style.error}>{errors.platforms}</span>
      </div>



      <div className={style.inputContainer}>
        {form.platforms.map((platform) => (
          <label key={platform}>
            {" "}
            {platform}{" "}
            <button key={platform} name={platform} onClick={platformHandler}>
              x
            </button>
          </label>
        ))}
      </div>



      <div className={style.inputContainer}>
        <label className={style.label}>Image</label>
        <input type="file"  name="background_image"  accept="image/*" onChange={changeHandler} value={form.background_image}/> 
      
      </div>




      <div className={style.inputContainer}>
        <label className={style.label}>Released</label>
        <input
          className={style.input}
          type="date"
          value={form.released}
          onChange={changeHandler}
          name="released"
          placeholder="yyyy-mm-dd"
        />
        <span className={style.error}>{errors.released}</span>
      </div>




      <div className={style.inputContainer}>
        <label className={style.label}>Rating</label>
        <input
          className={style.input}
          type="number"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
          placeholder="Number..."
        />
        <span className={style.error}>{errors.rating}</span>
      </div>



      <div className={style.inputContainer}>
        <label className={style.label}>Genres</label>
        <span className={style.error}>{errors.genres}</span>
      </div>
      <div className={style.genresContainer}>
        {form.apiGenres.map((genre) => (
          <label key={genre.id}>
            <input
              key={genre.id}
              type="checkbox"
              id={genre.id}
              name={genre.name}
              onChange={genreHandler}
            />
            {genre.name}
          </label>
        ))}
      </div>



      <button className={style.buttonCreate}   type="submit">Create</button>

    </form>
    </div>
  );
}

export default Form;