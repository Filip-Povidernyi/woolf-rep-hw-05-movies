import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import css from "./stele.module.css"
import { Suspense } from "react";
import Loader from "../Loader/Loader";


const StyledLink = styled(NavLink)`
margin: 40px 10px;
text-decoration: none;
color: black;

&.active {
  color: orange;
}
`;


const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>    
    </div>
  );
};


export default SharedLayout;