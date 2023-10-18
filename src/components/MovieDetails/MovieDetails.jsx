import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { Link, Outlet, useParams } from "react-router-dom";
import tmdbConnector from '../../utils/tmdbapi';

export default function MovieDetails () {
const [movie, setMovie] = useState({});
const {movieId} = useParams();

useEffect(()=>{
    // console.log(movieId);

    const endpoint = "/movie/" + movieId;
    tmdbConnector(endpoint)
        .then(response => {
            // console.log(response);
            setMovie(response);
        })
},[movieId])

    return <>
        <div className={css.container}>
            <ul>
                <li>{movie.tagline}</li>
                <li>{movie.title}</li>
                <li>{movie.release_date}</li>
                <li>{movie.overview}</li>
            </ul>
        </div>
        <ul>
            <li> <Link to="cast" >Cast</Link> </li>
            <li> <Link to="reviews" >Reviews</Link> </li>
        </ul>
        <Outlet />
    </>
}