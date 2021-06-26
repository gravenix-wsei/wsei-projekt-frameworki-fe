import React, { ChangeEvent, Component, Fragment } from 'react';
import './style.scss';

type Props = {
    className?: string,
    value: string,
    type: string,
    onChange: (newValue: string) => void,
}

type State = {
    newValue: string,
    editMode: boolean,
}

class EditableField extends Component<Props, State>
{
    static defaultProps = {
        type: "text",
    }

    constructor(props :Props) {
        super(props);
        this.state = {
            newValue: props.value,
            editMode: false,
        }
    }

    toggleEdit = () => this.setState({editMode: !this.state.editMode})

    acceptChanges = () => {
        this.props.onChange(this.state.newValue);
        this.setState({editMode: false});
    }

    abortChanges = () => this.setState({
        editMode: false, 
        newValue: this.props.value,
    })

    onChange = (e :ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => 
        this.setState({newValue: e.target.value})

    renderEditField() {
        switch (this.props.type) {
            case "textarea":
                return <textarea value={this.state.newValue} onChange={this.onChange} />
            case "text":
            default:
                return <input value={this.state.newValue} onChange={this.onChange} />
        }
    }

    render () {
        let {editMode} = this.state;
        return <div className={this.props.className || ''}>
            {editMode ? <Fragment>
                {this.renderEditField()}
                <button onClick={this.acceptChanges}>Apply</button>
                <button onClick={this.abortChanges}>cancel</button>
            </Fragment> : <Fragment>
                <span>{this.state.newValue}</span>
                <button onClick={this.toggleEdit}>edit</button>
            </Fragment>
            }
        </div>;
    }
}

export default EditableField;