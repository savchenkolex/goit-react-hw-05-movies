

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

export class tmdbapi {
    BASE_URL = '';
    API_KEY = 'e42f5455403aa7ff2e2124baf07a9fc1';
    async getTrending() {
        try {
            const test = await fetch('https://api.themoviedb.org/3/movie/157336?api_key=e42f5455403aa7ff2e2124baf07a9fc1');
            return test;
        } catch (error) {
            return error;
        }
        

    }
    //searchMovie(query)
    //getMovie(film)
    //getCredits(film)
    //getReviews(film)

}