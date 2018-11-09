import React from 'react'

const ImageWidget = ({widget, topic, updateWidget, deleteWidget, moveWidget, previewMode, index, length, selectWidget}) => {
    return (<div className="row" name={widget.name}>
        <div className="col-12">
            <div className="row mx-3">
                <div className="col-12 card mt-4">
                    {previewMode === false && <div className="row card-body">
                        <h3 className="col-md-6 card-title pl-0">Image Widget</h3>
                        <div className="col-md-6">
                            <div className="row float-md-right">
                                {index != 0 &&
                                <button onClick={() => moveWidget(index, "UP", Object.assign({}, widget))} type="button"
                                        className="btn btn-default mr-3 bg-warning">&uarr;</button>}
                                {index != length - 1 &&
                                <button onClick={() => moveWidget(index, "DOWN", Object.assign({}, widget))}
                                        type="button"
                                        className="btn btn-default mr-3 bg-warning">&darr;</button>}
                                <select onChange={(event) => {
                                    selectWidget(Object.assign({}, widget),event.target.value);
                                }} value={widget.widgetType} className="form-control mr-3 custom-select list-option">
                                    <option value="HEADING">Heading</option>
                                    <option value="LIST">List</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="IMAGE">Image</option>
                                    <option value="LINK">Link</option>
                                </select>
                                <button onClick={() => deleteWidget(widget, topic)} className="btn btn-danger"><b><i
                                    className="fa fa-times"/></b></button>
                            </div>
                        </div>
                    </div>}
                    {previewMode === false && <ul className="list-group">
                        <li className="list-group-item border-0 px-0">
                            <label htmlFor="image"><b>Enter the link to image below</b></label>
                            <input onChange={(event) => {
                                const temp = Object.assign({}, widget)
                                temp.link = event.target.value;
                                updateWidget(temp);
                            }} value={widget.link} type="text" className="form-control" id="image"
                                   placeholder="Image URL"
                                   /></li>
                        <li className="list-group-item border-0 px-0">
                            <label htmlFor="image-widget-name"><b>Widget Name</b></label>
                            <input onChange={(event) => {
                                const temp = Object.assign({}, widget)
                                temp.name = event.target.value;
                                updateWidget(temp);
                            }} value={widget.name} type="text" className="form-control" id="image-widget-name"
                                   placeholder="widget name"/></li>
                    </ul>}
                    <div className="card-body pl-0">
                        { previewMode === false && <h4>Preview</h4>}
                        <img className="mw-100" src={widget.link}
                             alt="random-Pic"/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ImageWidget