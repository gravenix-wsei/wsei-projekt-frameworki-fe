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
            case "date":
                return <input type="date" value={this.state.newValue} onChange={this.onChange} />
            case "text":
            default:
                return <input value={this.state.newValue} onChange={this.onChange} />
        }
    }

    renderField() {
        switch (this.props.type) {
            case "multiselect-input":
                return this.state.newValue.split(", ").map((item, key) => <span className="multiselect-item" key={key}>{item}</span>)
            default:
                return <span>{this.state.newValue}</span>;
        }
    }

    render () {
        let {editMode} = this.state;
        return <div className={this.props.className || 'text-edit'}>
            {editMode ? <Fragment>
                {this.renderEditField()}
                <button onClick={this.acceptChanges}>Apply</button>
                <button onClick={this.abortChanges}>cancel</button>
            </Fragment> : <Fragment>
                {this.renderField()}
                <button onClick={this.toggleEdit}>edit</button>
            </Fragment>
            }
        </div>;
    }
}

export default EditableField;