import css from "./Home.module.css";
import  tmdbConnector from "../../utils/tmdbapi.js";



export default function Home() {

    
    
console.log(process.env);

tmdbConnector('/trending/all/week?language=en-US')
  .then(res => console.log(res))
  .catch(err => console.error(err));
  
  return (
    <>
      <p className={css.homepage}>Homepage</p>
    </>
  );
}
