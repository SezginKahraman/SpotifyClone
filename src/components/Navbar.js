import React from "react";
import { useRouteMatch } from "react-router-dom";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import NavSearch from "./Navbar/NavSearch";

export default function Navbar() {
  const searchRoute = useRouteMatch({ path: "/search" });
  return (
    <div className="h-[3.75rem] flex items-start py-4 px-8 justify-between ">
      <Navigation></Navigation>
      {searchRoute && <NavSearch></NavSearch>}
      {/* <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/search">
          Search Kısmındasın
        </Route>
        <Route exact path="/collection">
          Collection
        </Route>
      </Switch> */}
      <Auth></Auth>
    </div>
  );
}
