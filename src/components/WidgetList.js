import React from 'react'
import HeadingWidget from "../components/HeadingWidget";
import ListWidget from "../components/ListWidget";
import ParagraphWidget from "../components/ParagraphWidget";
import ImageWidget from "../components/ImageWidget";
import LinkWidget from "../components/LinkWidget";
import "../css/Home.css";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic)
    }

    componentDidUpdate(prevProps) {
        if (this.props.topic.id !== prevProps.topic.id)
            this.props.loadWidgets(this.props.topic);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="row mx-3 my-1 float-right">
                            <button onClick={() => this.props.widgets.forEach(widget => {
                                this.props.updateWidget(widget)
                            })} type="button" className="btn btn-success mr-3">Save
                            </button>
                            <h6 className="mr-2 pt-2">Preview</h6>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span onClick={() => this.props.togglePreview(this.props.previewMode)}
                                      className="slider round"/>
                            </label>
                        </div>
                    </div>
                </div>
                {this.props.widgets && this.props.widgets.length > 0 && this.props.widgets.map((widget, index) =>
                    <div key={index}>
                        {widget.widgetType === "HEADING" && <HeadingWidget widget={widget}
                                                                           topic={this.props.topic}
                                                                           updateWidget={this.props.updateWidget}
                                                                           deleteWidget={this.props.deleteWidget}
                                                                           moveWidget={this.props.moveWidget}
                                                                           previewMode={this.props.previewMode}
                                                                           index={index}
                                                                           length={this.props.widgets.length}
                                                                           selectWidget={this.props.selectWidget}/>}
                        {widget.widgetType === "LIST" && <ListWidget widget={widget}
                                                                     topic={this.props.topic}
                                                                     updateWidget={this.props.updateWidget}
                                                                     deleteWidget={this.props.deleteWidget}
                                                                     moveWidget={this.props.moveWidget}
                                                                     previewMode={this.props.previewMode}
                                                                     index={index}
                                                                     length={this.props.widgets.length}
                                                                     selectWidget={this.props.selectWidget}/>}
                        {widget.widgetType === "PARAGRAPH" && <ParagraphWidget widget={widget}
                                                                               topic={this.props.topic}
                                                                               updateWidget={this.props.updateWidget}
                                                                               deleteWidget={this.props.deleteWidget}
                                                                               moveWidget={this.props.moveWidget}
                                                                               previewMode={this.props.previewMode}
                                                                               index={index}
                                                                               length={this.props.widgets.length}
                                                                               selectWidget={this.props.selectWidget}/>}
                        {widget.widgetType === "IMAGE" && <ImageWidget widget={widget}
                                                                       topic={this.props.topic}
                                                                       updateWidget={this.props.updateWidget}
                                                                       deleteWidget={this.props.deleteWidget}
                                                                       moveWidget={this.props.moveWidget}
                                                                       previewMode={this.props.previewMode}
                                                                       index={index}
                                                                       length={this.props.widgets.length}
                                                                       selectWidget={this.props.selectWidget}/>}
                        {widget.widgetType === "LINK" && <LinkWidget widget={widget}
                                                                     topic={this.props.topic}
                                                                     updateWidget={this.props.updateWidget}
                                                                     deleteWidget={this.props.deleteWidget}
                                                                     moveWidget={this.props.moveWidget}
                                                                     previewMode={this.props.previewMode}
                                                                     index={index}
                                                                     length={this.props.widgets.length}
                                                                     selectWidget={this.props.selectWidget}/>}
                    </div>
                )}
                {/*<h2>{JSON.stringify(this.props.topic)}</h2>*/}
                {this.props.topic && Object.keys(this.props.topic).length !== 0 && <div className="row float-right">
                    <div className="col-12">
                        <button onClick={() => this.props.createWidget(this.props.topic)}
                                className="btn btn-default btn-danger btn-square mx-3 my-3"><i
                            className="fas fa-plus fa-2x"/>
                        </button>
                    </div>
                </div>}
            </div>
        )
    }
}

export default WidgetList