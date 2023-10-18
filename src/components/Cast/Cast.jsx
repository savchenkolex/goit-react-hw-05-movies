import { useState, useEffect } from "react";
import tmdbConnector from "../../utils/tmdbapi";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const endpoint = "/movie/" + movieId + "/credits";

    tmdbConnector(endpoint)
      .then((response) => {
        setCast(response.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <>
      <ul className={css.castBox}>
        
        {cast.map((actor) => {
          const fullImgUrl = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
          return (<li key={actor.id} className={css.actorCard}>
                <h3>{actor.character}</h3>
                <p>{actor.name}</p> 
                <div>
                  <img
                    className={css.actorImg}
                    src={
                      actor.profile_path
                        ? fullImgUrl
                        : process.env.PUBLIC_URL + "/draft.svg"
                    }
                    alt={actor.name}
                  />
                </div>
              </li>
          );
        })}
      </ul>
    </>
  );
}
