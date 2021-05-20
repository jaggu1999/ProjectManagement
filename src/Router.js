import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Intro from "./Pages/IntroScreen";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Intro} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Home" component={Home} />
                </Switch>
            </Router>
        )
    }
}