import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios';
import Routes from "./Routes";
import "./App.css";

const API_URL = 'http://localhost:8080/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    componentWillMount = () => {
        axios.get(API_URL + `api/profile`, {withCredentials: true})
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

    handleLogout = event => {
        axios.post(API_URL + "api/profile", {withCredentials: true}).then(() => {
                this.userHasAuthenticated(false);

                this.props.history.push("/login");

            }
        );
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
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