import { useEffect } from 'react';
import css from './MovieDetails.module.css';
import { Outlet, useParams } from "react-router-dom";

export default function MovieDetails () {

const {movieId} = useParams();
//надо получать айди фильма из строки адреса. 
//можно ли отслеживать через юз еффект
useEffect(()=>{
    console.log(movieId);
},[movieId])

    return <>
        <div className={css.container}>
            <p>MovieDetails</p>
        </div>
        <Outlet />
    </>
}