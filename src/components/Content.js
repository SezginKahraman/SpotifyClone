import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/Collection";

export default function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar>Navbar</Navbar>
      <div className="px-8 py-5">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/search">
            <Search></Search>
          </Route>
          <Route exact path="/collection">
            <Collection></Collection>
          </Route>
        </Switch>
      </div>
    </main>
  );
}
