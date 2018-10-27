import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>
    <li className="list-group-item  col-12">
        <div className="row">
            <div className="col-md-5 col-8"><i className="fas fa-file-alt mr-2 file-color"></i>
                <Link to={`/course/${course.id}/edit`}>{course.title} {course.id}</Link>
            </div>
            <div className="col-md-3 d-none d-md-block">me</div>
            <div className="col-md-2 d-none d-md-block">6:45pm</div>
            <div className="col-md-2 col-4">
                <button  onClick={() => deleteCourse(course)} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Link to={`/course/${course.id}/edit`}><i className="p-1 fa fa-edit"
                                                          aria-hidden="true"/></Link>
            </div>
        </div>
    </li>


export default CourseRow