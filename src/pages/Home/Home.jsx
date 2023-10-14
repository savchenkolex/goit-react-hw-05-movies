import css from "./Home.module.css";
import  tmdbConnector from "../../utils/tmdbapi.js";



export default function Home() {
  
  
  // tmdbConnector('/trending/all/week?language=en-US')
  //   .then(response => response.json)
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));
    
    
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
