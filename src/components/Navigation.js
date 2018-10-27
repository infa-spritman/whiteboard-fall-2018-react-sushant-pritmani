import React, {Component} from 'react'
import { withRouter } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.onClick =this.onClick.bind(this);
    }

    onClick(){
        this.props.togglePageView();
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary nav-pills navbar-expand">
                <ul className="navbar-nav nav-ul">
                    <li><a onClick={this.onClick} className="navbar-brand"><span className="navbar-toggler-icon"></span></a></li>
                    <li className="nav-item nav-link d-none d-lg-block"><h4 className="dark-white-text">Course Manager</h4></li>
                    <li className="nav-item nav-link col-md-8"><input onChange={this.props.updateTitle} className="form-control" type="search"
                                                                      placeholder="New Course Title"
                                                                      aria-label="Search" value={this.props.courseTitle} /> </li>
                    <li onClick={() => this.props.addCourse({
                        title: this.props.courseTitle
                    })}
                        className="nav-item nav-link"><span className="fas fa-plus-circle icon" aria-hidden="true"></span></li>
                    <li onClick={() => this.props.logout()}
                        className="nav-item nav-link text-black btn-danger">Logout</li>
                    {/*<li onClick={() => this.props.profile()}*/}
                        {/*className="nav-item nav-link text-black btn-info">Profile</li>*/}
                </ul>
            </nav>
        );
    }
}

export default Navigation;