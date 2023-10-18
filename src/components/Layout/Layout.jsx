import css from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
export default function Layout() {
  return (
    <>
      <nav className={css.navcontainer}>
        <NavLink className={css.navbaritem} to="/">
          Home
        </NavLink>
        <NavLink className={css.navbaritem} to="movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
