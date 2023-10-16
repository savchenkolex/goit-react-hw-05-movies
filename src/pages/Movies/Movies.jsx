import { useEffect, useState } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import css from "./Movies.module.css";

export default function Movies () {
    const [query, setQuery] = useSearchParams();

    // useEffect

    return <>
        <div className={css.container}>
        <h2 className={css.pageTitle}>Find Movies by Title</h2>
        <form onSubmit={(e)=> {
                e.preventDefault(); 
                console.log(e.target.elements[0].value);
                }
            }>
            <input type="text" onChange={(e)=>{console.log(e.target.value)}}></input>
            <button type="submit">Find</button>
        </form>
        </div>

        <Outlet />
    </>
}