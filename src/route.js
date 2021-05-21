import React, { Component } from 'react';
import firebaseInit from "./FirebaseAuthentication";
import Home from "./Pages/Home";
import IntroScreen from "./Pages/IntroScreen";

export class route extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else this.setState({ user: null });
        });
    }
    render() {
        return (
            <div>
                { this.state.user ? <Home></Home> : <IntroScreen></IntroScreen> }
            </div>
        )
    }
}

export default route
