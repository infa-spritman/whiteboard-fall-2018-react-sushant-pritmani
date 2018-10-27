import React, {Component} from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {newModuleTitle: ''};

    }

    onTitleInputChange = event => {
        this.setState({
            newModuleTitle: event.target.value
        })
    };

    onSubmitForm = event => {
        event.preventDefault();
        const newModule = {
            id: (new Date()).getTime() + '',
            title: this.state.newModuleTitle || 'New Module'
        };
        this.props.addModule(newModule);
        this.setState({
            newModuleTitle: ''
        })


    };


    render() {
        return (
            <nav id="leftSidebar" className="col-md-3 sidebar nav-pills">
                <ul className="nav flex-column">
                    <form onSubmit={this.onSubmitForm} className="mt-4 mb-4 d-flex bd-highlight">
                        <input onChange={this.onTitleInputChange} placeholder="Enter Module Title" aria-label="Search"
                               className="form-control p-2 mr-3 flex-grow-1 bd-highlight" type="search"
                               value={this.state.newModuleTitle}/>
                        <button type="submit"
                                className="py-1 px-2 bd-highlight btn btn-default btn-md btn-square"><i
                            className="fas fa-plus-circle fa-1x"/></button>

                    </form>
                    {
                        this.props.state.course.modules && this.props.state.course.modules.length > 0 &&
                        this.props.state.course.modules.map((module, index) =>
                            <ModuleListItem
                                selected={this.props.state.selectedModule.id === module.id}
                                selectModule={this.props.selectModule}
                                deleteModule={this.props.deleteModule}
                                editModule={this.props.editModule}
                                index={index + 1}
                                module={module}/>
                        )
                    }



                </ul>
            </nav>
        )
    }


}

export default ModuleList