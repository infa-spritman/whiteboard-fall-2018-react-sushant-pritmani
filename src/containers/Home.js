import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CourseService from "../services/CourseService"
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "../css/Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isTable : true,
            courses: [],
            courseTitle: ''
        };
    }

    componentWillMount = () => {
        if (!this.props.isAuthenticated) {
            return;
        }
        this.findAllCourses().then(update => {
            if(update)
                this.setState({ isLoading: false });
        });

    };

    togglePageView = () => {
        this.setState({ isTable : !this.state.isTable})
    };

    findAllCourses = () => {
        return CourseService.findAllCourses().then(res => {
            const courses = res.data;
            this.setState({ courses });
            return true;
        });

    };

    addCourse = newCourse => {
        return CourseService.createCourse(newCourse).then(res => {
            return this.findAllCourses().then(res => {
                if(res)
                    this.setState({ courseTitle: ''})});
        });
    };

    deleteCourse = courseToDelete => {
        return CourseService.deleteCourse(courseToDelete.id).then(() => this.findAllCourses());

    };

    updateCourse = (courseId, course) => {
        CourseService.updateCourse(courseId,course).then(() => this.findAllCourses())

    };

    updateTitle = event => {
        this.setState({
            courseTitle: event.target.value
        })
    };


    renderLander() {
        return (
            <div className="lander">
                <h1>WhiteBoard</h1>
                <p>This is the home page for whiteboard. Please click on login or signup to continue</p>
                <div>
                    <Link className="mr-4" to="/login" className="btn btn-info btn-lg">
                        Login
                    </Link>

                    <Link to="/register" className="btn btn-success btn-lg">
                        Signup
                    </Link>
                </div>
            </div>
        );
    }

    renderCourses() {
        return (
            <div className="courses">
                    {!this.state.isLoading && this.state.isTable ? <CourseTable
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}
                        courseTitle={this.state.courseTitle}
                        updateTitle={this.updateTitle}
                        togglePageView={this.togglePageView}
                    /> : <CourseGrid
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}
                        courseTitle={this.state.courseTitle}
                        togglePageView={this.togglePageView}
                    /> }
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderCourses() : this.renderLander()}
            </div>
        );
    }
}