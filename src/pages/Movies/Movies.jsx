import { useEffect, useState, useRef } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import css from "./Movies.module.css";
import tmdbConnector from "../../utils/tmdbapi";
import MoviesCards from "../../components/MoviesCards/MoviesCards";

export default function Movies () {
    const [query, setQuery] = useSearchParams();
    const [dataInput, setDataInput] = useState("");
    const [queryResult, setQueryResult] = useState([]);
    
    const timerRef = useRef();

    useEffect(()=>{
        if(!dataInput){
            return;
        }
        const endpoint = "/search/movie?query=" + dataInput;
        // console.log(endpoint);
        tmdbConnector(endpoint)
        .then(response => {
            if(response.results){
                // console.log(response);

                setQueryResult(response.results);
            }
        });
    }, [dataInput]);

    useEffect(()=>{
        console.log(query.get("query"));

    },[query]);

    function submitHandler(event){
            event.preventDefault(); 
            const query = event.target.elements[0].value;
            if(!query){
                return;
            }
            setQuery({query});
    }

    function inputHandler(event){
            const value = event.target.value;

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(()=>{
                setDataInput(value);
                // console.log(value);
            }, 300)
    }

    return <>
        <div className={css.container}>
            <h2 className={css.pageTitle}>Find Movies by Title</h2>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={inputHandler}></input>
                <button type="submit">Find</button>
            </form>
            <MoviesCards collection={queryResult} />
        </div>

        <Outlet />
    </>
}