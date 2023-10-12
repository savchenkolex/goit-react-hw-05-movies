import css from "./Home.module.css";
import { Tmdb } from "../../utils/tmdbapi.js";

export default function Home() {
  const api = new Tmdb();
    console.log(api);
    console.log(api.getTest());
    let collection = '';
    async function get () {
        const data = await api.getTrending();
        setCollection(data);
    }

    function setCollection(data) {
        this.collection = data;
    }
//   console.log(get());

  console.log(collection);
  return (
    <>
      <p className={css.homepage}>Homepage</p>
    </>
  );
}
