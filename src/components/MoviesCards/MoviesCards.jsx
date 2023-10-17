import { Link } from "react-router-dom";
import css from "./MoviesCarcs.module.css";

export default function MoviesCards(props) {
const {collection} = props;

return (<ul className={css.resultsWrapper}>
        {collection.map((item) => {
          const fullImgUrl = `https://image.tmdb.org/t/p/w200/${item.poster_path}`;
        //   console.log(item);
          return (
            <li key={item.id} className={css.listItem}>
              <Link className={css.movieLink} to={`/movies/${item.id}`}>
                 <img
                  className={css.posterImg}
                  src={item.poster_path ? fullImgUrl : process.env.PUBLIC_URL + "/draft.svg"}
                  alt={item.title}
                />
                <p className={css.movieTitle}>
                  {item.title ? item.title : item.name}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>)
}
