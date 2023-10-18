import css from "./Home.module.css";
import tmdbConnector from "../../utils/tmdbapi.js";
import { useEffect, useState } from "react";
import MoviesCards from "../../components/MoviesCards/MoviesCards";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    tmdbConnector("/trending/all/week?language=en-US")
      .then((response) => {
        
        setTrending(response.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={css.container}>
      <h2>Most Popular Movies Today</h2>
       <MoviesCards collection={trending} />
    </div>
  );
}
