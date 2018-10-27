import {Component} from "react";
import React from "react";
import LessonTab from "./LessonTab";

class LessonTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {newLessonTitle: ''};

    }

    onTitleInputChange = event => {
        this.setState({
            newLessonTitle: event.target.value
        })
    };

    onSubmitForm = event => {
        event.preventDefault();
        const newLesson = {
            id: (new Date()).getTime() + '',
            title: this.state.newLessonTitle || 'New Lesson'
        };
        this.props.addLesson(newLesson);
        this.setState({
            newLessonTitle: ''
        })


    };


    render() {
        const isLoggedIn = this.props.state.selectedModule.id;
        let form;

        if (isLoggedIn) {
            form = <form onSubmit={this.onSubmitForm} className="d-flex bd-highlight">
                <input value={this.state.newLessonTitle} onChange={this.onTitleInputChange} placeholder="Enter Lesson Title" aria-label="Search"
                       className="form-control py-4 my-2  mr-3 flex-grow-1 bd-highlight" type="search"/>
                <button className="my-2 btn btn-default btn-square"><i className="fas fa-plus fa-1x"/></button>

            </form>;
        }
        return (
            <div className="collapse navbar-collapse col-md-9 col-12 p-0" id="navbarNavDropdown">
                <ul className="navbar-nav flex-column flex-sm-row flex-wrap">
                    {
                        this.props.state.selectedModule && this.props.state.selectedModule.lessons && this.props.state.selectedModule.lessons.length > 0 &&
                        this.props.state.selectedModule.lessons.map((lesson, index) =>
                            <LessonTab
                                selected={this.props.state.selectedLesson.id === lesson.id}
                                selectLesson={this.props.selectLesson}
                                deleteLesson={this.props.deleteLesson}
                                editLesson={this.props.editLesson}
                                index={index + 1}
                                lesson={lesson}/>
                        )

                    }
                    {form}
                </ul>


            </div>
        )
    }


}

export default LessonTabs