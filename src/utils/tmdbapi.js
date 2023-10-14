// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

export default async function tmdbConnector (endpoint) {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDJmNTQ1NTQwM2FhN2ZmMmUyMTI0YmFmMDdhOWZjMSIsInN1YiI6IjY1MDQ0YTQyNjNhYWQyMDBlMTJkMmI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7-49xlVvmRIQfQ34b_FNH3-Pt3d04wUbwos5HeITHMY'
        }
      };

      return fetch(`${BASE_URL}${endpoint}`,options).then(res => res.json()).catch(err => console.error(err));

}
