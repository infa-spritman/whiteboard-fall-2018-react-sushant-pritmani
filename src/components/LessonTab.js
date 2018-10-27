import React, {Component} from 'react'

class LessonTab extends Component {
    constructor(props) {
        super(props);

        const lesson = this.props.lesson;
        this.state = {
            lessonTitle: "",
            editMode: false
        }

    }

    editLesson = lesson => {
        this.setState({
            editMode: true,
            lessonTitle : lesson.title
        })
    };

    onLessonTitleInputChange = event => {
        this.setState({
            lessonTitle: event.target.value
        })
    };

    onSubmitLessonForm = event => {
        event.preventDefault();

        this.props.editLesson(this.props.lesson, this.state.lessonTitle);

        this.setState({
            editMode : false
        });



    };

    render() {
        if (this.state.editMode)
            return (
          /*      <form onSubmit={this.onSubmitLessonForm} className="mt-4 mb-3 d-flex bd-highlight">
                    <input onChange={this.onLessonTitleInputChange} placeholder="Enter Lesson Title" aria-label="InputLesson"
                           className="form-control p-2 mr-3 flex-grow-1 bd-highlight" type="search"
                           value={this.state.lessonTitle}/>
                    <button type="submit"
                            className="py-1 px-2 bd-highlight btn btn-default btn-md btn-square"><i
                        className="fas fa-check fa-1x"/></button>

                </form>*/
                <form onSubmit={this.onSubmitLessonForm} className="mr-3 d-flex bd-highlight">
                    <input value={this.state.lessonTitle} onChange={this.onLessonTitleInputChange} placeholder="Enter Lesson Title" aria-label="Search"
                           className="form-control py-4 my-2 mr-3 flex-grow-1 bd-highlight" type="search"/>
                    <button className="my-2 btn btn-default btn-square"><i className="fas fa-check fa-1x"/></button>

                </form>

            );
        else
            return (
                <li className={this.props.selected ? 'nav-item d-flex bd-highlight btn-danger m-2 active' : 'nav-item d-flex bd-highlight btn-danger m-2'}>
                    <a onClick={() => this.props.selectLesson(this.props.lesson)} className="nav-link mr-auto m-1 p-2 bd-highlight text-white">{this.props.lesson.title}</a>
                    <a onClick={() => this.editLesson(this.props.lesson)} className="nav-link my-1 p-2 bd-highlight text-white"><i className="p-1 fa fa-edit"
                                                                                aria-hidden="true"/></a>
                    <a onClick={() => this.props.deleteLesson(this.props.lesson)} className="nav-link my-1 p-2 bd-highlight text-white"><i className="p-1 fa fa-trash"
                                                                                aria-hidden="true"/></a>
                </li>
            )
    }
}

// const ModuleListItem = ({selected, selectModule, deleteModule, editModule, addModule, index, module}) =>


export default LessonTab