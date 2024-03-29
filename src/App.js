import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios';
import Routes from "./Routes";
import "./App.css";
import UserService from "./services/UserService"


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    componentWillMount = () => {
        UserService.profile()
            .then(res => {
                if (res.data)
                    this.userHasAuthenticated(true);
                else
                    this.userHasAuthenticated(false);

                this.setState({isAuthenticating: false});

            }).catch(e => {
            this.setState({isAuthenticating: false});
            return alert(e)
        });

    };

    userHasAuthenticated = authenticated => {
        this.setState({isAuthenticated: authenticated});
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
        };

        return (
            !this.state.isAuthenticating &&
            <div className="App container-fluid p-0">
                <Router><Routes childProps={childProps}/></Router>
            </div>
        );
    }
}

export default App;