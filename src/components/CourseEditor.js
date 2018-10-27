import React from "react";

export default () =>
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-label="Toggle Nav" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav col-md-3 col-9">
                <li className="nav-item col-md-3 d-none d-md-block">
                    <i className="fas fa-times fa-2x text-white top-margin"></i>
                </li>
                <li className="nav-item col-md-9">
                    <a className="navbar-text text-white"><h4>CS5610 - WebDev</h4>
                    </a></li>
            </ul>
            <div className="collapse navbar-collapse col-md-9 col-12" id="navbarNavDropdown">
                <ul className="navbar-nav col-12">
                    <li className="nav-item col-2 active">
                        <a className="nav-link li-gray-color" href="#">Build</a></li>
                    <li className="nav-item col-2">
                        <a className="nav-link li-gray-color" href="#">Pages</a></li>
                    <li className="nav-item col-2">
                        <a className="nav-link li-gray-color" href="#">Theme</a></li>
                    <li className="nav-item col-2">
                        <a className="nav-link li-gray-color" href="#">Store</a></li>
                    <li className="nav-item col-2">
                        <a className="nav-link " href="#">Apps</a></li>
                    <li className="nav-item col-2">
                        <div className="row">
                            <a className="nav-link col-md-8 col-12" href="#">Settings</a>
                            <button className="btn btn-default btn-square col-md-4 d-none d-md-block"><i
                                className="fas fa-plus fa-1x"></i>
                            </button>
                        </div>

                    </li>
                </ul>
            </div>


        </nav>
        <div className="container-fluid">
            <div className="row">
                <nav id="leftSidebar" className="col-md-3 d-none d-md-block sidebar nav-pills">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Module 1 - jQuery <span className="float-right"><i className="fa fa-trash"
                                                                                   aria-hidden="true"></i></span>

                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Module 2 - React <span className="float-right"><i className="fa fa-trash"
                                                                                  aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                Module 3 - Redux <span className="float-right"><i className="fa fa-trash"
                                                                                  aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                Module 4 - Native <span className="float-right"><i className="fa fa-trash"
                                                                                   aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                Module 5 - Angular <span className="float-right"><i className="fa fa-trash"
                                                                                    aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                Module 6 - JPA <span className="float-right"><i className="fa fa-trash"
                                                                                aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Module 7 - Node <span className="float-right"><i className="fa fa-trash"
                                                                                 aria-hidden="true"></i></span>
                            </a>
                        </li>

                        <span className="fas fa-plus-circle icon fa-2x mt-4 mr-1 mb-2 text-white text-right"
                              aria-hidden="true"></span>
                    </ul>
                </nav>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="row btn-toolbar my-3" role="toolbar"
                                 aria-label="Toolbar with button groups">
                                <div className="col-2 col-md-1 btn-group mr-3" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-md  btn-md-block">Topic 1
                                    </button>
                                </div>
                                <div className="col-2 col-md-1 btn-group mr-3" role="group" aria-label="First group">
                                    <button type="button"
                                            className="btn btn-secondary btn-md  btn-md-block bg-dark">Topic 2
                                    </button>
                                </div>
                                <div className="col-2 col-md-1 btn-group mr-3" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-md  btn-md-block">Topic 3
                                    </button>
                                </div>
                                <div className="col-2 col-md-1 btn-group mr-3" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-md  btn-md-block">Topic 4
                                    </button>
                                </div>
                                <div className="col-2 col-md-1 btn-group" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-md btn-md-block"><i
                                        className="fas fa-plus fa-1x"></i></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row mx-3 my-1 float-right">
                                <button type="button" className="btn btn-success mr-3">Save</button>
                                <h6 className="mr-2 pt-2">Preview</h6>
                                <label className="switch mr-2">
                                    <input type="checkbox"/>
                                        <span className="slider round"/>
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className="row" name="Heading">
                        <div className="col-12">
                            <div className="row mx-3">
                                <div className="col-12 card mt-4">
                                    <div className="row card-body">
                                        <h3 className="col-md-6 card-title pl-0">Heading Widget</h3>
                                        <div className="col-md-6">
                                            <div className="row float-md-right">
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&uarr;</button>
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&darr;</button>
                                                <select className="form-control mr-3 custom-select list-option">
                                                    <option selected>Heading</option>
                                                    <option>List</option>
                                                    <option>Paragraph</option>
                                                    <option>Image</option>
                                                    <option>Link</option>
                                                </select>
                                                <button className="btn btn-danger"><b><i
                                                    className="fa fa-times"></i></b></button>
                                            </div>

                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="heading"><b>Enter the heading text below</b></label>
                                            <input type="text" className="form-control" id="heading"
                                                   placeholder="Heading"
                                                   value="Heading text"/></li>
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="heading-select"><b>Select the type of heading</b></label>

                                            <select id="heading-select"
                                                    className="form-control custom-select list-option">
                                                <option selected>Heading 1</option>
                                                <option>Heading 2</option>
                                                <option>Heading 3</option>
                                                <option>Heading 4</option>
                                            </select></li>
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="heading-widget-name"><b>Widget Name</b></label>
                                            <input type="text" className="form-control" id="heading-widget-name"
                                                   placeholder="widget name"/></li>
                                    </ul>
                                    <div className="card-body pl-0">
                                        <h4>Preview</h4>
                                        <h1>Heading text</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row" name="Paragraph">
                        <div className="col-12">
                            <div className="row mx-3">
                                <div className="col-12 card mt-4">
                                    <div className="row card-body">
                                        <h3 className="col-md-6 card-title pl-0">Paragraph Widget</h3>
                                        <div className="col-md-6">
                                            <div className="row float-md-right">
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&uarr;</button>
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&darr;</button>
                                                <select className="form-control mr-3 custom-select list-option">
                                                    <option>Heading</option>
                                                    <option>List</option>
                                                    <option selected>Paragraph</option>
                                                    <option>Image</option>
                                                    <option>Link</option>
                                                </select>
                                                <button className="btn btn-danger"><b><i
                                                    className="fa fa-times"></i></b></button>
                                            </div>

                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="paragraph"><b>Enter the paragraph text below</b></label>
                                            <textarea className="form-control" id="paragraph" rows="3"
                                                      placeholder="Enter the text">Lorem Epsum</textarea>
                                            <li className="list-group-item border-0 px-0">
                                                <label htmlFor="paragraph-widget-name"><b>Widget Name</b></label>
                                                <input type="text" className="form-control" id="paragraph-widget-name"
                                                       placeholder="widget name"/></li></li>
                                    </ul>
                                    <div className="card-body pl-0">
                                        <h4>Preview</h4>
                                        <h1>Lorem Epsum</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row" name="List">
                        <div className="col-12">
                            <div className="row mx-3">
                                <div className="col-12 card mt-4">
                                    <div className="row card-body">
                                        <h3 className="col-md-6 card-title pl-0">List Widget</h3>
                                        <div className="col-md-6">
                                            <div className="row float-md-right">
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&uarr;</button>
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&darr;</button>
                                                <select className="form-control mr-3 custom-select list-option">
                                                    <option>Heading</option>
                                                    <option selected>List</option>
                                                    <option>Paragraph</option>
                                                    <option>Image</option>
                                                    <option>Link</option>
                                                </select>
                                                <button className="btn btn-danger"><b><i
                                                    className="fa fa-times"></i></b></button>
                                            </div>

                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="list"><b>Enter the list text below</b></label>
                                            <textarea className="form-control" id="list" rows="3"
                                                      placeholder="Enter the text">Put each&#x0A;item&#x0A;in new line</textarea>
                                            <li className="list-group-item border-0 px-0">
                                                <label htmlFor="list-select"><b>Select the type of list</b></label>

                                                <select id="list-select"
                                                        className="form-control custom-select list-option">
                                                    <option selected>Unordered list</option>
                                                    <option>Ordered list</option>
                                                </select></li>
                                            <li className="list-group-item border-0 px-0">
                                                <label htmlFor="list-widget-name"><b>Widget Name</b></label>
                                                <input type="text" className="form-control" id="list-widget-name"
                                                       placeholder="widget name"/></li></li>
                                    </ul>
                                    <div className="card-body pl-0">
                                        <h4>Preview</h4>
                                        <ul className="pl-4">
                                            <li>Put each</li>
                                            <li>item</li>
                                            <li>in new line</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row" name="Image">
                        <div className="col-12">
                            <div className="row mx-3">
                                <div className="col-12 card mt-4">
                                    <div className="row card-body">
                                        <h3 className="col-md-6 card-title pl-0">Image Widget</h3>
                                        <div className="col-md-6">
                                            <div className="row float-md-right">
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning ">&uarr;</button>
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&darr;</button>
                                                <select className="form-control mr-3 custom-select list-option">
                                                    <option>Heading</option>
                                                    <option>List</option>
                                                    <option>Paragraph</option>
                                                    <option selected>Image</option>
                                                    <option>Link</option>
                                                </select>
                                                <button className="btn btn-danger"><b><i
                                                    className="fa fa-times"></i></b></button>
                                            </div>

                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="image"><b>Enter the link to image below</b></label>
                                            <input type="text" className="form-control" id="image"
                                                   placeholder="Link to Image"
                                                   value="http://lorempixel.com/g/400/200/"/></li>
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="image-widget-name"><b>Widget Name</b></label>
                                            <input type="text" className="form-control" id="image-widget-name"
                                                   placeholder="widget name"/></li>
                                    </ul>
                                    <div className="card-body pl-0">
                                        <h4>Preview</h4>
                                        <img className="mw-100" src="http://lorempixel.com/g/400/200/" alt="random-Pic"/>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row" name="Link">
                        <div className="col-12">
                            <div className="row mx-3">
                                <div className="col-12 card mt-4">
                                    <div className="row card-body">
                                        <h3 className="col-md-6 card-title pl-0">Link Widget</h3>
                                        <div className="col-md-6">
                                            <div className="row float-md-right">
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning ">&uarr;</button>
                                                <button type="button"
                                                        className="btn btn-default mr-3 bg-warning">&darr;</button>
                                                <select className="form-control mr-3 custom-select list-option">
                                                    <option>Heading</option>
                                                    <option>List</option>
                                                    <option>Paragraph</option>
                                                    <option>Image</option>
                                                    <option selected>Link</option>
                                                </select>
                                                <button className="btn btn-danger"><b><i
                                                    className="fa fa-times"></i></b></button>
                                            </div>

                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="link"><b>Enter the link</b></label>
                                            <input type="text" className="form-control" id="link" placeholder="Link URL"
                                                   value="https://www.youtube.com/user/jannunzi"/></li>
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="link-text"><b>Enter the link text</b></label>
                                            <input type="text" className="form-control" id="link-text"
                                                   placeholder="Link text"
                                                   value="Home Page"/></li>
                                        <li className="list-group-item border-0 px-0">
                                            <label htmlFor="link-widget-name"><b>Widget Name</b></label>
                                            <input type="text" className="form-control" id="link-widget-name"
                                                   placeholder="widget name"/></li>
                                    </ul>
                                    <div className="card-body pl-0">
                                        <h4>Preview</h4>
                                        <a href="https://www.youtube.com/user/jannunzi">Home Page</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row float-right">
                        <div className="col-12">
                            <button className="btn btn-default btn-danger btn-square mx-3 my-3"><i
                                className="fas fa-plus fa-2x"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;