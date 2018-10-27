import React from 'react'
import Navigation from "./Navigation";
import CourseCard from "./CourseCard";

const CourseGrid = ({courses, deleteCourse, addCourse, courseTitle, updateTitle, togglePageView}) =>
    <div>
        <Navigation togglePageView={togglePageView}
                    addCourse={addCourse}
                    courseTitle={courseTitle}
                    updateTitle={updateTitle}/>
        <div className="container-fluid m-0">
            <div className="card text-black">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-5 d-none d-md-block">Title</div>
                        <div className="col-sm-3 d-none d-md-block">Owned By <i className="fa fa-sort-down"/></div>
                        <div className="col-2 d-none d-md-block">Last Modified by me</div>
                        <div className="col-1 d-none d-md-block"><i className="fas fa-grip-horizontal"/></div>
                        <div className="col-1 d-none d-md-block"><i className="fas fa-sort-alpha-down"/></div>
                        <div className="col-12 d-block d-sm-none"><b>Today</b></div>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap row">

                    {
                        courses && courses.length >0 && courses.map((course, index) =>
                            (<CourseCard
                                deleteCourse={deleteCourse}
                                key={index}
                                course={course}/>)
                        )
                    }


                </div>

            </div>

            <span onClick={() => addCourse({
                title: courseTitle
            })} className="fas fa-plus-circle icon custom-float" aria-hidden="true"/>


        </div>
    </div>

export default CourseGrid