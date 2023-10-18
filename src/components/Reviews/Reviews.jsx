import { useState, useEffect } from "react";
import tmdbConnector from "../../utils/tmdbapi";
import { useParams } from "react-router-dom";

export default function Reviews (){
    const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const endpoint = "/movie/" + movieId + "/reviews";

    tmdbConnector(endpoint)
      .then((response) => {
        
        setReviews(response.results);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

    return <>
        {reviews.map((review)=>{
            return (<div key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
            </div>)
        })}
    </>
}