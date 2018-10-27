import React, {Component} from 'react'

class ModuleListItem extends Component {
    constructor(props) {
        super(props);

        const module = this.props.module;
        this.state = {
            moduleTitle: "",
            editMode: false
        }

    }

    editModule = module => {
        this.setState({
            editMode: true,
            moduleTitle : module.title
        })
    };

    onModuleTitleInputChange = event => {
        this.setState({
            moduleTitle: event.target.value
        })
    };

    onSubmitModuleForm = event => {
        event.preventDefault();

        this.props.editModule(this.props.module, this.state.moduleTitle);

        this.setState({
            editMode : false
        });



    };

    render() {
        if (this.state.editMode)
            return (
                <form onSubmit={this.onSubmitModuleForm} className="mt-4 mb-3 d-flex bd-highlight">
                    <input onChange={this.onModuleTitleInputChange} placeholder="Enter Module Title" aria-label="InputModule"
                           className="form-control p-2 mr-3 flex-grow-1 bd-highlight" type="search"
                           value={this.state.moduleTitle}/>
                    <button type="submit"
                            className="py-1 px-2 bd-highlight btn btn-default btn-md btn-square"><i
                        className="fas fa-check fa-1x"/></button>

                </form>
            );
        else
            return (
                <li className={this.props.selected ? 'nav-item d-flex bd-highlight active' : 'nav-item d-flex bd-highlight'}>
                    <a onClick={() => this.props.selectModule(this.props.module)}
                       className="nav-link p-2 flex-grow-1 bd-highlight">
                        Module {this.props.index} - {this.props.module.title}
                    </a>
                    <a onClick={() => this.editModule(this.props.module)} className="nav-link p-2 bd-highlight"><i
                        className="p-1 fa fa-edit"
                        aria-hidden="true"/></a>
                    <a onClick={() => this.props.deleteModule(this.props.module)} className="nav-link p-2 bd-highlight"><i
                        className="p-1 fa fa-trash"
                        aria-hidden="true"/></a>
                </li>
            )
    }
}

// const ModuleListItem = ({selected, selectModule, deleteModule, editModule, addModule, index, module}) =>


export default ModuleListItem