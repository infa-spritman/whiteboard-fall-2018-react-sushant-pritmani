import React from 'react'
import TextareaAutosize from 'react-autosize-textarea';

const ListWidget = ({widget, topic, updateWidget, deleteWidget, moveWidget, previewMode, index, length, selectWidget}) => {
    return (<div className="row" name={widget.name}>
        <div className="col-12">
            <div className="row mx-3">
                <div className="col-12 card mt-4">
                    {previewMode === false && <div className="row card-body">
                        <h3 className="col-md-6 card-title pl-0">List Widget</h3>
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
                                    className="fa fa-times"></i></b></button>
                            </div>
                        </div>
                    </div>}
                    {previewMode === false && <ul className="list-group">
                        <li className="list-group-item border-0 px-0">
                            <label htmlFor="list"><b>Enter the list text below</b></label>
                            <TextareaAutosize onChange={(event) => {
                                const temp = Object.assign({}, widget)
                                temp.options = event.target.value;
                                updateWidget(temp);
                            }} className="form-control" id="list" rows={3} placeholder="Enter one list item per line"
                                      value={widget.options}/>

                        </li>
                        <li className="list-group-item border-0 px-0">
                            <label htmlFor="list-select"><b>Select the type of
                                heading</b></label>
                            <select id="list-select"
                                    className="form-control custom-select list-option ml-lg-2"
                                    onChange={(event) => {
                                        const temp = Object.assign({}, widget)
                                        temp.list_type = event.target.value;
                                        updateWidget(temp);
                                    }} value={widget.list_type}>
                                <option value="ORDERED">Ordered List</option>
                                <option value="UNORDERED">Unordered List</option>
                            </select></li>
                        <li className="list-group-item border-0 px-0">
                            <label htmlFor="list-widget-name"><b>Widget Name</b></label>
                            <input onChange={(event) => {
                                const temp = Object.assign({}, widget)
                                temp.name = event.target.value;
                                updateWidget(temp);
                            }} value={widget.name} type="text" className="form-control" id="list-widget-name"
                                   placeholder="widget name"/></li>
                    </ul>}
                    <div className="card-body pl-0">
                        { previewMode === false && <h4>Preview</h4>}
                        {widget.options && widget.options.length > 0 && widget.list_type === "UNORDERED" && <ul className="pl-4">
                            {
                                widget.options.split('\n').map((option, index) => <li key={index}>{option}</li>)
                            }
                        </ul>}
                        {widget.options && widget.options.length > 0 && widget.list_type === "ORDERED" && <ol className="pl-4">
                            {
                                widget.options.split('\n').map((option, index) => <li key={index}>{option}</li>)
                            }
                        </ol>}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ListWidget