import React, {Component} from "react";
import UserService from "../services/UserService"
import LoaderButton from "../components/LoaderButton";
import {Link} from "react-router-dom";


export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            password: "",
            verifyPassword: "",
            confirmationCode: "",
            newUser: null
        };
    }

    validateForm = () => {
        return (
            this.state.username.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.verifyPassword
        );
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


            UserService.registerUser(user).then(res => {
                if (res.data) {
                    this.props.userHasAuthenticated(true);
                    this.props.history.push("/");
                } else {
                    alert("Username Already Taken")
                    this.setState({isLoading: false})
                }
            }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});
        })
    }

    render() {
        return (
            <div className="register">
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username </label>
                        <div className="col-sm-10">
                            <input value={this.state.username}
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
                        <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify Password </label>
                        <div className="col-sm-10">
                            <input value={this.state.verifyPassword}
                                   onChange={this.handleChange} type="password" className="form-control wbdv-password-fld"
                                   id="verifyPassword" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10"><LoaderButton
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            isLoading={this.state.isLoading}
                            text="Sign up"
                            loadingText="Signing up…"
                            className="btn btn-primary btn-block"
                        />
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}