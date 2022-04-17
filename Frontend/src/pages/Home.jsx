import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import MovieScreen from "../components/MovieScreen";
import BasicTabs from "../components/MovieTabs";
import { MoviesContext } from "../App";
const Home = () => {
  const { movies } = React.useContext(MoviesContext);
  const { user, isAuthenticated } = useAuth0();
  let screens = 0;
  movies.forEach((m) => {
    if (m.screen > screens) screens = m.screen;
  });
  let screenSections = [];
  for (let i = 1; i <= screens; i++) {
    screenSections.push(
      <BasicTabs screenNo={i} movies={movies.filter((m) => m.screen === i)} />
    );
  }
  return (
    isAuthenticated && (
      <>
        <NavBar p={movies} />
        {screenSections}
        {/* <MovieScreen screenNo={1} /> */}
        {/* <BasicTabs screenNo={1} movies={movies.filter((m) => m.screen === 1)} /> */}
        {/* <BasicTabs screenNo={2} movies={movies.filter((m) => m.screen === 2)} /> */}
        {/* <BasicTabs screenNo={3} movies={movies.filter((m) => m.screen === 3)} /> */}
      </>
    )
  );
};
export default Home;