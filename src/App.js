import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Styles/NavBar.css";
import "./Fonts/fonts.css";
import "./Pages/IntroScreen"
import IntroScreen from "./Pages/IntroScreen";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import routes from "./route";

export class App extends Component {
		render() {
				return (
						<Router>
								<div>
										<routes></routes>
								</div>
								<Switch>
										<Route path="/" exact><IntroScreen/></Route>
										<Route path="/login"><Login/></Route>
										<Route path="/signup"><Signup/></Route>
										<Route path="/home"><Home/></Route>
								</Switch>
						</Router>
				)
		}
}

export default App

