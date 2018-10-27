import React, {Component} from "react";
import LoaderButton from "../components/LoaderButton";
// import "./Login.css";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            password: ""
        };
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({isLoading: true});

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        UserService.login(user)
            .then(res => {
                if (res.data) {
                    this.props.userHasAuthenticated(true);
                    this.props.history.push("/");
                } else {
                    alert("Username or password not in database")
                    this.setState({isLoading: false})
                }
            }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});})

    }

    render() {
        return (
        <div className="container">
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username </label>
                    <div className="col-sm-10">
                        <input  value={this.state.username}
                                onChange={this.handleChange} className="form-control" id="username" placeholder="Alice"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password </label>
                    <div className="col-sm-10">
                        <input value={this.state.password}
                               onChange={this.handleChange} type="password" className="form-control wbdv-password-fld"
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <LoaderButton
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            isLoading={this.state.isLoading}
                            text="Sign In"
                            loadingText="Logging in…"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a href="/">Cancel</a>
                                    </div>
                                    <div className="col-4 text-right">
                                        <Link to="/register">Sign up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>

        );
    }
}