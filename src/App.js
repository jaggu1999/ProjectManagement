import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Styles/NavBar.css";
import "./Fonts/fonts.css";
import "./Pages/IntroScreen"
import IntroScreen from "./Pages/IntroScreen";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import NavBarHome from "./Components/NavBarHome"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, {Component} from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IntroScreen}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/home" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
