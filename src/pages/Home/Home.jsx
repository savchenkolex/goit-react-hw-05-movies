import css from "./Home.module.css";
import tmdbConnector from "../../utils/tmdbapi.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    tmdbConnector("/trending/all/week?language=en-US")
      .then((response) => {
        console.log(response.results);
        setTrending(response.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={css.container}>
      <h2>Most Popular Movies Today</h2>
      <ul className={css.trendingGrid}>
        {trending.map((item) => {
          const fullImgUrl = `https://image.tmdb.org/t/p/w200/${item.poster_path}`;
          return (
            <li key={item.id} className={css.listItem}>
              <Link className={css.movieLink} to={`movies/${item.id}`}>
                <img
                  className={css.posterImg}
                  src={fullImgUrl}
                  alt={item.title}
                />
                <p className={css.movieTitle}>
                  {item.title ? item.title : item.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
