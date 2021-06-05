import React from "react";
import "./App.css";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import Details from "./screens/Details";
import TopNav from "./components/TopNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
