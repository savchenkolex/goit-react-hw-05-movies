import css from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";

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
      <Outlet />
    </>
  );
}
