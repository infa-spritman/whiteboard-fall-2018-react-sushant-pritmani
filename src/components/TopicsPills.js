import {Component} from "react";
import React from "react";
import TopicPill from "./TopicPill";

class TopicsPills extends Component {
    constructor(props) {
        super(props);
        this.state = {newTopicTitle: ''};

    }

    onTitleInputChange = event => {
        this.setState({
            newTopicTitle: event.target.value
        })
    };

    onSubmitForm = event => {
        event.preventDefault();
        const newTopic = {
            title: this.state.newTopicTitle || 'New Topic'
        };
        this.props.addTopic(newTopic);
        this.setState({
            newTopicTitle: ''
        })


    };


    render() {
        return (
            <div className="col-12">
                <ul id="topicTab" className="nav flex-column flex-sm-row">
                    {
                        this.props.state.selectedLesson && this.props.state.selectedLesson.topics && this.props.state.selectedLesson.topics.length > 0 &&
                        this.props.state.selectedLesson.topics.map((topic, index) =>
                            <TopicPill
                                selected={this.props.state.selectedTopic.id === topic.id}
                                selectTopic={this.props.selectTopic}
                                deleteTopic={this.props.deleteTopic}
                                editTopic={this.props.editTopic}
                                index={index + 1}
                                topic={topic}/>
                        )
                    }

                    {this.props.state.selectedLesson.id && <form onSubmit={this.onSubmitForm} className="ml-md-2 d-flex bd-highlight">
                        <input value={this.state.newTopicTitle} onChange={this.onTitleInputChange}
                               placeholder="Enter Topic Title" aria-label="Search"
                               className="form-control py-4 my-2 mr-3 flex-grow-1 bd-highlight"
                               type="search"/>
                        <button type="submit"
                                className="my-2 bd-highlight btn btn-default btn-md btn-square">
                            <i className="fas fa-plus fa-1x"></i></button>

                    </form>}

                </ul>
            </div>
        )
    }


}

export default TopicsPills