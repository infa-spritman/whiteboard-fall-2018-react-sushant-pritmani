import React, {Component} from "react";
import UserService from "../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
        };
    }

    componentWillMount = () => {
        if (!this.props.isAuthenticated) {
            return;
        }
        UserService.profile().then(user => {
            if(user)
                this.setState({ username: user.data.username,
                    isLoading: false });
        });

    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();


        UserService.logoutUser()
            .then(res => {
                this.setState({isLoading: false});
                this.props.userHasAuthenticated(false);
                this.props.history.push("/");


            }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});})

    }

    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <div className="alert alert-success" role="alert">
                    Profile Successfully saved
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label ">Username </label>
                        <div className="col-sm-10">
                            <input value={this.state.username} className="form-control" id="username" readOnly/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telInput" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="tel" placeholder="1-(555)-555-5555" id="telInput"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="emailInput" className="col-sm-2 col-form-label">Email address</label>
                        <div className="col-sm-10">
                            <input type="email"
                                   className="form-control"
                                   id="emailInput"
                                   placeholder="alice@wonderland.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="roleInput" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <select id="roleInput" className="custom-select custom-select-sm form-control">
                                <option value="Faculty" selected>Faculty</option>
                                <option value="Student">Student</option>
                                <option value="Admin">Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="DOBInput" className="col-sm-2 col-form-label">Date of birth</label>
                        <div className="col-sm-10">
                            <input id="DOBInput" type="date" name="DOB" max="3000-12-31"
                                   min="1000-01-01" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button id="update" className="btn btn-success btn-block">Update</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a onClick={this.handleSubmit} id="logout" className="btn btn-danger btn-block">Logout</a>
                        </div>
                    </div>

                </form>
            </div>

        );
    }
}