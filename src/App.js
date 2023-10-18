import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
// import MovieDetails from "./components/MovieDetails/MovieDetails";
// import Cast from "./components/Cast/Cast";
// import Reviews from "./components/Reviews/Reviews";
import { lazy } from "react";

// const Movies = lazy(()=>import('./pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
