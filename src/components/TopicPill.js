import React, {Component} from 'react'

class TopicPill extends Component {
    constructor(props) {
        super(props);

        const topic = this.props.topic;
        this.state = {
            topicTitle: "",
            editMode: false
        }

    }

    editTopic = topic => {
        this.setState({
            editMode: true,
            topicTitle: topic.title
        })
    };

    ontopicTitleInputChange = event => {
        this.setState({
            topicTitle: event.target.value
        })
    };

    onSubmitTopicForm = event => {
        event.preventDefault();

        this.props.editTopic(this.props.topic, this.state.topicTitle);

        this.setState({
            editMode: false
        });


    };

    render() {
        if (this.state.editMode)
            return (
                <form onSubmit={this.onSubmitTopicForm} className="mr-3 d-flex bd-highlight">
                    <input value={this.state.topicTitle} onChange={this.ontopicTitleInputChange}
                           placeholder="Enter Topic Title" aria-label="Search"
                           className="form-control py-4 my-2 mr-3 flex-grow-1 bd-highlight" type="search"/>
                    <button className="my-2 btn btn-default btn-square"><i className="fas fa-check fa-1x"/></button>

                </form>

            );
        else
            return (
                <li className={this.props.selected ? 'nav-item d-flex bd-highlight m-2 btn btn-secondary btn-danger btn-md  btn-md-block active' : 'nav-item d-flex bd-highlight m-2 btn btn-secondary btn-danger btn-md  btn-md-block'}>
                    <a onClick={() => this.props.selectTopic(this.props.topic)} className="nav-link p-2 bd-highlight text-white">{this.props.topic.title}</a>
                    <a onClick={() => this.editTopic(this.props.topic)} className="nav-link p-2 bd-highlight text-white"><i className="p-1 fa fa-edit"
                                                                           aria-hidden="true"/></a>
                    <a onClick={() => this.props.deleteTopic(this.props.topic)} className="nav-link p-2 bd-highlight text-white"><i className="p-1 fa fa-trash"
                                                                           aria-hidden="true"/></a>
                </li>
            )
    }
}

// const ModuleListItem = ({selected, selectModule, deleteModule, editModule, addModule, index, module}) =>


export default TopicPill