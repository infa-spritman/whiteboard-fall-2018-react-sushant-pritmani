import React from 'react'
import Navigation from "./Navigation";
import CourseRow from "./CourseRow";


const CourseTable = ({courses, deleteCourse, addCourse, courseTitle, updateTitle, togglePageView}) =>
    <div>
        <Navigation togglePageView={togglePageView}
                    addCourse={addCourse}
                    courseTitle={courseTitle}
                    updateTitle={updateTitle}/>
        <div className="container">
            <div className="card text-black">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-5 d-none d-md-block">Title</div>
                        <div className="col-sm-3 d-none d-md-block">Owned By <i className="fa fa-sort-down"></i></div>
                        <div className="col-2 d-none d-md-block">Last Modified by me</div>
                        <div className="col-1 d-none d-md-block"><i className="fas fa-grip-horizontal"></i></div>
                        <div className="col-1 d-none d-md-block"><i className="fas fa-sort-alpha-down"></i></div>
                        <div className="col-12 d-block d-sm-none"><b>Today</b></div>
                    </div>
                </div>
                <div className="card-body">

                    <div className="list-group-flush row">
                        {
                            courses.map((course, index) =>
                                (<CourseRow
                                    deleteCourse={deleteCourse}
                                    key={index}
                                    course={course}/>)
                            )
                        }
                    </div>
                </div>

            </div>

            <span onClick={() => addCourse({
                title: courseTitle
            })} className="fas fa-plus-circle icon custom-float" aria-hidden="true"/>


        </div>
    </div>

export default CourseTable