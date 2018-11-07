import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicsPills"
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService"
import ModuleService from "../services/ModuleService"
// import WidgetReducer from "../reducers/WidgetReducer"
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import WidgetListContainer from '../containers/WidgetListContainer'

// const store = createStore(WidgetReducer);

export default class CourseEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            course: {},
            selectedModule: {},
            selectedLesson: {},
            selectedTopic: {},
            courseTitle: "",
            editMode: false,
            previewMode: false
        }

    }
    componentWillMount = () => {
        if (!this.props.isAuthenticated) {
            return;
        }
        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        CourseService.findCourseById(courseId).then(res => {
            const course = res.data;
            const selectedModule = course.modules && course.modules.length ? course.modules[0] : {};
            const selectedLesson = selectedModule.lessons && selectedModule.lessons.length ? selectedModule.lessons[0] : {};
            const selectedTopic = selectedLesson.topics && selectedLesson.topics.length ? selectedLesson.topics[0] : {};
            this.setState({
                isLoading: false,
                course: course,
                selectedModule: selectedModule,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic,
                courseTitle: course.title,
                editMode: false,
                previewMode: false
            });
        });

    };
    // Module
    selectModule = module => {
        // if(module.id !== this.state.selectedModule.id) {
        //     document.get
        // }
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons && module.lessons.length > 0 ? module.lessons[0] : {},
            selectedTopic: module && module.lessons && module.lessons.length > 0 && module.lessons[0].topics && module.lessons[0].topics.length > 0 ? module.lessons[0].topics[0] : {}
        });
    };
    togglePreview = mode => {
        this.setState({
            previewMode: !mode
        })

    };
    addModule = module => {
        const courseID = this.state.course.id;

        return ModuleService.createModule(courseID, module).then(res => {
            return CourseService.findCourseById(courseID).then(res => {
                const course = res.data;
                this.setState({
                    course: course
                });
                if (course.modules.length === 1)
                    this.selectModule(course.modules[0])
            });
        });
    };
    editModule = (moduleToEdited, moduleTitle) => {

       return ModuleService.updateModule(moduleToEdited.id, {'title': moduleTitle}).then(res => {
            return CourseService.findCourseById(this.state.course.id).then(res => {
                const course = res.data;
                this.setState({
                    course: course
                });
            });
        });
    };
    deleteModule = moduleToDelete => {
        const courseID = this.state.course.id;

        return ModuleService.deleteModule(moduleToDelete.id).then(res => {
            return CourseService.findCourseById(courseID).then(res => {
                const course = res.data;
                this.setState({
                    course: course
                });
                if (this.state.selectedModule.id === moduleToDelete.id) {

                    this.selectModule(this.state.course.modules && this.state.course.modules.length ? this.state.course.modules[0] : {})
                }
            });
        });
    };
    //////
    editCourse = course => {
        this.setState({
            editMode: true,
            courseTitle: course.title
        });
    };

    // Lesson
    // selectLesson = lesson =>
    //     this.setState({
    //         selectedLesson: lesson,
    //         selectedTopic: lesson.topics && lesson.topics.length ? lesson.topics[0] : {}
    //     });
    // addLesson = lesson => {
    //     const course = this.state.course;
    //     const module = this.state.selectedModule;
    //     if (!module.lessons)
    //         module.lessons = [];
    //     module.lessons.push(lesson);
    //     this.props.updateCourse(course.id, course);
    //     if (module.lessons.length === 1)
    //         this.selectLesson(module.lessons[0])
    //
    // };
    // editLesson = (lessonToEdited, lessonTitle) => {
    //     this.state.course.modules.map(module => {
    //         if (module.id === this.state.selectedModule.id) {
    //             module.lessons.map(lesson => {
    //                 if (lesson.id === lessonToEdited.id) {
    //                     lesson.title = lessonTitle;
    //                 }
    //                 return lesson;
    //             })
    //         }
    //         return module;
    //     });
    //
    //     this.props.updateCourse(this.state.course.id, this.state.course);
    // };
    // deleteLesson = lessonToDelete => {
    //     const course = this.state.course;
    //     const module = this.state.selectedModule;
    //
    //     module.lessons = module.lessons.filter(
    //         lesson => lesson.id !== lessonToDelete.id
    //     );
    //     this.props.updateCourse(course.id, course);
    //     if (this.state.selectedLesson.id === lessonToDelete.id) {
    //
    //         this.selectLesson(this.state.selectedModule.lessons && this.state.selectedModule.lessons.length ? this.state.selectedModule.lessons[0] : {})
    //     }
    // };

    // Topic
    // selectTopic = topic =>
    //     this.setState({
    //         selectedTopic: topic
    //     });
    // addTopic = topic => {
    //     const course = this.state.course;
    //     const lesson = this.state.selectedLesson;
    //     if (!lesson.topics)
    //         lesson.topics = [];
    //     lesson.topics.push(topic);
    //     this.props.updateCourse(course.id, course);
    //     if (lesson.topics.length === 1)
    //         this.selectTopic(lesson.topics[0])
    //
    // };
    // editTopic = (topicToEdited, topicTitle) => {
    //     this.state.course.modules.map(module => {
    //         if (module.id === this.state.selectedModule.id) {
    //             module.lessons.map(lesson => {
    //                 if (lesson.id === this.state.selectedLesson.id) {
    //                     lesson.topics.map(topic => {
    //                         if (topic.id === topicToEdited.id) {
    //                             topic.title = topicTitle;
    //                         }
    //
    //                         return topic
    //                     })
    //                 }
    //                 return lesson;
    //             })
    //         }
    //         return module;
    //     });
    //
    //     this.props.updateCourse(this.state.course.id, this.state.course);
    // };
    // deleteTopic = topicToDelete => {
    //     const course = this.state.course;
    //     const lesson = this.state.selectedLesson;
    //
    //     lesson.topics = lesson.topics.filter(
    //         topic => topic.id !== topicToDelete.id
    //     );
    //     this.props.updateCourse(course.id, course);
    //     if (this.state.selectedTopic.id === topicToDelete.id) {
    //
    //         this.selectTopic(this.state.selectedLesson.topics && this.state.selectedLesson.topics.length ? this.state.selectedLesson.topics[0] : {})
    //     }
    // };
    onCourseTitleInputChange = event => {
        this.setState({
            courseTitle: event.target.value
        })
    };
    onSubmitCourseForm = event => {
        event.preventDefault();

        // this.props.editTopic(this.props.topic, this.state.topicTitle);
        const courseID = this.state.course.id;
        return CourseService.updateCourse(courseID, {'title': this.state.courseTitle})
            .then(res => {
                return CourseService.findCourseById(courseID).then(res => {
                    const course = res.data;
                    this.setState({
                        course: course,
                        editMode: false
                    });
                });
            });
    };

    render() {
        return (
            <div className="Course">

                {!this.state.isLoading && <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown"
                                aria-label="Toggle Nav" aria-expanded="false">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <ul className="navbar-nav col-md-3">
                            {this.state.editMode ?
                                <li className="nav-item d-flex bd-highlight active">
                                    <Link className="nav-link p-2 bd-highlight" to={`/course/table`}><i
                                        className="p-1 fas fa-times fa-2x"
                                        aria-hidden="true"/></Link>
                                    <form onSubmit={this.onSubmitCourseForm} className="mr-3 d-flex bd-highlight">
                                        <input value={this.state.courseTitle} onChange={this.onCourseTitleInputChange}
                                               placeholder="Enter Topic Title" aria-label="Search"
                                               className="form-control py-4 my-2 mr-3 flex-grow-1 bd-highlight"
                                               type="search"/>
                                        <button className="my-2 btn btn-default btn-square"><i
                                            className="fas fa-check fa-1x"/></button>

                                    </form>
                                </li> : <li className='nav-item d-flex bd-highlight'>

                                    <Link className="nav-link p-2 bd-highlight" to={`/course/table`}><i
                                        className="p-1 fas fa-times fa-2x"
                                        aria-hidden="true"/></Link>
                                    <h2
                                        className="p-2 flex-grow-1 bd-highlight text-white">
                                        {this.state.courseTitle}
                                    </h2>
                                    <a onClick={() => this.editCourse(this.state.course)}
                                       className="nav-link p-2 bd-highlight"><i
                                        className="p-1 fa fa-edit fa-2x"
                                        aria-hidden="true"/></a>
                                </li>
                            }
                        </ul>
                        {/*<LessonTabs*/}
                        {/*selectLesson={this.selectLesson}*/}
                        {/*deleteLesson={this.deleteLesson}*/}
                        {/*editLesson={this.editLesson}*/}
                        {/*addLesson={this.addLesson}*/}
                        {/*state={this.state}/>*/}


                    </nav>


                    <div className="container-fluid">
                        <div className="row">
                            <ModuleList
                                selectModule={this.selectModule}
                                deleteModule={this.deleteModule}
                                editModule={this.editModule}
                                addModule={this.addModule}
                                state={this.state}/>
                            <div className="col-md-9">
                                <div className="row">
                                    {/*<TopicPills*/}
                                    {/*selectTopic={this.selectTopic}*/}
                                    {/*deleteTopic={this.deleteTopic}*/}
                                    {/*editTopic={this.editTopic}*/}
                                    {/*addTopic={this.addTopic}*/}
                                    {/*state={this.state}/>*/}
                                </div>
                                {/*<Provider store={store}>*/}
                                {/*<WidgetListContainer*/}
                                {/*topic={this.state.selectedTopic || {}}*/}
                                {/*previewMode={this.state.previewMode}*/}
                                {/*togglePreview={this.togglePreview}*/}
                                {/*widgetsInit={this.state.selectedTopic && this.state.selectedTopic.widgets && this.state.selectedTopic.widgets.length ? this.state.selectedTopic.widgets : []}/>*/}
                                {/*</Provider>*/}
                            </div>

                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}