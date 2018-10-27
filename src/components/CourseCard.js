import {Link} from "react-router-dom";
import React from "react";

const CourseCard = ({course, deleteCourse}) =>
    <div className="card col-sm-12 col-md-4 col-lg-2 border-0">
        <div className="p-2 mx-2 my-3 border border-primary">
            {/*<img className="card-img-top" src=".../100px200/" alt="Card image cap"/>*/}
            <Link to={`/course/${course.id}/edit`}>{course.title} {course.id}</Link>
            <div className="card-body">
                <h5 className="card-title">Intro to {course.title}</h5>
                <p className="card-text">This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="">
                    <button onClick={() => deleteCourse(course)} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <Link to={`/course/${course.id}/edit`}><i className="p-1 fa fa-edit"
                                                              aria-hidden="true"/></Link>
                </div>
            </div>
        </div>
    </div>


export default CourseCard